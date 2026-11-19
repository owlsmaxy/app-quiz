import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.56.0';

const origin = Deno.env.get('APP_ORIGIN') ?? '*';
const headers = {
  'Access-Control-Allow-Origin': origin,
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};
const json = (body: Record<string, unknown>, status = 200) => new Response(JSON.stringify(body), { status, headers: { ...headers, 'Content-Type': 'application/json; charset=utf-8' } });
const text = (value: unknown, max: number) => typeof value === 'string' ? value.trim().slice(0, max) : '';
const minuteRequests = new Map<string, number[]>();
type Conversation = { id: string; title: string; subject: string | null; level: string };

function sse(event: string, data: unknown) { return `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`; }
function tutorPrompt(level: string, subject: string, topic: string, curriculum: string, language: string) {
  return `You are Atlas AI, a friendly and accurate learning tutor for students in Kenya. Be step-by-step, clear, and encouraging. Adapt to a ${level} learner${subject ? ` studying ${subject}` : ''}${topic ? ` on ${topic}` : ''}${curriculum ? ` in the ${curriculum} curriculum` : ''}. If the learner writes in Kiswahili, answer in Kiswahili; otherwise answer in English. Explain reasoning instead of only giving homework answers. Use headings, lists, examples, and fenced code blocks when helpful. Admit uncertainty instead of guessing. Refuse unsafe or harmful requests politely. Do not claim to have checked sources you did not check. ${language === 'sw' ? 'Prefer Kiswahili.' : ''}`;
}

