import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { REPO } from "@/lib/copy";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="max-w-prose">
      <h1 className="font-display text-4xl text-navy">Contact</h1>
      <p className="mt-4">
        <a className="underline" href={`${REPO}/issues/new`}>
          Open an issue
        </a>
      </p>
      <ContactForm />
    </div>
  );
}
