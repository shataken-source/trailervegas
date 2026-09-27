# TrailerVegas

**If you're new here, read HANDOFF.md first.**

**A nationwide home base for RV families.**

Find the place. Find the wrench. Find the honest answer.
Leave the next person a better map than you had.

---

## What This Is

TrailerVegas is a community-driven platform for RVers — parks,
boondocking, mobile repair, towing, storage, and honest reviews. Built
because every incumbent platform either sold out, shut down, or started
charging for things that used to be free.

The full mission is in `docs/MANIFESTO.md`.
The commitments are in `docs/TRUST_COVENANT.md`.
The locked Phase 0 scope is in `docs/PRODUCT_SCOPE_V1.md`.
Current state and next steps: `HANDOFF.md`.

---

## Current Status

**Phase 0 — Pre-launch**

- [ ] Trust Covenant published
- [ ] Landing page live
- [ ] First 25 listings seeded (I-15 corridor)
- [ ] First 5 provider partnerships
- [ ] Waitlist + help form live

---

## How This Project Works

This repo is the shared brain of a multi-AI collaboration. The founder
is the router. Claude is the project driver. ChatGPT, Gemini, Grok,
Emergent, and Cursor contribute as ideator, researcher, contrarian,
builder, and local executor.

**AI sessions start at `AI_CHECKIN.md`.**
**Cursor sessions start at `CURSOR_INBOX.md`.**
**Every change is logged in `CHANGELOG.md` and `docs/DECISIONS_LOG.md`.**

If it's not in a `.md` file, it doesn't exist.

---

## The Documents

| Document | Purpose |
|---|---|
| [HANDOFF.md](HANDOFF.md) | Current state and next steps |
| [Manifesto](docs/MANIFESTO.md) | Why we exist |
| [Trust Covenant](docs/TRUST_COVENANT.md) | Our public commitments |
| [Operating Agreement Clause](docs/OPERATING_AGREEMENT_CLAUSE.md) | Legal teeth for co-op conversion |
| [Product Scope V1](docs/PRODUCT_SCOPE_V1.md) | What we're building first |
| [Monetization](docs/MONETIZATION.md) | How we make money |
| [Competitive Research](docs/COMPETITIVE_RESEARCH.md) | Who we're up against |
| [AI Collaboration](docs/AI_COLLABORATION.md) | How multiple AIs contribute |
| [AI Protocol](AI_PROTOCOL.md) | Rules of engagement for AIs |
| [Cursor Protocol](CURSOR_PROTOCOL.md) | Rules of engagement for Cursor |
| [Tasks](TASKS.md) | What's assigned to whom |
| [Messages](MESSAGES.md) | Message board between AIs |
| [Decisions Log](docs/DECISIONS_LOG.md) | Every decision, dated |
| [Build Spec](docs/EMERGENT_BUILD_SPEC.md) | What Emergent is building |
| [Seed List](research/I15_SEED_LIST.md) | I-15 corridor listings |

---

## Contributing

**AIs:** Read `AI_CHECKIN.md`. Follow the protocol. Output complete
files.

**Cursor:** Read `CURSOR_INBOX.md`. Execute commands. Report status.

**Humans:** This is a solo founder project in Phase 0. If you're an
RVer with feedback, open an issue or email.

---

## Deploy

The Phase 0 site is the Next.js app in this folder.

```bash
npm install
npm run dev
```

Production host is Vercel. Set the project root to this repo. Add these
environment variables in Vercel. Do not commit them.

- `SUPABASE_USERS_URL`
- `SUPABASE_USERS_ANON_KEY`
- `SUPABASE_USERS_SERVICE_ROLE_KEY`

Create the `trailervegas-users` project first and run the Project 1
block of `automation/supabase_schema.sql` in that project only. Forms
return a server error until those variables exist. Pages still build.

`SUPABASE_ROUNDTABLE_*` is not used by this site.

```bash
npm run build
```

## License

Content and code are the property of the founder. The Trust Covenant
governs community commitments. See `docs/TRUST_COVENANT.md`.
