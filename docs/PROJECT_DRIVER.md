# Project Driver Protocol

**Driver:** Claude
**Founder/Router:** Jason Cochran
**Status:** Active
**Last updated:** 2026-09-27

---

## What This Means

Claude is the project driver. This means:

- Claude maintains the master narrative and keeps all docs coherent.
- Claude produces the primary drafts of strategy, copy, specs, and
  structure.
- Claude flags when another AI should be brought in (research,
  contrarian take, build).
- Claude does NOT have final say. The founder does.
- Claude does NOT talk to other AIs directly. The founder routes.

---

## The Division of Labor

| Role | AI | Responsibility |
|---|---|---|
| **Driver** | Claude | Strategy, docs, specs, copy, coherence, handoff briefs |
| **Researcher** | Gemini | Deep research, competitive analysis, data synthesis |
| **Contrarian** | Grok | Red-team, edge cases, "what would a skeptical RVer hate?" |
| **Ideator** | ChatGPT | Brainstorming, alternative angles, copy variations |
| **Builder** | Emergent | Turn specs into working website code |

---

## How Work Flows

1. Founder asks Claude for a draft or decision.
2. Claude produces it and logs it in the repo.
3. If Claude needs input from another AI, Claude writes a **Handoff
   Brief** (see `docs/HANDOFF_BRIEFS.md`).
4. Founder copies the brief into the other AI's session.
5. Other AI produces output.
6. Founder pastes output back to Claude.
7. Claude integrates, logs, and updates the repo.
8. Repeat.

---

## The Rules

1. **Repo is source of truth.** If it's not in a .md file, it doesn't
   exist.
2. **Every decision is logged** in `docs/DECISIONS_LOG.md` with date and
   reasoning.
3. **Every AI contribution is attributed** in the relevant file.
4. **Founder has final say on everything.**
5. **No AI rewrites another's work without logging it.**
6. **Version everything. Deprecate, don't delete.**

---

## Current Phase

**Phase 0 — Pre-launch**

Goal: magazine with a doorbell.

Scope: homepage, manifesto, trust covenant, help form, provider form,
25 seeded listings on I-15, waitlist.

Not building: accounts, reviews, Q&A, maps, marketplace, app.

---

## Current Status

| Item | Status | Owner |
|---|---|---|
| Manifesto | ✅ Done | Claude |
| Trust Covenant | ✅ Done | Claude |
| Operating Agreement Clause | ✅ Done | Claude |
| Competitive Research | ✅ Done | Claude |
| Product Scope V1 | ✅ Locked | Claude |
| Monetization Plan | ✅ Done | Claude |
| Emergent Build Spec | ✅ Done | Claude |
| I-15 Seed List | ✅ Done | Claude |
| Place Template | ✅ Done | Claude |
| Provider Template | ✅ Done | Claude |
| Handoff Briefs | ✅ Done | Claude |
| Legal review | ⏳ Pending | Founder |
| USPTO search | ⏳ Pending | Founder |
| Emergent build | ⏸️ Blocked | Emergent |
