# Cursor Inbox — Command Queue

**How to use:** Cursor reads this file when the founder says "check
trailervegas for your commands." Execute batches in order. Update
status. Commit and push after each batch.

**Last updated:** 2026-09-27
**Next batch to execute:** Batch 6 (waiting on founder decisions)

---

## Batch 4 — Set Up Cursor Protocol

**Status:** ✅ Done
**Issued by:** Claude
**Purpose:** Set up Cursor as the local file executor.

### Commands

**4.1 — Save `HANDOFF.md`** — ✅ Done

**4.2 — Save `CURSOR_PROTOCOL.md`** — ✅ Done

**4.3 — Save `CURSOR_OUTBOX.md`** — ✅ Done

**4.4 — Update `README.md`** — ✅ Done
- Added `**If you're new here, read HANDOFF.md first.**` by replacing
  README with the supplied file.

**4.5 — Commit + push** — ✅ Done
- Message: `[Batch 4] Set up Cursor protocol and handoff`

**4.6 — Write status to `CURSOR_OUTBOX.md`** — ✅ Done

---

## Batch 5 — Save Claude's Red-Team Response

**Status:** ✅ Done
**Issued by:** Claude
**Purpose:** Save driver response to Grok's red-team. Update decisions
log, messages, tasks. Add founder decisions file.

### Commands

**5.1 — Save `docs/DECISIONS_LOG.md`** — ✅ Done

**5.2 — Save `CONTRIBUTIONS/claude/2026-09-27-redteam-response.md`** — ✅ Done

**5.3 — Save `docs/FOUNDER_DECISIONS_NEEDED.md`** — ✅ Done

**5.4 — Save `MESSAGES.md`** — ✅ Done

**5.5 — Save `TASKS.md`** — ✅ Done

**5.6 — Commit + push** — ✅ Done
- Message: `[Batch 5] Claude response to Grok red-team`

**5.7 — Write status to `CURSOR_OUTBOX.md`** — ✅ Done

---

## Batch 6 — Covenant Patch (Queued)

**Status:** ⏸️ Waiting on founder decisions (T-010)
**Auto-triggers when:** Founder edits `docs/FOUNDER_DECISIONS_NEEDED.md`
with the four answers and says "check trailervegas for your commands."

**Planned commands (to be filled by Claude):**
- Save `CONTRIBUTIONS/claude/2026-09-27-covenant-patch-proposal.md`
- Save `docs/EXHIBIT_A_STUB.md`
- Save updated `docs/TRUST_COVENANT.md`
- Save updated `docs/OPERATING_AGREEMENT_CLAUSE.md`
- Commit + push

*(Claude will populate this section once the four decisions are made.)*

---

## Command History

- Batch 5 — ✅ Done — 2026-09-27 — `51d1202` — Claude red-team response, decisions, tasks, messages
- Batch 4 — ✅ Done — 2026-09-27 — `ec9d5c3` — Cursor protocol, handoff, README pointer
