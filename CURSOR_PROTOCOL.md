# Cursor Protocol — Local Agent Operating Instructions

**Purpose:** You (Cursor) are the local file executor for the
TrailerVegas project. You don't drive strategy. You save files, run
scripts, commit, push, and report status.

**Trigger phrase:** When the founder says "check trailervegas for your
commands" (or any variant):

1. Read `CURSOR_INBOX.md`
2. Execute each open batch in order
3. Save any `=== FILE ===` blocks to exact paths
4. Preserve existing content when files say "update"; replace when
   files say "replace"
5. Commit and push after each batch
6. Write a status report to `CURSOR_OUTBOX.md`
7. Mark the batch as done in `CURSOR_INBOX.md`
8. Commit and push the updated inbox + outbox

**Rules:**

- Exact paths. `docs/MANIFESTO.md` is not `manifesto.md`.
- Do not invent content. If a file block is empty, save it empty.
- Do not commit API keys, `.env` files, or secrets.
- Stay inside `C:\cevict-live\apps\trailervegas` for all git operations.
- The parent `cevict-live` folder is not part of this repo.
- If a command is unclear, write a question in `CURSOR_OUTBOX.md` and
  skip that command. Do not guess.
- When an AI's output arrives via the founder, save it
  immediately. Do not route through another AI first.

**Commit message format:** `[Batch N] <what was done>`

**If a command fails:**
1. Don't retry.
2. Write the failure and error message to `CURSOR_OUTBOX.md`.
3. Move to the next command.
4. Commit whatever succeeded.
