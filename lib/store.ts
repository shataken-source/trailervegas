import { COVENANT_URL, consentVersion } from "./consent";
import { usersDb } from "./supabase";

export async function insertRow(
  table: string,
  row: Record<string, unknown>,
): Promise<{ ok: true; id?: string; duplicate?: boolean } | { ok: false }> {
  const db = usersDb();
  if (!db) return { ok: false };
  const { data, error } = await db.from(table).insert(row).select("id").single();
  if (error && error.code === "23505") return { ok: true, duplicate: true };
  if (error || !data) return { ok: false };
  return { ok: true, id: data.id as string };
}

export async function logConsent(input: {
  submissionType: "help" | "provide" | "waitlist";
  submissionId: string;
  ip: string;
  userAgent: string;
}): Promise<boolean> {
  const db = usersDb();
  if (!db) return false;
  const { error } = await db.from("consent_log").insert({
    submission_type: input.submissionType,
    submission_id: input.submissionId,
    consent_version: consentVersion(),
    covenant_url: COVENANT_URL,
    ip: input.ip,
    user_agent: input.userAgent,
  });
  return !error;
}

