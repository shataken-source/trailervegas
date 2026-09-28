"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import {
  CERTIFIED,
  HELP_CONSENT,
  PROBLEM_TYPES,
  PROVIDE_CONSENT,
  RIG_TYPES,
  SERVICE_TYPES,
  URGENCY,
  WAITLIST_MICRO,
} from "@/lib/copy";

const field =
  "mt-1 w-full rounded border border-navy/20 bg-white px-3 py-3 text-base";
const label = "mt-4 block text-sm font-semibold";

function ErrorLine({ message }: { message: string }) {
  if (!message) return null;
  return <p className="mt-3 text-sm text-pink">{message}</p>;
}

export function WaitlistForm() {
  const [error, setError] = useState("");
  const [ok, setOk] = useState(false);
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setPending(true);
    const data = new FormData(event.currentTarget);
    const response = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email: data.get("email"),
        corridor: "I-15",
        website: data.get("website"),
      }),
    });
    setPending(false);
    const body = (await response.json()) as { ok?: boolean; error?: string };
    if (!response.ok || !body.ok) {
      setError(body.error ?? "Something went wrong.");
      return;
    }
    setOk(true);
  }

  if (ok) {
    return <p className="mt-4 font-semibold">You&apos;re on the list.</p>;
  }

  return (
    <form onSubmit={onSubmit} className="mt-4 max-w-md">
      <label className="block text-sm font-semibold" htmlFor="email">
        Email
      </label>
      <input id="email" name="email" type="email" required className={field} />
      <input
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0"
      />
      <button
        type="submit"
        disabled={pending}
        className="mt-4 rounded bg-pink px-5 py-3 font-semibold text-white"
      >
        Join the Waitlist
      </button>
      <p className="mt-3 text-sm text-mute">{WAITLIST_MICRO}</p>
      <ErrorLine message={error} />
    </form>
  );
}

export function HelpForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setPending(true);
    const data = new FormData(event.currentTarget);
    const location = String(data.get("location") ?? "");
    const response = await fetch("/api/help", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: data.get("name"),
        email: data.get("email"),
        phone: data.get("phone"),
        location,
        rig_type: data.get("rig_type"),
        problem_type: data.get("problem_type"),
        urgency: data.get("urgency"),
        description: data.get("description"),
        consent: data.get("consent") === "on",
        website: data.get("website"),
      }),
    });
    setPending(false);
    const body = (await response.json()) as { ok?: boolean; error?: string };
    if (!response.ok || !body.ok) {
      setError(body.error ?? "Something went wrong.");
      return;
    }
    router.push(`/help/thanks?location=${encodeURIComponent(location)}`);
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 max-w-xl">
      <label className={label} htmlFor="name">Name</label>
      <input id="name" name="name" required className={field} />
      <label className={label} htmlFor="help-email">Email</label>
      <input id="help-email" name="email" type="email" required className={field} />
      <label className={label} htmlFor="phone">Phone</label>
      <input id="phone" name="phone" type="tel" required className={field} />
      <label className={label} htmlFor="location">Location</label>
      <input id="location" name="location" required className={field} />
      <label className={label} htmlFor="rig_type">Rig type</label>
      <select id="rig_type" name="rig_type" required className={field} defaultValue="">
        <option value="" disabled>Choose</option>
        {RIG_TYPES.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
      <label className={label} htmlFor="problem_type">Problem type</label>
      <select id="problem_type" name="problem_type" required className={field} defaultValue="">
        <option value="" disabled>Choose</option>
        {PROBLEM_TYPES.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
      <fieldset className="mt-4">
        <legend className="text-sm font-semibold">Urgency</legend>
        {URGENCY.map((item) => (
          <label key={item.value} className="mt-2 flex gap-2">
            <input type="radio" name="urgency" value={item.value} required />
            {item.label}
          </label>
        ))}
      </fieldset>
      <label className={label} htmlFor="description">Description</label>
      <textarea id="description" name="description" rows={4} className={field} />
      <label className="mt-4 flex gap-2 text-sm">
        <input type="checkbox" name="consent" required />
        {HELP_CONSENT}
      </label>
      <input
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0"
      />
      <button
        type="submit"
        disabled={pending}
        className="mt-6 rounded bg-pink px-5 py-3 font-semibold text-white"
      >
        Submit
      </button>
      <ErrorLine message={error} />
    </form>
  );
}

export function ProvideForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setPending(true);
    const data = new FormData(event.currentTarget);
    const response = await fetch("/api/provide", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        business_name: data.get("business_name"),
        contact_name: data.get("contact_name"),
        email: data.get("email"),
        phone: data.get("phone"),
        website: data.get("website"),
        service_types: data.getAll("service_types"),
        service_area: data.get("service_area"),
        certified: data.get("certified"),
        years_in_business: data.get("years_in_business"),
        description: data.get("description"),
        consent: data.get("consent") === "on",
        fax: data.get("fax"),
      }),
    });
    setPending(false);
    const body = (await response.json()) as { ok?: boolean; error?: string };
    if (!response.ok || !body.ok) {
      setError(body.error ?? "Something went wrong.");
      return;
    }
    router.push("/provide/thanks");
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 max-w-xl">
      <label className={label} htmlFor="business_name">Business name</label>
      <input id="business_name" name="business_name" required className={field} />
      <label className={label} htmlFor="contact_name">Contact name</label>
      <input id="contact_name" name="contact_name" required className={field} />
      <label className={label} htmlFor="provide-email">Email</label>
      <input id="provide-email" name="email" type="email" required className={field} />
      <label className={label} htmlFor="provide-phone">Phone</label>
      <input id="provide-phone" name="phone" type="tel" required className={field} />
      <label className={label} htmlFor="biz-website">Website</label>
      <input id="biz-website" name="website" type="url" className={field} />
      <fieldset className="mt-4">
        <legend className="text-sm font-semibold">Service type</legend>
        {SERVICE_TYPES.map((item) => (
          <label key={item} className="mt-2 flex gap-2">
            <input type="checkbox" name="service_types" value={item} />
            {item}
          </label>
        ))}
      </fieldset>
      <label className={label} htmlFor="service_area">Service area</label>
      <input id="service_area" name="service_area" required className={field} />
      <fieldset className="mt-4">
        <legend className="text-sm font-semibold">Certified?</legend>
        {CERTIFIED.map((item) => (
          <label key={item} className="mt-2 flex gap-2">
            <input type="radio" name="certified" value={item} />
            {item}
          </label>
        ))}
      </fieldset>
      <label className={label} htmlFor="years">Years in business</label>
      <input id="years" name="years_in_business" type="number" min={0} className={field} />
      <label className={label} htmlFor="about-biz">Tell us about your business</label>
      <textarea id="about-biz" name="description" rows={4} className={field} />
      <label className="mt-4 flex gap-2 text-sm">
        <input type="checkbox" name="consent" required />
        {PROVIDE_CONSENT}
      </label>
      <input
        name="fax"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0"
      />
      <button
        type="submit"
        disabled={pending}
        className="mt-6 rounded bg-pink px-5 py-3 font-semibold text-white"
      >
        Submit
      </button>
      <ErrorLine message={error} />
    </form>
  );
}
