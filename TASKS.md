# Tasks

**Status key:** ⏳ Open | ⏸️ Blocked | ✅ Done | ❌ Cancelled
**Priority key:** 🔴 Critical | 🟠 High | 🟡 Medium | 🟢 Low

---

## Active Tasks

### T-018 — Wire the app to content/ copy files
- **Assigned to:** Later (Phase 1)
- **Priority:** 🟢 Low
- **Status:** ⏳ Open
- **Description:** Phase 0 hardcodes copy in `lib/copy.ts` and the page
  components. The six source files are in `content/` as of Batch 10T.
  Point the app at those files. Do not rewrite the copy while doing it.
- **Output:** The app reads `content/*.md`

---

### T-019 — Verify waitlist consent_log row
- **Assigned to:** Founder
- **Priority:** 🟡 Medium
- **Status:** ✅ Done — smoke test wrote `submission_type = waitlist`,
  version `v1.2`. Test rows deleted.
- **Description:** Waitlist now writes `consent_log` with
  `submission_type = 'waitlist'` after a new signup. A duplicate email
  does not write a second consent row.
- **Output:** Founder note in `docs/DECISIONS_LOG.md`

---

### T-006 — Legal Review of Trust Covenant & OA Clause
- **Assigned to:** Founder (human lawyer)
- **Priority:** 🔴 Critical
- **Status:** ⏳ Open
- **Depends on:** T-008 (done — v1.2 patched)
- **Deadline:** 2026-10-15
- **Description:** Human lawyer reviews `docs/TRUST_COVENANT.md` v1.2
  and `docs/OPERATING_AGREEMENT_CLAUSE.md` v1.1. Hand them Grok's
  red-team with the two drafts. Flag: "Vegas Trailer" family in same
  industry (Vegas Trailer Supply, Trailers of Las Vegas) — trademark
  concern to include in review.
- **Output:** Founder notes in `docs/DECISIONS_LOG.md`

---

### T-007 — USPTO Trademark Search for "TrailerVegas"
- **Assigned to:** Founder
- **Priority:** 🟠 High
- **Status:** ⏳ Open
- **Deadline:** 2026-10-10
- **Description:** Search USPTO for these exact strings: TrailerVegas,
  Trailer Vegas, Vegas Trailer. Classes 35 (business/advertising/
  directory) and 43 (RV parks/lodging). Informal scan by Emergent
  found yellow flags but no blockers.
- **Output:** Founder notes in `docs/DECISIONS_LOG.md`

---

### T-011 — Select Tagline and Review Lead-Fee Copy
- **Assigned to:** Founder
- **Priority:** 🟡 Medium
- **Status:** 🔄 Partially Complete
- **Decision A — Tagline:** ✅ "Good neighbors. Different ZIP codes."
- **Decision B — Lead-fee copy:** ⏳ Pending. ChatGPT's proposed
  Covenant §6 replacement awaiting founder approval.
- **Inputs:** `CONTRIBUTIONS/chatgpt/2026-09-27-covenant-section6.md`
- **Output:** Founder decision in `docs/DECISIONS_LOG.md`

---

### T-012 — Build Directory (Phase 0.5)
- **Assigned to:** Emergent (later)
- **Priority:** 🟡 Medium
- **Status:** ⏸️ Blocked on seed-list phone verification
- **Depends on:** Phone verification
- **Description:** Build places + providers directories and individual
  listing pages.
- **Output:** Live preview +
  `CONTRIBUTIONS/emergent/2026-09-27-directory.md`

---

### T-014 — Real Brand Identity (Phase 1)
- **Assigned to:** Founder (designer TBD)
- **Priority:** 🟢 Low
- **Status:** ⏳ Open
- **Depends on:** Round 2 closed, brand voice firmed
- **Description:** Commission or design real logo. Full brand guide.
- **Output:** `docs/BRAND_GUIDE.md` + `/public/logo.svg`

---

### T-015 — Create Supabase Roundtable Project
- **Assigned to:** Founder
- **Priority:** 🟠 High
- **Status:** ⏳ Open
- **Depends on:** T-013 (done)
- **Description:** Create second Supabase project
  `trailervegas-roundtable`. Run Project 2 SQL from
  `automation/supabase_schema.sql`. This is for AI coordination —
  NOT connected to the live site.
- **Output:** Project live. Keys stored for automation layer.

---

### T-016 — Protocol Fix: Raw URL Verification Mandatory
- **Assigned to:** Claude
- **Priority:** 🟠 High
- **Status:** ⏳ Open (Round 2)
- **Description:** Add rule to `AI_PROTOCOL.md`: any batch that creates
  or updates a file must verify the raw GitHub URL resolves after
  push. Local `ls` is not sufficient. Learn from Batch 10i where
  BRAND_VOICE.md was marked saved but never authored.
- **Output:** Updated `AI_PROTOCOL.md`

---

### T-017 — Repo Visibility Decision
- **Assigned to:** Founder
- **Priority:** 🟡 Medium
- **Status:** ⏳ Open (Round 2)
- **Description:** Decide public vs split vs private repo. Council
  candidate names remain in older git commits (not current tree).
  Options: leave it, rewrite history, or split into public (product +
  docs) and private (AI coordination files).
- **Output:** Founder decision in `docs/DECISIONS_LOG.md`

---

## Completed Tasks

- **T-001** — I-15 Seed List — ✅ Claude
- **T-002** — Trust Covenant Red-Team — ✅ Grok
- **T-003** — Corridor Research — ✅ Gemini
- **T-004** — Tagline Alternatives — ✅ ChatGPT
- **T-005** — Build Phase 0 Homepage and Doorbell — ✅ Emergent — live
  at https://trailervegas-site.vercel.app
- **T-008** — Reconcile Covenant with OA — ✅ Claude
- **T-009** — Covenant §6 Lead-Fee Copy — ✅ ChatGPT
- **T-010** — Founder Decisions — ✅ Founder
- **T-013** — Supabase Schema + Data Layer — ✅ Claude

---

## Check-In Log

*(Newest at top.)*

- 2026-09-28 — Batch 10T. Consent insert no longer sends
  `displayed_at`. Waitlist writes `consent_log`. Six content files
  saved. T-019 is the live-row check.
- 2026-09-28 — Batch 10S. Schema file bumped to v1.1 (`displayed_at`
  removed from the file only). `NEXT_PUBLIC_*` marked reserved.
  Content files not restored — source text was never received.
  Logged T-018.
- 2026-09-27 — **Round 1 closed.** Live doorbell at
  https://trailervegas-site.vercel.app. Phone test passed. Forms
  write to all four Supabase tables. Copy review passed.
- 2026-09-27 — Batch 10Q fixed homepage copy to middle-length. Council
  names pulled from current tree.
- 2026-09-27 — Phone test. Two gaps found: copy drift, Council names.
- 2026-09-27 — Supabase project created, Vercel env vars set, first
  form submission verified.
- 2026-09-27 — Batch 10O authored BRAND_VOICE.md.
- 2026-09-27 — Preview URL live.
- 2026-09-27 — Emergent delivered T-005 deliverables.
- 2026-09-27 — Grok completed T-002, Gemini T-003, ChatGPT T-004/T-009.
- 2026-09-27 — Claude set up roundtable, completed T-001.

---

**Last updated:** 2026-09-27
