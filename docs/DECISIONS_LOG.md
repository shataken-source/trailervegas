# Decisions Log

Every significant decision, dated, with reasoning and attribution.
Newest at top.

---

## 2026-09-27 — Supabase Isolation: Two Projects, Not Two Schemas

**Decision:** User PII and the AI roundtable message bus live in
**separate Supabase projects**, not two schemas in one project.

- Project 1: `trailervegas-users` — waitlist, help_requests,
  provider_applications, consent records.
- Project 2: `trailervegas-roundtable` — messages, tasks, rounds,
  responses, audit_log.

Different service role keys, different connection strings.

**Reasoning:**

1. Emergent correctly flagged that Supabase doing double duty creates
   a trust problem the day an AI-coordination query can see
   help_requests.
2. Two schemas with separate RLS is the minimum fix. Two projects is
   the hard fix. A misconfigured RLS policy cannot cross a project
   boundary.
3. Free tier allows multiple projects. Cost is zero.
4. Trust-first brand means structural isolation, not procedural.

**Raised by:** Emergent (build flag on T-005)

**Decided by:** Claude (driver) with founder confirmation

**Status:** Confirmed. Build proceeds.

---

## 2026-09-27 — Bot Defense for Phase 0 Forms

**Decision:** Every form includes a honeypot field and API-route rate
limiting. No CAPTCHA.

**Specifics:**

- **Honeypot field:** Hidden input named "website" (or similar). Real
  users won't fill it. Bots will. If populated, reject silently.
- **Rate limit:** Max 3 submissions per IP per hour. Vercel built-in
  or in-memory counter for Phase 0.
- **No CAPTCHA.** It kills trust-first UX and isn't needed at Phase 0
  volume.
- **IP and user-agent storage** is for audit, not protection.

**Reasoning:** A waitlist with no bot defense fills with garbage on
day one. CAPTCHA is the wrong tradeoff for a trust-first brand.
Honeypot + rate limit is standard, invisible to users, and free.

**Raised by:** Emergent (build flag on T-005)

**Decided by:** Claude (driver) with founder confirmation

**Status:** Confirmed. Part of T-005.

---

## 2026-09-27 — Phase 0 Hosting and Forms

**Decision:**

1. **Hosting:** Vercel. Already paid for by other projects.
2. **Forms:** Formspree. Works with Vercel. No custom backend.
3. **Domain:** `trailervegas.com` is not pointed at Vercel. It currently
   shows a for-sale landing page. Do not change DNS until a Vercel
   project exists. Founder will point it after that.

**Raised by:** Founder

**Status:** Confirmed. T-005 is still blocked on seed-list phone
verification. The 10 service-provider numbers are placeholders.

---

## 2026-09-27 — Batch 8 Correction

**Decision:** The Batch 8 status entry marking `docs/AUTOMATION_PLAN.md`
as saved was incorrect. The file was not in the repo. Corrected in
Batch 6C — file now saved.

**Raised by:** Cursor (caught during Batch 6B verification)

**Status:** Fixed. The `AUTOMATION_PLAN.md` is now in the repo and the
reference in this log is valid.

---

## 2026-09-27 — Council Name Correction

**Decision:** Third Council candidate is **Phillip Whitley** (two Ls),
not "Philip Whitley."

**Raised by:** Founder

**Status:** Corrected in v1.2 of `docs/TRUST_COVENANT.md` and in this
log.

---

## 2026-09-27 — Founder Decisions Answered (T-010)

**Decision:** Four decisions made:

1. **Entity state:** Delaware.
2. **Advisory Council candidates (6):** Brian Walker, Mark Swords,
   Phillip Whitley, John Davis, Trina Gordon, April Davis. Public
   14-day comment window, then confirm 3–5.
3. **Exhibit A draft date:** 2026-10-15, aligned with legal review.
4. **Benefit corp off-ramp:** Option C. Removed from public covenant.
   Kept in Article X as legal fallback with non-negotiable attributes
   attached.

**Raised by:** Founder

**Status:** Confirmed. Patches applied in T-008. See
`docs/EXHIBIT_A_STUB.md` and updated `docs/TRUST_COVENANT.md` and
`docs/OPERATING_AGREEMENT_CLAUSE.md`.

---

## 2026-09-27 — Automation: API-First, Not Browser RPA

