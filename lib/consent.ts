import { readRepoFile } from "./markdown";

export function consentVersion(): string {
  const raw = readRepoFile("docs/TRUST_COVENANT.md");
  const match = raw.match(/\*\*Version\s+([0-9.]+)/);
  return match ? `v${match[1]}` : "v1.2";
}

export const COVENANT_URL = "https://trailervegas.com/trust";
