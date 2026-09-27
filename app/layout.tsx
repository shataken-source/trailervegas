import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import Script from "next/script";
import { Footer, Header } from "@/components/chrome";
import { DESCRIPTOR, TAGLINE } from "@/lib/copy";
import "./globals.css";

const display = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://trailervegas.com"),
  title: {
    default: `TrailerVegas — ${TAGLINE}`,
    template: "%s — TrailerVegas",
  },
  description: DESCRIPTOR,
  openGraph: {
    title: `TrailerVegas — ${TAGLINE}`,
    description: DESCRIPTOR,
    url: "https://trailervegas.com",
    siteName: "TrailerVegas",
    images: [{ url: "/logo.svg", width: 720, height: 140, alt: "TrailerVegas" }],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans">
        <Header />
        <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>
        <Footer />
        <Script
          defer
          data-domain="trailervegas.com"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
