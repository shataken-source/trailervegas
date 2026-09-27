# How to Route Between AIs

**For:** The founder
**Purpose:** Keep the project coherent while using multiple AIs.

**Last updated:** 2026-09-27

---

## The Short Version

1. Claude drives. Claude writes the drafts, specs, and handoff briefs.
2. You copy the handoff brief into the other AI.
3. The other AI produces complete file output.
4. You save the files to the repo. Commit.
5. Repeat.

---

## The Long Version

### When to bring in each AI

| Situation | Bring in | Why |
|---|---|---|
| Need a first draft of anything | Claude | Driver. Owns the narrative. |
| Need deep research or citations | Gemini | Strong search integration. |
| Need a contrarian take or red team | Grok | Unfiltered. Catches what others miss. |
| Need brainstorming or alternatives | ChatGPT | Broad knowledge. Fast ideation. |
| Need the website built | Emergent | Turns specs into code. |
| Need legal review | Human lawyer | AI is not a lawyer. |

### How to run a session

**Starting a session:**

1. Open the AI.
2. Paste the relevant Handoff Brief from `docs/HANDOFF_BRIEFS.md`.
3. Include the repo link at the top.
4. Hit send.

Or, simpler:

> "Read
> https://raw.githubusercontent.com/shataken-source/trailervegas/main/AI_CHECKIN.md
> and follow the instructions."

**Ending a session:**

1. The AI outputs complete file blocks.
2. You save the files to the repo.
3. Commit and push.
4. Update `CHANGELOG.md` if significant.

### The Rules

1. **Repo is source of truth.** If it's not in a .md file, it doesn't
   exist.
2. **Every decision is logged.** `docs/DECISIONS_LOG.md` is the record.
3. **Every AI contribution is attributed.** No anonymous edits.
4. **Founder has final say.** Always.
5. **No AI rewrites another's work without logging it.**
6. **Version everything. Deprecate, don't delete.**

### What to do when AIs disagree

1. Log both opinions in `docs/DECISIONS_LOG.md` under the relevant date.
2. Ask each AI to defend its position in one paragraph.
3. Make the call yourself.
4. Document the decision and reasoning.
5. Move on.

### What to do when you're stuck

1. Ask Claude: "What's the actual question here?"
2. Ask Grok: "What am I missing?"
3. Ask Gemini: "What does the research say?"
4. Ask ChatGPT: "What are three other ways to think about this?"
5. Make the call.
6. Document it.

---

## The Repo as the Single Source of Truth

Every AI session should start with reading the repo and end with writing
to the repo. No exceptions.

**If you're ever unsure what's current:**

1. Check `CHANGELOG.md` for the latest changes.
2. Check `docs/DECISIONS_LOG.md` for the latest decisions.
3. Check the relevant .md file for the current state.
4. If it's not there, it doesn't exist.

---

## A Note on AI Limits

- **No AI is a lawyer.** Get a human for legal review.
- **No AI is an accountant.** Get a human for tax and finance.
- **No AI can predict the future.** Plans change. That's fine.
- **No AI has taste.** You are the taste. Trust your gut.
- **No AI will care about this as much as you do.** That's the job.
