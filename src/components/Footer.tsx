"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { outlets, siteConfig } from "@/data/outlets";
import { fadeUp, fadeUpReduced, stagger, viewportOnce } from "@/lib/motion";

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

export default function Footer() {
  const reduceMotion = useReducedMotion();
  const variants = reduceMotion ? fadeUpReduced : fadeUp;

  return (
    <footer id="visit" className="relative overflow-hidden border-t border-line">
      <div className="grain opacity-[0.035]" aria-hidden />
      <div
        className="radial-glow left-1/2 top-0 h-[360px] w-[640px] -translate-x-1/2 opacity-60"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-14 lg:grid-cols-[1.1fr_1fr]"
        >
          <div>
            <motion.div variants={variants} className="flex items-center gap-4">
              <Image
                src="/logo-white.webp"
                alt="Stories Bar & Kitchen"
                width={256}
                height={192}
                className="h-14 w-auto object-contain md:h-16"
              />
            </motion.div>

            <motion.p
              variants={variants}
              className="mt-8 max-w-md font-display text-2xl italic leading-snug text-[#d8d0c0] md:text-3xl"
            >
              {siteConfig.closing}
            </motion.p>

            <motion.a
              variants={variants}
              href={`mailto:${siteConfig.email}`}
              className="mt-6 inline-block accent-underline text-sm text-accent-bright"
            >
              {siteConfig.email}
            </motion.a>

            <motion.div variants={variants} className="mt-8 flex flex-wrap gap-3">
              {outlets.map((outlet) => (
                <a
                  key={outlet.id}
                  href={outlet.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${outlet.name} Instagram`}
                  className="rounded-full border border-hairline-gold p-3 text-accent-bright transition-colors hover:bg-accent-soft"
                  title={outlet.name}
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div variants={variants}>
            <p className="mb-6 text-[0.7rem] uppercase tracking-[0.28em] text-accent-bright">
              Visit Us
            </p>
            <ul className="space-y-5">
              {outlets.map((outlet) => (
                <li key={outlet.id} className="border-b border-line pb-5 last:border-0 last:pb-0">
                  <p className="font-display text-xl text-foreground">
                    {outlet.name}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {outlet.address}
                  </p>
                  <a
                    href={`tel:${outlet.phone}`}
                    className="mt-2 inline-block text-sm text-accent-bright accent-underline"
                  >
                    {outlet.phoneDisplay}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-6 text-center text-[0.7rem] tracking-[0.08em] text-muted md:flex-row md:px-8 md:text-left">
          <p>© 2026 Stories Bar &amp; Kitchen. All rights reserved.</p>
          <p className="uppercase tracking-[0.2em]">Bengaluru · India</p>
        </div>
      </div>
    </footer>
  );
}
