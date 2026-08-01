"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, fadeUpReduced, stagger, viewportOnce } from "@/lib/motion";
import { brandImagery } from "@/data/imagery";
import { ButtonLink } from "./Button";

export type CtaButton = { label: string; href: string };

/**
 * Cinematic closing call-to-action: full-bleed night photography behind an
 * oversized serif headline. `heading` accepts ReactNode for <em> accents.
 */
export default function FinalCta({
  heading,
  body,
  buttons,
  image = brandImagery.finalCta,
}: {
  heading: ReactNode;
  body?: string;
  buttons: CtaButton[];
  image?: string;
}) {
  const reduceMotion = useReducedMotion();
  const variants = reduceMotion ? fadeUpReduced : fadeUp;

  return (
    <section className="relative overflow-hidden border-t border-hairline-gold">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={image}
          alt=""
          fill
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_90%_at_50%_50%,rgba(8,6,6,0.55),rgba(8,6,6,0.92))]" />
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative container-site flex min-h-[60svh] max-w-4xl flex-col items-center justify-center py-24 text-center md:py-32"
      >
        <motion.div variants={variants} className="hairline mb-8 w-24" />
        <motion.h2
          variants={variants}
          className="headline-xl text-[clamp(2.4rem,6vw,4.5rem)] text-foreground"
        >
          {heading}
        </motion.h2>
        {body && (
          <motion.p
            variants={variants}
            className="mx-auto mt-5 max-w-xl text-base text-foreground/75 md:text-lg"
          >
            {body}
          </motion.p>
        )}
        <motion.div
          variants={variants}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          {buttons.map((btn, i) => (
            <ButtonLink
              key={btn.label}
              href={btn.href}
              variant={i === 0 ? "primary" : "secondary"}
            >
              {btn.label}
            </ButtonLink>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
