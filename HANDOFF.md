# TrailerVegas — Project Handoff / Current State

**Purpose:** If the conversation ends, if a new AI session starts, if
the founder logs in from a different machine — read this file first.
It captures the current state, open decisions, and next steps.

**Last updated:** 2026-09-27
**Updated by:** Claude (Driver)
**Repo:** https://github.com/shataken-source/trailervegas
**Local:** C:\cevict-live\apps\trailervegas
**Raw base URL:** https://raw.githubusercontent.com/shataken-source/trailervegas/main

---

## 1. What This Project Is

TrailerVegas is a nationwide, community-driven platform for RVers.
Parks, boondocking, mobile repair, towing, storage, honest reviews. Built
because every incumbent platform either sold out, shut down, or started
charging for things that used to be free.

The name is "Nashvegas"-style wordplay. Not locked to Las Vegas. Works
nationwide.

**Phase 0 scope:** A magazine with a doorbell. Homepage, manifesto, trust
covenant, help form, provider form, 25 seeded listings on the I-15
corridor, waitlist. Nothing more.

**Founder:** Jason Cochran
**Driver:** Claude
**Collaborators:** Grok, Gemini, ChatGPT, Emergent
**Router:** Jason (founder is the message bus between AIs)

---

## 2. The Repo

Repo is complete and operational. Commits so far:

- `b1dc749` — Initial TrailerVegas setup — Phase 0
- `4852cf6` — Add root files: README, protocol, tasks, and gitignore
- `863ddf6` — Add manifesto, trust covenant, and Phase 0 docs
- `fbab879` — Add I-15 seed list, contribution guide, and roundtable automation
- `9a6e51d` — Open Round 1 and post founder check-in

**Entry point for any AI:** `AI_CHECKIN.md`
**Rules:** `AI_PROTOCOL.md`
**Tasks:** `TASKS.md`
**Messages:** `MESSAGES.md`
**Brainstorm:** `BRAINSTORM.md`
**Rounds:** `ROUNDS.md`
**Decisions:** `docs/DECISIONS_LOG.md`

---

## 3. How the System Works

1. **Founder logs into an AI** and says:
   "Read
   https://raw.githubusercontent.com/shataken-source/trailervegas/main/AI_CHECKIN.md
   and follow the instructions."
2. **The AI reads everything**, finds its tasks, does the work.
3. **The AI outputs complete files** in `=== FILE === ... === END FILE ===`
   blocks.
4. **The founder saves each file** to the exact path (via local Cursor
   agent), commits, pushes.
5. **Next AI reads the updated state** and continues.

No GitHub integration needed. AIs output complete files. Founder
replaces. Simple.

---

## 4. The Team and Roles

| AI | Role |
|---|---|
| Claude | Driver — strategy, docs, coherence, handoff briefs |
| Grok | Contrarian — red-team, edge cases |
| Gemini | Researcher — deep research, citations |
| ChatGPT | Ideator — brainstorming, alternatives, copy |
| Emergent | Builder — turns specs into working code |
| Jason | Founder — router, final say on everything |

---

## 5. Where We Are Right Now

**Current phase:** Phase 0 (pre-launch)
**Current round:** Round 1
**Round 1 status:** In progress

### Round 1 participants

| AI | Task | Status |
|---|---|---|
| Claude | Setup, docs, seed list (T-001) | ✅ Done |
| Grok | Trust Covenant red-team (T-002) | ✅ Done |
| Gemini | Corridor research (T-003) | ⏳ Open |
| ChatGPT | Tagline alternatives (T-004) | ⏳ Open |
| Emergent | Build Phase 0 homepage (T-005) | ⏸️ Blocked |

### What just happened

Grok completed T-002 (Trust Covenant red-team). Found 15 findings: 3
Critical, 7 High, 5 Medium/Low. All accepted by Claude. Grok also left
5 messages (M-008 to M-012) and 3 new tasks (T-008, T-009, T-010).

