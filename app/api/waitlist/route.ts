import { clientIp, honeypotTripped, jsonError, rateLimit, userAgent } from "@/lib/guard";
import { insertRow, logConsent } from "@/lib/store";

function validEmail(value: unknown): value is string {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return jsonError("Invalid email", 400);
  }

  if (honeypotTripped(body.website)) {
    return Response.json({ ok: true });
  }

  const ip = clientIp(request);
  if (!rateLimit(ip)) {
    return jsonError("Too many submissions. Try again later.", 429);
  }

  if (!validEmail(body.email)) {
    return jsonError("Invalid email", 400);
  }

  const corridor =
    typeof body.corridor === "string" && body.corridor.trim() ? body.corridor.trim() : "I-15";

  const saved = await insertRow("waitlist", {
    email: body.email.trim().toLowerCase(),
    corridor,
    ip,
    user_agent: userAgent(request),
  });

  if (!saved.ok) return jsonError("Server error", 500);
  if (saved.duplicate || !saved.id) {
    console.log("[api/waitlist]", "duplicate");
    return Response.json({ ok: true });
  }

  const logged = await logConsent({
    submissionType: "waitlist",
    submissionId: saved.id,
    ip,
    userAgent: userAgent(request),
  });
  if (!logged) return jsonError("Server error", 500);

  console.log("[api/waitlist]", saved.id);
  return Response.json({ ok: true });
}
