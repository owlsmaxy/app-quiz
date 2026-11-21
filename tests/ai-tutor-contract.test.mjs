import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const functionSource = fs.readFileSync(new URL('../supabase/functions/ai-tutor/index.ts', import.meta.url), 'utf8');
const providerSource = fs.readFileSync(new URL('../supabase/functions/ai-tutor/provider.ts', import.meta.url), 'utf8');

test('AI Tutor keeps bearer authentication and Supabase user lookup', () => {
  assert.match(functionSource, /Authorization/);
  assert.match(functionSource, /supabase\.auth\.getUser\(\)/);
  assert.match(functionSource, /return json\(\{ error: 'Please sign in before using Atlas AI\.' \}, 401\)/);
});

test('AI Tutor keeps quota enforcement and conversation persistence', () => {
  assert.match(functionSource, /consume_ai_request/);
  assert.match(functionSource, /from\('conversations'\)/);
  assert.match(functionSource, /from\('messages'\)/);
  assert.match(functionSource, /role: 'assistant'/);
});

test('AI provider selection is server-side and defaults to Anthropic', () => {
  assert.match(functionSource, /Deno\.env\.get\('AI_PROVIDER'\) \?\? 'anthropic'/);
  assert.match(providerSource, /ANTHROPIC_API_KEY/);
  assert.doesNotMatch(functionSource, /window\.|document\.|localStorage/);
});

test('provider failures are mapped to safe user-facing errors', () => {
  assert.match(providerSource, /authentication/);
  assert.match(providerSource, /rate_limit/);
  assert.match(functionSource, /The AI provider could not complete that request\. Please retry\./);
  assert.match(functionSource, /Atlas AI timed out\. Please retry\./);
});
