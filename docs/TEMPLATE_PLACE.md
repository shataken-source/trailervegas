# Place Page Template — `/places/[slug]`

**For:** Emergent build
**Last updated:** 2026-09-27
**Maintained by:** Claude

---

## Purpose

This is the layout spec for an individual RV park or campground page. One
page per listing. The URL is `/places/[slug]` where `[slug]` is a URL-safe
version of the name (e.g., `oasis-las-vegas-rv-resort`).

---

## Page Structure

### 1. Header (site-wide)

Standard header: logo, nav (Places, Providers, Manifesto, Trust, About).

### 2. Breadcrumb

`Home > Places > [State] > [Name]`

### 3. Hero Section

- **Primary photo** (or placeholder with park name)
- **Name** (H1)
- **City, State** (subhead)
- **Type badge:** RV Resort / RV Park / Campground / Boondocking
- **Status badge:** "New" if no reviews yet, or rating if reviews exist
- **Quick actions:**
  - "Get Directions" (opens Google Maps)
  - "Call" (phone link on mobile)
  - "Visit Website"

### 4. Quick Facts Bar

- Price range ($ to $$$$)
- Hookups (Full / Electric+Water / Electric / None)
- Amp (50 / 30 / Both)
- Big rig friendly (Yes / Limited / No)
- Pull-through (Yes / Some / No)
- Dump station (Yes / No)
- Propane (Yes / No)
- Wi-Fi (Yes / Limited / No)

On mobile, this stacks into a grid.

### 5. About Section

- **Description** — 2–4 sentences. Factual. No marketing voice.
- **Address** — full address with a "copy" button
- **Phone** — clickable
- **Website** — link, opens in new tab

### 6. Dimensional Ratings (Phase 1 — empty for now)

When reviews exist, show average ratings across big-rig access, hookup
quality, cell signal, Wi-Fi quality, noise level, safety/security, site
spacing, value for money. Each with a 1–5 star visual and a count of
reviews.

**Phase 0 state:** "No reviews yet. Be the first."

### 7. Reviews Section (Phase 1 — empty for now)

**Phase 0 state:**

> **No reviews yet.**
> We're seeding listings corridor by corridor. Reviews open in Phase 1.
> Want to be notified when reviews go live? [Join the waitlist →]

### 8. Claim This Listing

> **Own or manage this park?**
> Claim this listing to update your info, respond to reviews, and add
> photos. It's free.
> [Claim this listing →]

### 9. Report an Error

> See something wrong? [Report an error →]

### 10. Nearby Listings

A horizontal scroll of 3–5 nearby parks within ~50 miles.

### 11. Footer (site-wide)

Standard footer.

---

## Data Fields

From `research/I15_SEED_LIST.md`:
name, slug, type, address, city, state, zip, phone, website,
price_range, hookups, amp, big_rig, pull_through, dump_station, propane,
wifi, cell_signal, lat, lng, description, photo_url, status

---

## SEO Requirements

- **Title tag:** `[Name] — [City], [State] | TrailerVegas`
- **Meta description:** First 155 characters of description
- **Open Graph image:** Primary photo or default card
- **Structured data:** `LodgingBusiness` or `Campground` schema
- **Canonical URL:** Full URL with slug

---

## Mobile Behavior

- Quick Facts Bar becomes a 2-column grid
- Photos swipe horizontally
- "Call" button is sticky at the bottom
- Reviews collapse to a summary with "Read all" expander

---

## Empty State Rules

If a field is missing, hide it. Don't show "N/A" or blank rows.

If a listing has no photo, use a branded placeholder with the park name in
a retro Vegas sign style.

If a listing has no reviews, show the empty state. Don't fake it.

---

## Accessibility

- All images have alt text
- Phone numbers are `tel:` links
- Website links open in new tab with `rel="noopener"`
- Color contrast meets WCAG AA
- Keyboard navigable
- Screen reader friendly labels on all icons

---

## What's Out of Scope (Phase 0)

- Reviews (Phase 1)
- Ratings (Phase 1)
- Booking integration (Phase 1)
- Photos from users (Phase 1)
- "Who's nearby" (Phase 2)
- Trip planner integration (Phase 2)