Deno.serve(async (request) => {
  if (request.method === 'OPTIONS') return new Response('ok', { headers });
  if (request.method !== 'POST') return json({ error: 'Method not allowed.' }, 405);
  const authorization = request.headers.get('Authorization');
  if (!authorization?.startsWith('Bearer ')) return json({ error: 'Please sign in before using Atlas AI.' }, 401);
  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const anonKey = Deno.env.get('SUPABASE_ANON_KEY') ?? Deno.env.get('SUPABASE_PUBLISHABLE_KEY');
  const anthropicKey = Deno.env.get('ANTHROPIC_API_KEY');
  if (!supabaseUrl || !anonKey || !anthropicKey) return json({ error: 'Atlas AI is not configured on the server. Ask the administrator to set the Supabase and Anthropic secrets.' }, 503);

  const supabase = createClient(supabaseUrl, anonKey, { global: { headers: { Authorization: authorization } } });
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (userError || !user) return json({ error: 'Your session has expired. Please sign in again.' }, 401);
  let body: Record<string, unknown>;
  try { body = await request.json(); } catch { return json({ error: 'The AI request was not valid JSON.' }, 400); }
  const question = text(body.question, 8000);
  const level = ['beginner', 'intermediate', 'advanced'].includes(String(body.level)) ? String(body.level) : 'intermediate';
  const subject = text(body.subject, 160);
  const topic = text(body.topic, 200);
  const curriculum = text(body.curriculum, 120);
  const language = text(body.language, 20);
  const conversationId = text(body.conversationId, 80) || null;
  if (!question) return json({ error: 'Please enter a question.' }, 400);

  const now = Date.now();
  const recent = (minuteRequests.get(user.id) ?? []).filter((time) => now - time < 60_000);
  if (recent.length >= 20) return json({ error: 'You have reached the short-term AI limit. Please wait a minute and try again.' }, 429);
  recent.push(now); minuteRequests.set(user.id, recent);
  const quota = await supabase.rpc('consume_ai_request', { p_free_limit: Number(Deno.env.get('AI_FREE_DAILY_LIMIT') ?? 20), p_premium_limit: Number(Deno.env.get('AI_PREMIUM_DAILY_LIMIT') ?? 200) });
  if (quota.error) return json({ error: 'Daily AI usage could not be verified. Please try again later.' }, 503);
  if (!quota.data?.allowed) return json({ error: `Your daily AI allowance is used up (${quota.data.used}/${quota.data.limit}). Please try again tomorrow.`, usage: quota.data }, 429);

  let conversation: Conversation | null = null;
  if (conversationId) {
    const loaded = await supabase.from('conversations').select('id,title,subject,level').eq('id', conversationId).maybeSingle();
    if (loaded.error) return json({ error: 'That conversation could not be loaded.' }, 500);
    conversation = loaded.data;
    if (!conversation) return json({ error: 'That conversation is unavailable.' }, 404);
  } else {
    const title = question.length > 72 ? `${question.slice(0, 69)}...` : question;
    const created = await supabase.from('conversations').insert({ user_id: user.id, title, subject: subject || null, level }).select('id,title,subject,level').single();
    if (created.error) return json({ error: 'The conversation could not be created. Apply the AI Tutor migration first.' }, 503);
    conversation = created.data;
  }
  if (!conversation) return json({ error: 'The conversation could not be resolved.' }, 500);
  const activeConversation = conversation;
  const previous = await supabase.from('messages').select('role,content').eq('conversation_id', activeConversation.id).order('created_at', { ascending: false }).limit(10);
  if (previous.error) return json({ error: 'Conversation context could not be loaded.' }, 500);
  const context = (previous.data ?? []).reverse().map((message) => ({ role: message.role === 'assistant' ? 'assistant' : 'user', content: message.content }));
  const savedQuestion = await supabase.from('messages').insert({ conversation_id: activeConversation.id, user_id: user.id, role: 'user', content: question });
  if (savedQuestion.error) return json({ error: 'Your question could not be saved. Nothing was sent to the AI provider.' }, 500);

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 45_000);
  try {
    const upstream = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'x-api-key': anthropicKey, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
      body: JSON.stringify({ model: Deno.env.get('ANTHROPIC_MODEL') ?? 'claude-haiku-4-5-20251001', max_tokens: 1400, temperature: 0.2, stream: true, system: tutorPrompt(level, subject, topic, curriculum, language), messages: [...context, { role: 'user', content: question }] }),
      signal: controller.signal,
    });
    if (!upstream.ok) {
      if (upstream.status === 401 || upstream.status === 403) return json({ error: 'Atlas AI credentials are invalid. Ask the administrator to check ANTHROPIC_API_KEY.' }, 503);
      if (upstream.status === 429) return json({ error: 'Atlas AI is busy right now. Please wait a moment and retry.' }, 429);
      return json({ error: 'Anthropic could not complete that request. Please retry.' }, 502);
    }
    if (!upstream.body) return json({ error: 'Atlas AI returned no stream. Please retry.' }, 502);
    const reader = upstream.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    let answer = '';
    const stream = new ReadableStream({
      async start(controller) {
        controller.enqueue(new TextEncoder().encode(sse('conversation', { id: activeConversation.id, title: activeConversation.title })));
        try {
          while (true) {
            const chunk = await reader.read();
            if (chunk.done) break;
            buffer += decoder.decode(chunk.value, { stream: true });
            const events = buffer.split('\n\n'); buffer = events.pop() ?? '';
            for (const event of events) {
              const dataLine = event.split('\n').find((line) => line.startsWith('data: '));
              if (!dataLine) continue;
              let data: Record<string, unknown>;
              try { data = JSON.parse(dataLine.slice(6)); } catch { continue; }
              if (data.type === 'content_block_delta') {
                const delta = (data.delta as Record<string, unknown>)?.text;
                if (typeof delta === 'string' && delta) { answer += delta; controller.enqueue(new TextEncoder().encode(sse('delta', { text: delta }))); }
              }
            }
          }
          if (!answer.trim()) { controller.enqueue(new TextEncoder().encode(sse('error', { error: 'Atlas AI returned an empty answer. Please retry.' }))); clearTimeout(timeout); controller.close(); return; }
          const savedAnswer = await supabase.from('messages').insert({ conversation_id: activeConversation.id, user_id: user.id, role: 'assistant', content: answer });
          if (savedAnswer.error) { controller.enqueue(new TextEncoder().encode(sse('error', { error: 'The answer was generated but could not be saved. Please retry.' }))); clearTimeout(timeout); controller.close(); return; }
          await supabase.from('conversations').update({ updated_at: new Date().toISOString() }).eq('id', activeConversation.id);
          controller.enqueue(new TextEncoder().encode(sse('done', { usage: quota.data })));
          clearTimeout(timeout); controller.close();
        } catch (error) {
          controller.enqueue(new TextEncoder().encode(sse('error', { error: error instanceof DOMException && error.name === 'AbortError' ? 'Atlas AI timed out. Please retry.' : 'The AI connection ended before the answer was saved. Please retry.' })));
          clearTimeout(timeout); controller.close();
        }
      },
    });
    return new Response(stream, { headers: { ...headers, 'Content-Type': 'text/event-stream; charset=utf-8', 'Cache-Control': 'no-cache', Connection: 'keep-alive' } });
  } catch (error) {
    return json({ error: error instanceof DOMException && error.name === 'AbortError' ? 'Atlas AI timed out. Please retry.' : 'Atlas AI is temporarily unavailable. Please retry.' }, 502);
  }
});
