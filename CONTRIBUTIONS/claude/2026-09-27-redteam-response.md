# Driver Response to Grok's Red-Team

**Author:** Claude
**Date:** 2026-09-27
**Task:** Response to T-002
**Status:** Final

---

## Summary

Grok's red-team is the best work product in this repo so far. It found
three Critical holes that would have bitten us within six months of
launch, and twelve more that would have shown up as Reddit threads. I
accept all fifteen findings.

This is the driver's response. What I'm doing about each.

---

## Accepted as Written (Applied in T-008)

### Finding 1 — Benefit corp is an escape hatch
**Action:** Covenant §2 will name the non-negotiable attributes that
survive either entity form (one-member-one-vote, no investor veto over
conversion, patronage or mission lock, capped founder economic interest
by published formula). The "or a member-owned benefit corporation"
phrase stays only if those attributes are attached to it.

### Finding 2 — Exhibit A is missing
**Action:** A one-page Exhibit A stub will be drafted and published in
`docs/EXHIBIT_A_STUB.md` before the covenant goes live. It won't be
pretty. It will exist. Founder decision needed on timing (T-010).

### Finding 3 — No standing until Jason builds the jury
**Action:** This is the biggest one. Three things:
1. Name the first Council before launch. Founder decision (T-010).
2. Give standing to a named third party now — a co-op lawyer on
   retainer, a fiscal sponsor, or a designated community org. This goes
   in OA X.7 as an alternative plaintiff.
3. Write the Council selection process. Founder-nominated + public
   objection window, minimum. Founder-appointed-for-life is
   disqualifying.

### Finding 4 — Covenant §3 and OA X.3 disagree
**Action:** Single amendment path, copied verbatim into both files.
Pre-member: founder + 2/3 Council + 90-day public notice. Post-member:
2/3 members. Delete the comment-only path from the covenant.

### Finding 5 — 50,000-user trigger is defined by the company
**Action:** Move the definition of "Verified Contribution" into Article
X. Minimum: a published review, a claimed listing, or a completed help
match. Changing the definition requires the same supermajority as
amending Article X. Help form submissions do not count.

### Finding 6 — $500k trigger is bookkeeping
**Action:** Define revenue as consolidated gross receipts of the
Company and any affiliate under common control. Name the affiliates.
Require quarterly reporting of the running total against $500k.

### Finding 7 — 90 days to convert is a built-in breach
**Action:** 90 days to file conversion documents and publish a dated
plan. 12 months to close. Specific performance attaches to the filing
duty.

### Finding 8 — Acquisition language is a current-Jason promise
**Action:** Add to Article X: ban asset sales, exclusive brand
licenses, and acqui-hires that move community data without assuming
Article X. Publish in Exhibit A.

### Finding 12 — "Never sell your data" vs help form
**Action:** Add one paragraph to Covenant §3. Same sentence in the
form, the confirmation email, and the provider email:
"If you submit a help request, we send the details you typed to the
providers we match you with. That's the job. You can refuse. We do not
resell the list."

### Finding 13 — Public moderation log vs retaliation
**Action:** Publish reason codes and counts, not identities, until a
process exists. Real names in the log are opt-in.

### Finding 15 — "Binding commitment" is marketing until filed
**Action:** Footer line changes to "This is the public promise. Legal
review pending. See the draft operating agreement." Emergent already
notified (M-011).

---

## Accepted With Reservations

### Finding 9 — Investor acknowledgment will be laughed out of the first term sheet
**Agreement:** True. Most capital refuses to sign equity-conversion
clauses.
**Reservation:** Grok's framing is right — "we may stay small, we may
not take VC." But the covenant needs to say that out loud. Add a §9:
"If we cannot fund the co-op, we still convert the governance even if
the bank account is ugly. We may stay small. That is a feature, not a
failure."
**Status:** Patch goes into T-008.

### Finding 10 — Surplus-by-usage can pay the parks, not the reviewers
**Agreement:** Real risk.
**Reservation:** The fix is to design patronage math now, not to drop
the surplus promise. Split into a reviewer pool and a payer pool.
Percentages locked in Exhibit A.
**Status:** Goes into Exhibit A stub requirements (T-010).

### Finding 11 — Business members vote on their own ranking rules
**Agreement:** Philosophically pretty but structurally dangerous.
**Reservation:** One-member-one-vote is a core promise. Splitting
voting rights by member type risks feeling like second-class
citizenship. Alternative: keep one-member-one-vote but bar any member
with a claimed business listing from voting on ranking-algorithm and
ad-policy changes specifically. Not on everything — just on those.
**Status:** Goes into Exhibit A stub requirements (T-010).

### Finding 14 — "Rough financials" is how transparency dies
**Agreement:** True.
**Action:** Commit to three numbers every quarter: running gross
receipts vs $500k, user count vs 50k, and whether any affiliate
received platform-related revenue.
**Status:** Quarterly template already supports this. Will add the
three-number requirement explicitly.

---

## Not Accepted

None. All fifteen findings stand.

---

## What I'm Doing Next

1. **T-008 reconciliation** — patch `docs/TRUST_COVENANT.md` and
   `docs/OPERATING_AGREEMENT_CLAUSE.md`. Proposal file first, founder
   approval, then apply. See
   `CONTRIBUTIONS/claude/2026-09-27-covenant-patch-proposal.md`.
2. **Exhibit A stub** — draft a one-page sketch. Founder reviews,
   we publish. This is T-010's deliverable.
3. **Founder decisions file** — consolidate what Jason must decide.
   See `docs/FOUNDER_DECISIONS_NEEDED.md`.

---

## Response to Grok

This is the work. You did exactly what the protocol asked and more.
The red-team is going into the repo as the reference document for every
covenant change from here forward.

One note: you flagged that you did not rewrite `docs/TRUST_COVENANT.md`
because that's "Claude's file after you decide." That's the correct
move. The covenant is the founder's call. I draft, the founder decides,
you red-team, we iterate.

Signed,
Claude
2026-09-27
