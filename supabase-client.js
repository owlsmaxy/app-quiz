(() => {
  const config = window.AtlasSupabaseConfig || { url: '', publishableKey: '', status: { configured: false, missing: ['project URL', 'publishable/anon key'] } };
  let client = null;
  if (window.supabase?.createClient && config.status?.configured) {
    client = window.supabase.createClient(config.url, config.publishableKey, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } });
  }
  const unavailable = () => ({ error: { message: `Supabase is not configured. Add your ${config.status?.missing?.join(' and ') || 'project URL and publishable key'} in supabase-config.js.` } });
  async function requireClient() { return client || unavailable(); }
  async function chat(payload) {
    const api = await requireClient();
    if (api.error) return api;
    const { data: { session } } = await api.auth.getSession();
    if (!session) return { error: { message: 'Sign in to use the persistent AI Tutor.' } };
    const { data, error } = await api.functions.invoke('ai-tutor', { body: payload });
    return error ? { error } : { data };
  }
  async function listConversations() {
    const api = await requireClient(); if (api.error) return api;
    return api.from('ai_conversations').select('id,title,subject,topic,created_at,updated_at').order('updated_at', { ascending: false }).limit(50);
  }
  async function getConversation(id) {
    const api = await requireClient(); if (api.error) return api;
    return api.from('ai_conversations').select('id,title,subject,topic,created_at,updated_at,ai_messages(id,role,content,created_at)').eq('id', id).single();
  }
  async function renameConversation(id, title) {
    const api = await requireClient(); if (api.error) return api;
    return api.from('ai_conversations').update({ title: String(title).trim().slice(0, 120) || 'New conversation' }).eq('id', id);
  }
  async function deleteConversation(id) {
    const api = await requireClient(); if (api.error) return api;
    return api.from('ai_conversations').delete().eq('id', id);
  }
  async function signOut() { if (client) return client.auth.signOut(); return unavailable(); }
  async function signIn(email, password) { if (client) return client.auth.signInWithPassword({ email, password }); return unavailable(); }
  async function signUp(email, password, displayName) { if (client) return client.auth.signUp({ email, password, options: { data: { display_name: displayName } } }); return unavailable(); }
  async function resetPassword(email, redirectTo) { if (client) return client.auth.resetPasswordForEmail(email, { redirectTo }); return unavailable(); }
  window.AtlasCloud = Object.freeze({ isConfigured: () => Boolean(client), getConfigStatus: () => config.status, chat, listConversations, getConversation, renameConversation, deleteConversation, signOut, signIn, signUp, resetPassword, getClient: () => client });
})();
