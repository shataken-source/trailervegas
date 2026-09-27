import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = { title: "Thanks" };

export default function ProvideThanksPage() {
  return (
    <div className="max-w-prose">
      <h1 className="font-display text-4xl text-navy">Thanks.</h1>
      <p className="mt-4 text-lg">
        We&apos;ll review your info and reach out within a few days. In the meantime, read our{" "}
        <Link href="/trust" className="underline">
          Trust Covenant
        </Link>{" "}
        to see how we handle reviews and rankings.
      </p>
    </div>
  );
}
