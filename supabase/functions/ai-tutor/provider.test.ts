import { assertEquals, assertRejects } from 'https://deno.land/std@0.224.0/assert/mod.ts';
import { ProviderError, selectProvider } from './provider.ts';

Deno.test('selectProvider defaults to the Anthropic adapter', () => {
  const adapter = selectProvider(undefined, { ANTHROPIC_API_KEY: 'test-key' }, async () => new Response());
  assertEquals(adapter.name, 'anthropic');
});

Deno.test('selectProvider rejects unknown providers without making a request', async () => {
  await assertRejects(async () => selectProvider('unknown', { ANTHROPIC_API_KEY: 'test-key' }), ProviderError);
});

Deno.test('Anthropic adapter maps provider failures to safe error kinds', async () => {
  const adapter = selectProvider('anthropic', { ANTHROPIC_API_KEY: 'test-key' }, async () => new Response('', { status: 429 }));
  await assertRejects(() => adapter.stream({ model: 'test', maxTokens: 1, temperature: 0, system: '', messages: [] }, new AbortController().signal), ProviderError, 'The AI provider is busy right now.');
});
