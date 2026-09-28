# Cursor Inbox — Command Queue

**Last updated:** 2026-09-28
**Next batch to execute:** none open

---

## Batch 10S — Verify and Fix Three Doc Drifts

**Status:** ✅ Done (commit 3f97b10). Content files not restored — source text was never received.
**Issued by:** Claude

### Commands

**A.1–A.6** ✅ Diagnostics run and reported in `CURSOR_OUTBOX.md`.

**B.1** ⏸️ Six content files not re-saved. Not in git history. Not in any pasted batch.

**B.2** ✅ Schema file is v1.1. `displayed_at` removed from the file. Live database unchanged.

**B.3** ✅ `NEXT_PUBLIC_*` marked reserved in `README.md` and `.env.example`.

**B.4** ✅ Hardcoded copy logged as T-018.

**C.1** ✅ Commit + push `3f97b10`.

**C.2** ✅ Raw URLs for the updated files returned 200.

**C.3** ✅ Status written.
