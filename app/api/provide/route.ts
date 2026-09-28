import { consentVersion } from "@/lib/consent";
import { clientIp, honeypotTripped, jsonError, rateLimit, userAgent } from "@/lib/guard";
import { insertRow, logConsent } from "@/lib/store";

function text(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function validEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validPhone(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

function validUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return jsonError("Validation failed", 400);
  }

  if (honeypotTripped(body.fax) || honeypotTripped(body.company_url)) {
    return Response.json({ ok: true });
  }

  const ip = clientIp(request);
  if (!rateLimit(ip)) {
    return jsonError("Too many submissions. Try again later.", 429);
  }

  const businessName = text(body.business_name);
  const contactName = text(body.contact_name);
  const email = text(body.email);
  const phone = text(body.phone);
  const website = text(body.website);
  const serviceArea = text(body.service_area);
  const certified = text(body.certified);
  const description = text(body.description);
  const types = Array.isArray(body.service_types)
    ? body.service_types.filter((item): item is string => typeof item === "string" && item.trim() !== "")
    : [];

  let years: number | null = null;
  if (body.years_in_business !== undefined && body.years_in_business !== "" && body.years_in_business !== null) {
    const parsed = Number(body.years_in_business);
    if (!Number.isInteger(parsed) || parsed < 0) {
      return jsonError("Validation failed", 400);
    }
    years = parsed;
  }

  if (
    !businessName ||
    !contactName ||
    !validEmail(email) ||
    !validPhone(phone) ||
    (website !== "" && !validUrl(website)) ||
    types.length === 0 ||
    !serviceArea ||
    body.consent !== true
  ) {
    return jsonError("Validation failed", 400);
  }

  const saved = await insertRow("provider_applications", {
    business_name: businessName,
    contact_name: contactName,
    email,
    phone,
    website: website || null,
    service_types: types,
    service_area: serviceArea,
    certified: certified || null,
    years_in_business: years,
    description: description || null,
    consent: true,
    consent_version: consentVersion(),
    ip,
    user_agent: userAgent(request),
  });

  if (!saved.ok || !saved.id) return jsonError("Server error", 500);

  const logged = await logConsent({
    submissionType: "provide",
    submissionId: saved.id,
    ip,
    userAgent: userAgent(request),
  });
  if (!logged) return jsonError("Server error", 500);

  console.log("[api/provide]", saved.id);
  return Response.json({ ok: true });
}
