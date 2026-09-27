-- TrailerVegas Supabase Schema
-- Version: 1.0
-- Date: 2026-09-27
-- Author: Claude
--
-- TWO PROJECTS. Do not combine. See docs/STACK.md.
--
-- Project 1: trailervegas-users  (PII store)
-- Project 2: trailervegas-roundtable  (AI message bus)
--
-- Run each block in its own project's SQL editor.

-- ============================================================
-- PROJECT 1: trailervegas-users
-- ============================================================

-- Enable extensions
create extension if not exists "uuid-ossp";
create extension if not exists "pgcrypto";

-- ---------- waitlist ----------
create table if not exists public.waitlist (
  id              uuid primary key default uuid_generate_v4(),
  email           text not null,
  corridor        text not null default 'I-15',
  created_at      timestamptz not null default now(),
  ip              text,
  user_agent      text,
  constraint waitlist_email_unique unique (email)
);

create index if not exists waitlist_created_at_idx
  on public.waitlist (created_at desc);

comment on table public.waitlist is
  'Waitlist signups. PII. Never joined to roundtable project.';

-- ---------- help_requests ----------
create table if not exists public.help_requests (
  id                uuid primary key default uuid_generate_v4(),
  name              text not null,
  email             text not null,
  phone             text not null,
  location          text not null,
  rig_type          text,
  problem_type      text,
  urgency           text,
  description       text,
  consent           boolean not null default false,
  consent_version   text not null,
  submitted_at      timestamptz not null default now(),
  ip                text,
  user_agent        text,
  status            text not null default 'new'
                    check (status in ('new','routed','closed')),
  routed_to         jsonb not null default '[]'::jsonb
);

create index if not exists help_requests_status_idx
  on public.help_requests (status);
create index if not exists help_requests_submitted_at_idx
  on public.help_requests (submitted_at desc);

comment on table public.help_requests is
  'Help form submissions. PII. Shared only with matched providers.';

-- ---------- provider_applications ----------
create table if not exists public.provider_applications (
  id                uuid primary key default uuid_generate_v4(),
  business_name     text not null,
  contact_name      text not null,
  email             text not null,
  phone             text not null,
  website           text,
  service_types     text[] not null default '{}',
  service_area      text not null,
  certified         text,
  years_in_business integer,
  description       text,
  consent           boolean not null default false,
  consent_version   text not null,
  submitted_at      timestamptz not null default now(),
  ip                text,
  user_agent        text,
  status            text not null default 'new'
                    check (status in ('new','contacted','approved','rejected'))
);

create index if not exists provider_applications_status_idx
  on public.provider_applications (status);

comment on table public.provider_applications is
  'Provider opt-in applications. Business contact info.';

-- ---------- consent_log ----------
create table if not exists public.consent_log (
  id                uuid primary key default uuid_generate_v4(),
  submission_type   text not null
                    check (submission_type in ('help','provide','waitlist')),
  submission_id     uuid not null,
  consent_version   text not null,
  covenant_url      text not null,
  displayed_at      timestamptz not null,
  submitted_at      timestamptz not null default now(),
  ip                text,
  user_agent        text
);

create index if not exists consent_log_submission_idx
  on public.consent_log (submission_type, submission_id);

comment on table public.consent_log is
  'Audit trail for consent. Timestamp, IP, UA, covenant version.';

-- ---------- Row Level Security ----------
-- Service role bypasses RLS by default.
-- Anon key gets NO access to these tables.
-- No SELECT, INSERT, UPDATE, or DELETE for anon on any table.

alter table public.waitlist enable row level security;
alter table public.help_requests enable row level security;
alter table public.provider_applications enable row level security;
alter table public.consent_log enable row level security;

-- Explicitly deny anon. Service role bypasses.
-- (Supabase enables deny-by-default when RLS is on and no policy
--  exists, but we state it to be unambiguous.)

drop policy if exists "anon_no_access_waitlist" on public.waitlist;
create policy "anon_no_access_waitlist"
  on public.waitlist for all
  to anon using (false) with check (false);

drop policy if exists "anon_no_access_help_requests"
  on public.help_requests;
create policy "anon_no_access_help_requests"
  on public.help_requests for all
  to anon using (false) with check (false);

drop policy if exists "anon_no_access_provider_applications"
  on public.provider_applications;