**Decision:** When we automate the AI roundtable, we use APIs, not
browser automation. Supabase as message bus. GitHub for artifacts.
Orchestrator in Python. Optional GUI dashboard. Emergent stays manual.

**Reasoning:** Chat UIs prohibit automated access in their ToS.
Protocol is stateless — repo is the memory. Prompt caching drops cost
~80% because context is mostly static. One round per day at ~$0.15–0.20
with caching. Under $10/month.

**Raised by:** Founder (proposed GUI), Claude (clarified API-first).

**Status:** Confirmed. See `docs/AUTOMATION_PLAN.md`. Build after
Phase 0 ships, and only when the manual loop starts to hurt.

---

## 2026-09-27 — Corridor: I-15 Locked

**Decision:** Phase 0 corridor is I-15 (San Diego → Las Vegas → Salt
Lake City → Montana). I-10 rejected.

**Reasoning:** Gemini's research (T-003). I-15 has sustained year-round
traffic, "rig-killer" topography (Cajon Pass, Baker Grade) that forces
breakdown scenarios, lower-competition SEO targets, and aligns with
the domain name.

**Raised by:** Gemini (T-003)

**Status:** Confirmed. See
`CONTRIBUTIONS/gemini/2026-09-27-corridor-research.md`.

---

## 2026-09-27 — Grok Red-Team Accepted (T-002)

**Decision:** All 15 findings accepted. No pushback.

**Raised by:** Grok

**Status:** Accepted. Patches applied in T-008.

---

## 2026-09-27 — "Binding Commitment" Language Removed

**Decision:** Footer line downgraded to "This is the public promise.
Legal review pending. See the draft operating agreement."

**Raised by:** Grok (Finding 15)

**Status:** Confirmed. Applied in T-008.

---

## 2026-09-27 — Advisory Council Nominating Pool Named

**Decision:** Six candidates named for the initial Advisory Council
pool. Public comment window, then 3–5 confirmed.

**Raised by:** Founder

**Status:** Confirmed.

---

## 2026-09-27 — Exhibit A Stub Elevated to Critical

**Decision:** One-page Exhibit A stub published by 2026-10-15.

**Raised by:** Grok (Finding 2)

**Status:** Confirmed. See `docs/EXHIBIT_A_STUB.md`.

---

## 2026-09-27 — Help Form Consent Paragraph Added

**Decision:** Covenant §3 adds explicit help-form data sharing
paragraph.

**Raised by:** Grok (Finding 12)

**Status:** Confirmed. Applied in T-008.

---

## 2026-09-27 — Covenant/OA Amendment Paths Reconciled

**Decision:** Single stricter path. Founder + 2/3 Council + 90-day
public notice (pre-member). 2/3 members (post-member).

**Raised by:** Grok (Finding 4)

**Status:** Confirmed. Applied in T-008.

---

## 2026-09-27 — Verified Contribution Locked in Article X

**Decision:** Definition moves from "Company policies" into Article X.
Changing it requires the same supermajority as amending Article X.

**Raised by:** Grok (Finding 5)

**Status:** Confirmed. Applied in T-008.

---

## 2026-09-27 — 90-Day Conversion Deadline Extended

**Decision:** 90 days to file. 12 months to close. Specific
performance attaches to filing, not closing.

**Raised by:** Grok (Finding 7)

**Status:** Confirmed. Applied in T-008.

---

## 2026-09-27 — Output Contract: Complete Files

**Decision:** Every AI outputs complete files. Founder (via Cursor)
replaces.

**Raised by:** Founder

**Status:** Confirmed. See `AI_PROTOCOL.md`.

---

## 2026-09-27 — Legal Structure: LLC Now, Co-op Later

**Decision:** Delaware LLC now. Convert to co-op on trigger.

**Raised by:** Founder

**Status:** Confirmed pending legal review (T-006).

---

## 2026-09-27 — Feature Scope: Reviews + Services Only in V1

**Decision:** V1 is verified campground reviews + service provider
directory for one corridor.

**Raised by:** Claude

**Status:** Confirmed.

---

## 2026-09-27 — Project Name Confirmed

**Decision:** Domain `trailervegas.com`. Name "TrailerVegas."

**Raised by:** Founder

**Status:** Confirmed. USPTO search pending (T-007).

---

## 2026-09-27 — Repo Setup

**Decision:** Public repo at github.com/shataken-source/trailervegas.

**Raised by:** Founder + Cursor

**Status:** Confirmed. Operational.
