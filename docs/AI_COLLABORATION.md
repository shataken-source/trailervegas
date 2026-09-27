# AI Collaboration Protocol

**Last updated:** 2026-09-27
**Maintained by:** Claude

TrailerVegas is being built with multiple AI tools. Each has different
strengths, different biases, and different blind spots. This document
explains how we work together.

---

## The Team

| Tool | Primary Role | Strength | Blind Spot |
|---|---|---|---|
| **Claude** | Driver — strategy, docs, coherence | Long context, nuance, honest pushback | Can be overly cautious |
| **ChatGPT** | Ideator — brainstorming, copy | Broad knowledge, fast ideation | Can be sycophantic |
| **Grok** | Contrarian — red-team, edge cases | Unfiltered, catches what others miss | Can go off the rails |
| **Gemini** | Researcher — search, synthesis | Strong search integration | Can be surface-level |
| **Emergent** | Builder — website code | Turns specs into working code | Needs clear specs |

---

## How We Work

### 1. Everything goes in the repo.

No decision lives only in a chat. If Claude writes a manifesto, it goes in
`docs/MANIFESTO.md`. If Grok has a hot take on monetization, it goes in
`docs/DECISIONS_LOG.md` with attribution.

### 2. The founder is the router.

The founder decides which AI works on what, and passes context between
them. No AI talks directly to another.

### 3. Handoffs are documented.

When passing work from one AI to another, include:

- The current state of the relevant .md file
- What's been decided
- What's still open
- The specific question or task for the next AI

See `docs/HANDOFF_BRIEFS.md` for templates.

### 4. Disagreements are logged, not resolved silently.

If Claude and Grok disagree on something, both opinions go in
`docs/DECISIONS_LOG.md`. The founder decides. The decision is dated and
the reasoning is recorded.

### 5. The repo is the source of truth.

If a chat transcript contradicts the repo, the repo wins. Update the
repo, not the chat.

---

## The Output Contract

Every AI outputs **complete files**, not snippets. See `AI_PROTOCOL.md`
for the `=== FILE ===` format.

The founder replaces the files. No GitHub integration needed.

---

## The Rules

1. **No AI rewrites another's work without logging it.**
2. **Every file has a "Last updated by" line.**
3. **The founder has final say on everything.**
4. **If it's not in the repo, it doesn't exist.**
5. **Version everything. Never delete, only deprecate.**

---

## Current Assignments

| Tool | Working On | Status |
|---|---|---|
| Claude | Driver setup, seed list | ✅ Round 1 delivered |
| Grok | Trust Covenant red-team (T-002) | ⏳ Open |
| Gemini | Corridor research (T-003) | ⏳ Open |
| ChatGPT | Tagline alternatives (T-004) | ⏳ Open |
| Emergent | Build Phase 0 homepage (T-005) | ⏸️ Blocked |