Claude responded with driver analysis, logged 8 new decisions to
`docs/DECISIONS_LOG.md`, wrote `CONTRIBUTIONS/claude/2026-09-27-redteam-response.md`,
and consolidated founder decisions into `docs/FOUNDER_DECISIONS_NEEDED.md`.

### What's next

1. **Founder answers 4 decisions** (see Section 6 below)
2. **Claude patches covenant + OA** (T-008)
3. **Claude drafts Exhibit A stub**
4. **Gemini runs T-003** (corridor research) — same check-in command
5. **ChatGPT runs T-004** (taglines) — same check-in command
6. **Emergent runs T-005** (homepage) once unblocked
7. **Round 1 closes. Round 2 begins.**

---

## 6. 🚩 Founder Decisions Needed

These four are in `docs/FOUNDER_DECISIONS_NEEDED.md`. They block
T-006, T-008, and T-010.

### Decision 1 — Entity State
Which state do we form the LLC in?
**Claude's recommendation:** Delaware LLC now, Colorado or California
co-op later. Confirm with a co-op lawyer who has done this conversion.

### Decision 2 — First Three Advisory Council Candidates
Who sits on the Council?
**Claude's recommendation:** Do not wait. Three named RVers with a
published veto before launch. Founder nominates 5-7, 14-day public
comment window, confirm 3-5.

### Decision 3 — Exhibit A Draft Date
When does the one-page conversion plan stub go public?
**Claude's recommendation:** 2026-10-15, aligned with legal review.

### Decision 4 — Benefit Corporation as Off-Ramp
Does "or a member-owned benefit corporation" stay in the public
covenant?
**Claude's recommendation:** Option C. Remove from public page. Keep in
Article X as legal fallback with non-negotiable attributes attached
(one-member-one-vote, no investor veto, mission lock, capped founder
interest). Public story stays clean, legal structure has locked
fallback.

---

## 7. What's Decided (Locked)

These are in `docs/DECISIONS_LOG.md` with full reasoning:

- Name: TrailerVegas
- Legal: LLC now, co-op later via public Trust Covenant
- Scope: One corridor (I-15) first
- Features: Reviews + services only in V1
- Output contract: AIs produce complete files, founder replaces
- "Binding commitment" language removed from footer pending T-006
- Advisory Council seating elevated to Critical (T-010)
- Exhibit A stub elevated to Critical (T-010)
- Help form consent language must be added to Covenant
- Covenant/OA amendment paths must be reconciled (T-008)
- Verified Contribution definition locked in Article X
- 90-day conversion deadline extended to 12 months

---

## 8. What's Open

### Tasks in `TASKS.md`

| ID | Task | Assigned to | Priority | Status |
|---|---|---|---|---|
| T-003 | Corridor research | Gemini | High | Open |
| T-004 | Tagline alternatives | ChatGPT | Medium | Open |
| T-005 | Build homepage | Emergent | Critical | Blocked |
| T-006 | Legal review | Founder (lawyer) | Critical | Open |
| T-007 | USPTO trademark search | Founder | High | Open |
| T-008 | Reconcile covenant + OA | Claude | Critical | Open |
| T-009 | Rewrite Covenant §6 lead-fee copy | ChatGPT | Medium | Open |
| T-010 | Founder decisions | Founder | Critical | Open |

### Messages in `MESSAGES.md`

Open: M-002 (Claude→Gemini), M-003 (Claude→ChatGPT), M-004
(Claude→Emergent), M-010 (Grok→ChatGPT), M-011 (Grok→Emergent), M-013
(Claude→Grok), M-014 (Claude→Founder)

---

## 9. Key Files to Read If You're New

**Essential orientation:**
- `AI_CHECKIN.md` — entry point for any AI
- `AI_PROTOCOL.md` — rules of engagement
- `docs/MANIFESTO.md` — the mission
- `docs/TRUST_COVENANT.md` — the commitments
- `docs/PRODUCT_SCOPE_V1.md` — locked scope

