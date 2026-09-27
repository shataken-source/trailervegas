import type { Metadata } from "next";
import { DraftBanner } from "@/components/chrome";
import { NEVER_SELL, PRIVACY_TOPICS } from "@/lib/copy";

export const dynamic = "force-static";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <article className="max-w-prose">
      <DraftBanner />
      <h1 className="font-display text-4xl text-navy">Privacy</h1>
      <p className="mt-4 text-lg font-semibold">{NEVER_SELL}</p>
      <p className="mt-4">Get a lawyer to review this.</p>
      <ul className="mt-6 list-disc pl-5">
        {PRIVACY_TOPICS.map((topic) => (
          <li key={topic} className="mt-2">
            {topic}
          </li>
        ))}
      </ul>
    </article>
  );
}
