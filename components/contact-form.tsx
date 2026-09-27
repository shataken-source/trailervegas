"use client";

import { FormEvent, useState } from "react";
import { REPO } from "@/lib/copy";

const field =
  "mt-1 w-full rounded border border-navy/20 bg-white px-3 py-3 text-base";

export function ContactForm() {
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (String(data.get("website") ?? "").trim() || String(data.get("fax") ?? "").trim()) {
      setError("");
      window.location.href = "/contact";
      return;
    }
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const subject = String(data.get("subject") ?? "");
    const message = String(data.get("message") ?? "");
    const body = `${message}\n\n${name}\n${email}`;
    const url = `${REPO}/issues/new?title=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 max-w-xl">
      <label className="block text-sm font-semibold" htmlFor="contact-name">
        Name
      </label>
      <input id="contact-name" name="name" required className={field} />
      <label className="mt-4 block text-sm font-semibold" htmlFor="contact-email">
        Email
      </label>
      <input id="contact-email" name="email" type="email" required className={field} />
      <label className="mt-4 block text-sm font-semibold" htmlFor="subject">
        Subject
      </label>
      <input id="subject" name="subject" required className={field} />
      <label className="mt-4 block text-sm font-semibold" htmlFor="message">
        Message
      </label>
      <textarea id="message" name="message" required rows={5} className={field} />
      <input
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0"
      />
      <input
        name="fax"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0"
      />
      <button type="submit" className="mt-6 rounded bg-pink px-5 py-3 font-semibold text-white">
        Submit
      </button>
      {error ? <p className="mt-3 text-sm text-pink">{error}</p> : null}
    </form>
  );
}
