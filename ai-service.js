(() => {
  const levels = { beginner: 'Beginner', intermediate: 'Intermediate', advanced: 'Advanced' };
  const cacheKey = 'atlas-ai-recent-cache-v2';
  const getStatus = () => window.AtlasCloud?.getConfigStatus?.() || { configured: false, missing: ['project URL', 'publishable/anon key'] };
  const readCache = () => { try { return JSON.parse(localStorage.getItem(cacheKey) || '{}'); } catch { return {}; } };
  const writeCache = (data) => { try { localStorage.setItem(cacheKey, JSON.stringify(data)); } catch { /* Offline cache is best effort. */ } };
  const currentUserId = async () => { const result = await window.AtlasCloud?.getUser?.(); return result?.data?.user?.id || ''; };

  async function sendMessage(payload, onDelta, signal) {
    if (!window.AtlasCloud?.isConfigured?.()) {
      const missing = getStatus().missing || ['project URL', 'publishable/anon key'];
      return { error: `Atlas AI needs your ${missing.join(' and ')} in supabase-config.js, then a signed-in account.` };
    }
    const result = await window.AtlasCloud.sendMessage(payload, onDelta, signal);
    if (result.error) return { ...result, error: result.error.message || 'Atlas AI could not complete that request.' };
    return result;
  }
  async function listConversations(query = '') {
    const result = await window.AtlasCloud.listConversations(query);
    if (!result.error) {
      const userId = await currentUserId(); const cache = readCache(); cache[userId] = { ...(cache[userId] || {}), conversations: result.data || [] }; writeCache(cache);
      return result;
    }
    const userId = await currentUserId(); return { data: readCache()[userId]?.conversations || [], error: result.error, offline: true };
  }
  async function loadMessages(id) {
    const result = await window.AtlasCloud.loadMessages(id);
    if (!result.error) { const userId = await currentUserId(); const cache = readCache(); cache[userId] = { ...(cache[userId] || {}), messages: { ...(cache[userId]?.messages || {}), [id]: (result.data || []).slice(-100) } }; writeCache(cache); return result; }
    const userId = await currentUserId(); return { data: readCache()[userId]?.messages?.[id] || [], error: result.error, offline: true };
  }
  async function deleteConversation(id) { return window.AtlasCloud.deleteConversation(id); }
  async function searchMessages(query) { return window.AtlasCloud.searchMessages(query); }
  async function renameConversation(id, title) { return window.AtlasCloud.renameConversation(id, title); }
  async function exportConversation(messages, format = 'json') {
    const payload = format === 'markdown' ? messages.map((item) => `## ${item.role === 'user' ? 'You' : 'Atlas AI'}\n\n${item.content}`).join('\n\n') : JSON.stringify(messages, null, 2);
    const blob = new Blob([payload], { type: format === 'markdown' ? 'text/markdown' : 'application/json' });
    const url = URL.createObjectURL(blob); const link = document.createElement('a'); link.href = url; link.download = `atlas-ai-chat.${format === 'markdown' ? 'md' : 'json'}`; link.click(); URL.revokeObjectURL(url);
  }
  async function chat(question, conversationId, context = {}, level = 'intermediate', onDelta, signal) { return sendMessage({ question, conversationId, subject: context.subject || '', topic: context.topic || '', curriculum: context.curriculum || '', language: context.language || '', level }, onDelta, signal); }
  async function discoverTopic(query, level = 'intermediate') { return chat(`Teach me an organised learning overview of ${query}. Include foundations, key ideas, prerequisites, a pathway, and practice questions.`, null, {}, level); }
  window.AtlasAI = Object.freeze({ explanationLevels: levels, levelLabel: (level) => levels[level] || levels.intermediate, sendMessage, listConversations, loadMessages, deleteConversation, searchMessages, renameConversation, exportConversation, chat, discoverTopic });
})();
