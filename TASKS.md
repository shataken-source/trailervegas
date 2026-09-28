# Tasks

**Status key:** ⏳ Open | ⏸️ Blocked | ✅ Done | ❌ Cancelled
**Priority key:** 🔴 Critical | 🟠 High | 🟡 Medium | 🟢 Low

---

## Active Tasks

### T-006 — Legal Review of Trust Covenant & OA Clause
- **Assigned to:** Founder (human lawyer)
- **Priority:** 🔴 Critical
- **Status:** ⏳ Open
- **Depends on:** T-008 (done — v1.2 patched)
- **Deadline:** 2026-10-15
- **Description:** Human lawyer reviews `docs/TRUST_COVENANT.md` v1.2
  and `docs/OPERATING_AGREEMENT_CLAUSE.md` v1.1. Hand them Grok's
  red-team with the two drafts. Flag: "Vegas Trailer" family in same
  industry — trademark concern to include in review.
- **Output:** Founder notes in `docs/DECISIONS_LOG.md`

---

### T-007 — USPTO Trademark Search for "TrailerVegas"
- **Assigned to:** Founder
- **Priority:** 🟠 High
- **Status:** ⏳ Open
- **Deadline:** 2026-10-10
- **Description:** Search USPTO: TrailerVegas, Trailer Vegas, Vegas
  Trailer. Classes 35 and 43.
- **Output:** Founder notes in `docs/DECISIONS_LOG.md`

---

### T-011 — Select Tagline and Review Lead-Fee Copy
- **Assigned to:** Founder
- **Priority:** 🟡 Medium
- **Status:** 🔄 Partially Complete
- **Decision A — Tagline:** ✅ "Good neighbors. Different ZIP codes."
- **Decision B — Lead-fee copy:** ⏳ Pending.
- **Output:** Founder decision in `docs/DECISIONS_LOG.md`

---

### T-012 — Build Directory (Phase 0.5)
- **Assigned to:** Emergent (later)
- **Priority:** 🟡 Medium
- **Status:** ⏸️ Blocked on seed-list phone verification
- **Output:** Live preview +
  `CONTRIBUTIONS/emergent/2026-09-27-directory.md`

---

### T-014 — Real Brand Identity (Phase 1)
- **Assigned to:** Founder (designer TBD)
- **Priority:** 🟢 Low
- **Status:** ⏳ Open
- **Output:** `docs/BRAND_GUIDE.md` + `/public/logo.svg`

---

### T-015 — Create Supabase Roundtable Project
- **Assigned to:** Founder
- **Priority:** 🟠 High
- **Status:** ⏳ Open
- **Depends on:** T-013 (done)
- **Description:** Create second Supabase project
  `trailervegas-roundtable`. Run Project 2 SQL. NOT connected to the
  live site.
- **Output:** Project live. Keys stored for automation layer.

---

### T-016 — Protocol Fix: Raw URL Verification Mandatory
- **Assigned to:** Claude
- **Priority:** 🟠 High
- **Status:** ⏳ Open (Round 2)
- **Description:** Add rule to `AI_PROTOCOL.md`: any batch that
  creates or updates a file must verify the raw GitHub URL resolves
  after push. Local `ls` is not sufficient.
- **Output:** Updated `AI_PROTOCOL.md`

---

### T-017 — Repo Visibility Decision
- **Assigned to:** Founder
- **Priority:** 🟡 Medium
- **Status:** ⏳ Open (Round 2)
- **Description:** Public vs split vs private repo. Council names
  remain in older git commits.
- **Output:** Founder decision in `docs/DECISIONS_LOG.md`

---

### T-018 — Move Copy from lib/copy.ts to content/*.md
- **Assigned to:** Emergent or Claude
- **Priority:** 🟡 Medium
- **Status:** ⏳ Open (Phase 1 refactor)
- **Description:** Live pages hardcode copy in `lib/copy.ts`. The
  `content/*.md` files are the reference. Wire the app to read from
  markdown at build time. Keeps "repo is source of truth" honest.
- **Output:** Refactored app. `lib/copy.ts` deprecated.

---

### T-019 — Inline Covenant Version as Build-Time Constant
- **Assigned to:** Cursor
- **Priority:** 🟠 High
- **Status:** ⏳ Open
- **Description:** The waitlist/help/provide routes read
  `docs/TRUST_COVENANT.md` at runtime to get the version string. This
  caused the first 10T deploy to 500. Replace with a build-time
  constant (e.g., `COVENANT_VERSION = 'v1.2'` in a config file).
  Update the constant when the covenant versions up.
- **Output:** No runtime markdown read. Deploy is not path-dependent.

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
- **T-020** — Remove `displayed_at` from client form payloads — ✅
  Cursor (Batch 10U)

---

## Check-In Log

*(Newest at top.)*

- 2026-09-28 — Batch 10U. API routes and stack docs match schema v1.1.
  Help and provide forms no longer send `displayed_at`. T-020 done.
  T-019 still open.
- 2026-09-27 — Batch 10T fixed schema, store, content files. Live
  `displayed_at` column dropped. Waitlist consent logging added. Deploy
  500 fixed (a32e123). Production READY.
- 2026-09-27 — Batch 10S found three doc drifts. Fixed.
- 2026-09-27 — **Round 1 closed.** Live doorbell at
  https://trailervegas-site.vercel.app. Phone test passed. Forms
  write to all four Supabase tables. Copy review passed.
- 2026-09-27 — Batch 10Q fixed homepage copy to middle-length. Council
  names pulled from current tree.
- 2026-09-27 — Phone test. Two gaps found: copy drift, Council names.
- 2026-09-27 — Supabase project created, Vercel env vars set.
- 2026-09-27 — Batch 10O authored BRAND_VOICE.md.
- 2026-09-27 — Preview URL live.
- 2026-09-27 — Emergent delivered T-005 deliverables.
- 2026-09-27 — Grok T-002, Gemini T-003, ChatGPT T-004/T-009.
- 2026-09-27 — Claude set up roundtable, completed T-001.

---

**Last updated:** 2026-09-28
