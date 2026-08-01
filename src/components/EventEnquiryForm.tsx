"use client";

import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { outlets } from "@/data/outlets";
import { eventsPage } from "@/data/content";
import { buildEventEnquiryMessage, whatsappUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./icons";

export default function EventEnquiryForm({
  submitLabel = "Submit Event Enquiry",
}: {
  submitLabel?: string;
}) {
  const reduceMotion = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);
    const locationSlug = String(data.get("location") ?? outlets[0].slug);
    const outlet = outlets.find((o) => o.slug === locationSlug) ?? outlets[0];

    const message = buildEventEnquiryMessage({
      outletName: outlet.fullTitle,
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      email: String(data.get("email") ?? ""),
      company: String(data.get("company") ?? ""),
      eventType: String(data.get("eventType") ?? ""),
      date: String(data.get("date") ?? ""),
      time: String(data.get("time") ?? ""),
      guests: String(data.get("guests") ?? ""),
      budget: String(data.get("budget") ?? ""),
      food: String(data.get("food") ?? ""),
      beverage: String(data.get("beverage") ?? ""),
      entertainment: String(data.get("entertainment") ?? ""),
      seating: String(data.get("seating") ?? ""),
      requests: String(data.get("requests") ?? ""),
    });

    window.open(whatsappUrl(outlet.whatsapp, message), "_blank", "noopener,noreferrer");
    form.reset();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="surface p-8 text-center md:p-10">
        <div className="hairline mx-auto mb-6 w-16" />
        <h3 className="font-display text-2xl text-foreground md:text-3xl">
          {eventsPage.confirmation.heading}
        </h3>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted">
          We&apos;ve opened WhatsApp with your event details pre-filled — press send and our
          team will review your preferred location, date, group size and requirements
          before contacting you with suitable options. A booking is confirmed only after
          approval from the selected outlet and completion of any required advance payment.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 accent-underline text-sm text-accent-bright"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="surface space-y-5 p-6 md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="event-name">Full name</label>
          <input id="event-name" name="name" required autoComplete="name" className="field" placeholder="Your name" />
        </div>
        <div>
          <label className="field-label" htmlFor="event-phone">Mobile number</label>
          <input id="event-phone" name="phone" required autoComplete="tel" inputMode="tel" className="field" placeholder="10-digit mobile number" />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="event-email">Email address</label>
          <input id="event-email" name="email" type="email" autoComplete="email" className="field" placeholder="you@email.com" />
        </div>
        <div>
          <label className="field-label" htmlFor="event-company">Company name (when applicable)</label>
          <input id="event-company" name="company" className="field" placeholder="Optional" />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="event-location">Preferred location</label>
          <select id="event-location" name="location" required defaultValue={outlets[0].slug} className="field">
            {outlets.map((o) => (
              <option key={o.slug} value={o.slug}>{o.fullTitle}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="field-label" htmlFor="event-type">Event type</label>
          <select id="event-type" name="eventType" required defaultValue="" className="field">
            <option value="" disabled>Select an event type</option>
            {eventsPage.eventTypeOptions.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <div>
          <label className="field-label" htmlFor="event-date">Preferred event date</label>
          <input id="event-date" name="date" type="date" required className="field" />
        </div>
        <div>
          <label className="field-label" htmlFor="event-time">Preferred time</label>
          <input id="event-time" name="time" type="time" required className="field" />
        </div>
        <div>
          <label className="field-label" htmlFor="event-guests">Expected number of guests</label>
          <input id="event-guests" name="guests" type="number" min={1} required className="field" placeholder="e.g. 20" />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="event-food">Food preference</label>
          <input id="event-food" name="food" className="field" placeholder="Veg, non-veg, mixed…" />
        </div>
        <div>
          <label className="field-label" htmlFor="event-beverage">Beverage requirements</label>
          <input id="event-beverage" name="beverage" className="field" placeholder="Cocktails, mocktails, beer…" />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="event-entertainment">Entertainment requirements</label>
          <input id="event-entertainment" name="entertainment" className="field" placeholder="DJ, live music, karaoke…" />
        </div>
        <div>
          <label className="field-label" htmlFor="event-seating">Seating requirements</label>
          <input id="event-seating" name="seating" className="field" placeholder="Private section, dance floor access…" />
        </div>
      </div>

      <div>
        <label className="field-label" htmlFor="event-budget">Approximate budget</label>
        <input id="event-budget" name="budget" className="field" placeholder="Optional" />
      </div>

      <div>
        <label className="field-label" htmlFor="event-requests">Additional requirements</label>
        <textarea id="event-requests" name="requests" rows={3} className="field" placeholder="Anything else we should know?" />
      </div>

      <motion.button
        type="submit"
        whileTap={reduceMotion ? undefined : { scale: 0.98 }}
        className="btn-primary w-full md:w-auto"
      >
        <WhatsAppIcon className="h-4 w-4" />
        {submitLabel}
      </motion.button>
      <p className="text-xs leading-relaxed text-muted">
        Submitting opens WhatsApp with your enquiry pre-filled for the selected outlet.
        An event is confirmed only after approval from the outlet and completion of any
        required advance payment.
      </p>
    </form>
  );
}
