# Atlas AI Tutor Edge Function

Deploy with `supabase functions deploy ai-tutor --no-verify-jwt` only if your project uses a gateway that verifies the JWT. Otherwise use the default JWT verification and deploy normally.

Required secrets: `ANTHROPIC_API_KEY`. Optional: `AI_PROVIDER` (currently `anthropic`, defaults to `anthropic`), `ANTHROPIC_MODEL`, `AI_FREE_DAILY_LIMIT`, `AI_PREMIUM_DAILY_LIMIT`, and `APP_ORIGIN`. The provider adapter standardizes the request and streaming response so a future provider can be added without changing the frontend or persistence layer.

The function still verifies the bearer session with Supabase Auth, uses the existing RLS-scoped tables and `consume_ai_request` RPC, and keeps provider credentials server-side.
