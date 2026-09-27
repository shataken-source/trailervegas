# Tasks

**Status key:** ⏳ Open | ⏸️ Blocked | ✅ Done | ❌ Cancelled
**Priority key:** 🔴 Critical | 🟠 High | 🟡 Medium | 🟢 Low

---

## Active Tasks

### T-005 — Build Phase 0 Homepage and Doorbell
- **Assigned to:** Emergent
- **Priority:** 🔴 Critical
- **Status:** ⏳ Open (unblocked 2026-09-27)
- **Depends on:** Nothing
- **Deadline:** 2026-10-05
- **Tech stack:** Next.js + Supabase on Vercel. See `docs/STACK.md`.
- **Description:** Build the 10-route doorbell. Homepage, manifesto,
  trust, help, provide, about, contact, privacy, terms, thanks pages.
- **Notes:**
  - Public pages: static generation.
  - Help and provide forms: Next.js API routes → Supabase. See
    `docs/API_ROUTES.md`.
  - Bot defense: honeypot + rate limit. No CAPTCHA.
  - No Formspree, no Zapier, no Airtable.
  - Footer: "Public promise — legal review pending. See the Trust
    Covenant." No "binding commitment."
  - Assets: placeholder wordmark. No photos. No stock.
  - Schema: see `automation/supabase_schema.sql`. Projects not
    created yet — build against stubs.
- **Output:** Vercel preview URL +
  `CONTRIBUTIONS/emergent/2026-09-27-homepage.md`

---

### T-006 — Legal Review of Trust Covenant & OA Clause
- **Assigned to:** Founder (human lawyer)
- **Priority:** 🔴 Critical
- **Status:** ⏳ Open
- **Depends on:** T-008 (done)
- **Deadline:** 2026-10-15
- **Description:** Human lawyer reviews covenant v1.2 and OA v1.1.
- **Output:** Founder notes in `docs/DECISIONS_LOG.md`

---

### T-007 — USPTO Trademark Search for "TrailerVegas"
- **Assigned to:** Founder
- **Priority:** 🟠 High
- **Status:** ⏳ Open
- **Deadline:** 2026-10-10
- **Description:** Search USPTO for "TrailerVegas" or similar marks.
- **Output:** Founder notes in `docs/DECISIONS_LOG.md`

---

### T-011 — Select Tagline and Review Lead-Fee Copy
- **Created by:** ChatGPT — 2026-09-27
- **Assigned to:** Founder
- **Priority:** 🟡 Medium
- **Status:** 🔄 Partially Complete
- **Decision A — Tagline:** ✅ "Good neighbors. Different ZIP codes."
- **Decision B — Lead-fee copy:** ⏳ Pending.
- **Output:** Founder decisions in `docs/DECISIONS_LOG.md`

---

### T-012 — Build Directory (Phase 0.5)
- **Created by:** Claude — 2026-09-27
- **Assigned to:** Emergent (later)
- **Priority:** 🟡 Medium
- **Status:** ⏸️ Blocked on seed-list phone verification
- **Depends on:** T-005, phone verification
- **Description:** Build places directory, provider directory, and
  individual listing pages.
- **Output:** Live preview +
  `CONTRIBUTIONS/emergent/2026-09-27-directory.md`

---

### T-013 — Supabase Schema + Data Layer
- **Created by:** Claude — 2026-09-27
- **Assigned to:** Claude
- **Priority:** 🟠 High
- **Status:** ✅ Done — 2026-09-27
- **Output:** `automation/supabase_schema.sql`,
  `docs/API_ROUTES.md`
- **Completion note:** Both files delivered. Two Supabase projects
  named in STACK.md (`trailervegas-users`, `trailervegas-roundtable`)
  are NOT created yet. Emergent builds against stubs. Projects get
  created before the first real form submission.

---

### T-014 — Real Brand Identity (Phase 1)
- **Created by:** Claude — 2026-09-27
- **Assigned to:** Founder (designer TBD)
- **Priority:** 🟢 Low
- **Status:** ⏳ Open
- **Depends on:** Round 2 closed, brand voice firmed
- **Description:** Commission or design a real logo.
- **Output:** `docs/BRAND_GUIDE.md` + `/public/logo.svg`

---

### T-015 — Create Supabase Projects
- **Created by:** Claude — 2026-09-27
- **Assigned to:** Founder
- **Priority:** 🟠 High
- **Status:** ⏳ Open
- **Depends on:** T-013 (done — schema ready)
- **Description:** In Supabase dashboard, create two projects:
  `trailervegas-users` and `trailervegas-roundtable`. Run
  `automation/supabase_schema.sql` in each project's SQL editor.
  Generate service role keys. Add to Vercel environment variables.
- **Notes:** Free tier. Two projects. No shared keys.
- **Output:** Keys in Vercel. Projects live.

---

## Completed Tasks

- **T-001** — I-15 Seed List — ✅ Claude
- **T-002** — Trust Covenant Red-Team — ✅ Grok
- **T-003** — Corridor Research — ✅ Gemini
- **T-004** — Tagline Alternatives — ✅ ChatGPT
- **T-008** — Reconcile Covenant with OA — ✅ Claude
- **T-009** — Covenant §6 Lead-Fee Copy — ✅ ChatGPT
- **T-010** — Founder Decisions — ✅ Founder
- **T-013** — Supabase Schema + Data Layer — ✅ Claude

---

## Check-In Log

*(Newest at top.)*

- 2026-09-27 — Formspree conflict resolved. Old entry marked
  SUPERSEDED. Supabase schema and API routes delivered (T-013).
  T-015 added (create the two Supabase projects).
- 2026-09-27 — Brand assets decided: placeholders only.
- 2026-09-27 — T-005 unblocked.
- 2026-09-27 — Stack decided: Next.js + Supabase on Vercel.
- 2026-09-27 — T-005 scope decided: doorbell only.
- 2026-09-27 — Founder selected tagline.
- 2026-09-27 21:44 UTC — ChatGPT completed T-004 and T-009.
- 2026-09-27 — Gemini completed T-003.
- 2026-09-27 — Grok completed T-002.
- 2026-09-27 — Claude set up roundtable, completed T-001.

---

**Last updated:** 2026-09-27
