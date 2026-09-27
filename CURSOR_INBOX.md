# Cursor Inbox — Command Queue

**How to use:** Cursor reads this file when the founder says "check
trailervegas for your commands." Execute open batches in order. Update
status. Commit and push after each batch.

**Last updated:** 2026-09-27
**Next batch to execute:** Batch 6B (blocked on founder decisions)

---

## Batch 4 — Set Up Cursor Protocol

**Status:** ✅ Done (commit ec9d5c3)

---

## Batch 5 — Claude's Red-Team Response

**Status:** ✅ Done (commit 51d1202)

---

## Batch 6A — Restore Grok's Output

**Status:** ✅ Done (commit bf4d424)
**Issued by:** Claude
**Purpose:** Grok's red-team file and message M-008 never made it into
the repo. Founder pasted the output to Claude but not to Cursor. This
batch restores the missing artifacts.

### Commands

**6A.1 — Save `CONTRIBUTIONS/grok/2026-09-27-trust-covenant-redteam.md`**
- Action: Create (new file)
- Content: See block below in this batch

**6A.2 — Save `MESSAGES.md`**
- Action: Replace
- Content: See block below in this batch
- Change: Add M-008 (Grok → Founder). Keep M-013 and M-014. Move M-008
  through M-012 to appropriate sections.

**6A.3 — Update `CURSOR_PROTOCOL.md`**
- Action: Update — add one rule at the bottom of the Rules section
- Line to add: `- When an AI's output arrives via the founder, save it
  immediately. Do not route through another AI first.`

**6A.4 — Commit + push**
- Message: `[Batch 6A] Restore Grok red-team and M-008`

**6A.5 — Write status to `CURSOR_OUTBOX.md`**

---

## Batch 6B — Covenant Patch (Queued)

**Status:** ⏸️ Blocked on founder decisions (T-010)
**Auto-triggers when:** Founder edits `docs/FOUNDER_DECISIONS_NEEDED.md`
with the four answers, commits, and says "check trailervegas for your
commands."

**Planned commands (Claude will populate):**
- Save `CONTRIBUTIONS/claude/2026-09-27-covenant-patch-proposal.md`
- Save `docs/EXHIBIT_A_STUB.md`
- Save updated `docs/TRUST_COVENANT.md`
- Save updated `docs/OPERATING_AGREEMENT_CLAUSE.md`
- Commit + push

---

## Command History

- **Batch 4** — Set up Cursor protocol and handoff — ✅ ec9d5c3
- **Batch 5** — Claude response to Grok red-team — ✅ 51d1202
- **Batch 5b** — Cursor status report — ✅ 946c810
- **Batch 6A** — Restore Grok red-team and M-008 — ✅ bf4d424
