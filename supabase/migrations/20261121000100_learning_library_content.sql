-- Learning library extension.
-- Editorial metadata and references are kept separate from study notes.
-- No seed content is inserted: imported material must be reviewed before approval.

create table if not exists public.topic_learning_metadata (
  topic_id uuid primary key references public.topics(id) on delete cascade,
  learning_objectives jsonb not null default '[]'::jsonb,
  key_terms jsonb not null default '[]'::jsonb,
  summary text not null default '',
  review_status text not null default 'draft' check (review_status in ('draft', 'in_review', 'approved', 'rejected')),
  generated_by text not null default 'editorial' check (generated_by in ('editorial', 'ai_assisted', 'imported')),
  source_note text not null default '',
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.content_references (
  id uuid primary key default gen_random_uuid(),
  topic_id uuid not null references public.topics(id) on delete cascade,
  title text not null,
  author_or_institution text not null,
  publisher text,
  publication_year integer check (publication_year between 1000 and 2100),
  edition text,
  section text,
  source_url text not null check (source_url ~ '^https?://'),
  rights text not null default 'See source terms.',
  accessed_on date not null default current_date,
  review_status text not null default 'draft' check (review_status in ('draft', 'in_review', 'approved', 'rejected')),
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists topic_learning_metadata_review_idx on public.topic_learning_metadata (review_status);
create index if not exists content_references_topic_review_idx on public.content_references (topic_id, review_status);
create index if not exists content_references_title_idx on public.content_references (lower(title));

drop trigger if exists topic_learning_metadata_set_updated_at on public.topic_learning_metadata;
create trigger topic_learning_metadata_set_updated_at before update on public.topic_learning_metadata
for each row execute function public.set_updated_at();

drop trigger if exists content_references_set_updated_at on public.content_references;
create trigger content_references_set_updated_at before update on public.content_references
for each row execute function public.set_updated_at();

alter table public.topic_learning_metadata enable row level security;
alter table public.content_references enable row level security;

drop policy if exists "Approved topic learning metadata is readable" on public.topic_learning_metadata;
create policy "Approved topic learning metadata is readable" on public.topic_learning_metadata
for select to anon, authenticated using (review_status = 'approved' or (select auth.uid()) = created_by);

drop policy if exists "Users can create their own draft topic metadata" on public.topic_learning_metadata;
create policy "Users can create their own draft topic metadata" on public.topic_learning_metadata
for insert to authenticated with check ((select auth.uid()) = created_by and review_status in ('draft', 'in_review'));

drop policy if exists "Users can update their own draft topic metadata" on public.topic_learning_metadata;
create policy "Users can update their own draft topic metadata" on public.topic_learning_metadata
for update to authenticated using ((select auth.uid()) = created_by)
with check ((select auth.uid()) = created_by and review_status in ('draft', 'in_review'));

drop policy if exists "Approved references are readable" on public.content_references;
create policy "Approved references are readable" on public.content_references
for select to anon, authenticated using (review_status = 'approved' or (select auth.uid()) = created_by);

drop policy if exists "Users can create their own draft references" on public.content_references;
create policy "Users can create their own draft references" on public.content_references
for insert to authenticated with check ((select auth.uid()) = created_by and review_status in ('draft', 'in_review'));

drop policy if exists "Users can update their own draft references" on public.content_references;
create policy "Users can update their own draft references" on public.content_references
for update to authenticated using ((select auth.uid()) = created_by)
with check ((select auth.uid()) = created_by and review_status in ('draft', 'in_review'));
