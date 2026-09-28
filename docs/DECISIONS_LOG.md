# Decisions Log

Every significant decision, dated, with reasoning and attribution.
Newest at top.

---

## 2026-09-27 — Supabase Schema and API Routes Delivered (T-013)

**Decision:** The full Supabase schema and the Next.js API route
specifications are drafted and published.

**Files:**
- `automation/supabase_schema.sql` — full SQL for both projects
- `docs/API_ROUTES.md` — Next.js API route specs

**Note:** The two Supabase projects (`trailervegas-users` and
`trailervegas-roundtable`) have not been created yet. Emergent can
build against the schema and use local stubs. Projects get created
before the first real form submission.

**Raised by:** Claude

**Status:** Confirmed. T-013 closed.

---

## 2026-09-27 — Formspree Dropped (Supersedes earlier entry)

**Decision:** Formspree is **not** part of the stack. Forms POST to
Next.js API routes that write directly to Supabase.

**Supersedes:** The "Hosting: Vercel. Forms: Formspree." note that
appeared in earlier task notes and an earlier decision log entry
(tagged below as SUPERSEDED).

**Reasoning:**

1. The stack decision (2026-09-27 — Next.js + Supabase on Vercel)
   routed PII through our own API for trust reasons.
2. Formspree routes user data through a third party. That contradicts
   the Trust Covenant's "we will never sell your data" framing.
3. Emergent flagged this before building. Cursor flagged the log
   conflict after Batch 10f.

**Raised by:** Cursor (log conflict on Batch 10f)

**Decided by:** Claude (driver)

**Status:** Confirmed. No Formspree anywhere in Phase 0.

---

## 2026-09-27 — Supabase Isolation: Two Projects, Not Two Schemas

**Decision:** User PII and the AI roundtable message bus live in
**separate Supabase projects**, not two schemas in one project.

- Project 1: `trailervegas-users` — waitlist, help_requests,
  provider_applications, consent records.
- Project 2: `trailervegas-roundtable` — messages, tasks, rounds,
  responses, audit_log.

Different service role keys, different connection strings.

**Reasoning:**

1. Emergent flagged that Supabase doing double duty creates a trust
   problem the day an AI-coordination query can see help_requests.
2. Two schemas with separate RLS is the minimum fix. Two projects is
   the hard fix. A misconfigured RLS policy cannot cross a project
   boundary.
3. Free tier allows multiple projects. Cost is zero.
4. Trust-first brand means structural isolation, not procedural.

**Raised by:** Emergent (build flag on T-005)

**Decided by:** Claude (driver) with founder confirmation

**Status:** Confirmed. Build proceeds.

---

## 2026-09-27 — Bot Defense for Phase 0 Forms

**Decision:** Every form includes a honeypot field and API-route rate
limiting. No CAPTCHA.

**Specifics:**

- Honeypot field: hidden input named "website." Real users won't fill
  it. Bots will. If populated, reject silently.
- Rate limit: Max 3 submissions per IP per hour.
- No CAPTCHA. Kills trust-first UX. Not needed at Phase 0 volume.
- IP and user-agent stored for audit, not protection.

**Raised by:** Emergent (build flag on T-005)

**Decided by:** Claude (driver) with founder confirmation

**Status:** Confirmed. Part of T-005.

---

## 2026-09-27 — Brand Assets: Placeholders Only for Phase 0

**Decision:** Phase 0 ships with placeholder brand assets. No real
logo. No photos.

**Raised by:** Emergent (asset question on T-005)

**Decided by:** Claude (driver) with founder confirmation

**Status:** Confirmed. Real logo deferred to T-014.

---

## 2026-09-27 — Legal Pages: Drafts Only, Footer Per M-011

**Decision:** Privacy and Terms ship as clearly-marked DRAFTS. Footer
says "Public promise — legal review pending. See the Trust Covenant."

**Raised by:** Emergent (build question on T-005)

**Decided by:** Claude (driver) with founder confirmation

**Status:** Confirmed.

---

## 2026-09-27 — Stack Decision: Next.js + Supabase on Vercel

**Decision:** Technical stack for TrailerVegas is:

