import type { Metadata } from "next";
import Link from "next/link";
import { REPO } from "@/lib/copy";
import { manifestoExcerpt, renderMarkdown } from "@/lib/markdown";

export const dynamic = "force-static";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  const excerpt = manifestoExcerpt().map((block) => renderMarkdown(block)).join("\n");

  return (
    <div className="doc max-w-prose">
      <h1>About</h1>
      <h2>Origin story</h2>
      <div dangerouslySetInnerHTML={{ __html: excerpt }} />
      <p>
        <Link href="/manifesto">Read the full manifesto</Link>
      </p>
      <h2>Who we are</h2>
      <p>
        Ownership is stated in the <Link href="/trust">Trust Covenant</Link>.
      </p>
      <h2>How we&apos;re funded</h2>
      <p>
        Funding commitments are in the <Link href="/trust">Trust Covenant</Link>.
      </p>
      <h2>How to get involved</h2>
      <ul>
        <li>
          <a href="/#waitlist">Join the waitlist</a>
        </li>
        <li>
          <Link href="/provide">Provider signup</Link>
        </li>
        <li>
          <a href={`${REPO}/issues/new`}>Suggest a listing</a>
        </li>
      </ul>
      <p>
        <a href={REPO}>GitHub repo</a>
      </p>
      <p>
        <Link href="/contact">Contact</Link>
      </p>
    </div>
  );
}
