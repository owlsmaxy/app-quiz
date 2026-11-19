# Atlas Learn Supabase setup

The migration in `migrations/20261119000100_atlas_learn_initial_schema.sql` creates the relational learning model, indexes, update triggers, profile provisioning, and Row Level Security policies.

Review it before applying to a project. No credentials are stored in this repository. Use the Supabase SQL editor or the Supabase CLI after authenticating and linking the intended project.

Important security choices:

- Passwords remain in Supabase Auth; they are not copied into `public` tables.
- Subscription writes, achievement grants, and certificate issuance are server-controlled and revoked from browser roles.
- Premium visibility is checked against an active subscription row inside RLS.
- User-owned tables require `auth.uid()` ownership checks for both reads and writes.

The existing browser-local data is not deleted by this migration. A later migration/import step should be explicit and user-confirmed.
