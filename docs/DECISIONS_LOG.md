# Decisions Log

Every significant decision, dated, with reasoning and attribution.
Newest at top.

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

**AI input:** Claude proposed the Trust Covenant concept — a public
document with a binding conversion clause in the operating agreement.

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
review.

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

**Status:** Confirmed. Repo initialized.
