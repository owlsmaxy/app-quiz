// Browser-safe Supabase configuration only.
// Set these two values for the target project. Never put a service-role key or AI key here.
(() => {
  const projectUrl = '';
  const projectPublishableKey = '';
  const raw = window.ATLAS_SUPABASE_CONFIG || { url: projectUrl, publishableKey: projectPublishableKey };
  const url = typeof raw.url === 'string' ? raw.url.trim() : '';
  const publishableKey = typeof raw.publishableKey === 'string' ? raw.publishableKey.trim() : '';
  let urlIsValid = false;
  try {
    const parsed = new URL(url);
    urlIsValid = parsed.protocol === 'https:' && parsed.hostname.endsWith('.supabase.co');
  } catch { /* Missing or invalid configuration is reported through getStatus(). */ }
  const keyLooksPlaceholder = !publishableKey || /YOUR_|REPLACE_|replace-me/i.test(publishableKey);
  const status = Object.freeze({
    configured: urlIsValid && !keyLooksPlaceholder,
    missing: [!urlIsValid ? 'project URL' : '', keyLooksPlaceholder ? 'publishable/anon key' : ''].filter(Boolean),
  });
  window.AtlasSupabaseConfig = Object.freeze({ url, publishableKey, status });
})();
