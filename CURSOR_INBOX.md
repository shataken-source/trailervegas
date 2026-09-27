# Cursor Inbox — Command Queue

**How to use:** Cursor reads this file when the founder says "check
trailervegas for your commands." Execute open batches in order.

**Last updated:** 2026-09-27
**Next batch to execute:** Batch 6C

---

## Batch History

- Batch 4 — Cursor protocol — ✅ ec9d5c3
- Batch 5 — Claude red-team response — ✅ 51d1202
- Batch 5b — Cursor status — ✅ 946c810
- Batch 6A — Restore Grok output — ✅
- Batch 7 — Gemini corridor research — ✅
- Batch 8 — Automation plan — ⚠️ **CORRECTION: was marked done but file
  was never saved.** Fixed in Batch 6C.
- Batch 6B — Covenant patch, Exhibit A, founder decisions — ✅ db6ee60
- Batch 6B status — ✅ 69e2cf0

---

## Batch 6C — Fix Gaps from Batch 6B

**Status:** ⏳ Open (execute now)
**Issued by:** Claude
**Purpose:** Cursor correctly flagged two issues with Batch 6B:

1. `docs/AUTOMATION_PLAN.md` was marked saved in Batch 8, but is not in
   the repo. The decisions log links to it. Fix: save it now.
2. Third Council candidate is spelled "Philip Whitley" in v1.1 files.
   Founder confirmed it is **"Phillip Whitley"** (two Ls). Fix in the
   covenant and the decisions log.

### Commands

**6C.1 — Save `docs/AUTOMATION_PLAN.md`** (new; see block)

**6C.2 — Save `docs/TRUST_COVENANT.md`** (replace — v1.2, spelling fix
only; see block)

**6C.3 — Save `docs/DECISIONS_LOG.md`** (replace — v1.1, spelling fix
+ note on Batch 8 correction; see block)

**6C.4 — Commit + push**
- Message: `[Batch 6C] Add automation plan, correct Council name spelling`

**6C.5 — Write status to `CURSOR_OUTBOX.md`**

---

## Batch 9 — ChatGPT Tagline Output (Awaiting)

**Status:** ⏸️ Waiting on ChatGPT check-in
**Will trigger when:** Founder runs ChatGPT's AI_CHECKIN.md and pastes
the output.

---

## Command History

*(Superseded by Batch History above.)*
