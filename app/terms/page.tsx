import type { Metadata } from "next";
import { DraftBanner } from "@/components/chrome";
import { TERMS_TOPICS } from "@/lib/copy";

export const dynamic = "force-static";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <article className="max-w-prose">
      <DraftBanner />
      <h1 className="font-display text-4xl text-navy">Terms</h1>
      <p className="mt-4">Get a lawyer to review this.</p>
      <ul className="mt-6 list-disc pl-5">
        {TERMS_TOPICS.map((topic) => (
          <li key={topic} className="mt-2">
            {topic}
          </li>
        ))}
      </ul>
    </article>
  );
}
