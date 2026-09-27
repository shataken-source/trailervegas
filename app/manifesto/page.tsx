import type { Metadata } from "next";
import Link from "next/link";
import { ShareLinks } from "@/components/chrome";
import { readRepoFile, renderMarkdown } from "@/lib/markdown";

export const dynamic = "force-static";

export const metadata: Metadata = { title: "Manifesto" };

export default function ManifestoPage() {
  const html = renderMarkdown(readRepoFile("docs/MANIFESTO.md"));
  return (
    <article className="doc mx-auto max-w-prose">
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <p>
        <Link href="/">Home</Link>
        {" · "}
        <Link href="/trust">Trust Covenant</Link>
      </p>
      <ShareLinks path="/manifesto" />
    </article>
  );
}
