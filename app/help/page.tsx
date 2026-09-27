import type { Metadata } from "next";
import { HelpForm } from "@/components/forms";
import { HELP_HEADLINE, HELP_SUBHEAD } from "@/lib/copy";

export const metadata: Metadata = { title: "Get Help" };

export default function HelpPage() {
  return (
    <div className="max-w-prose">
      <h1 className="font-display text-4xl text-navy md:text-5xl">{HELP_HEADLINE}</h1>
      <p className="mt-4 text-lg">{HELP_SUBHEAD}</p>
      <HelpForm />
    </div>
  );
}
