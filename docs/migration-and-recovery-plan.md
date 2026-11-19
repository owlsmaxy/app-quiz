# Atlas Learn migration and recovery plan

## Current state

The app currently stores demo profile, quiz history, question-bank additions, catalogue bookmarks, settings, and progress in browser `localStorage`. This data is not automatically available to a server migration.

## Safe migration sequence

1. Keep the local state intact and add an authenticated Supabase account.
2. Export the browser state as a user-owned JSON payload before import.
3. Validate IDs, dates, limits, and ownership on the server.
4. Upsert only records accepted by the server and record an import result.
5. Compare imported counts and sample records with the export.
6. Keep local data as a recovery copy until the user confirms the cloud data is correct.

No destructive local-storage cleanup should be performed automatically.

## Recovery

- Restore database data only through a reviewed SQL/JSON import using the service role in a private operator environment.
- Never put the service-role key in browser code or commit it.
- Restore content before user-owned progress, then verify foreign keys and RLS.
- Test a restore in a separate Supabase project before production recovery.
- Record backup timestamp, export version, row counts, checksum, and restore result.

## Backups and budget

Supabase Free should not be treated as providing automatic managed backups. A practical low-cost approach is a scheduled external job that uses a restricted database connection or reviewed export endpoint, encrypts the export, stores it outside Supabase, and retains a small rotation. Managed backup retention, point-in-time recovery, and production-grade object storage may require a paid Supabase plan or paid external infrastructure.
