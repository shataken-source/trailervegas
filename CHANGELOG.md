# Changelog

All notable changes to this project. Format based on Keep a Changelog.

---

## [0.2.0] — 2026-09-27 — Round 1 Closed

### Added
- Phase 0 doorbell live at https://trailervegas-site.vercel.app
- 10 routes: homepage, manifesto, trust, help, provide, about,
  contact, privacy, terms, thanks pages
- Two working forms (help, provide) + waitlist
- Supabase `trailervegas-users` project with 4 tables: waitlist,
  help_requests, provider_applications, consent_log
- `docs/BRAND_VOICE.md` — tagline, descriptor slot, hero order,
  voice rules
- `docs/API_ROUTES.md` — Next.js API route specs
- `automation/supabase_schema.sql` — full schema v1.1
- `content/` — six homepage + form copy files
- `docs/EXHIBIT_A_STUB.md` — one-page conversion plan
- `docs/STACK.md` — technical stack
- `docs/AUTOMATION_PLAN.md` — AI roundtable automation plan

### Changed
- Homepage copy: middle-length (bold lead + one vivid sentence)
- Homepage hero: eyebrow → tagline H1 → descriptor → supporting line
- Council candidate names pulled from public docs pending consent
- `.env.example` and README env var names match app
  (`SUPABASE_USERS_*`)

### Fixed
- `docs/BRAND_VOICE.md` was cited as canon but never authored.
  Authored and pushed. Raw URL verified.
- Homepage copy drift from `content/HOMEPAGE_COPY.md` v3. Fixed.

### Closed
- T-001 (I-15 seed list)
- T-002 (Grok red-team)
- T-003 (corridor research)
- T-004 (taglines)
- T-005 (Phase 0 build — live)
- T-008 (covenant/OA reconciliation)
- T-009 (lead-fee copy proposal)
- T-010 (founder decisions)
- T-013 (Supabase schema + API routes)

### Open (Round 2)
- T-006 (legal review — founder + lawyer)
- T-007 (USPTO search — founder)
- T-011 decision B (lead-fee copy approval — founder)
- T-012 (directory — blocked on phone verification)
- T-014 (real brand identity)
- T-015 (Supabase roundtable project)
- T-016 (protocol fix: raw URL verification)
- T-017 (repo visibility decision)

---

## [0.1.0] — 2026-09-27

### Added
- Initial repo structure
- Manifesto, Trust Covenant, Operating Agreement Clause
- Competitive research, product scope, monetization plan
- AI collaboration protocol, driver docs, handoff briefs
- I-15 seed list
- Automation scripts

### Decided
- Name: TrailerVegas
- Legal: Delaware LLC now, co-op later
- Scope: One corridor (I-15) first
- Stack: Next.js + Supabase on Vercel
- Output contract: complete files, founder replaces
