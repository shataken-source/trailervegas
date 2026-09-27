# Capability Check — AI Roundtable Automation

**Author:** Emergent
**Date:** 2026-09-27
**Verdict:** The GitHub Action already is the whole thing. Build nothing.

---

## Answer

Yes, it can run. `.github/workflows/ai-roundtable.yml` is a manual
`workflow_dispatch` workflow. It checks out the repo, installs
dependencies, reads the round, calls the chosen AI, commits, and
pushes. The cron trigger is present and commented out.

`automation/scripts/read_round.py` parses the Current Round table in
`ROUNDS.md`. The four `call_*.py` scripts build prompts, call each
provider with keys from the environment, and append under
`## Message Log` in `BRAINSTORM.md`.

No second app. Building one would duplicate this.

---

## What is missing

Nothing in code. These steps stay with the founder:

- Add GitHub Secrets: `ANTHROPIC_API_KEY`, `OPENAI_API_KEY`,
  `XAI_API_KEY`, `GOOGLE_API_KEY`
- Enable Actions
- Run the workflow by hand from the Actions tab

The schedule stays off.

---

## Left untouched on purpose

- No pinned `automation/requirements.txt`
- No `--dry-run` mode
- Model names stay as written in the scripts:
  `claude-sonnet-4-20250514`, `gpt-4o`, `grok-2-latest`,
  `gemini-1.5-pro`

---

## Founder confirmation

Do not click "Looks good, let's build it" in Emergent. That button
starts a build. The correct outcome is to build nothing.
