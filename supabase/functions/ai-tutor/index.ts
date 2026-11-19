import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.56.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': Deno.env.get('APP_ORIGIN') ?? '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Content-Type': 'application/json; charset=utf-8',
};

const json = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: corsHeaders });

const clean = (value: unknown, max: number) => typeof value === 'string' ? value.trim().slice(0, max) : '';

Deno.serve(async (request) => {
  if (request.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (request.method !== 'POST') return json({ error: 'Method not allowed.' }, 405);

  const authHeader = request.headers.get('Authorization');
  if (!authHeader?.startsWith('Bearer ')) return json({ error: 'Sign in to use Atlas AI.' }, 401);

  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const publishableKey = Deno.env.get('SUPABASE_ANON_KEY') ?? Deno.env.get('SUPABASE_PUBLISHABLE_KEY');
  const groqKey = Deno.env.get('GROQ_API_KEY');
  if (!supabaseUrl || !publishableKey || !groqKey) return json({ error: 'Atlas AI is not configured yet. Add the Supabase and Groq secrets, then redeploy the function.' }, 503);

  const client = createClient(supabaseUrl, publishableKey, { global: { headers: { Authorization: authHeader } } });
  const { data: { user }, error: userError } = await client.auth.getUser();
  if (userError || !user) return json({ error: 'Your session is invalid or expired. Please sign in again.' }, 401);

  let body: Record<string, unknown>;
  try { body = await request.json(); } catch { return json({ error: 'The AI request was not valid JSON.' }, 400); }
  const question = clean(body.question, 8000);
  const level = ['beginner', 'intermediate', 'advanced'].includes(String(body.level)) ? String(body.level) : 'intermediate';
  const subject = clean(body.subject, 160);
  const topic = clean(body.topic, 200);
  const conversationId = clean(body.conversationId, 80) || null;
  if (!question) return json({ error: 'Ask a question before sending.' }, 400);

  const { data: usage, error: usageError } = await client.rpc('consume_ai_request', {
    p_free_limit: Number(Deno.env.get('AI_FREE_DAILY_LIMIT') ?? 20),
    p_premium_limit: Number(Deno.env.get('AI_PREMIUM_DAILY_LIMIT') ?? 200),
  });
  if (usageError) return json({ error: 'Atlas AI usage could not be verified. Please try again shortly.' }, 503);
  if (!usage?.allowed) return json({ error: `Daily AI limit reached (${usage.used}/${usage.limit}). Try again tomorrow or use a verified Premium account.`, usage }, 429);

  let conversation = null;
  if (conversationId) {
    const result = await client.from('ai_conversations').select('id,title,subject,topic').eq('id', conversationId).maybeSingle();
    if (result.error) return json({ error: 'The conversation could not be loaded.' }, 500);
    conversation = result.data;
  }
  if (!conversation) {
    const title = question.length > 72 ? `${question.slice(0, 69)}...` : question;
    const result = await client.from('ai_conversations').insert({ user_id: user.id, title, subject: subject || null, topic: topic || null }).select('id,title,subject,topic').single();
    if (result.error) return json({ error: 'The conversation could not be created.' }, 500);
    conversation = result.data;
  }

  const prior = await client.from('ai_messages').select('role,content').eq('conversation_id', conversation.id).order('created_at', { ascending: false }).limit(20);
  if (prior.error) return json({ error: 'Conversation history could not be loaded.' }, 500);
  const context = (prior.data ?? []).reverse().map((message) => ({ role: message.role, content: message.content }));
  const userMessage = { conversation_id: conversation.id, user_id: user.id, role: 'user', content: question };
  const insertedUser = await client.from('ai_messages').insert(userMessage);
  if (insertedUser.error) return json({ error: 'Your question could not be saved.' }, 500);

  const system = `You are Atlas AI, a careful learning tutor. Adapt explanations to a ${level} learner${subject ? ` studying ${subject}` : ''}${topic ? ` on ${topic}` : ''}. Answer academic, general, mathematics, programming, and debugging questions. Use clear headings, concise paragraphs, lists, step-by-step working, and fenced code blocks when useful. Ask a clarifying question when the problem is underspecified. Do not invent facts; state uncertainty and suggest checking a trusted source for high-stakes or current information. Teach reasoning instead of only giving an answer.`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30000);
  try {
    const upstream = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { Authorization: `Bearer ${groqKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: Deno.env.get('GROQ_MODEL') ?? 'llama-3.3-70b-versatile', temperature: 0.2, max_tokens: 1200, messages: [{ role: 'system', content: system }, ...context, { role: 'user', content: question }] }),
      signal: controller.signal,
    });
    if (!upstream.ok) {
      if (upstream.status === 429) return json({ error: 'Atlas AI is busy right now. Please wait a moment and try again.' }, 429);
      if (upstream.status === 401 || upstream.status === 403) return json({ error: 'Atlas AI credentials are not valid. Check the Groq secret configuration.' }, 503);
      if (upstream.status === 404) return json({ error: 'The configured Groq model is unavailable. Set GROQ_MODEL to an available model and redeploy.' }, 503);
      return json({ error: 'Atlas AI could not complete that request. Please try again.' }, 502);
    }
    const completion = await upstream.json();
    const answer = clean(completion?.choices?.[0]?.message?.content, 30000);
    if (!answer) return json({ error: 'Atlas AI returned an empty response. Please try again.' }, 502);
    const saved = await client.from('ai_messages').insert({ conversation_id: conversation.id, user_id: user.id, role: 'assistant', content: answer });
    if (saved.error) return json({ error: 'The answer was generated but could not be saved.' }, 500);
    await client.from('ai_conversations').update({ updated_at: new Date().toISOString() }).eq('id', conversation.id);
    return json({ conversation, message: { role: 'assistant', content: answer }, usage });
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') return json({ error: 'Atlas AI took too long to respond. Please try again.' }, 504);
    return json({ error: 'Atlas AI is temporarily unavailable. Please try again.' }, 502);
  } finally { clearTimeout(timeout); }
});
