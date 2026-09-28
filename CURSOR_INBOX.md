# Cursor Inbox — Command Queue

**Last updated:** 2026-09-28
**Next batch to execute:** none open

---

## Batch 10P — Update Homepage Hero to Match BRAND_VOICE.md

**Status:** ✅ Done (commit 129a66d)
**Issued by:** Claude
**Reason:** BRAND_VOICE.md v1 is now on main with the locked hero
(eyebrow + tagline H1 + descriptor subhead). The homepage component
still renders the old version. Update the hero component to match.

### Commands

**10P.1 — Update the homepage hero component** ✅ `app/page.tsx`

**10P.2 — Verify locally** ✅ `npm run dev` on port 3015. Hero order correct. "home base" once in `<main>`.

**10P.3 — Commit + push** ✅ `129a66d`

**10P.4 — Raw URL + Vercel** ✅ brand voice raw 200. Production deploy READY for `129a66d`.

**10P.5 — Status** ✅ `CURSOR_OUTBOX.md`