- Frontend + API: Next.js (deployed on Vercel)
- Database + auth + storage: Supabase (Postgres)
- Forms: Next.js API routes that write directly to Supabase
- No Formspree. No Zapier. No Airtable.

**Raised by:** Emergent (PII trust concern on T-005)

**Decided by:** Claude (driver) with founder confirmation

**Status:** Confirmed. See `docs/STACK.md`.

---

## 2026-09-27 — T-005 Scope: Doorbell Only, Directory Deferred

**Decision:** Phase 0 build includes 10 routes. Directory deferred to
Phase 0.5 (T-012).

**Raised by:** Emergent (scope question on T-005)

**Decided by:** Claude (driver) with founder confirmation

**Status:** Confirmed.

---

## 2026-09-27 — Tagline Selected: "Good neighbors. Different ZIP codes."

**Decision:** Homepage tagline is "Good neighbors. Different ZIP
codes." Descriptor: "A nationwide home base for RVers, starting along
I-15."

**Raised by:** Founder (selection from ChatGPT's T-004)

**Status:** Confirmed. See `docs/BRAND_VOICE.md`.

---

## 2026-09-27 — Descriptor Evolution Rule

**Decision:** The tagline is permanent. The descriptor is a variable
slot. Geography never goes in the tagline. Only in the descriptor.

**Raised by:** Founder (prompted by Claude)

**Status:** Confirmed. See `docs/BRAND_VOICE.md`.

---

## 2026-09-27 — Founder Decisions Answered (T-010)

**Decision:** Four decisions made:

1. Entity state: Delaware.
2. Advisory Council candidates (6): names withheld pending consent.
3. Exhibit A draft date: 2026-10-15.
4. Benefit corp off-ramp: Option C.

**Raised by:** Founder

**Status:** Confirmed. Patches applied in T-008.

---

## 2026-09-27 — Automation: API-First, Not Browser RPA

**Decision:** APIs, not browser automation. Supabase as message bus.
GitHub for artifacts. Orchestrator in Python. Optional GUI dashboard.
Emergent stays manual.

**Raised by:** Founder, clarified by Claude.

**Status:** Confirmed. See `docs/AUTOMATION_PLAN.md`.

---

## 2026-09-27 — Corridor: I-15 Locked

**Decision:** Phase 0 corridor is I-15.

**Raised by:** Gemini (T-003)

**Status:** Confirmed.

---

## 2026-09-27 — Grok Red-Team Accepted (T-002)

**Decision:** All 15 findings accepted.

**Raised by:** Grok

**Status:** Accepted. Patches applied in T-008.

---

## 2026-09-27 — Output Contract: Complete Files

**Decision:** Every AI outputs complete files. Founder (via Cursor)
replaces.

**Raised by:** Founder

**Status:** Confirmed.

---

## 2026-09-27 — Legal Structure: LLC Now, Co-op Later

**Decision:** Delaware LLC now. Convert to co-op on trigger.

**Raised by:** Founder

**Status:** Confirmed pending legal review (T-006).

---

## 2026-09-27 — Feature Scope: Reviews + Services Only in V1

**Decision:** V1 is verified campground reviews + service provider
directory for one corridor.

**Raised by:** Claude

**Status:** Confirmed.

---

## 2026-09-27 — Project Name Confirmed

**Decision:** Domain `trailervegas.com`. Name "TrailerVegas."

**Raised by:** Founder

**Status:** Confirmed. USPTO search pending (T-007).

---

## 2026-09-27 — Repo Setup

**Decision:** Public repo at github.com/shataken-source/trailervegas.

**Raised by:** Founder + Cursor

**Status:** Confirmed. Operational.

---

## 2026-09-27 — Hosting Confirmed: Vercel. Forms: Formspree.

**Status:** ⚠️ **SUPERSEDED 2026-09-27.** Forms portion was replaced
by the Supabase stack decision. Vercel remains the host. Formspree is
NOT used. See the "Formspree Dropped" entry above.

**Original decision:** Hosting: Vercel. Forms: Formspree. Domain not
pointed yet.

**Raised by:** Founder
