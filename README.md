# TrailerVegas

**If you're new here, read HANDOFF.md first.**

**A nationwide home base for RV families.**

Find the place. Find the wrench. Find the honest answer.
Leave the next person a better map than you had.

**Live:** https://trailervegas-site.vercel.app
**Repo:** https://github.com/shataken-source/trailervegas

---

## What This Is

TrailerVegas is a community-driven platform for RVers — parks,
boondocking, mobile repair, towing, storage, and honest reviews. Built
because every incumbent platform either sold out, shut down, or started
charging for things that used to be free.

**Phase 0 (doorbell):** Live. Homepage, manifesto, trust covenant,
waitlist, help form, provide form.
**Phase 0.5 (directory):** T-012, blocked on phone verification.
**Phase 1 (reviews):** Not started.

---

## Deploy

The site runs on Vercel. The database is Supabase.

**Environment variables (Vercel → Settings → Environment Variables):**

| Name | Where it comes from |
|---|---|
| `SUPABASE_USERS_URL` | Supabase → trailervegas-users → Project Settings → API |
| `SUPABASE_USERS_ANON_KEY` | Same location |
| `SUPABASE_USERS_SERVICE_ROLE_KEY` | Same location (server-only) |
| `NEXT_PUBLIC_SITE_URL` | `https://trailervegas.com` |
| `NEXT_PUBLIC_COVENANT_VERSION` | `v1.2` |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | `trailervegas.com` (or blank) |

**Two Supabase projects, never merged:**

- `trailervegas-users` — live. Holds PII (waitlist, help requests,
  provider applications, consent log).
- `trailervegas-roundtable` — not created yet (T-015). AI
  coordination store. Different service role key. Different
  connection string.

Never commit keys. `.env*` is in `.gitignore`.

---

## Documents

| Document | Purpose |
|---|---|
| [HANDOFF.md](HANDOFF.md) | Current state and next steps |
| [Manifesto](docs/MANIFESTO.md) | Why we exist |
| [Trust Covenant](docs/TRUST_COVENANT.md) | Our public commitments |
| [Operating Agreement Clause](docs/OPERATING_AGREEMENT_CLAUSE.md) | Legal teeth for co-op conversion |
| [Product Scope V1](docs/PRODUCT_SCOPE_V1.md) | What we're building first |
| [Monetization](docs/MONETIZATION.md) | How we make money |
| [Competitive Research](docs/COMPETITIVE_RESEARCH.md) | Who we're up against |
| [Stack](docs/STACK.md) | Technical stack |
| [API Routes](docs/API_ROUTES.md) | Form API specs |
| [Brand Voice](docs/BRAND_VOICE.md) | Tagline, descriptor, voice |
| [Automation Plan](docs/AUTOMATION_PLAN.md) | How the AI roundtable runs |
| [Decisions Log](docs/DECISIONS_LOG.md) | Every decision, dated |
| [Seed List](research/I15_SEED_LIST.md) | I-15 corridor listings |

---

## Contributing

**AIs:** Read `AI_CHECKIN.md`. Follow the protocol. Output complete
files. Verify raw URLs resolve after push.

**Cursor:** Read `CURSOR_INBOX.md`. Execute commands. Report status.

**Humans:** This is a solo founder project in Phase 0.

---

## License

Content and code are the property of the founder. The Trust Covenant
governs community commitments. See `docs/TRUST_COVENANT.md`.
