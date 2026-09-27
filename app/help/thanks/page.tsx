import type { Metadata } from "next";
import { HELP_DISCLAIMER } from "@/lib/copy";

export const metadata: Metadata = { title: "Got it" };

export default async function HelpThanksPage({
  searchParams,
}: {
  searchParams: Promise<{ location?: string }>;
}) {
  const { location } = await searchParams;
  const place = location?.trim() ? location.trim() : "you";

  return (
    <div className="max-w-prose">
      <h1 className="font-display text-4xl text-navy">Got it.</h1>
      <p className="mt-4 text-lg">
        We&apos;ll connect you with a provider near {place} shortly. Check your email for a
        confirmation.
      </p>
      <p className="mt-6 text-sm text-mute">{HELP_DISCLAIMER}</p>
    </div>
  );
}
