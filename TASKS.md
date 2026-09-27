# Tasks

**Status key:** ⏳ Open | ⏸️ Blocked | ✅ Done | ❌ Cancelled
**Priority key:** 🔴 Critical | 🟠 High | 🟡 Medium | 🟢 Low

---

## Active Tasks

### T-004 — Tagline Alternatives
- **Assigned to:** ChatGPT
- **Priority:** 🟡 Medium
- **Status:** ⏳ Open
- **Depends on:** Nothing
- **Deadline:** 2026-09-29
- **Description:** Generate 10 alternative taglines. Warm, irreverent,
  not corporate. No "adventure awaits" clichés.
- **Output:** `CONTRIBUTIONS/chatgpt/2026-09-27-taglines.md`

---

### T-005 — Build Phase 0 Homepage
- **Assigned to:** Emergent
- **Priority:** 🔴 Critical
- **Status:** ⏸️ Blocked
- **Depends on:** T-001 (seed list), founder hosting decision
- **Deadline:** 2026-10-05
- **Description:** Build the homepage per
  `docs/EMERGENT_BUILD_SPEC.md`. Start with homepage only. Deliver
  preview URL.
- **Output:** Live preview +
  `CONTRIBUTIONS/emergent/2026-09-27-homepage.md`

---

### T-006 — Legal Review of Trust Covenant & OA Clause
- **Assigned to:** Founder (human lawyer)
- **Priority:** 🔴 Critical
- **Status:** ⏳ Open
- **Depends on:** T-002 (done), T-008 (patch), T-010 (decisions)
- **Deadline:** 2026-10-15
- **Description:** Human lawyer reviews `docs/TRUST_COVENANT.md` and
  `docs/OPERATING_AGREEMENT_CLAUSE.md`. Hand them Grok's red-team with
  the two drafts. Do not treat the current text as already tight.
- **Output:** Founder notes in `docs/DECISIONS_LOG.md`

---

### T-007 — USPTO Trademark Search for "TrailerVegas"
- **Assigned to:** Founder
- **Priority:** 🟠 High
- **Status:** ⏳ Open
- **Depends on:** Nothing
- **Deadline:** 2026-10-10
- **Description:** Search USPTO for "TrailerVegas" or similar marks.
  Note conflicts in Class 35 and Class 43.
- **Output:** Founder notes in `docs/DECISIONS_LOG.md`

---

### T-008 — Reconcile Covenant with OA Article X
- **Assigned to:** Claude
- **Priority:** 🔴 Critical
- **Status:** ⏳ Open
- **Depends on:** T-002 (done), T-010 (founder decisions)
- **Deadline:** 2026-10-02
- **Description:** Align Covenant §3 with OA X.3. Lock Verified
  Contribution in Article X. Patch in response to Grok findings 1–8,
  12, 13, 15. Do not invent a new conversion model.
- **Output:** Patch proposal file, then updated
  `docs/TRUST_COVENANT.md` and
  `docs/OPERATING_AGREEMENT_CLAUSE.md`

---

### T-009 — Rewrite Covenant §6 Lead-Fee Language
- **Assigned to:** ChatGPT
- **Priority:** 🟡 Medium
- **Status:** ⏳ Open
- **Depends on:** T-002 (done)
- **Deadline:** 2026-10-03
- **Description:** Optional after T-004. Keep qualified lead fees as a
  future revenue line. Make it sound like a consented switchboard, not
  the lead farms the manifesto attacks.
- **Output:** `CONTRIBUTIONS/chatgpt/2026-09-27-covenant-section6.md`
  (Claude applies if founder accepts)

---

### T-010 — Founder Decisions That Unblock Covenant
- **Assigned to:** Founder
- **Priority:** 🔴 Critical
- **Status:** ⏳ Open
- **Depends on:** T-002 (done)
- **Deadline:** 2026-10-05
- **Description:** Answer the 4 decisions in
  `docs/FOUNDER_DECISIONS_NEEDED.md`: entity state, first three
  Council candidates, Exhibit A date, benefit-corp off-ramp. Edit the
  file, commit, tell Cursor to check for commands.
- **Output:** Updated `docs/FOUNDER_DECISIONS_NEEDED.md`

---

## Completed Tasks

- **T-001** — Finish I-15 Seed List — ✅ 2026-09-27 — Claude
- **T-002** — Trust Covenant Red-Team — ✅ 2026-09-27 — Grok
- **T-003** — Corridor Research: I-15 vs I-10 — ✅ 2026-09-27 — Gemini

---

## Check-In Log

*(Newest at top.)*

- 2026-09-27 18:35 UTC — Gemini checked in, completed T-003, left 1
  message (M-015) for Claude.
- 2026-09-27 — Claude (Driver) responded to Grok's red-team. All 15
  findings accepted. 8 new decisions logged. Batch 5 files queued in
  CURSOR_INBOX.md. Waiting on founder decisions (T-010) to fire Batch 6.
- 2026-09-27 18:15 UTC — Grok checked in, completed T-002, left 4
  messages (M-008 to M-012) and 3 tasks (T-008, T-009, T-010).
- 2026-09-27 — Claude checked in. Set up roundtable system. Completed
  T-001 (seed list). Left 6 tasks for others.

---

**Last updated:** 2026-09-27