create policy "anon_no_access_provider_applications"
  on public.provider_applications for all
  to anon using (false) with check (false);

drop policy if exists "anon_no_access_consent_log"
  on public.consent_log;
create policy "anon_no_access_consent_log"
  on public.consent_log for all
  to anon using (false) with check (false);

-- All access to Project 1 tables happens server-side via the
-- service role key. The service role key NEVER ships to the browser.

-- ============================================================
-- PROJECT 2: trailervegas-roundtable
-- ============================================================
-- Run the SQL below in a SEPARATE Supabase project.
-- Different service role key. Different connection string.

-- Enable extensions
create extension if not exists "uuid-ossp";

-- ---------- messages ----------
create table if not exists public.messages (
  id              uuid primary key default uuid_generate_v4(),
  from_ai         text not null,
  to_ai           text not null,
  subject         text,
  body            text not null,
  status          text not null default 'open'
                  check (status in ('open','resolved')),
  created_at      timestamptz not null default now(),
  resolved_at     timestamptz
);

create index if not exists messages_status_idx
  on public.messages (status);
create index if not exists messages_to_ai_idx
  on public.messages (to_ai);

-- ---------- tasks ----------
create table if not exists public.tasks (
  id              text primary key,  -- T-XXX
  title           text not null,
  assigned_to     text,
  priority        text check (priority in ('critical','high','medium','low')),
  status          text check (status in ('open','blocked','done','cancelled')),
  depends_on      text[] not null default '{}',
  deadline        date,
  description     text,
  output          text,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

create index if not exists tasks_status_idx on public.tasks (status);
create index if not exists tasks_assigned_idx on public.tasks (assigned_to);

-- ---------- rounds ----------
create table if not exists public.rounds (
  id              serial primary key,
  topic           text not null,
  status          text not null default 'in_progress'
                  check (status in ('in_progress','closed')),
  started_at      timestamptz not null default now(),
  closed_at       timestamptz,
  summary         text
);

-- ---------- responses ----------
create table if not exists public.responses (
  id              uuid primary key default uuid_generate_v4(),
  ai              text not null,
  round_id        integer references public.rounds(id),
  task_id         text references public.tasks(id),
  raw_output      text not null,
  staged_at       timestamptz not null default now(),
  validated_at    timestamptz,
  committed_at    timestamptz
);

create index if not exists responses_staged_idx
  on public.responses (staged_at desc);
create index if not exists responses_ai_idx on public.responses (ai);

-- ---------- audit_log ----------
create table if not exists public.audit_log (
  id              uuid primary key default uuid_generate_v4(),
  event_type      text not null,
  actor           text not null,
  details         jsonb not null default '{}'::jsonb,
  created_at      timestamptz not null default now()
);

create index if not exists audit_log_created_at_idx
  on public.audit_log (created_at desc);

-- ---------- Row Level Security ----------
-- The roundtable project is only touched server-side. Same rules.

alter table public.messages enable row level security;
alter table public.tasks enable row level security;
alter table public.rounds enable row level security;
alter table public.responses enable row level security;
alter table public.audit_log enable row level security;

drop policy if exists "anon_no_access_messages" on public.messages;
create policy "anon_no_access_messages"
  on public.messages for all to anon using (false) with check (false);

drop policy if exists "anon_no_access_tasks" on public.tasks;
create policy "anon_no_access_tasks"
  on public.tasks for all to anon using (false) with check (false);

drop policy if exists "anon_no_access_rounds" on public.rounds;
create policy "anon_no_access_rounds"
  on public.rounds for all to anon using (false) with check (false);

drop policy if exists "anon_no_access_responses" on public.responses;
create policy "anon_no_access_responses"
  on public.responses for all to anon using (false) with check (false);

drop policy if exists "anon_no_access_audit_log" on public.audit_log;
create policy "anon_no_access_audit_log"
  on public.audit_log for all to anon using (false) with check (false);

-- ============================================================
-- PROJECT SEPARATION INVARIANT
-- ============================================================
-- This file defines two entirely separate projects.
-- There are NO foreign keys, triggers, or shared functions between
-- them. They do not know the other exists.
-- That is the point. See docs/STACK.md.

-- ============================================================
-- END OF SCHEMA
-- ============================================================
