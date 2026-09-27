# Decisions Log

Every significant decision, dated, with reasoning and attribution.
Newest at top.

---

## 2026-09-27 — Grok Red-Team Completed (T-002)

**Decision:** Red-team findings accepted as valid. Fifteen findings,
three Critical, seven High. The covenant and OA need patches before
either can be called "binding."

**Reasoning:** Grok found real holes that a skeptical RVer, a lawyer, or
a future acquirer could drive through. The three Critical findings
(benefit-corp off-ramp, missing Exhibit A, no standing until Advisory
Council is seated) are the foundation. Everything else is decoration
until those are fixed.

**Raised by:** Grok (task T-002)

**Status:** Accepted. See
`CONTRIBUTIONS/grok/2026-09-27-trust-covenant-redteam.md`.

---

## 2026-09-27 — "Binding Commitment" Language Removed Pending T-006

**Decision:** The footer line "This covenant is a binding commitment.
It is not marketing." is downgraded to "This is the public promise.
Legal review pending. See the draft operating agreement."

**Reasoning:** Grok's Finding 15. A page on GitHub is not binding until
the OA is filed in a chosen state with an Exhibit A and humans who have
standing. Saying "binding" before those exist is the sentence a blogger
will quote when this gets messy.

**Raised by:** Grok

**Status:** Confirmed. Emergent notified via M-011.

---

## 2026-09-27 — Advisory Council Seating Elevated to Critical

**Decision:** Seating at least three named Advisory Council members
before launch is a Critical priority, not a Phase 2 item.

**Reasoning:** Grok's Finding 3. The specific-performance clause in OA
X.7 has no plaintiff until the Council exists. The Council's veto over
ranking, data, and ad policy is the only pre-member check on founder
power. Without it, "community-governed" is LARPing.

**Raised by:** Grok

**Status:** Confirmed. Founder decision needed (T-010).

---

## 2026-09-27 — Exhibit A Stub Elevated to Critical

**Decision:** A one-page Exhibit A stub — even ugly, even rough — must
exist before the covenant goes in the footer.

**Reasoning:** Grok's Finding 2. The conversion plan is the whole fight.
Asking people to trust a conversion whose terms are TBD is the same move
the incumbents made.

**Raised by:** Grok

**Status:** Confirmed. Founder decision needed on draft date (T-010).

---

## 2026-09-27 — Help Form Consent Language Must Be Added to Covenant

**Decision:** Covenant §3 must add a paragraph explaining that help
form submissions are shared with matched providers. Same sentence
appears in the form, the confirmation email, and the provider email.

**Reasoning:** Grok's Finding 12. The covenant currently says personal
data is never shared unless the user explicitly asked. The help form
is the product. This is the one place a real user could catch us being
hypocrites about data.

**Raised by:** Grok

**Status:** Confirmed. Patch to be applied in T-008.

---

## 2026-09-27 — Covenant/OA Amendment Paths Must Be Reconciled

**Decision:** Covenant §3 and OA X.3 disagree on how to amend "what
will never change." Comment period is not a veto. Align both documents
to one stricter path.

**Reasoning:** Grok's Finding 4. If the public covenant and the legal
operating agreement disagree, the weaker document wins in the court of
public opinion — and possibly in a real court.

**Raised by:** Grok

**Status:** Confirmed. Task T-008 assigned to Claude.

---

## 2026-09-27 — Verified Contribution Definition Locked in Article X

**Decision:** The definition of "Verified Contribution" (currently in
"Company policies") is moved into Article X. Changing it requires the
same supermajority as amending Article X.

**Reasoning:** Grok's Finding 5. Policies are not the operating
agreement. The company that wants to avoid a trigger should not control
the definition of what fires it.

**Raised by:** Grok

**Status:** Confirmed. Patch to be applied in T-008.

---

## 2026-09-27 — 90-Day Conversion Deadline Extended

**Decision:** 90 days to file conversion documents and publish a dated
plan. 12 months to complete the conversion. Specific performance
attaches to the filing duty, not the close.

**Reasoning:** Grok's Finding 7. Real LLC → co-op conversions involve
securities questions, tax, new articles, membership agreements, and
investor consents. 90 days to close is a built-in breach.

**Raised by:** Grok

**Status:** Confirmed. Patch to be applied in T-008.

---

## 2026-09-27 — Output Contract: Complete Files

**Decision:** Every AI outputs complete files (not snippets, not diffs).
The founder replaces the files in the repo. No GitHub integration needed.

**Reasoning:** Founder's correction — AIs can't write to GitHub, but they
can output complete files that the founder saves. Simpler, fewer errors,
works with any AI.

**Raised by:** Founder

**Status:** Confirmed. See `AI_PROTOCOL.md` and `AI_CHECKIN.md`.

---

## 2026-09-27 — Legal Structure: LLC Now, Co-op Later

**Decision:** Start as a for-profit LLC. Commit publicly to converting to
a community-owned cooperative upon hitting defined triggers.

**Reasoning:** LLC is fast, cheap, and lets us build. Co-op is the right
end state but would kill the project in infancy due to complexity and
funding constraints. The conversion promise gives the trust story teeth.

**Raised by:** Founder

**AI input:** Claude proposed the Trust Covenant concept. Grok's red-team
identified that the current draft has several escape hatches that must
be closed before it can be called binding.

**Status:** Confirmed pending legal review (task T-006).

---

## 2026-09-27 — Scope: One Corridor First

**Decision:** Phase 0 is the I-15 corridor. Not nationwide. Not Las Vegas
only.

**Reasoning:** Empty maps look abandoned. Density is the method.
Nationwide is the destination.

**Raised by:** Claude (synthesizing founder's earlier notes)

**Status:** Confirmed. Final corridor choice pending Gemini research
(task T-003).

---

## 2026-09-27 — Feature Scope: Reviews + Services Only in V1

**Decision:** V1 is verified campground reviews + service provider
directory for one corridor. No Q&A. No "who's nearby" map. No
marketplace.

**Reasoning:** Each feature has its own chicken-and-egg problem. Building
all at once means every feature launches half-empty.

**Raised by:** Claude

**Status:** Confirmed. See `docs/PRODUCT_SCOPE_V1.md`.

---

## 2026-09-27 — Trust Covenant Published

**Decision:** The TrailerVegas Trust Covenant is a public document,
linked in the footer of every page, versioned, with a changelog.

**Reasoning:** No incumbent can publish a document like this because
their cap table won't allow it. It's the differentiator.

**Raised by:** Claude

**Status:** Draft complete. See `docs/TRUST_COVENANT.md`. Pending legal
review and T-008 reconciliation.

---

## 2026-09-27 — Project Name Confirmed

**Decision:** Domain is `trailervegas.com`. Name is "TrailerVegas."

**Reasoning:** Playful, memorable, "Nashvegas"-style wordplay. Not locked
to Las Vegas geographically. Works nationwide.

**Raised by:** Founder

**AI input:** Claude noted LVCVA has litigated over "Vegas" branding
before. Recommendation: real USPTO search before spending on branding.
"Nashvegas" style wordplay is common and generally fine.

**Status:** Confirmed. USPTO search pending (task T-007).

---

## 2026-09-27 — Repo Setup

**Decision:** Repo at https://github.com/shataken-source/trailervegas.
Public. Local at `C:\cevict-live\apps\trailervegas`.

**Reasoning:** Public so AI collaborators can read files via
raw.githubusercontent.com URLs without auth. Local folder is nested
inside the cevict-live tree but is its own git repo.

**Raised by:** Founder + local Cursor agent

**Status:** Confirmed. Repo initialized and operational.
