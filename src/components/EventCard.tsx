"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { EventItem } from "@/data/events";
import { getOutletBySlug } from "@/data/outlets";
import { fadeUp, fadeUpReduced } from "@/lib/motion";
import { whatsappUrl } from "@/lib/whatsapp";
import { ButtonLink } from "./Button";

export default function EventCard({ event }: { event: EventItem }) {
  const reduceMotion = useReducedMotion();
  const variants = reduceMotion ? fadeUpReduced : fadeUp;
  const outlet = getOutletBySlug(event.outletSlug);

  const viewMessage = `Hi Stories Bar & Kitchen — I'd like to know more about "${event.name}" at ${outlet?.fullTitle ?? event.outletSlug}.`;

  return (
    <motion.article
      variants={variants}
      className="group surface relative flex h-full flex-col overflow-hidden p-6 transition-colors duration-500 hover:border-hairline-gold md:p-7"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      <div className="flex items-start justify-between gap-3">
        <p className="eyebrow eyebrow-plain text-[0.58rem]">{event.type}</p>
        <span className="shrink-0 border border-line px-2.5 py-1 text-[0.55rem] uppercase tracking-[0.16em] text-muted">
          {event.entry}
        </span>
      </div>

      <h3 className="mt-3 font-display text-2xl leading-tight text-foreground transition-colors group-hover:text-accent-bright md:text-[1.7rem]">
        {event.name}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{event.description}</p>

      <dl className="mt-6 space-y-2 border-t border-line pt-5 text-sm text-muted">
        <div className="flex gap-2">
          <dt className="w-24 shrink-0 text-[0.62rem] uppercase tracking-[0.16em] text-muted/70">
            Location
          </dt>
          <dd className="text-foreground/85">{outlet?.shortName ?? event.outletSlug}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="w-24 shrink-0 text-[0.62rem] uppercase tracking-[0.16em] text-muted/70">
            Date
          </dt>
          <dd>{event.date}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="w-24 shrink-0 text-[0.62rem] uppercase tracking-[0.16em] text-muted/70">
            Time
          </dt>
          <dd>{event.time}</dd>
        </div>
        {event.featuring && (
          <div className="flex gap-2">
            <dt className="w-24 shrink-0 text-[0.62rem] uppercase tracking-[0.16em] text-muted/70">
              Featuring
            </dt>
            <dd>{event.featuring}</dd>
          </div>
        )}
        {event.genre && (
          <div className="flex gap-2">
            <dt className="w-24 shrink-0 text-[0.62rem] uppercase tracking-[0.16em] text-muted/70">
              Music
            </dt>
            <dd>{event.genre}</dd>
          </div>
        )}
      </dl>

      <div className="mt-auto flex flex-wrap gap-3 pt-7">
        {outlet && (
          <ButtonLink
            href={whatsappUrl(outlet.whatsapp, viewMessage)}
            variant="secondary"
            size="sm"
            external
          >
            View Event
          </ButtonLink>
        )}
        {outlet?.reservationUrl && (
          <ButtonLink href={outlet.reservationUrl} size="sm" external>
            Book a Table
          </ButtonLink>
        )}
      </div>
    </motion.article>
  );
}
