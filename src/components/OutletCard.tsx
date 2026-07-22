"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Outlet } from "@/data/outlets";
import { fadeUp, fadeUpReduced } from "@/lib/motion";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path d="M6.5 3.5h3l1.5 4.5-2 1.5a13 13 0 0 0 6 6l1.5-2 4.5 1.5v3a2 2 0 0 1-2 2A16.5 16.5 0 0 1 4.5 5.5a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export default function OutletCard({
  outlet,
  index,
}: {
  outlet: Outlet;
  index: number;
}) {
  const reduceMotion = useReducedMotion();
  const variants = reduceMotion ? fadeUpReduced : fadeUp;

  return (
    <motion.article
      variants={variants}
      custom={index}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -6,
              boxShadow: "0 24px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(229,183,105,0.45), 0 0 40px rgba(200,161,90,0.18)",
            }
      }
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="glass-panel group flex h-full flex-col rounded-2xl p-6 md:p-7"
    >
      <div className="mb-5 flex items-start justify-between gap-3">
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-accent-bright">
            Outlet {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-2 font-display text-3xl leading-none tracking-[-0.02em] text-foreground">
            {outlet.name}
          </h3>
          {outlet.shortName !== outlet.name && (
            <p className="mt-1 text-sm text-muted">{outlet.shortName}</p>
          )}
        </div>
        <a
          href={outlet.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${outlet.name} on Instagram`}
          className="rounded-full border border-hairline-gold p-2.5 text-accent-bright transition-colors hover:bg-accent-soft"
        >
          <InstagramIcon className="h-4 w-4" />
        </a>
      </div>

      <p className="text-sm leading-relaxed text-muted">{outlet.address}</p>

      <div className="mt-5 space-y-3 text-sm">
        <a
          href={`tel:${outlet.phone}`}
          className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-accent-bright"
        >
          <PhoneIcon className="h-4 w-4 text-accent" />
          <span className="accent-underline">{outlet.phoneDisplay}</span>
        </a>
        <p className="text-muted">
          <span className="text-[0.65rem] uppercase tracking-[0.18em] text-accent-bright">
            Hours
          </span>
          <span className="mt-1 block text-foreground">{outlet.hours}</span>
        </p>
      </div>

      <ul className="mt-6 flex flex-wrap gap-2">
        {outlet.cuisines.map((cuisine) => (
          <li
            key={cuisine}
            className="rounded-full border border-line px-3 py-1 text-[0.65rem] uppercase tracking-[0.12em] text-muted"
          >
            {cuisine}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex gap-3 pt-7">
        <motion.a
          href={`tel:${outlet.phone}`}
          whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          className="inline-flex flex-1 items-center justify-center rounded-full bg-accent px-4 py-2.5 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[#0b0b0d] transition-colors hover:bg-accent-bright"
        >
          Call
        </motion.a>
        <motion.a
          href={outlet.instagram}
          target="_blank"
          rel="noopener noreferrer"
          whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          className="inline-flex flex-1 items-center justify-center rounded-full border border-hairline-gold px-4 py-2.5 text-[0.68rem] uppercase tracking-[0.16em] text-accent-bright transition-colors hover:bg-accent-soft"
        >
          Instagram
        </motion.a>
      </div>
    </motion.article>
  );
}
