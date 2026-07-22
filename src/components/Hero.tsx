"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/data/outlets";
import { fadeUp, fadeUpReduced, stagger } from "@/lib/motion";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0.15]);

  const variants = reduceMotion ? fadeUpReduced : fadeUp;

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <motion.div
        style={reduceMotion ? undefined : { scale: bgScale, y: bgY }}
        className="absolute inset-0"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[#0b0b0d]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(200,161,90,0.16),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(80,55,20,0.35),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,13,0.35)_0%,rgba(11,11,13,0.55)_45%,rgba(11,11,13,0.96)_100%)]" />
        <div className="grain" />
      </motion.div>

      <motion.div
        style={reduceMotion ? undefined : { opacity: contentOpacity }}
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-5 pb-20 pt-28 text-center md:px-8"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.p
            variants={variants}
            className="mb-6 text-[0.7rem] uppercase tracking-[0.32em] text-accent-bright md:text-[0.75rem]"
          >
            {siteConfig.eyebrow}
          </motion.p>

          <motion.h1
            variants={variants}
            className="font-display text-[clamp(2.75rem,9vw,6.5rem)] leading-[0.95] tracking-[-0.02em] text-foreground"
          >
            Stories
            <span className="mt-2 block text-[0.42em] font-normal tracking-[0.18em] text-muted">
              Bar &amp; Kitchen
            </span>
          </motion.h1>

          <motion.p
            variants={variants}
            className="mt-7 max-w-xl font-display text-xl italic text-[#d8d0c0] md:text-2xl"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div variants={variants} className="mt-10">
            <motion.a
              href="#outlets"
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="inline-flex items-center gap-3 rounded-full bg-accent px-7 py-3.5 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[#0b0b0d] shadow-[0_0_40px_rgba(200,161,90,0.25)] transition-colors hover:bg-accent-bright"
            >
              Explore Our Outlets
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
