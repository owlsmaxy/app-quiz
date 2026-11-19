-- Atlas Learn initial relational schema.
-- Apply with the Supabase CLI or SQL editor after reviewing for the target project.

create extension if not exists pgcrypto;

create type public.content_visibility as enum ('draft', 'public', 'premium');
create type public.subscription_status as enum ('trialing', 'active', 'past_due', 'canceled', 'expired');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null default 'Learner' check (char_length(display_name) between 2 and 80),
  avatar_url text,
  country_code text check (country_code is null or char_length(country_code) between 2 and 8),
  preferences jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.subjects (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  description text not null default '',
  visibility public.content_visibility not null default 'public',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.courses (
  id uuid primary key default gen_random_uuid(),
  subject_id uuid not null references public.subjects(id) on delete cascade,
  slug text not null,
  name text not null,
  description text not null default '',
  visibility public.content_visibility not null default 'public',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (subject_id, slug)
);

create table public.topics (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references public.courses(id) on delete cascade,
  parent_topic_id uuid references public.topics(id) on delete set null,
  slug text not null,
  name text not null,
  description text not null default '',
  visibility public.content_visibility not null default 'public',
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (course_id, slug)
);

create table public.topic_materials (
  id uuid primary key default gen_random_uuid(),
  topic_id uuid not null references public.topics(id) on delete cascade,
  material_type text not null check (material_type in ('notes', 'explanation', 'example', 'key_point', 'resource')),
  title text not null,
  body text not null,
  visibility public.content_visibility not null default 'public',
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (topic_id, material_type, title)
);

create table public.questions (
  id uuid primary key default gen_random_uuid(),
  topic_id uuid not null references public.topics(id) on delete cascade,
  prompt text not null,
  question_type text not null check (question_type in ('multiple_choice', 'true_false', 'multiple_answer', 'short_answer', 'numerical')),
  options jsonb not null default '[]'::jsonb,
  correct_answer jsonb not null,
  explanation text not null default '',
  difficulty text not null default 'beginner' check (difficulty in ('beginner', 'intermediate', 'advanced')),
  visibility public.content_visibility not null default 'public',
  source text not null default 'editorial',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.quiz_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  topic_id uuid references public.topics(id) on delete set null,
  score integer not null default 0 check (score >= 0),
  total_questions integer not null check (total_questions > 0),
  duration_seconds integer check (duration_seconds is null or duration_seconds >= 0),
  answers jsonb not null default '[]'::jsonb,
  completed_at timestamptz not null default now()
);

create table public.learning_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  topic_id uuid not null references public.topics(id) on delete cascade,
  status text not null default 'started' check (status in ('started', 'in_progress', 'completed')),
  percent_complete numeric(5,2) not null default 0 check (percent_complete between 0 and 100),
  last_seen_at timestamptz not null default now(),
  completed_at timestamptz,
  primary key (user_id, topic_id)
);

create table public.achievements (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  description text not null default '',
  created_at timestamptz not null default now()
);

create table public.user_achievements (
  user_id uuid not null references auth.users(id) on delete cascade,
  achievement_id uuid not null references public.achievements(id) on delete cascade,
  earned_at timestamptz not null default now(),
  primary key (user_id, achievement_id)
);

create table public.certificates (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  quiz_attempt_id uuid references public.quiz_attempts(id) on delete set null,
  certificate_number text not null unique,
  title text not null,
  issued_at timestamptz not null default now(),
  revoked_at timestamptz
);

create table public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  provider text not null default 'manual',
  provider_customer_id text,
  provider_subscription_id text,
  status public.subscription_status not null default 'trialing',
  plan text not null default 'free',
  current_period_start timestamptz,
  current_period_end timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index courses_subject_id_idx on public.courses(subject_id);
