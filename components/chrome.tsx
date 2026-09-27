import Link from "next/link";
import { INDEPENDENT, REPO } from "@/lib/copy";

const links = [
  ["/manifesto", "Manifesto"],
  ["/trust", "Trust Covenant"],
  ["/about", "About"],
  ["/contact", "Contact"],
  ["/privacy", "Privacy"],
  ["/terms", "Terms"],
] as const;

export function Header() {
  return (
    <header className="border-b border-navy/10 bg-paper">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" aria-label="TrailerVegas home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="TrailerVegas" className="h-10 w-auto" />
        </Link>
        <nav className="flex flex-wrap gap-4 text-sm">
          <Link href="/help" className="font-semibold text-pink">
            Get Help Now
          </Link>
          <Link href="/provide">I Can Help</Link>
          <Link href="/manifesto">Manifesto</Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-16 border-t border-navy/10 bg-navy text-paper">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <p className="max-w-prose text-lg">
          Public promise — legal review pending. See the{" "}
          <Link href="/trust" className="text-gold underline">
            Trust Covenant
          </Link>
          .
        </p>
        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {links.map(([href, label]) => (
            <li key={href}>
              <Link href={href} className="hover:text-gold">
                {label}
              </Link>
            </li>
          ))}
          <li>
            <a href={REPO} className="hover:text-gold">
              GitHub
            </a>
          </li>
        </ul>
        <p className="mt-6 text-sm text-paper/70">{INDEPENDENT}</p>
        <p className="mt-2 text-sm text-paper/70">© 2026 TrailerVegas</p>
      </div>
    </footer>
  );
}

export function DraftBanner() {
  return (
    <p className="mb-6 border border-gold bg-gold/20 px-4 py-3 font-semibold">
      DRAFT. Legal review pending.
    </p>
  );
}

export function ShareLinks({ path }: { path: string }) {
  const url = `https://trailervegas.com${path}`;
  const share = encodeURIComponent(url);
  return (
    <p className="mt-8 text-sm">
      Share:{" "}
      <a
        className="underline"
        href={`https://twitter.com/intent/tweet?url=${share}`}
      >
        X
      </a>
      {" · "}
      <a
        className="underline"
        href={`https://www.facebook.com/sharer/sharer.php?u=${share}`}
      >
        Facebook
      </a>
    </p>
  );
}
