(() => {
  const config = window.AtlasSupabaseConfig || { url: '', publishableKey: '', status: { configured: false, missing: ['project URL', 'publishable/anon key'] } };
  const client = window.supabase?.createClient && config.status?.configured
    ? window.supabase.createClient(config.url, config.publishableKey, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } })
    : null;
  const unavailable = () => ({ error: { message: `Supabase is not configured. Add your ${config.status?.missing?.join(' and ') || 'project URL and publishable key'} in supabase-config.js.` } });
  async function requireClient() { return client || unavailable(); }
  async function getSession() { const api = await requireClient(); return api.error ? api : api.auth.getSession(); }
  async function getUser() { const api = await requireClient(); return api.error ? api : api.auth.getUser(); }
  async function sendMessage(payload, onDelta, signal) {
    const api = await requireClient();
    if (api.error) return api;
    const { data: { session } } = await api.auth.getSession();
    if (!session) return { error: { message: 'Please sign in to use Atlas AI and save your history.' } };
    let response;
    try {
      response = await fetch(`${config.url}/functions/v1/ai-tutor`, { method: 'POST', headers: { Authorization: `Bearer ${session.access_token}`, apikey: config.publishableKey, 'Content-Type': 'application/json', Accept: 'text/event-stream' }, body: JSON.stringify(payload), signal });
    } catch (error) {
      if (error?.name === 'AbortError') return { error: { message: 'Generation stopped.' }, aborted: true };
      return { error: { message: 'The network is unavailable. Check your connection and retry.' }, offline: true };
    }
    if (!response.ok) {
      let message = 'Atlas AI could not complete that request. Please retry.';
      try { message = (await response.json()).error || message; } catch { /* Keep friendly fallback. */ }
      return { error: { message }, status: response.status };
    }
    if (!response.body) return { error: { message: 'Atlas AI returned no response stream. Please retry.' } };
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    let answer = '';
    let conversation = null;
    let streamError = null;
    const consume = (eventBlock) => {
      const line = eventBlock.split('\n').find((item) => item.startsWith('event: '));
      const dataLine = eventBlock.split('\n').find((item) => item.startsWith('data: '));
      if (!line || !dataLine) return;
      let data; try { data = JSON.parse(dataLine.slice(6)); } catch { return; }
      const event = line.slice(7);
      if (event === 'conversation') conversation = data;
      if (event === 'delta' && typeof data.text === 'string') { answer += data.text; onDelta?.(data.text); }
      if (event === 'error') streamError = data.error || 'Atlas AI could not save the answer.';
    };
    while (true) {
      const chunk = await reader.read();
      if (chunk.done) break;
      buffer += decoder.decode(chunk.value, { stream: true });
      const events = buffer.split('\n\n'); buffer = events.pop() || '';
      events.forEach(consume);
    }
    if (streamError) return { error: { message: streamError }, conversation, partial: answer };
    return { data: { conversation, message: { role: 'assistant', content: answer } } };
  }
  async function listConversations(query = '') {
    const api = await requireClient(); if (api.error) return api;
    let request = api.from('conversations').select('id,title,subject,level,created_at,updated_at,archived').eq('archived', false).order('updated_at', { ascending: false }).limit(100);
    if (query.trim()) request = request.ilike('title', `%${query.trim().slice(0, 80)}%`);
    return request;
  }
  async function loadMessages(id) { const api = await requireClient(); if (api.error) return api; return api.from('messages').select('id,conversation_id,user_id,role,content,created_at').eq('conversation_id', id).order('created_at', { ascending: true }).limit(500); }
  async function searchMessages(query) { const api = await requireClient(); if (api.error) return api; return api.from('messages').select('id,conversation_id,role,content,created_at').textSearch('search_vector', query.trim().slice(0, 120), { type: 'websearch', config: 'simple' }).order('created_at', { ascending: false }).limit(100); }
  async function renameConversation(id, title) { const api = await requireClient(); if (api.error) return api; return api.from('conversations').update({ title: String(title).trim().slice(0, 120) || 'New chat' }).eq('id', id); }
  async function deleteConversation(id) { const api = await requireClient(); if (api.error) return api; return api.from('conversations').delete().eq('id', id); }
  async function signIn(email, password) { if (client) return client.auth.signInWithPassword({ email, password }); return unavailable(); }
  async function signUp(email, password, displayName) { if (client) return client.auth.signUp({ email, password, options: { data: { display_name: displayName } } }); return unavailable(); }
  async function sendMagicLink(email, redirectTo) { if (client) return client.auth.signInWithOtp({ email, options: { emailRedirectTo: redirectTo } }); return unavailable(); }
  async function signInWithGoogle(redirectTo) { if (client) return client.auth.signInWithOAuth({ provider: 'google', options: { redirectTo } }); return unavailable(); }
  async function resetPassword(email, redirectTo) { if (client) return client.auth.resetPasswordForEmail(email, { redirectTo }); return unavailable(); }
  async function signOut() { if (client) return client.auth.signOut(); return unavailable(); }
  window.AtlasCloud = Object.freeze({ isConfigured: () => Boolean(client), getConfigStatus: () => config.status, getClient: () => client, getSession, getUser, sendMessage, listConversations, loadMessages, searchMessages, renameConversation, deleteConversation, signIn, signUp, sendMagicLink, signInWithGoogle, resetPassword, signOut });
})();
