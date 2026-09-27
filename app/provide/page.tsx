import type { Metadata } from "next";
import { ProvideForm } from "@/components/forms";
import { PROVIDE_HEADLINE, PROVIDE_SUBHEAD } from "@/lib/copy";

export const metadata: Metadata = { title: "I Can Help" };

export default function ProvidePage() {
  return (
    <div className="max-w-prose">
      <h1 className="font-display text-4xl text-navy md:text-5xl">{PROVIDE_HEADLINE}</h1>
      <p className="mt-4 text-lg">{PROVIDE_SUBHEAD}</p>
      <ProvideForm />
    </div>
  );
}
