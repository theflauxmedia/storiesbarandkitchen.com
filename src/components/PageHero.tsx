"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, fadeUpReduced, stagger } from "@/lib/motion";

/**
 * Interior page hero. When `image` is set it renders a cinematic photo band
 * with a gold-framed inset; otherwise a quiet atmospheric wash.
 * `heading` accepts ReactNode so pages can pass <em> italic accents.
 */
export default function PageHero({
  eyebrow,
  chapter,
  heading,
  body,
  children,
  align = "left",
  image,
  imageAlt = "",
}: {
  eyebrow?: string;
  chapter?: string;
  heading: ReactNode;
  body?: string;
  children?: ReactNode;
  align?: "left" | "center";
  image?: string;
  imageAlt?: string;
}) {
  const reduceMotion = useReducedMotion();
  const variants = reduceMotion ? fadeUpReduced : fadeUp;
  const centered = align === "center";

  return (
    <section className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-44">
      {image ? (
        <>
          <div className="absolute inset-0" aria-hidden>
            <Image
              src={image}
              alt={imageAlt}
              fill
              preload
              loading="eager"
              fetchPriority="high"
              unoptimized
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,6,6,0.62)_0%,rgba(8,6,6,0.55)_45%,rgba(8,6,6,0.97)_100%)]" />
          </div>
        </>
      ) : (
        <>
          <div className="absolute inset-0 hero-wash opacity-80" aria-hidden />
          <div
            className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background"
            aria-hidden
          />
        </>
      )}

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className={`relative container-site ${
          centered ? "max-w-3xl text-center" : "max-w-4xl"
        }`}
      >
        {(eyebrow || chapter) && (
          <motion.p
            variants={variants}
            className={`eyebrow mb-5 ${centered ? "eyebrow-plain justify-center" : ""}`}
          >
            {chapter && <span className="chapter-num normal-case">{chapter}</span>}
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          variants={variants}
          className="headline-xl text-[clamp(2.6rem,7vw,5rem)] text-foreground"
        >
          {heading}
        </motion.h1>
        {body && (
          <motion.p
            variants={variants}
            className={`mt-6 text-base leading-relaxed md:text-lg ${
              image ? "text-foreground/80" : "text-muted"
            } ${centered ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
          >
            {body}
          </motion.p>
        )}
        {children && (
          <motion.div
            variants={variants}
            className={`mt-9 flex flex-wrap gap-3 ${centered ? "justify-center" : ""}`}
          >
            {children}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
