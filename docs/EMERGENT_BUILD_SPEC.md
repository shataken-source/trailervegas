# Emergent Build Spec — TrailerVegas Phase 0

**Version:** 1.0
**Date:** 2026-09-27
**For:** Emergent (or any AI website builder)
**Repo:** https://github.com/shataken-source/trailervegas

---

## Overview

Build the Phase 0 website for TrailerVegas. Phase 0 is a **magazine with
a doorbell**, not a full platform.

The site has:

1. A homepage that communicates the mission in the first screen
2. A waitlist signup
3. A "Get Help" form for RVers who need a service provider
4. An "I Can Help" form for providers who want to receive leads
5. A seeded directory of ~25 listings on one corridor (I-15)
6. The Trust Covenant, published and linked everywhere
7. The Manifesto, published and linked everywhere

**Do not build:** user accounts, reviews, Q&A, maps, trip planner,
marketplace, mobile app. Those are Phase 1+.

**Tech stack:**

- Static-site-friendly (Netlify, Vercel, or GitHub Pages)
- Fast (no heavy frameworks if avoidable)
- Mobile-first
- Accessible (WCAG AA minimum)
- SEO-ready

---

## Site Map
/ → Homepage
/manifesto → Full manifesto
/trust → Trust Covenant
/help → Get Help form (for RVers)
/provide → I Can Help form (for providers)
/places → Directory of parks and campgrounds
/places/[slug] → Individual listing page
/providers → Directory of service providers
/providers/[slug] → Individual provider page
/about → About the project
/contact → Contact form
/privacy → Privacy policy
/terms → Terms of service
/help/thanks → Thank-you page after help form
/provide/thanks → Thank-you page after provider form

Phase 0 does **not** need: `/answers`, `/map`, `/marketplace`,
`/account`, `/login`, `/signup` (waitlist is a form, not an account).

---

## Page-by-Page Spec

### 1. Homepage — `/`

**Goal:** Communicate the mission in the first screen. Get a waitlist
signup or a help request.

**Above the fold:**

- **Logo:** TrailerVegas wordmark. Neon-style, but not cheesy.
- **Headline:** "The RV community's home base. Built by RVers, not
  corporations."
- **Subhead:** "Find the place. Find the wrench. Find the honest answer.
  Leave the next person a better map than you had."
- **Primary CTA button:** "Get Help Now" → `/help`
- **Secondary CTA button:** "Join the Waitlist" → scrolls to waitlist
  form below
- **Tertiary link:** "Read the Manifesto" → `/manifesto`

**Below the fold:**

**Section: The Problem** (three columns)

- "Reviews you can't trust." → Parks game the system. Platforms sell
  placement. Honest reviews get buried.
- "Repairs you can't find." → Mobile techs are word-of-mouth. Lead farms
  sell your number. Nobody shows up.
- "Platforms that sell out." → RVillage shut down. Campendium got ruined.
  The Dyrt hides charges. RV LIFE routes you wrong.

**Section: What We're Building** (four cards)

- **Places** — Verified reviews of RV parks, campgrounds, boondocking
  spots. Rated on what actually matters.
- **Help** — Mobile repair, towing, storage, detailing. Same review
  system. A "get help now" form that routes to real humans.
- **Answers** — Coming later. Stack Overflow for RVs.
- **People** — Coming later. Opt-in. Privacy-first.

**Section: The Trust Covenant** (callout box)

- Short version: "We're starting as an LLC. We're committing to convert
  to a community-owned cooperative. The contract is public. Read it."
- Link: `/trust`

**Section: Waitlist**

- Headline: "Be first when we launch."
- Form: email only. One field. One button.
- Microcopy: "We'll email you when we go live in your corridor. No spam.
  Unsubscribe anytime. We will never sell your data."

**Section: The Manifesto (excerpt)**

- First 3 paragraphs of the manifesto.
- Link: "Read the full manifesto →"

**Footer:**

- Links: Manifesto, Trust Covenant, About, Contact, Privacy, Terms
- "TrailerVegas is an independent project. Not affiliated with any RV
  manufacturer or platform."
- Copyright line.
- Link to GitHub repo.

---

### 2. Manifesto — `/manifesto`

Full manifesto, readable, shareable.

- Clean typography. Single column. Max 680px wide.
- Pull quotes styled distinctly.
- Share buttons at bottom.
- Link back to homepage.
- Link to Trust Covenant.

**Content:** See `docs/MANIFESTO.md`.

---

### 3. Trust Covenant — `/trust`

Standalone, versioned, public document.

- Version number at top.
- Date published.
- Change log at the bottom.
- Downloadable as PDF (link).
- Share buttons.
- Link back to homepage.

**Content:** See `docs/TRUST_COVENANT.md`.

---

### 4. Get Help — `/help`

**Above the fold:**

