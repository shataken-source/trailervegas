import { consentVersion } from "@/lib/consent";
import { clientIp, honeypotTripped, jsonError, rateLimit, userAgent } from "@/lib/guard";
import { insertRow, logConsent } from "@/lib/store";

const URGENCY = new Set(["emergency", "scheduled", "planning"]);

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

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return jsonError("Validation failed", 400);
  }

  if (honeypotTripped(body.website)) {
    return Response.json({ ok: true });
  }

  const ip = clientIp(request);
  if (!rateLimit(ip)) {
    return jsonError("Too many submissions. Try again later.", 429);
  }

  const name = text(body.name);
  const email = text(body.email);
  const phone = text(body.phone);
  const location = text(body.location);
  const rigType = text(body.rig_type);
  const problemType = text(body.problem_type);
  const urgency = text(body.urgency);
  const description = text(body.description);

  if (
    !name ||
    !validEmail(email) ||
    !validPhone(phone) ||
    !location ||
    !rigType ||
    !problemType ||
    !URGENCY.has(urgency) ||
    body.consent !== true
  ) {
    return jsonError("Validation failed", 400);
  }

  const saved = await insertRow("help_requests", {
    name,
    email,
    phone,
    location,
    rig_type: rigType,
    problem_type: problemType,
    urgency,
    description: description || null,
    consent: true,
    consent_version: consentVersion(),
    ip,
    user_agent: userAgent(request),
  });

  if (!saved.ok || !saved.id) return jsonError("Server error", 500);

  const logged = await logConsent({
    submissionType: "help",
    submissionId: saved.id,
    ip,
    userAgent: userAgent(request),
  });
  if (!logged) return jsonError("Server error", 500);

  console.log("[api/help]", saved.id);
  return Response.json({ ok: true });
}
