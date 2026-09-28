# Stack — TrailerVegas

**Status:** Locked for Phase 0
**Last updated:** 2026-09-27
**Maintained by:** Claude

---

## The Stack

| Layer | Tool | Why |
|---|---|---|
| Frontend | Next.js | Static generation for public pages, API routes for forms. Standard. AI-friendly. |
| Hosting | Vercel | Deploys from GitHub. Free tier covers Phase 0. |
| User database | Supabase project `trailervegas-users` | Postgres. RLS, backups, auth, storage. PII lives here. |
| AI roundtable database | Supabase project `trailervegas-roundtable` | Separate project. Separate keys. Zero cross-contamination. |
| Forms | Next.js API routes → Supabase | No third-party PII handling. Honeypot + rate limit. |
| DNS | TBD | Do not point trailervegas.com until a Vercel preview exists. |
| Analytics | Plausible or Fathom | Privacy-first. No Google Analytics. |

---

## Why Two Supabase Projects (Not Two Schemas)

The user data (help requests, waitlist emails, provider applications)
and the AI roundtable data (messages between AIs, tasks, rounds)
are fundamentally different classes of information.

**They must not share a project.**

- Different service role keys
- Different connection strings
- Different backup schedules
- Different access patterns

If a misconfigured RLS policy in one schema could ever expose the
other, the Trust Covenant's "we will never sell your data" promise is
one bug away from being undermined. Two projects makes that
impossible, not just unlikely.

Supabase free tier allows multiple projects. Cost is zero.

---

## Why Next.js + Supabase

**Supabase is Postgres.** Row-level security, backups, auth, edge
functions. Self-hostable later. No lock-in beyond the SQL schema.

**One stack, not three.** Frontend, API, and database live in two
services (Vercel + Supabase). Emergent's original recommendation
(React + FastAPI + MongoDB) was three.

**Static where it matters.** Public pages ship as static HTML. Only
form API routes hit the database.

**PII stays in our Postgres.** Help form submissions, waitlist emails,
consent records — all in one database we control. No Formspree, no
Zapier, no Airtable.

**One platform, two isolated projects.** User data and AI coordination
use the same tool. Different projects. Zero overlap.

**Free tier for Phase 0.** $0 until we have real traffic.

---

## Bot Defense (Phase 0)

Every form includes:

- **Honeypot field.** Hidden input named "website." Real users won't
  fill it. Bots will. If populated, reject silently. No error message
  that tells the bot why.
- **Rate limit.** Max 3 submissions per IP per hour. Vercel built-in
  or in-memory counter for Phase 0.
- **No CAPTCHA.** Kills trust-first UX. Not needed at Phase 0 volume.

IP and user-agent are stored for **audit**, not protection.

---

## Data Model (Phase 0)

### Project 1: `trailervegas-users`

#### Table: `waitlist`
- id (uuid)
- email (text, unique)
- corridor (text, default 'I-15')
- created_at (timestamptz)
- ip (text, audit only)
- user_agent (text, audit only)

#### Table: `help_requests`
- id (uuid)
- name (text)
- email (text)
- phone (text)
- location (text)
- rig_type (text)
- problem_type (text)
- urgency (text)
- description (text, nullable)
- consent (boolean)
- consent_version (text)
- submitted_at (timestamptz)
- ip (text)
- user_agent (text)
- status (text — new / routed / closed)
- routed_to (jsonb)

#### Table: `provider_applications`
- id (uuid)
- business_name (text)
- contact_name (text)
- email (text)
- phone (text)
- website (text, nullable)
- service_types (text[])
- service_area (text)
- certified (text)
- years_in_business (int, nullable)
- description (text, nullable)
- consent (boolean)
- consent_version (text)
- submitted_at (timestamptz)
- ip (text)
- user_agent (text)
- status (text — new / contacted / approved / rejected)

#### Table: `consent_log`
- id (uuid)
- submission_type (text — help / provide / waitlist)
- submission_id (uuid)
- consent_version (text)
- covenant_url (text)
- submitted_at (timestamptz)
- ip (text)
- user_agent (text)

**Consent record.** Every form submission stores timestamp, IP, user
agent, and the version of the Trust Covenant displayed. This is what
lets us say "we logged your consent" and prove it.

### Project 2: `trailervegas-roundtable`

#### Table: `messages`
- id (uuid)
- from_ai (text)
- to_ai (text)
- subject (text)
- body (text)
- status (text)
- created_at (timestamptz)
- resolved_at (timestamptz, nullable)

#### Table: `tasks`
- id (text — T-XXX)
- title (text)
- assigned_to (text)
- priority (text)
- status (text)
- depends_on (text[])
- deadline (date, nullable)
- description (text)
- output (text)
- created_at (timestamptz)
- updated_at (timestamptz)

#### Table: `rounds`
- id (int)
- topic (text)
- status (text)
- started_at (timestamptz)
- closed_at (timestamptz, nullable)
- summary (text, nullable)

#### Table: `responses`
- id (uuid)
- ai (text)
- round_id (int)
- task_id (text)
- raw_output (text)
- staged_at (timestamptz)
- validated_at (timestamptz, nullable)
- committed_at (timestamptz, nullable)

#### Table: `audit_log`
- id (uuid)
- event_type (text)
- actor (text)
- details (jsonb)
- created_at (timestamptz)

**Zero overlap with Project 1.** No foreign keys. No shared service
role. No shared connection string.

---

## Environment Variables

Stored in Vercel, never in the repo:

**Project 1 (users):**
- `SUPABASE_USERS_URL`
- `SUPABASE_USERS_ANON_KEY`
- `SUPABASE_USERS_SERVICE_ROLE_KEY`

**Project 2 (roundtable):**
- `SUPABASE_ROUNDTABLE_URL`
- `SUPABASE_ROUNDTABLE_ANON_KEY`
- `SUPABASE_ROUNDTABLE_SERVICE_ROLE_KEY`

Never commit keys. `.env*` is already in `.gitignore`.

---

## Supabase Schema SQL

Full SQL (tables, RLS, indexes) is drafted in
`automation/supabase_schema.sql` — to be saved in a future batch.

---

## What's Not in the Stack (Phase 0)

- No user accounts (Phase 1)
- No reviews (Phase 1)
- No payments (Phase 2)
- No maps (Phase 2)
- No third-party form handlers
- No analytics that track users across sites
- No CAPTCHA

---

## Related Files

- `docs/AUTOMATION_PLAN.md` — Supabase as AI roundtable message bus
- `docs/EMERGENT_BUILD_SPEC.md` — original spec (superseded on stack)
- `docs/TRUST_COVENANT.md` — the promise that shapes the stack
- `docs/PRODUCT_SCOPE_V1.md` — what Phase 0 includes
