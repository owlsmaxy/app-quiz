# Atlas AI Tutor Edge Function

Deploy with `supabase functions deploy ai-tutor --no-verify-jwt` only if your project uses a gateway that verifies the JWT. Otherwise use the default JWT verification and deploy normally.

Required secrets: `ANTHROPIC_API_KEY`. Optional: `ANTHROPIC_MODEL`, `AI_FREE_DAILY_LIMIT`, `AI_PREMIUM_DAILY_LIMIT`, and `APP_ORIGIN`.
