# Decisions Log

Every significant decision, dated, with reasoning and attribution.
Newest at top.

---

## 2026-09-28 — T-007 USPTO Search: No Class 35 or 43 Records

**Decision:** T-007 is done. On 2026-09-28 the founder ran three exact
searches on https://tmsearch.uspto.gov/. Each returned "No results
found."

**Queries (field tag and search builder):**

- `CM:TrailerVegas AND IC:(035 043)`
- `CM:"Trailer Vegas" AND IC:(035 043)`
- `CM:"Vegas Trailer" AND IC:(035 043)`

Screenshots: `docs/t007-uspto/`.

**What this covers:** federal applications and registrations whose
combined mark is that exact string and whose international class is
35 (business / directory / advertising) or 43 (lodging / RV parks).

**What this does not cover:**

- Other classes. Thor Tech's live **VEGAS** registration (serial
  86051506, registration 4527163, Class 12, motor homes, renewed,
  status date 2024-10-11) is outside this search.
- Common-law use. Vegas Trailer Supply Inc (3076 Fremont St, Las
  Vegas) and Vegas Trailer Rental LLC (4610 Vandenberg Drive, North
  Las Vegas) are still the yellow flags for the lawyer on T-006.
- This is not a clearance opinion.

**Raised by:** Founder (screenshots)

**Status:** Confirmed. T-007 closed. Hand the Class 12 mark and the
two businesses to counsel with T-006.

---

## 2026-09-27 — Deploy 500 Fixed, Runtime Read Flagged

**Decision:** The first Batch 10T deploy returned 500 because the
waitlist function tried to read `docs/TRUST_COVENANT.md` at runtime.
Fixed in a32e123 (file included in serverless function traces). Design
smell logged as T-019.

**What happened:**
- 10T pushed the waitlist consent write
- Deploy went live, but waitlist route 500'd
- Root cause: `readFileSync('docs/TRUST_COVENANT.md')` — file not
  bundled into the serverless function by default
- Fix: explicit include in the function config for waitlist, help,
  provide routes
- Production deploy dpl_24Mk61HTgJtRE37sXPKi9k5AbRum is READY

**Better long-term fix (T-019):** Inline the covenant version as a
build-time constant. Update it when the covenant versions up. No
runtime file read. A serverless function should not depend on a
markdown file existing at a specific path.

**Raised by:** Cursor (during 10T verification)

**Status:** Deploy fixed. Refactor logged as T-019.

---

## 2026-09-27 — Documentation Drift Found and Fixed (Batches 10S/10T)

**Decision:** Cursor's Batch 10S diagnostics found three drifts
between docs and tree. Fixed across 10S and 10T.

**Drifts found and fixed:**

1. `content/` was empty. Six content copy files cited but never saved.
   Fixed in 10T.
2. `automation/supabase_schema.sql` said v1.0 with `displayed_at`.
   Fixed in 10S (bumped to v1.1, dropped column).
3. `lib/store.ts` still sent `displayed_at` — a fresh DB would reject
   the insert. Fixed in 10T.
4. The waitlist route did not write `consent_log`. Decision said it
   should. Fixed in 10T.
5. `README.md` and `.env.example` referenced `NEXT_PUBLIC_*` vars the
   app doesn't read. Marked reserved in 10S.
6. Live `consent_log.displayed_at` column was required with no
   default. Dropped on live project before push. Would have made
   every consent insert fail otherwise.

**New tasks logged:**

- T-018 — Move hardcoded copy from `lib/copy.ts` to reads from
  `content/*.md` (Phase 1 refactor)
- T-019 — Inline covenant version as build-time constant, drop
  runtime markdown read
- T-020 — Remove `displayed_at` from client form JSON payloads
  (dead weight; server ignores). Closed in Batch 10U.

**Lesson:** "Saved in a batch" ≠ "on main." The protocol rule
requiring raw URL verification (T-016) exists because of this exact
class of failure.

**Raised by:** Cursor (Batch 10S diagnostics, Batch 10T execution)

**Status:** Fixed. Verified raw URLs.

---

## 2026-09-27 — Round 1 Closed

