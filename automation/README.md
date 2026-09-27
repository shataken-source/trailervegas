# AI Roundtable Automation

**Purpose:** Optionally automate the AI roundtable using GitHub Actions.

**Status:** Optional. The manual founder-routed workflow works fine
without this. Automate only when the manual version becomes a bottleneck.

**What this does:**

- Watches for new rounds in ROUNDS.md
- Calls the assigned AI's API
- Writes the response back to BRAINSTORM.md
- Commits the change
- Optionally notifies the founder

**What this does NOT do:**

- Replace the founder's judgment
- Make decisions (only proposes them)
- Handle Emergent's build (that's a separate workflow)

---

## Cost Reality Check

API costs add up. Rough estimates per round (one call per AI):

| AI | Model | Est. cost per round |
|---|---|---|
| Claude | claude-sonnet-4 | $0.10–$0.50 |
| ChatGPT | gpt-4o | $0.10–$0.50 |
| Grok | grok-2 | $0.05–$0.30 |
| Gemini | gemini-1.5-pro | $0.05–$0.30 |

**Total per round:** ~$0.30–$1.60. Ten rounds a month = $3–$16/month.

Not much. But if you're running daily rounds, it adds up. Budget
accordingly.

---

## Setup

### 1. Add API keys to GitHub Secrets

Go to your repo → Settings → Secrets and variables → Actions → New
repository secret.

Add:

- ANTHROPIC_API_KEY
- OPENAI_API_KEY
- XAI_API_KEY
- GOOGLE_API_KEY

### 2. Enable Actions

Go to your repo → Actions → Enable workflows.

### 3. Configure the round

Edit ROUNDS.md to set the current round and assign topics. The workflow
reads this file to know who to call and what to ask.

### 4. Run manually first

Go to Actions → "AI Roundtable" → Run workflow. Select the AI you want to
call. Watch the logs.

### 5. Schedule it (optional)

Uncomment the schedule block in the workflow file to run automatically.

---

## How Routing Works

The workflow reads ROUNDS.md to determine:

1. Who's up next
2. What topic they're assigned
3. What files they need to read

It then:

1. Reads the relevant files
2. Builds a prompt
3. Calls the AI's API
4. Writes the response to BRAINSTORM.md
5. Commits the change
6. Updates ROUNDS.md to mark them done

---

## Fallback: No API Keys

If you don't want to pay for API access, skip the automation entirely.
Use the manual workflow:

1. Copy the handoff brief
2. Paste it into the AI's web interface
3. Copy the response
4. Paste it into BRAINSTORM.md
5. Commit

It's more work but costs nothing. The automation is a convenience, not a
requirement.
