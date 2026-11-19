# Atlas Learn audit and implementation plan

## Audit snapshot

### Architecture

- Vanilla browser application: `index.html`, `styles.css`, `app.js`, `education-data.js`, `question-bank.js`, `subject-catalogue.js`, and `ai-service.js`.
- Optional Node 18+ HTTP server in `server.js`; there is no framework, package lock, database client, or Supabase directory in the original project.
- Browser state is stored in two local-storage documents: the main demo state and the subject catalogue state.
- The existing browser test page is dependency-free and validates the education catalogue and question bank.

### Existing features preserved

- Dashboard, quiz catalogue, quiz sessions, custom quiz studio, question-bank editor, education preferences, topic catalogue, AI Tutor, analytics, rewards, certificates, premium demo UI, settings, themes, reduced motion, and responsive layouts.
- AI provider selection and browser-to-same-origin `/api/ai` flow are preserved. The browser-side demo fallbacks remain available when the server is not configured.

### Security and persistence findings

- There was no real registration, login, logout session, password reset, or cross-device persistence. The “profile” and membership were local demo values.
- Quiz attempts, progress, certificates, custom questions, and preferences were local-only.
- The original API had wildcard CORS, no general rate limit, no AI action validation, and forwarded arbitrary JSON to the configured AI provider.
- Subscription, premium access, achievement, and certificate state could be changed by editing browser storage.
- No database, RLS, backup export, restore procedure, or scheduled backup process existed.

### Search findings

- Subject, universal, and topic search rerendered the whole page on every input event, replacing the input and losing focus/cursor position.
- Catalogue result limits were calculated but discarded because `slice()` was not assigned.
- Topic navigation inferred a subject from display text and lesson navigation did not carry the parent topic, making results fragile or unavailable.

### Content findings

- The repository contains illustrative sample catalogue and question data. It does not claim every topic is populated, and no fabricated educational content was added.
- The new schema supports adding subjects, courses, topics, subtopics/materials, and questions without changing application code.

## Phased implementation plan

1. Foundation and security boundary: schema, indexes, RLS, profile trigger, recovery plan, secure CORS, headers, bounded bodies, AI validation, and rate limits. Completed in this change.
2. Supabase Auth and data adapter: use browser-safe publishable configuration, real signup/login/logout/password reset, session refresh, protected profile reads/writes, and server-verified ownership. Requires a Supabase project URL and publishable key to test against a live project.
3. Persistence migration: export local data, validate and import user-owned attempts/progress/notes/achievements/certificates, then retain local data until user confirmation. Add idempotent APIs and pagination for question banks.
4. Content/search integration: read public and premium learning content from Supabase, enforce visibility with RLS, add loading/empty/error states, and keep AI Tutor’s existing search route unchanged.
5. UI/accessibility: preserve Atlas Learn styling, complete checkbox state coverage, verify keyboard behavior, and test desktop/mobile layouts.
6. Backup operations: add a reviewed export job, encrypted external storage guidance, retention/status reporting, and a restore drill. Managed point-in-time backup and retention may require paid infrastructure.

## Configuration boundary

The repository contains placeholders only. Do not commit `.env`, Supabase service-role keys, AI keys, or payment credentials. Live Auth, RLS queries, and restore verification cannot be honestly marked tested until a Supabase project is configured.
