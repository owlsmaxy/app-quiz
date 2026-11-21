export type ProviderMessage = { role: 'user' | 'assistant'; content: string };

export type ProviderRequest = {
  model: string;
  maxTokens: number;
  temperature: number;
  system: string;
  messages: ProviderMessage[];
};

export type ProviderEvent =
  | { type: 'text'; text: string }
  | { type: 'done' };

export type ProviderStream = ReadableStream<ProviderEvent>;

export type ProviderAdapter = {
  name: string;
  stream(request: ProviderRequest, signal: AbortSignal): Promise<ProviderStream>;
};

export class ProviderError extends Error {
  constructor(
    public readonly kind: 'configuration' | 'authentication' | 'rate_limit' | 'upstream' | 'empty',
    message: string,
  ) {
    super(message);
    this.name = 'ProviderError';
  }
}

type FetchLike = typeof fetch;

export function selectProvider(name = 'anthropic', env: Record<string, string | undefined> = Deno.env.toObject(), fetchImpl: FetchLike = fetch): ProviderAdapter {
  const normalized = name.trim().toLowerCase();
  if (normalized !== 'anthropic') throw new ProviderError('configuration', `Unsupported AI provider: ${normalized}`);
  const apiKey = env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new ProviderError('configuration', 'The selected AI provider is not configured.');
  return createAnthropicAdapter(apiKey, env.ANTHROPIC_MODEL ?? 'claude-haiku-4-5-20251001', fetchImpl);
}

export function createAnthropicAdapter(apiKey: string, model: string, fetchImpl: FetchLike = fetch): ProviderAdapter {
  return {
    name: 'anthropic',
    async stream(request, signal) {
      const response = await fetchImpl('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          model,
          max_tokens: request.maxTokens,
          temperature: request.temperature,
          stream: true,
          system: request.system,
          messages: request.messages,
        }),
        signal,
      });
      if (!response.ok) {
        if (response.status === 401 || response.status === 403) throw new ProviderError('authentication', 'The AI provider credentials are invalid.');
        if (response.status === 429) throw new ProviderError('rate_limit', 'The AI provider is busy right now.');
        throw new ProviderError('upstream', 'The AI provider could not complete the request.');
      }
      if (!response.body) throw new ProviderError('upstream', 'The AI provider returned no stream.');

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      return new ReadableStream<ProviderEvent>({
        async start(controller) {
          try {
            while (true) {
              const chunk = await reader.read();
              if (chunk.done) break;
              buffer += decoder.decode(chunk.value, { stream: true });
              const events = buffer.split('\n\n');
              buffer = events.pop() ?? '';
              for (const event of events) {
                const dataLine = event.split('\n').find((line) => line.startsWith('data: '));
                if (!dataLine) continue;
                let data: Record<string, unknown>;
                try { data = JSON.parse(dataLine.slice(6)); } catch { continue; }
                if (data.type === 'content_block_delta') {
                  const text = (data.delta as Record<string, unknown>)?.text;
                  if (typeof text === 'string' && text) controller.enqueue({ type: 'text', text });
                }
              }
            }
            controller.enqueue({ type: 'done' });
            controller.close();
          } catch (error) {
            controller.error(error);
          }
        },
        cancel() { reader.cancel(); },
      });
    },
  };
}
