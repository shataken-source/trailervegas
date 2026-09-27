# Setup Guide — Step by Step

## Prerequisites

- A GitHub repo (already created: shataken-source/trailervegas)
- API keys for the AIs you want to automate
- 10 minutes

---

## Step 1: Repo is already created

Repo: https://github.com/shataken-source/trailervegas

Local: C:\cevict-live\apps\trailervegas

---

## Step 2: Files are already in place

The folder structure and scripts are already committed. Verify by
browsing the repo.

---

## Step 3: Get API keys

### Anthropic (Claude)

1. Go to console.anthropic.com
2. Sign up or log in
3. Go to API Keys
4. Create a new key
5. Copy it

### OpenAI (ChatGPT)

1. Go to platform.openai.com
2. Sign up or log in
3. Go to API Keys
4. Create a new key
5. Copy it

### xAI (Grok)

1. Go to console.x.ai
2. Sign up or log in
3. Go to API Keys
4. Create a new key
5. Copy it

### Google (Gemini)

1. Go to aistudio.google.com
2. Sign up or log in
3. Go to Get API Key
4. Create a new key
5. Copy it

---

## Step 4: Add keys to GitHub Secrets

1. Go to https://github.com/shataken-source/trailervegas
2. Click Settings → Secrets and variables → Actions
3. Click "New repository secret"
4. Add each key:
   - Name: ANTHROPIC_API_KEY — Value: your key
   - Name: OPENAI_API_KEY — Value: your key
   - Name: XAI_API_KEY — Value: your key
   - Name: GOOGLE_API_KEY — Value: your key

---

## Step 5: Enable Actions

1. Go to the repo → Actions tab
2. If prompted, click "I understand my workflows, go ahead and enable
   them"
3. You should see "AI Roundtable" in the list

---

## Step 6: Run the first round manually

1. Go to Actions → AI Roundtable → Run workflow
2. Select claude from the dropdown
3. Leave topic blank (it'll use ROUNDS.md)
4. Click "Run workflow"
5. Watch the logs
6. When it's done, check BRAINSTORM.md for Claude's contribution

---

## Step 7: Run the other AIs

Repeat Step 6 for chatgpt, grok, and gemini.

Or select all to run them all in one workflow.

---

## Step 8: Commit and review

The workflow commits changes automatically. Pull the repo locally or view
on GitHub to see the new BRAINSTORM.md.

---

## Troubleshooting

### "API key not set"

The secret name in GitHub doesn't match the script. Check both.

### "Could not find Message Log in BRAINSTORM.md"

The BRAINSTORM.md file is missing the Message Log header. Add it.

### "Rate limit exceeded"

You're calling the API too often. Wait or upgrade your API plan.

### Workflow doesn't trigger

Make sure the workflow file is at .github/workflows/ai-roundtable.yml,
not inside /automation.

---

## Cost Management

- Start with manual runs only. Don't schedule yet.
- Run one AI at a time to see costs.
- Check your API dashboards weekly.
- Set spending limits in each API console.

---

## When to Automate vs. Stay Manual

**Stay manual if:**

- You're still figuring out the project direction
- You want to read every contribution carefully
- You're under 5 rounds per week

**Automate if:**

- The manual routing is taking more than 30 minutes per round
- You have a clear rhythm and topics
- You trust the AIs to stay on-topic

You can always switch back. The files work either way.
