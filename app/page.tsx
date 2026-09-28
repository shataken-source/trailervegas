import Link from "next/link";
import { WaitlistForm } from "@/components/forms";
import {
  BUILDING,
  DESCRIPTOR,
  EYEBROW,
  PROBLEMS,
  SUBHEAD,
  TAGLINE,
  TRUST_CALLOUT,
  WAITLIST_HEADLINE,
} from "@/lib/copy";
import { manifestoExcerpt, renderMarkdown } from "@/lib/markdown";

export const dynamic = "force-static";

export default function HomePage() {
  const excerpt = manifestoExcerpt().map((block) => renderMarkdown(block)).join("\n");

  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-wide text-pink">{EYEBROW}</p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight text-navy md:text-6xl">
        {TAGLINE}
      </h1>
      <p className="mt-4 max-w-2xl text-lg">{DESCRIPTOR}</p>
      <p className="mt-3 max-w-2xl">{SUBHEAD}</p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Link href="/help" className="rounded bg-pink px-5 py-3 font-semibold text-white">
          Get Help Now
        </Link>
        <a href="#waitlist" className="rounded border border-navy px-5 py-3 font-semibold">
          Join the Waitlist
        </a>
        <Link href="/manifesto" className="underline">
          Read the Manifesto
        </Link>
      </div>

      <section className="mt-16">
        <h2 className="font-display text-3xl text-navy">The Problem</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {PROBLEMS.map((item) => (
            <article key={item.title}>
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="mt-2">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-3xl text-navy">What We&apos;re Building</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {BUILDING.map((item) => (
            <article key={item.title} className="border border-navy/10 bg-white p-5">
              <h3 className="font-display text-2xl text-navy">{item.title}</h3>
              <p className="mt-2">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 border-l-4 border-gold bg-white p-6">
        <h2 className="font-display text-3xl text-navy">The Trust Covenant</h2>
        <p className="mt-3 max-w-prose text-lg">{TRUST_CALLOUT}</p>
        <Link href="/trust" className="mt-4 inline-block font-semibold text-pink underline">
          Read it
        </Link>
      </section>

      <section id="waitlist" className="mt-16">
        <h2 className="font-display text-3xl text-navy">{WAITLIST_HEADLINE}</h2>
        <WaitlistForm />
      </section>

      <section className="doc mt-16 max-w-prose">
        <h2 className="font-display text-3xl text-navy">The Manifesto</h2>
        <div dangerouslySetInnerHTML={{ __html: excerpt }} />
        <Link href="/manifesto" className="font-semibold underline">
          Read the full manifesto →
        </Link>
      </section>
    </div>
  );
}