- Headline: "RV down? Get a local who actually works on rigs."
- Subhead: "Tell us what's wrong and where you are. We'll connect you
  with a vetted mobile tech, tow operator, or storage provider near you."

**Form fields:**

| Field | Type | Required |
|---|---|---|
| Name | text | yes |
| Email | email | yes |
| Phone | tel | yes |
| Location | text | yes |
| Rig type | dropdown | yes |
| Problem type | dropdown | yes |
| Urgency | radio | yes |
| Description | textarea | no |
| Consent | checkbox | yes |
| Submit | button | — |

**Rig type options:** Class A, Class B, Class C, Travel Trailer, 5th
Wheel, Toy Hauler, Campervan, Skoolie, Truck Camper, Other

**Problem type options:** Engine, Electrical, Plumbing, AC/Heating,
Slide-out, Tire, Towing, Storage, Other

**Urgency options:** Emergency (need help now), Scheduled (this week),
Planning (flexible)

**Consent text:** "I agree to be contacted by local service providers.
I understand my information may be shared with them to provide quotes."

**After submit:**

- Thank-you page (`/help/thanks`).
- Message: "Got it. We'll connect you with a provider near [location]
  shortly. Check your email for a confirmation."
- Disclaimer: "TrailerVegas is not a repair company, tow company, or
  insurer. We connect you with independent providers. You hire them. You
  pay them. You review them."

**Backend:**

- Form submission → email + SMS to founder (via Formspree + Zapier, or
  similar)
- Auto-reply email with the disclaimer
- Store submissions in Airtable or Google Sheets for manual routing in
  Phase 0

**Important:** Phase 0 routing is manual. The founder reads each request
and forwards it to a provider. Do not build automated routing yet.

---

### 5. I Can Help — `/provide`

**Above the fold:**

- Headline: "Get RV service leads. No shared dumps. No spam."
- Subhead: "Tell us what you do. We'll send you qualified, consented
  job requests. You pay only if you want more."

**Form fields:**

| Field | Type | Required |
|---|---|---|
| Business name | text | yes |
| Contact name | text | yes |
| Email | email | yes |
| Phone | tel | yes |
| Website | url | no |
| Service type | checkboxes | yes |
| Service area | text | yes |
| Certified? | radio | no |
| Years in business | number | no |
| Tell us about your business | textarea | no |
| Consent | checkbox | yes |
| Submit | button | — |

**Service type options:** Mobile RV repair, Towing, Storage, Mobile
detailing, Inspection, Other

**Certified options:** RVIA, NRVA, Other, Not certified

**Consent text:** "I agree to be contacted by TrailerVegas about lead
opportunities."

**After submit:**

- Thank-you page (`/provide/thanks`).
- Message: "Thanks. We'll review your info and reach out within a few
  days. In the meantime, read our Trust Covenant to see how we handle
  reviews and rankings."

---

### 6. Places Directory — `/places`

**Above the fold:**

- Headline: "RV Parks & Campgrounds on I-15"
- Subhead: "Verified reviews. Dimensional ratings. No pay-to-play."

**Filter bar:**

- Corridor: I-15 (default). Others grayed out with "Coming soon."
- State: All, CA, NV, AZ, UT, ID, MT
- Amenities: Full hookups, 50 amp, Big rig, Pull-through, Dump station,
  Propane, Wi-Fi, Cell signal
- Price: $, $$, $$$, $$$$
- Rating: 1+, 2+, 3+, 4+, 4.5+

**Listings:** Card layout. Each card shows name, city/state, thumbnail,
star rating (or "New" badge), key amenities, price range, "Big rig
friendly" badge if applicable, link to detail page.

**Empty state:** "No listings yet in this area. We're adding them
corridor by corridor."

**Phase 0 note:** Listings are seeded manually by the founder. No user
submissions yet. No reviews yet.

---

### 7. Individual Place — `/places/[slug]`

See `docs/TEMPLATE_PLACE.md` for full spec.

---

### 8. Providers Directory — `/providers`

**Above the fold:**

- Headline: "RV Service Providers on I-15"
- Subhead: "Vetted by the community. No lead farms. No shared dumps."

**Filter bar:**

- Service type: Mobile repair, Towing, Storage, Detailing, Inspection
- State: All, CA, NV, AZ, UT, ID, MT
- Certified: RVIA, NRVA, Other, Any
- Rating: 1+, 2+, 3+, 4+, 4.5+

**Listings:** Card layout. Each card shows business name, service
type(s), city/state, phone, website, rating (or "New" badge),
"Certified" badge if applicable, link to detail page.

---

### 9. Individual Provider — `/providers/[slug]`

See `docs/TEMPLATE_PROVIDER.md` for full spec.

---

### 10. About — `/about`

- Short version of the origin story.
- "Who we are" — the founder, the AI collaborators (optional).
- "How we're funded" — link to `/monetization` or summarize.
- "How to get involved" — waitlist, provider signup, suggest a listing.
- Link to the GitHub repo.
- Contact email.

