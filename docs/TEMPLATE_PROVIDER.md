# Provider Page Template — `/providers/[slug]`

**For:** Emergent build
**Last updated:** 2026-09-27
**Maintained by:** Claude

---

## Purpose

Layout spec for an individual service provider page (mobile RV repair,
towing, storage, detailing, inspection). URL is `/providers/[slug]`.

---

## Page Structure

### 1. Header (site-wide)

Standard header.

### 2. Breadcrumb

`Home > Providers > [State] > [Name]`

### 3. Hero Section

- **Photo** (or branded placeholder)
- **Business name** (H1)
- **Service type(s)** (subhead)
- **City, State**
- **Certification badges:** RVIA / NRVA / None
- **Status badge:** "New" if no reviews, or rating if reviews exist
- **Quick actions:**
  - "Call" (prominent)
  - "Visit Website"
  - "Get a Quote" (goes to `/help` with provider pre-selected)

### 4. Quick Facts Bar

- Service type(s)
- Service area (cities or radius)
- Certified (RVIA / NRVA / Other / None)
- Years in business (if provided)
- Emergency service (Yes / No / Unknown)
- Mobile (Yes / No)

### 5. About Section

- **Description** — 2–4 sentences. Factual.
- **Contact:** Phone (clickable), Website (opens new tab), Email if public
- **Service area** — text description

### 6. Dimensional Ratings (Phase 1 — empty for now)

When reviews exist, show average ratings across:

- Showed up on time
- Fair pricing
- Knew what they were doing
- Would use again

**Phase 0 state:** "No reviews yet. Be the first."

### 7. Reviews Section (Phase 1 — empty for now)

**Phase 0 state:**

> **No reviews yet.**
> We're seeding providers corridor by corridor. Reviews open in Phase 1.

### 8. Claim This Listing

> **Own this business?**
> Claim this listing to update your info, respond to reviews, and add
> photos. It's free.
> [Claim this listing →]

### 9. Report an Error

> See something wrong? [Report an error →]

### 10. Nearby Providers

A horizontal scroll of 3–5 nearby providers of the same type or related
services within ~100 miles.

### 11. Footer (site-wide)

Standard footer.

---

## Data Fields
name, slug, service_types, contact_name, email, phone, website,
service_area, city, state, certified, years_in_business,
emergency_service, mobile, description, photo_url, status

---

## SEO Requirements

- **Title tag:** `[Name] — [Service Type] in [City], [State] | TrailerVegas`
- **Meta description:** First 155 characters of description
- **Structured data:** `LocalBusiness` schema with `serviceType`
- **Canonical URL:** Full URL with slug

---

## Mobile Behavior

- "Call" button is sticky at the bottom
- Service area collapses to a single line with expand
- Reviews collapse to a summary with "Read all" expander

---

## Empty State Rules

If a field is missing, hide it. Don't show "N/A" or blank rows.

If a provider has no photo, use a branded placeholder.

If a provider has no reviews, show the empty state. Don't fake it.

---

## Accessibility

Same standards as place pages.

---

## What's Out of Scope (Phase 0)

- Reviews (Phase 1)
- Ratings (Phase 1)
- Booking / scheduling (Phase 1)
- In-app messaging (Phase 2)
- Payments (Phase 2)