**Current state:**
- `TASKS.md` — what's assigned to whom
- `MESSAGES.md` — messages between AIs
- `docs/DECISIONS_LOG.md` — every decision, dated
- `docs/FOUNDER_DECISIONS_NEEDED.md` — 4 decisions waiting

**Driver context:**
- `docs/PROJECT_DRIVER.md` — how Claude drives
- `docs/HANDOFF_BRIEFS.md` — templates for routing between AIs
- `CONTRIBUTIONS/claude/2026-09-27-redteam-response.md` — driver
  response to Grok
- `CONTRIBUTIONS/grok/2026-09-27-trust-covenant-redteam.md` — the
  red-team itself

**Seed data:**
- `research/I15_SEED_LIST.md` — 25 parks + 10 providers

**Specs for the build:**
- `docs/EMERGENT_BUILD_SPEC.md` — full build spec
- `docs/TEMPLATE_PLACE.md` — place page layout
- `docs/TEMPLATE_PROVIDER.md` — provider page layout

---

## 10. What I (Claude) Was Working On When We Paused

Immediate next driver tasks, in order:

1. **Wait for founder answers to the 4 decisions** (Section 6)
2. **Draft covenant patch proposal** — a file showing exactly what
   changes to `docs/TRUST_COVENANT.md` and
   `docs/OPERATING_AGREEMENT_CLAUSE.md` before applying. Founder
   approves, then I output the complete updated files.
3. **Draft `docs/EXHIBIT_A_STUB.md`** — one-page conversion plan
   sketch. Ugly and real. Founder reviews.
4. **Respond to Gemini's corridor research** when it lands.
5. **Respond to ChatGPT's taglines** when they land.
6. **Close Round 1** and open Round 2 with a new set of topics.

---

## 11. How to Resume

### If you're a new Claude session reading this:

You are the project driver. Read:
1. `HANDOFF.md` (this file)
2. `AI_CHECKIN.md`
3. `AI_PROTOCOL.md`
4. `docs/MANIFESTO.md`
5. `docs/TRUST_COVENANT.md`
6. `docs/PRODUCT_SCOPE_V1.md`
7. `docs/DECISIONS_LOG.md`
8. `TASKS.md`
9. `MESSAGES.md`

Then ask the founder: "Where do you want me to pick up?"

Likely answer: "Draft the covenant patch proposal and the Exhibit A
stub, pending the 4 decisions."

### If you're the founder:

1. Check `docs/FOUNDER_DECISIONS_NEEDED.md`. Answer the four questions
   or say "wait."
2. Log into Gemini and paste:
   "Read
   https://raw.githubusercontent.com/shataken-source/trailervegas/main/AI_CHECKIN.md
   and follow the instructions."
3. Same for ChatGPT.
4. Same for Emergent (once hosting/seed list is confirmed).
5. Paste each AI's output into your local Cursor agent to save files.
6. When all Round 1 tasks are done, we close Round 1 and open Round 2.

### If you're a different AI:

Read `AI_CHECKIN.md` first. It's the entry point. Follow the protocol.
Output complete files. Don't improvise.

---

## 12. A Note From Claude to Whatever Comes Next

The founder built something real here. The repo isn't a slide deck. It's
a working collaboration system with a live protocol, a tested output
contract, and a first successful AI contribution from Grok.

Don't break it by adding complexity. Don't add features to Phase 0.
Don't rewrite what's already locked. Do the next concrete thing.

The single most important rule: **repo is source of truth.** If it's
not in a `.md` file, it doesn't exist. If a chat says one thing and the
repo says another, the repo wins.

The second most important rule: **stay in scope.** Phase 0 is a
magazine with a doorbell. Every "wouldn't it be cool if" is a Phase 2
conversation.

We're at the beginning. Round 1 isn't closed. Grok's red-team just
landed. The founder needs to make four decisions. Then we patch the
covenant, draft the Exhibit A, and keep going.

If you're reading this to take over: you've got this. The system works.
Just don't break it.

— Claude
2026-09-27
