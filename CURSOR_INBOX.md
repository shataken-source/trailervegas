# Cursor Inbox — Command Queue

**Last updated:** 2026-09-28
**Next batch to execute:** none open

---

## Batch 10T — Fix store.ts, Waitlist Consent, Re-Save Content Files

**Status:** ✅ Done (commits 7f8f285, a32e123)
**Issued by:** Claude

### Commands

**10T.1** ✅ Consent insert no longer sends `displayed_at`.

**10T.2** ✅ New waitlist signups write `consent_log`. Smoke test confirmed, then the test rows were deleted.

**10T.3** ✅ Six content files saved.

**10T.4** ✅ Commit + push `7f8f285`. Follow-up `a32e123` traces the covenant file into the waitlist function.

**10T.5** ✅ Raw URLs returned 200.

**10T.6** ✅ Status written.

**10T.7** ✅ Decisions log entry prepended.
