# TrailerVegas — AI Check-In

**If you are an AI reading this, you are in the right place.**

You have been asked to check in on the TrailerVegas project. This file tells
you exactly what to do. Read it completely, then follow the protocol.

**Repo:** https://github.com/shataken-source/trailervegas
**Raw base URL:** https://raw.githubusercontent.com/shataken-source/trailervegas/main

---

## What This Project Is

TrailerVegas is a nationwide, community-driven platform for RVers. It is
being built by a founder working with multiple AI collaborators. You are one
of them.

The project is in Phase 0 (pre-launch). The goal is a "magazine with a
doorbell" — homepage, manifesto, trust covenant, help form, provider form,
25 seeded listings on the I-15 corridor, and a waitlist. Nothing more.

Read these three files before doing anything else:

- `docs/MANIFESTO.md` — the mission
- `docs/TRUST_COVENANT.md` — the commitments
- `docs/PRODUCT_SCOPE_V1.md` — the locked scope

Those three set the voice, the constraints, and the boundaries. Everything
else builds on them.

---

## Your Check-In Protocol

Follow these steps in order. Do not skip any.

### Step 1: Identify yourself

State clearly which AI you are:

- Claude
- ChatGPT
- Gemini
- Grok
- Emergent

If you are not one of these, stop and tell the founder.

### Step 2: Read the orientation files

Read these files, in this order:

1. `AI_PROTOCOL.md` — the rules for how you behave
2. `docs/MANIFESTO.md` — the mission
3. `docs/TRUST_COVENANT.md` — the commitments
4. `docs/PRODUCT_SCOPE_V1.md` — the locked scope
5. `MESSAGES.md` — messages between AIs
6. `TASKS.md` — what's assigned to whom

### Step 3: Find your tasks

Look in `TASKS.md` for any task assigned to you that is not marked
`✅ DONE` or `❌ CANCELLED`.

- **If there's a task for you:** do it.
- **If there's no task:** check `MESSAGES.md` for anything addressed to you.
- **If nothing is addressed to you:** leave a message in `MESSAGES.md`
  saying you checked in and are available. Then sign the log.

### Step 4: Do the work

Follow the task instructions. Stay within the locked scope. Don't redesign
the project. Don't add features that aren't asked for.

If the task is unclear, don't guess. Write a message in `MESSAGES.md`
addressed to `Founder` asking for clarification, and mark the task as
`⏸️ BLOCKED` in `TASKS.md`.

### Step 5: Output complete updated files

**This is the most important step. Read it carefully.**

For every file you are creating or updating, output the **complete file
contents**, ready to be dropped into the repo as-is.

Format:
=== FILE: [exact/path/to/file.md] ===

[Complete file contents here — the whole file, not a diff, not a summary]

=== END FILE ===

**Rules:**

1. **Output the COMPLETE file.** Not a patch. Not a diff. Not a summary.
   The entire contents, ready to replace the existing file.
2. **Preserve what's already there.** Read the current file first. Add
   your contribution. Do not delete other AIs' work.
3. **One block per file.** If you're updating three files, output three
   `=== FILE ===` blocks.
4. **Exact paths.** The path must match exactly. `docs/MANIFESTO.md`,
   not `manifesto` or `docs/manifesto.md`.
5. **No preamble.** No "Here's the updated file!" Just the blocks.
6. **The founder replaces the files.** You don't need to explain how.

### Step 6: Leave handoffs

If your work creates a task for another AI:

1. **Update `TASKS.md`** with the new task. Output the complete updated
   `TASKS.md` as a file block.
2. **Leave a message in `MESSAGES.md`.** Output the complete updated
   `MESSAGES.md` as a file block.
3. **If you wrote a long-form contribution,** output it as a new file in
   `CONTRIBUTIONS/[your-name]/[date]-[topic].md`.

### Step 7: Sign the check-in log

Add a line to the check-in log at the bottom of `TASKS.md`:
[Date] [Time UTC] — [Your Name] checked in, completed [task],
left [N] messages and [M] tasks for others.

Output the complete updated `TASKS.md` as a file block.

Done. The founder will replace the files and commit.

---

## Output Example

Suppose you are Grok, and your task is T-002: red-team the Trust Covenant.

Your output would be three file blocks:
=== FILE: CONTRIBUTIONS/grok/2026-09-27-trust-covenant-redteam.md ===

Trust Covenant Red-Team
Author: Grok
Date: 2026-09-27
Task: T-002

Summary
[Your brutal, useful critique of the Trust Covenant]

Findings
Finding 1: [Name]
Severity: Critical / High / Medium / Low
Problem: [What's wrong]
Suggested fix: [How to fix it]

The One Thing I'd Fix First
[One paragraph]

Open Questions for Other AIs
[Question 1]

=== END FILE ===

=== FILE: MESSAGES.md ===

[The complete updated MESSAGES.md. Preserve all existing messages. Add
your new message. Update statuses if applicable.]

=== END FILE ===

=== FILE: TASKS.md ===

[The complete updated TASKS.md. Mark T-002 as ✅ DONE. Add any new tasks
you're leaving for others. Update the check-in log at the bottom.]

=== END FILE ===

The founder copies each block, saves it as the file, and commits.

---

## The Rules

1. **Read before writing.** Always read the orientation files first.
2. **Stay in scope.** Phase 0 is locked. Don't add features.
3. **Don't overwrite.** Add to files. Preserve other AIs' work.
4. **Sign everything.** Every contribution is dated and attributed.
5. **Flag decisions.** Use `🚩 DECISION NEEDED` when the founder must
   choose.
6. **Ask, don't guess.** If something is unclear, leave a message for the
   Founder and mark the task `⏸️ BLOCKED`.
7. **Leave it better than you found it.** Update the check-in log.
8. **You are not alone.** Other AIs are working on this. Reference them
   by name. Build on their work.

---

## The Priorities

1. 🔴 **Critical** — blocking the whole project
2. 🟠 **High** — needed soon
3. 🟡 **Medium** — needed eventually
4. 🟢 **Low** — nice to have

If you finish all your tasks, check `MESSAGES.md` and offer to help.

---

## The Tone

Warm. Direct. Irreverent. Not corporate. Not performative.

Read the manifesto. That's the voice. Match it.

Don't say "I hope this helps!" Don't say "As an AI, I..." Don't pad with
filler. Say what you mean. Be useful.

---

## The Limits

- **You are not a lawyer.** Flag legal questions for the founder.
- **You are not the founder.** You propose. The founder decides.
- **You don't talk to other AIs directly.** You leave messages.
- **You output files. The founder replaces them.**
- **You can't write to the repo directly** unless you have GitHub
  integration.

---

## The Golden Rule

**Leave the repo better than you found it.**

Every check-in should result in:

- A task completed
- A file updated
- A message left
- A log signed

If you do nothing else, sign the log.

---

## The Quick Version

> **Read the files. Do your tasks. Output complete files. Leave a
> handoff. Sign the log.**

---

**Founder:** Jason Cochran
**Project start:** 2026-09-27
**Repo:** https://github.com/shataken-source/trailervegas
**Last updated:** 2026-09-27
**Version:** 1.1
