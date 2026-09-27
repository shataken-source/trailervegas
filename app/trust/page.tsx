import type { Metadata } from "next";
import Link from "next/link";
import { ShareLinks } from "@/components/chrome";
import { readRepoFile, renderMarkdown } from "@/lib/markdown";

export const dynamic = "force-static";

export const metadata: Metadata = { title: "Trust Covenant" };

export default function TrustPage() {
  const html = renderMarkdown(readRepoFile("docs/TRUST_COVENANT.md"));
  return (
    <article className="doc mx-auto max-w-prose">
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <p>
        <Link href="/">Home</Link>
      </p>
      <ShareLinks path="/trust" />
    </article>
  );
}