create index topics_course_id_idx on public.topics(course_id);
create index topics_parent_topic_id_idx on public.topics(parent_topic_id);
create index materials_topic_visibility_idx on public.topic_materials(topic_id, visibility);
create index questions_topic_visibility_idx on public.questions(topic_id, visibility);
create index quiz_attempts_user_completed_idx on public.quiz_attempts(user_id, completed_at desc);
create index learning_progress_user_updated_idx on public.learning_progress(user_id, last_seen_at desc);
create index certificates_user_issued_idx on public.certificates(user_id, issued_at desc);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger profiles_set_updated_at before update on public.profiles for each row execute function public.set_updated_at();
create trigger subjects_set_updated_at before update on public.subjects for each row execute function public.set_updated_at();
create trigger courses_set_updated_at before update on public.courses for each row execute function public.set_updated_at();
create trigger topics_set_updated_at before update on public.topics for each row execute function public.set_updated_at();
create trigger materials_set_updated_at before update on public.topic_materials for each row execute function public.set_updated_at();
create trigger questions_set_updated_at before update on public.questions for each row execute function public.set_updated_at();
create trigger subscriptions_set_updated_at before update on public.subscriptions for each row execute function public.set_updated_at();

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security invoker
set search_path = public
as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, coalesce(nullif(new.raw_user_meta_data ->> 'display_name', ''), 'Learner'))
  on conflict (id) do nothing;
  return new;
end;
$$;

create trigger on_auth_user_created after insert on auth.users for each row execute function public.handle_new_user();

alter table public.profiles enable row level security;
alter table public.subjects enable row level security;
alter table public.courses enable row level security;
alter table public.topics enable row level security;
alter table public.topic_materials enable row level security;
alter table public.questions enable row level security;
alter table public.quiz_attempts enable row level security;
alter table public.learning_progress enable row level security;
alter table public.achievements enable row level security;
alter table public.user_achievements enable row level security;
alter table public.certificates enable row level security;
alter table public.subscriptions enable row level security;

create policy profiles_select_own on public.profiles for select to authenticated using ((select auth.uid()) = id);
create policy profiles_update_own on public.profiles for update to authenticated using ((select auth.uid()) = id) with check ((select auth.uid()) = id);

create policy subjects_read_visible on public.subjects for select to anon, authenticated using (visibility = 'public' or (visibility = 'premium' and exists (select 1 from public.subscriptions s where s.user_id = (select auth.uid()) and s.status in ('trialing', 'active') and (s.current_period_end is null or s.current_period_end > now()))));
create policy courses_read_visible on public.courses for select to anon, authenticated using (visibility = 'public' or (visibility = 'premium' and exists (select 1 from public.subscriptions s where s.user_id = (select auth.uid()) and s.status in ('trialing', 'active') and (s.current_period_end is null or s.current_period_end > now()))));
create policy topics_read_visible on public.topics for select to anon, authenticated using (visibility = 'public' or (visibility = 'premium' and exists (select 1 from public.subscriptions s where s.user_id = (select auth.uid()) and s.status in ('trialing', 'active') and (s.current_period_end is null or s.current_period_end > now()))));
create policy materials_read_visible on public.topic_materials for select to anon, authenticated using (visibility = 'public' or (visibility = 'premium' and exists (select 1 from public.subscriptions s where s.user_id = (select auth.uid()) and s.status in ('trialing', 'active') and (s.current_period_end is null or s.current_period_end > now()))));
create policy questions_read_visible on public.questions for select to anon, authenticated using (visibility = 'public' or (visibility = 'premium' and exists (select 1 from public.subscriptions s where s.user_id = (select auth.uid()) and s.status in ('trialing', 'active') and (s.current_period_end is null or s.current_period_end > now()))));

create policy attempts_select_own on public.quiz_attempts for select to authenticated using ((select auth.uid()) = user_id);
create policy attempts_insert_own on public.quiz_attempts for insert to authenticated with check ((select auth.uid()) = user_id);
create policy progress_select_own on public.learning_progress for select to authenticated using ((select auth.uid()) = user_id);
create policy progress_insert_own on public.learning_progress for insert to authenticated with check ((select auth.uid()) = user_id);
create policy progress_update_own on public.learning_progress for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

create policy achievements_read on public.achievements for select to anon, authenticated using (true);
create policy user_achievements_select_own on public.user_achievements for select to authenticated using ((select auth.uid()) = user_id);
create policy certificates_select_own on public.certificates for select to authenticated using ((select auth.uid()) = user_id);
create policy subscriptions_select_own on public.subscriptions for select to authenticated using ((select auth.uid()) = user_id);

revoke insert, update, delete on public.subscriptions from anon, authenticated;
revoke insert, update, delete on public.user_achievements from anon, authenticated;
revoke insert, update, delete on public.certificates from anon, authenticated;
revoke insert, update, delete on public.achievements from anon, authenticated;
