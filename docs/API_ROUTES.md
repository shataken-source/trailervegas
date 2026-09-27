# API Routes — Next.js (Phase 0)

**Status:** Spec. Emergent builds against this.
**Last updated:** 2026-09-27
**Maintained by:** Claude

---

## Principle

Every form POSTs to a Next.js API route. The route validates input,
runs bot defense, and writes to the `trailervegas-users` Supabase
project via the service role key. Nothing touches Formspree, Zapier,
or Airtable.

**Service role key is server-only.** It lives in Vercel environment
variables, never in the browser bundle.

---

## Bot Defense (all form routes)

1. **Honeypot check.** Every form includes a hidden field named
   `website`. If it arrives non-empty, the route returns `200 OK`
   with a generic "thanks" body and does NOT write to the database.
   Never tell the bot why.
2. **Rate limit.** Max 3 submissions per IP per hour. If exceeded,
   return `429 Too Many Requests` with a friendly message.
3. **IP capture.** Read from `x-forwarded-for` header (Vercel
   populates it). Store as audit.

---

## Routes

### `POST /api/waitlist`

**Body:**
{
email: string,
corridor?: string, // default "I-15"
website?: string // honeypot — must be empty
}

**Validation:**
- `email` present and valid format
- `website` empty

**On success:**
- Insert into `waitlist`
- Return `{ ok: true }`

**Errors:**
- `400` — invalid email
- `429` — rate limited
- `500` — server error

**Consent version:** Not applicable — waitlist is not PII beyond
email.

---

### `POST /api/help`

**Body:**
{
name: string,
email: string,
phone: string,
location: string,
rig_type: string,
problem_type: string,
urgency: "emergency" | "scheduled" | "planning",
description?: string,
consent: boolean,
website?: string // honeypot
}

**Validation:**
- All required fields present
- `consent === true`
- `email` and `phone` valid format
- `website` empty

**On success:**
- Insert into `help_requests`
- Insert into `consent_log` with:
  - `submission_type = 'help'`
  - `submission_id = <new help_requests.id>`
  - `consent_version = <current covenant version>`
  - `covenant_url = 'https://trailervegas.com/trust'`
  - `displayed_at = <client timestamp from form>`
  - `submitted_at = now()`
  - `ip`, `user_agent`
- Send notification to founder (email via Resend or console log for
  Phase 0)
- Return `{ ok: true }`

**Errors:**
- `400` — validation failed (missing field, consent not given)
- `429` — rate limited
- `500` — server error

---

### `POST /api/provide`

**Body:**
{
business_name: string,
contact_name: string,
email: string,
phone: string,
website?: string, // the actual business website
service_types: string[],
service_area: string,
certified?: string,
years_in_business?: number,
description?: string,
consent: boolean,
honeypot?: string // hidden field, different name to avoid clash
}

**Note:** The business `website` field and the honeypot field collide
in name. Use a different honeypot name for this form: `company_url`
or `fax`. Emergent decides.

**Validation:**
- All required fields present
- `consent === true`
- `email`, `phone`, business `website` (if present) valid format
- honeypot empty

**On success:**
- Insert into `provider_applications`
- Insert into `consent_log` with `submission_type = 'provide'`
- Send notification to founder
- Return `{ ok: true }`

---

## Consent Version — Source of Truth

The `consent_version` field records which version of the Trust
Covenant was displayed when the user submitted. The current value is
embedded in the page at build time by reading
`docs/TRUST_COVENANT.md`'s version line.

**Phase 0 value:** `v1.2`

When the covenant is versioned up, the API route's constant updates
with the next deploy. No manual sync.

---

## Rate Limiter Implementation (Phase 0)

In-memory map keyed by IP, stored on the Next.js serverless function.

**Caveat:** Vercel serverless functions are ephemeral. In-memory
counters reset on cold starts. This is acceptable for Phase 0 —
bot volume is low, and the honeypot catches most of it.

**Phase 2 upgrade:** Use Vercel's built-in rate limiting, or move the
counter to Upstash Redis.

---

## Notifications (Phase 0)

No transactional email service wired yet. On form success:

- Log to Vercel function logs
- Write to Supabase
- Emergent may add Resend (or similar) later

For Phase 0, the founder reads Supabase directly.

---

## Error Responses

All errors return JSON:
{ ok: false, error: "human readable message" }

Never return stack traces or internal errors to the client.

---

## What This Replaces

- No Formspree
- No Zapier
- No Airtable
- No third-party form handlers

PII never leaves our Vercel + Supabase boundary.

---

## Related Files

- `automation/supabase_schema.sql` — the tables
- `docs/STACK.md` — the full stack
- `docs/TRUST_COVENANT.md` — the version we log
- `docs/EMERGENT_BUILD_SPEC.md` — form field lists
