-- Persistent Atlas AI Tutor conversations.
-- Apply after the initial Atlas Learn schema migration.

create table if not exists public.conversations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null default 'New chat' check (char_length(title) between 1 and 120),
  subject text,
  level text check (level is null or level in ('beginner', 'intermediate', 'advanced')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  archived boolean not null default false
);

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  conversation_id uuid not null references public.conversations(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null check (role in ('user', 'assistant')),
  content text not null check (char_length(content) between 1 and 30000),
  created_at timestamptz not null default now(),
  search_vector tsvector generated always as (to_tsvector('simple', content)) stored
);

create index if not exists conversations_user_updated_idx on public.conversations(user_id, updated_at desc);
create index if not exists conversations_user_active_idx on public.conversations(user_id, archived, updated_at desc);
create index if not exists messages_conversation_created_idx on public.messages(conversation_id, created_at);
create index if not exists messages_user_search_idx on public.messages using gin(search_vector);

drop trigger if exists conversations_set_updated_at on public.conversations;
create trigger conversations_set_updated_at before update on public.conversations
for each row execute function public.set_updated_at();

alter table public.conversations enable row level security;
alter table public.messages enable row level security;

drop policy if exists conversations_select_own on public.conversations;
create policy conversations_select_own on public.conversations for select to authenticated
using ((select auth.uid()) = user_id);
drop policy if exists conversations_insert_own on public.conversations;
create policy conversations_insert_own on public.conversations for insert to authenticated
with check ((select auth.uid()) = user_id);
drop policy if exists conversations_update_own on public.conversations;
create policy conversations_update_own on public.conversations for update to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);
drop policy if exists conversations_delete_own on public.conversations;
create policy conversations_delete_own on public.conversations for delete to authenticated
using ((select auth.uid()) = user_id);

drop policy if exists messages_select_own on public.messages;
create policy messages_select_own on public.messages for select to authenticated
using ((select auth.uid()) = user_id);
drop policy if exists messages_insert_own on public.messages;
create policy messages_insert_own on public.messages for insert to authenticated
with check ((select auth.uid()) = user_id and exists (
  select 1 from public.conversations c
  where c.id = conversation_id and c.user_id = (select auth.uid())
));
drop policy if exists messages_delete_own on public.messages;
create policy messages_delete_own on public.messages for delete to authenticated
using ((select auth.uid()) = user_id);

grant select, insert, update, delete on public.conversations to authenticated;
grant select, insert, delete on public.messages to authenticated;