**Decision:** Round 1 is closed. T-005 (Build Phase 0 Homepage and
Doorbell) is marked done. Live at https://trailervegas-site.vercel.app.

**Verified:**
- All 10 routes render
- Hero matches BRAND_VOICE.md (eyebrow → tagline H1 → descriptor →
  supporting line)
- "home base" appears once on the page
- Problem columns and Cards use middle-length copy
- /privacy and /terms show DRAFT banners
- /trust renders full v1.2 covenant
- /manifesto renders full manifesto
- Footer says "Public promise — legal review pending. See the Trust
  Covenant."
- Forms write to all four Supabase tables
- Rate limit + honeypot present

**Raised by:** Founder (phone test passed)

**Status:** Confirmed. Round 1 closed.

---

## 2026-09-27 — Council Names Pulled from Public Repo

**Decision:** The six Advisory Council candidate names are removed
from `docs/TRUST_COVENANT.md` and `docs/FOUNDER_DECISIONS_NEEDED.md`
(current tree). They remain in older git commits.

**Reasoning:**
- The repo is public
- Names of candidates who have not consented to being publicly listed
  is a privacy/consent issue
- Names will be published after the public comment window opens and
  candidates confirm
- Rewriting public git history is destructive and out of scope for a
  content fix — Cursor correctly refused

**Residual:** Names remain in older commits. Options for Round 2:
leave, rewrite history, or split repo into public (product) and
private (coordination).

**Raised by:** Founder (during phone test)

**Status:** Confirmed. Current tree clean. Residual logged as T-017.

---

## 2026-09-27 — Protocol Gap: Raw URL Verification

**Decision:** A new rule is needed in `AI_PROTOCOL.md`: any batch
that creates or updates a file must verify the raw GitHub URL
resolves after push, before reporting success. Local `ls` is not
sufficient.

**Reasoning:** During Round 1, `docs/BRAND_VOICE.md` was marked as
saved in a batch but never authored. Multiple downstream files
referenced it and would have hit 404s. Emergent caught it by fetching
the raw URL directly, which is the correct verification method.

**Raised by:** Emergent (caught during T-005)

**Status:** Confirmed. Logged as T-016 (Round 2).

---

## 2026-09-27 — Homepage Copy: Middle-Length Locked

**Decision:** Homepage Problem columns and What We're Building cards
use middle-length copy (bold lead + one vivid sentence). Not the
one-liner summaries, not the full manifesto paragraphs.

**Reasoning:**
- One-liners read like a list, no voice
- Full paragraphs are too long for a three-column layout on mobile
- Middle-length gives voice AND scannability
- "You learned not to trust the house" is the manifesto's phrase and
  ties the three columns into one setup

**Raised by:** Founder, drafted by Claude

**Status:** Confirmed. Applied in Batch 10Q. Live.

---

## 2026-09-27 — Supabase Env Var Naming

**Decision:** The app uses `SUPABASE_USERS_URL`,
`SUPABASE_USERS_ANON_KEY`, `SUPABASE_USERS_SERVICE_ROLE_KEY`. Not
`SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY`.

**Reasoning:** The two-project architecture (users + roundtable) needs
distinct prefixes. When the roundtable project is created (T-015),
its keys will be `SUPABASE_ROUNDTABLE_*`. The app's naming is
forward-compatible. The template (`README.md`, `.env.example`) was
the older single-project naming.

**Raised by:** Founder (during Supabase setup)

**Status:** Confirmed. README and .env.example updated in Batch 10R.

---

## 2026-09-27 — BRAND_VOICE.md Authored

**Decision:** `docs/BRAND_VOICE.md` is now on main. Contains the
tagline, descriptor slot, hero order, and voice rules.

**Reasoning:** Was referenced as canon but never authored. Emergent
caught the 404 by fetching the raw URL. Fixed in Batch 10O.

**Raised by:** Emergent (verification)

**Status:** Confirmed. On main at 0937021.

---

## 2026-09-27 — Formspree Dropped (Supersedes earlier entry)

**Decision:** Formspree is not part of the stack. Forms POST to
Next.js API routes that write directly to Supabase.

