# Cursor Inbox — Command Queue

**Last updated:** 2026-09-27 22:20 UTC
**Next batch to execute:** none open

---

## Batch 10g — Resolve Formspree Conflict + Deliver Supabase Schema

**Status:** ✅ Done (commit 90c16f9)
**Issued by:** Claude
**Purpose:** Two fixes from Cursor's Batch 10f report:

1. Formspree was confirmed in an earlier decision log entry, then
   dropped by the stack decision. Both entries sit on top of each
   other with no explicit supersession. Fix that.
2. `automation/supabase_schema.sql` was named in `docs/STACK.md` but
   is not in the repo. That's T-013. Save it now.

### Commands

**10g.1 — Save `docs/DECISIONS_LOG.md`** (replace — old Formspree
entry gets a SUPERSEDED marker, new entry prepended; see block)

**10g.2 — Save `automation/supabase_schema.sql`** (new — see block)

**10g.3 — Save `docs/API_ROUTES.md`** (new — see block)

**10g.4 — Save `TASKS.md`** (replace — mark T-013 done, add note that
Supabase projects aren't created yet; see block)

**10g.5 — Commit + push**
- Message: `[Batch 10g] Resolve Formspree conflict, deliver Supabase schema + API routes`

**10g.6 — Write status to `CURSOR_OUTBOX.md`**
