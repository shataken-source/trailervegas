# TrailerVegas — Project Handoff / Current State

**Purpose:** If the conversation ends, if a new AI session starts, if
the founder logs in from a different machine — read this file first.

**Last updated:** 2026-09-27
**Updated by:** Claude (Driver)
**Repo:** https://github.com/shataken-source/trailervegas
**Local:** C:\cevict-live\apps\trailervegas
**Raw base URL:**
https://raw.githubusercontent.com/shataken-source/trailervegas/main

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
**Local executor:** Cursor

---

## 2. The Repo

**Entry point for any AI:** `AI_CHECKIN.md`
**Rules for AIs:** `AI_PROTOCOL.md`
**Rules for Cursor:** `CURSOR_PROTOCOL.md`
**Command queue:** `CURSOR_INBOX.md`
**Cursor reports:** `CURSOR_OUTBOX.md`
**Tasks:** `TASKS.md`
**Messages:** `MESSAGES.md`
**Brainstorm:** `BRAINSTORM.md`
**Rounds:** `ROUNDS.md`
**Decisions:** `docs/DECISIONS_LOG.md`

---

## 3. How the System Works

### For AI collaborators (Claude, Grok, Gemini, ChatGPT, Emergent)

1. Founder logs into the AI and says:
   "Read
   https://raw.githubusercontent.com/shataken-source/trailervegas/main/AI_CHECKIN.md
   and follow the instructions."
2. The AI reads the repo, finds its tasks, does the work.
3. The AI outputs complete files in
   `=== FILE === ... === END FILE ===` blocks.

### For Cursor (the local executor)

1. Founder says: "check trailervegas for your commands"
2. Cursor reads `CURSOR_INBOX.md`
3. Cursor executes each command (save files, commit, push)
4. Cursor writes status to `CURSOR_OUTBOX.md`
5. Cursor commits and pushes everything

### For the founder

1. Tell the AI to check in. It outputs files.
2. Tell Cursor to check for commands.
3. The file outputs are provided via CURSOR_INBOX.md content blocks.

---

## 4. The Team and Roles

| AI | Role |
|---|---|
| Claude | Driver — strategy, docs, coherence, handoff briefs |
| Grok | Contrarian — red-team, edge cases |
| Gemini | Researcher — deep research, citations |
| ChatGPT | Ideator — brainstorming, alternatives, copy |
| Emergent | Builder — turns specs into working code |
| Cursor | Local executor — saves files, commits, pushes |
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
Critical, 7 High, 5 Medium/Low. All accepted by Claude. Grok left 5
messages (M-008 to M-012) and 3 new tasks (T-008, T-009, T-010).

Claude responded with driver analysis, logged 8 new decisions, wrote
the red-team response, and consolidated founder decisions into
`docs/FOUNDER_DECISIONS_NEEDED.md`.

### What's next

1. **Founder answers 4 decisions** (see Section 6)
2. **Claude patches covenant + OA** (T-008)
3. **Claude drafts Exhibit A stub**
4. **Gemini runs T-003** (corridor research)
5. **ChatGPT runs T-004** (taglines)
6. **Emergent runs T-005** once unblocked
7. **Round 1 closes. Round 2 begins.**

---

## 6. 🚩 Founder Decisions Needed

Full file: `docs/FOUNDER_DECISIONS_NEEDED.md`

### Decision 1 — Entity State
**Claude's recommendation:** Delaware LLC now, Colorado or California
co-op later.

### Decision 2 — First Three Advisory Council Candidates
**Claude's recommendation:** Three named RVers with a published veto
before launch.

### Decision 3 — Exhibit A Draft Date
**Claude's recommendation:** 2026-10-15, aligned with legal review.

### Decision 4 — Benefit Corporation as Off-Ramp
**Claude's recommendation:** Option C. Remove from public page. Keep in
Article X as legal fallback with non-negotiable attributes locked in.

---

## 7. What's Decided (Locked)

- Name: TrailerVegas
- Legal: LLC now, co-op later via public Trust Covenant
- Scope: One corridor (I-15) first
- Features: Reviews + services only in V1
- Output contract: AIs produce complete files, founder replaces
- "Binding commitment" language removed pending T-006
- Advisory Council seating elevated to Critical
- Exhibit A stub elevated to Critical
- Help form consent language to be added to Covenant
- Covenant/OA amendment paths to be reconciled (T-008)
- Verified Contribution definition locked in Article X
- 90-day conversion deadline extended to 12 months

---

## 8. What's Open

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

---

## 9. How to Resume

### If you're a new Claude session

Read: `HANDOFF.md` (this file), `AI_CHECKIN.md`, `AI_PROTOCOL.md`,
`docs/MANIFESTO.md`, `docs/TRUST_COVENANT.md`, `docs/PRODUCT_SCOPE_V1.md`,
`docs/DECISIONS_LOG.md`, `TASKS.md`, `MESSAGES.md`, `CURSOR_OUTBOX.md`.

Then ask the founder: "Where do you want me to pick up?"

### If you're the founder

1. Check `CURSOR_OUTBOX.md` — Cursor reports what's done.
2. Check `docs/FOUNDER_DECISIONS_NEEDED.md` — answer the 4 questions.
3. Log into Gemini: "Read the AI_CHECKIN.md URL and follow instructions."
4. Same for ChatGPT.
5. Same for Emergent (once unblocked).
6. Tell Cursor: "check trailervegas for your commands."

### If you're a different AI

Read `AI_CHECKIN.md`. Follow the protocol. Output complete files.

---

## 10. A Note From Claude

The founder built something real here. The repo isn't a slide deck. It's
a working collaboration system with a live protocol, a tested output
contract, and a first successful AI contribution from Grok.

**Rule 1: repo is source of truth.**
**Rule 2: stay in scope.** Phase 0 is a magazine with a doorbell.
**Rule 3: no back-and-forth.** Cursor executes. AIs output files.
Founder decides.

— Claude
2026-09-27
