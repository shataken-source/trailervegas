const hits = new Map<string, number[]>();
const HOUR = 60 * 60 * 1000;
const LIMIT = 3;

export function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return "unknown";
}

export function rateLimit(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < HOUR);
  if (recent.length >= LIMIT) {
    hits.set(ip, recent);
    return false;
  }
  recent.push(now);
  hits.set(ip, recent);
  return true;
}

export function honeypotTripped(value: unknown): boolean {
  return typeof value === "string" && value.trim() !== "";
}

export function jsonError(message: string, status: number): Response {
  return Response.json({ ok: false, error: message }, { status });
}

export function userAgent(request: Request): string {
  return request.headers.get("user-agent") ?? "";
}
