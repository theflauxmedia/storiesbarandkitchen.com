"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { events, eventTypes } from "@/data/events";
import { outlets } from "@/data/outlets";
import { fadeUp, fadeUpReduced, stagger, viewportOnce } from "@/lib/motion";
import EventCard from "./EventCard";
import EmptyState from "./EmptyState";

const selectClass =
  "border border-line bg-panel px-3 py-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted outline-none transition-colors hover:border-hairline-gold focus:border-hairline-gold";

const genres = Array.from(
  new Set(events.map((e) => e.genre).filter((g): g is string => Boolean(g))),
).sort();

const entryOptions = Array.from(new Set(events.map((e) => e.entry))).sort();

const artists = Array.from(
  new Set(events.map((e) => e.featuring).filter((a): a is string => Boolean(a))),
).sort();

const dates = Array.from(new Set(events.map((e) => e.date))).sort();

function EventsExplorerInner() {
  const reduceMotion = useReducedMotion();
  const variants = reduceMotion ? fadeUpReduced : fadeUp;
  const searchParams = useSearchParams();
  const queryLocation = searchParams.get("location");
  const validQueryLocation =
    queryLocation && outlets.some((o) => o.slug === queryLocation)
      ? queryLocation
      : null;

  const [location, setLocation] = useState(validQueryLocation ?? "all");
  const [lastQueryLocation, setLastQueryLocation] = useState(validQueryLocation);
  const [type, setType] = useState("all");
  const [audience, setAudience] = useState("all");
  const [genre, setGenre] = useState("all");
  const [entry, setEntry] = useState("all");
  const [artist, setArtist] = useState("all");
  const [date, setDate] = useState("all");

  // Follow ?location= changes from client-side navigation (render adjustment).
  if (validQueryLocation !== lastQueryLocation) {
    setLastQueryLocation(validQueryLocation);
    if (validQueryLocation) setLocation(validQueryLocation);
  }

  const filtered = useMemo(() => {
    return events.filter((event) => {
      if (location !== "all" && event.outletSlug !== location) return false;
      if (type !== "all" && event.type !== type) return false;
      if (audience === "family" && !event.familyFriendly) return false;
      if (audience === "nightlife" && event.familyFriendly) return false;
      if (genre !== "all" && event.genre !== genre) return false;
      if (entry !== "all" && event.entry !== entry) return false;
      if (artist !== "all" && event.featuring !== artist) return false;
      if (date !== "all" && event.date !== date) return false;
      return true;
    });
  }, [location, type, audience, genre, entry, artist, date]);

  return (
    <div id="upcoming-events">
      <div className="mb-8 flex flex-wrap gap-3">
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className={selectClass}
          aria-label="Filter by location"
        >
          <option value="all">All Locations</option>
          {outlets.map((o) => (
            <option key={o.slug} value={o.slug}>
              {o.shortName}
            </option>
          ))}
        </select>
        <select
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={selectClass}
          aria-label="Filter by date"
        >
          <option value="all">All Dates</option>
          {dates.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className={selectClass}
          aria-label="Filter by event type"
        >
          <option value="all">All Event Types</option>
          {eventTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        <select
          value={audience}
          onChange={(e) => setAudience(e.target.value)}
          className={selectClass}
          aria-label="Filter by audience"
        >
          <option value="all">Family-friendly or Nightlife</option>
          <option value="family">Family-friendly</option>
          <option value="nightlife">Nightlife</option>
        </select>
        {genres.length > 0 && (
          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className={selectClass}
            aria-label="Filter by music genre"
          >
            <option value="all">All Genres</option>
            {genres.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        )}
        {entryOptions.length > 0 && (
          <select
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            className={selectClass}
            aria-label="Filter by entry type"
          >
            <option value="all">Free or Ticketed</option>
            {entryOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        )}
        {artists.length > 0 && (
          <select
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            className={selectClass}
            aria-label="Filter by artist"
          >
            <option value="all">All Artists</option>
            {artists.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        )}
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          title="No events match those filters"
          body="Try a different location, date, event type or audience — or check back soon as the calendar updates."
        />
      ) : (
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((event) => (
            <motion.div key={event.id} variants={variants}>
              <EventCard event={event} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}

export default function EventsExplorer() {
  return (
    <Suspense
      fallback={
        <div id="upcoming-events" className="text-sm text-muted">
          Loading events…
        </div>
      }
    >
      <EventsExplorerInner />
    </Suspense>
  );
}
