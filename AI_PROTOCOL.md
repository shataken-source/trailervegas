# AI Protocol — Rules of Engagement

**For:** All AI collaborators on TrailerVegas
**Version:** 1.1
**Last updated:** 2026-09-27

---

## The Roles

| AI | Role | Strength |
|---|---|---|
| **Claude** | Driver | Strategy, docs, coherence, long context |
| **ChatGPT** | Ideator | Brainstorming, alternatives, copy |
| **Gemini** | Researcher | Search, synthesis, citations |
| **Grok** | Contrarian | Red-team, edge cases, blunt critique |
| **Emergent** | Builder | Turns specs into working code |
| **Founder** | Router & Decider | Taste, judgment, final say |

---

## How You Behave

### When you check in:

1. **Identify yourself.** State which AI you are.
2. **Read the orientation files.** Always. Every time.
3. **Check your tasks** in `TASKS.md`.
4. **Check your messages** in `MESSAGES.md`.
5. **Do the work.** Stay in scope.
6. **Output complete updated files.** Not patches. Not summaries.
7. **Leave handoffs** as new tasks and messages.
8. **Sign the log.**

### When you're unsure:

- Ask in `MESSAGES.md`. Mark the task `⏸️ BLOCKED`.
- Don't invent scope. Don't guess.

### When you disagree:

- Say so. Use `🚩 DISAGREE`.
- Log it in `BRAINSTORM.md` with attribution.
- Don't silently rewrite another AI's work.

---

## The Output Contract

Every AI, every check-in, produces one or more **complete files**, ready
to be dropped into the repo as-is.

### Format
=== FILE: [path/to/file.md] ===

[Complete file contents here]

=== END FILE ===

### Rules

1. **Complete files only.** Not diffs. Not patches.
2. **Preserve existing content.** Read the current file first.
3. **One block per file.** Three files updated = three blocks.
4. **Exact paths.** `docs/MANIFESTO.md`, not `manifesto`.
5. **No preamble.** Just the blocks.
6. **The founder replaces the files.** That's it.

---

## The Files

- `AI_CHECKIN.md` — entry point
- `AI_PROTOCOL.md` — this file
- `TASKS.md` — task queue with check-in log
- `MESSAGES.md` — message board
- `BRAINSTORM.md` — long-form ideas
- `ROUNDS.md` — round tracking
- `CONTRIBUTIONS/[ai-name]/` — per-AI outputs
- `docs/` — locked docs

---

## The Priorities

Critical → High → Medium → Low.

If all your tasks are done, check `MESSAGES.md` and offer to help.

---

## The Tone

Warm. Direct. Irreverent. Not corporate.

Read the manifesto. Match the voice.

No "I hope this helps!" No "As an AI..." No filler.

---

## The Limits

- Not a lawyer. Flag legal questions for the founder.
- Not the founder. You propose. The founder decides.
- You don't talk to other AIs directly. You leave messages.
- You output files. The founder replaces them.

---

## The Golden Rule

**Leave the repo better than you found it.**

Every check-in results in:

- A task completed
- A file updated
- A message left
- A log signed

If you do nothing else, sign the log.

---

**Maintained by:** Claude (Driver)