**Supersedes:** The "Hosting: Vercel. Forms: Formspree." note that
appeared in earlier task notes.

**Reasoning:** The stack decision routed PII through our own API for
trust reasons. Formspree routes user data through a third party.

**Status:** Confirmed.

---

## 2026-09-27 — Supabase Isolation: Two Projects, Not Two Schemas

**Decision:** User PII and the AI roundtable message bus live in
separate Supabase projects, not two schemas.

**Reasoning:** Structural isolation, not procedural. A misconfigured
RLS policy cannot cross a project boundary.

**Status:** Confirmed. Project 1 (`trailervegas-users`) is live.
Project 2 (`trailervegas-roundtable`) is T-015.

---

## 2026-09-27 — Bot Defense for Phase 0 Forms

**Decision:** Every form includes a honeypot field and API-route rate
limiting. No CAPTCHA.

**Status:** Confirmed. In the live build.

---

## 2026-09-27 — Brand Assets: Placeholders Only for Phase 0

**Decision:** Phase 0 ships with placeholder brand assets. No real
logo. No photos.

**Status:** Confirmed. Real logo deferred to T-014.

---

## 2026-09-27 — Legal Pages: Drafts Only, Footer Per M-011

**Decision:** Privacy and Terms ship as clearly-marked DRAFTS. Footer
says "Public promise — legal review pending. See the Trust Covenant."

**Status:** Confirmed. In the live build.

---

## 2026-09-27 — Stack Decision: Next.js + Supabase on Vercel

**Decision:** Frontend + API: Next.js. Database: Supabase. Hosting:
Vercel. No Formspree, no Zapier, no Airtable.

**Status:** Confirmed. Live.

---

## 2026-09-27 — T-005 Scope: Doorbell Only, Directory Deferred

**Decision:** Phase 0 build includes 10 routes. Directory deferred to
Phase 0.5 (T-012).

**Status:** Confirmed.

---

## 2026-09-27 — Tagline Selected: "Good neighbors. Different ZIP codes."

**Decision:** Homepage tagline. Descriptor: "A nationwide home base
for RVers, starting along I-15." Eyebrow: "Built by RVers, not
corporations."

**Status:** Confirmed. See `docs/BRAND_VOICE.md`.

---

## 2026-09-27 — Descriptor Evolution Rule

**Decision:** The tagline is permanent. The descriptor is a variable
slot. Geography never goes in the tagline.

**Status:** Confirmed. See `docs/BRAND_VOICE.md`.

---

## 2026-09-27 — Founder Decisions Answered (T-010)

**Decision:** Delaware; 6 Council candidates (names withheld pending
consent); Exhibit A by 2026-10-15; Option C for benefit corp.

**Status:** Confirmed. See `docs/FOUNDER_DECISIONS_NEEDED.md`.

---

## 2026-09-27 — Automation: API-First, Not Browser RPA

**Decision:** APIs, not browser automation. Supabase as message bus.
See `docs/AUTOMATION_PLAN.md`.

**Status:** Confirmed.

---

## 2026-09-27 — Corridor: I-15 Locked

**Decision:** Phase 0 corridor is I-15.

**Status:** Confirmed.

---

## 2026-09-27 — Grok Red-Team Accepted (T-002)

**Decision:** All 15 findings accepted.

**Status:** Accepted. Patches applied.

---

## 2026-09-27 — Output Contract: Complete Files

**Decision:** Every AI outputs complete files. Founder (via Cursor)
replaces.

**Status:** Confirmed.

---

## 2026-09-27 — Legal Structure: LLC Now, Co-op Later

**Decision:** Delaware LLC now. Convert to co-op on trigger.

**Status:** Confirmed pending legal review (T-006).

---

## 2026-09-27 — Project Name Confirmed

**Decision:** Domain `trailervegas.com`. Name "TrailerVegas."

**Status:** Confirmed. USPTO search pending (T-007).

---

## 2026-09-27 — Repo Setup

**Decision:** Public repo at github.com/shataken-source/trailervegas.

**Status:** Confirmed. Operational. Visibility question logged as T-017.