---

### 11. Contact — `/contact`

Simple form: name, email, subject, message. Plus a direct email address.

---

### 12. Privacy — `/privacy`

Standard privacy policy. Must cover:

- What data we collect (waitlist emails, help form data, provider form
  data)
- How we use it
- Who we share it with (service providers, for help requests only)
- How to request deletion
- Cookies (if any)
- Contact for privacy questions

**Key commitment from the Trust Covenant:** We will never sell your
personal data. State this explicitly.

**Get a lawyer to review this.** Do not publish an AI-written privacy
policy without legal review.

---

### 13. Terms — `/terms`

Standard terms of service. Must cover:

- TrailerVegas is a directory and routing service, not a service
  provider.
- We are not liable for the work of any provider.
- Reviews are user-generated. We moderate for spam and abuse, not for
  disagreement.
- Disclaimers about RV repair, towing, storage, etc.
- Limitation of liability.
- Governing law.

**Get a lawyer to review this.**

---

## Design Direction

### Brand

- **Name:** TrailerVegas
- **Tagline:** "Park it. Share it. Live it."
- **Voice:** Warm, direct, a little irreverent. Like a campground
  neighbor who knows their stuff but doesn't take themselves too
  seriously.
- **Avoid:** Corporate speak, RV dealer jargon, "adventure awaits"
  clichés.

### Colors

- **Primary:** Deep navy (`#0F1B2D`) — trust, night sky
- **Accent 1:** Neon pink (`#FF3D7F`) — Vegas energy
- **Accent 2:** Neon teal (`#00D9C0`) — contrast, freshness
- **Accent 3:** Warm gold (`#F5B700`) — retro Vegas sign
- **Background:** Off-white (`#FAF7F2`)
- **Text:** Near-black (`#1A1A1A`)
- **Muted:** Gray (`#6B7280`)

### Typography

- **Headlines:** A bold, slightly retro sans-serif. Bebas Neue or Archivo
  Black.
- **Body:** Inter or Source Sans Pro.
- **Accent:** JetBrains Mono or IBM Plex Mono for data.

### Imagery

- Neon sign aesthetic, but subtle.
- Desert landscapes, RV silhouettes, campground scenes.
- Avoid stock photos of smiling families in matching outfits.
- Avoid over-saturated Instagram-filter nonsense.

### Components

- **Buttons:** Rounded corners, high contrast, clear hover states.
- **Cards:** Subtle shadow, rounded corners, clear hierarchy.
- **Forms:** Large touch targets, clear labels, inline validation,
  accessible error messages.
- **Icons:** Simple line icons. Not filled. Not emoji.

---

## Data Models

### Place
id, slug, name, type, address, city, state, zip, lat, lng, phone,
website, price_range, amenities, hookups, big_rig_friendly,
pull_through, dump_station, propane, wifi, cell_signal, photo_url,
description, status, created_at, updated_at

### Provider
id, slug, name, service_types, contact_name, email, phone, website,
service_area, city, state, certified, years_in_business, description,
photo_url, status, created_at, updated_at

### HelpRequest
id, name, email, phone, location, rig_type, problem_type, urgency,
description, consent, status, routed_to, created_at

### WaitlistSignup
id, email, corridor, created_at

---

## Technical Requirements

- **Hosting:** Netlify, Vercel, or GitHub Pages
- **Forms:** Formspree, Netlify Forms, or similar
- **Analytics:** Plausible or Fathom. No Google Analytics.
- **SEO:** Clean URLs, meta tags, Open Graph, sitemap.xml, robots.txt
- **Performance:** Lighthouse 90+ on mobile
- **Accessibility:** WCAG AA
- **Security:** HTTPS, no exposed keys, form spam protection

---

## What Not to Build (Phase 0)

- User accounts / login
- Reviews (read or write)
- Q&A
- Maps
- Trip planner
- Marketplace / classifieds
- Mobile app
- Payment processing
- Automated lead routing
- Community-elected moderators
- "Who's nearby" feature

---

## Success Metrics for Phase 0

- Site loads in under 2 seconds on mobile
- Lighthouse 90+ across the board
- Waitlist form works
- Help form works
- Provider form works
- 25 listings seeded
- Trust Covenant and Manifesto published and linked
- Site is indexable by Google

---

## Questions for the Founder

1. **Corridor:** I-15 or I-10? (Spec assumes I-15.)
2. **Hosting:** Netlify, Vercel, or GitHub Pages?
3. **Form backend:** Formspree, Netlify Forms, or custom?
4. **Domain:** Is `trailervegas.com` pointed at the hosting provider yet?
5. **Logo:** Is there a logo, or use placeholder wordmark?
6. **Photos:** Any photos for seeded listings, or use placeholders?

---

**End of spec.**
