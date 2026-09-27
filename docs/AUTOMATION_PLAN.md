# Automation Plan — TrailerVegas AI Roundtable

**Status:** Decided. Build after Phase 0 ships and Round 1 closes.
**Last updated:** 2026-09-27
**Driver:** Claude

---

## The Decision

Automation will be **API-first**, not browser-automation (RPA).

Reasons:

1. Chat UIs prohibit automated access via their terms of service. APIs
   exist precisely so we don't do this.
2. API calls are stateless and reliable. Browser scraping is fragile —
   DOM changes, bot detection, streaming response parsing.
3. Our protocol is already stateless. The repo is the memory. No chat
   context is lost by switching to API.
4. Prompt caching makes the API path cheap. Costs drop roughly 80% when
   the static context (manifesto, covenant, protocol) is cached.

**Emergent stays manual.** It's a build tool, not a chat API. The build
happens once. No loop to automate.

**Current state (verified by Emergent 2026-09-27):** The GitHub Action
in `.github/workflows/ai-roundtable.yml` already does the API calls,
schedules, and commits. It is functional as-is. It needs API keys and
a click to run. No second app needs to be built.

---

## The Architecture

- **Supabase (Postgres)** — message bus. Tables for messages, tasks,
  rounds, responses, audit log.
- **Orchestrator (Python)** — runs on a VPS or Raspberry Pi.
  APScheduler fires at set times. Reads open tasks, builds prompts,
  calls AI APIs with caching, validates output, commits to GitHub.
- **GitHub** — durable artifact storage. Still the source of truth.
- **GUI (Tauri or PyQt)** — optional dashboard. Read-only + manual
  intervention buttons. Not a message bus; a window into state.

---

## The Build Sequence

**Phase 1 — Close Round 1 manually (this week)**
- Save Gemini's output — ✅ done
- Answer the 4 founder decisions — ✅ done
- Fire Batch 6B (covenant patch) — ✅ done
- Run ChatGPT (T-004), run Emergent (T-005)
- Close Round 1

**Phase 2 — Build the message bus (next week)**
- Supabase schema, RLS, realtime
- Migrate current .md state into tables
- Keep GitHub for artifacts
- No automation yet — better state management only

**Phase 3 — Automate one AI end-to-end (week after)**
- Start with Gemini (cheapest, cleanest API)
- Build orchestrator for just that one AI
- Run on a schedule for one week
- Verify cost, output quality, no breakage

**Phase 4 — Extend to the others**
- Add Claude, ChatGPT, Grok one at a time
- ~1 day each once the pattern is set
- Emergent stays manual

**Phase 5 — GUI dashboard**
- Reads Supabase directly
- "Run Now" buttons for each AI
- Live view of rounds, tasks, messages
- Approve founder decisions in-app

---

## Cost Model

One round per day, all four AIs, with prompt caching:

| AI | Model | Per round | Per month |
|---|---|---|---|
| Claude | Sonnet 4 | ~$0.21 | ~$6 |
| ChatGPT | GPT-4o | ~$0.17 | ~$5 |
| Gemini | 1.5 Pro | ~$0.08 | ~$2.50 |
| Grok | Grok 2 | ~$0.14 | ~$4 |
| **Total** | | **~$0.60** | **~$18** |

With caching: $5–6/month.
With model tiering (Haiku/Flash/mini for routine, frontier for
substantive): $3–4/month.

Set hard spending caps in every provider console. $20/month each to
start.

---

## Cost Killers (In Order of Impact)

1. **Prompt caching.** Static context cached between calls. ~10% of
   normal price.
2. **Model tiering.** Routine check-ins on small models. Substantive
   work on frontier models. Creative work on mid-tier.
3. **Truncation.** Send only what the AI needs. Not the whole repo.
4. **Batched rounds.** Only fire when there's open work.
5. **Spending caps.** Hard limits in every provider console.

---

## The One Risk to Solve First

**Silent failures.** The orchestrator runs, an AI produces garbage, the
parser doesn't catch it, garbage commits, next AI reads garbage and
produces more. Whole round corrupts overnight.

**Fix:** Every AI response goes to staging. A validator checks:

- Correct `=== FILE ===` blocks
- Valid file paths
- No obvious garbage (empty files, loops, non-markdown)
- No files the AI wasn't asked to update

Only clean output commits. Anything questionable pings the founder.

Build the validator before the orchestrator.

---

## What Stays Manual Forever

- **Founder decisions.** The whole point of the system.
- **Emergent builds.** One-off, not a loop.
- **Legal review.** Humans only.
- **The final word.** Every AI proposes. Jason decides.

---

## The Trigger to Start Building

Do not start Phase 2 (Supabase message bus) until at least one of the
following is true:

- Round 1 through Round 3 have all closed without protocol changes.
- The founder has spent more than 60 minutes total pasting output in a
  single week.
- A task has been missed or lost due to a paste error.

Otherwise, the manual loop is good enough. Building tools before the
pain is real is how projects die.

---

## Related Files

- `automation/README.md` — original GitHub Actions scaffold
- `automation/SETUP.md` — setup notes for API keys
- `CURSOR_PROTOCOL.md` — Cursor's role
- `HANDOFF.md` — current state
