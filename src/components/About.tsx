"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { siteConfig } from "@/data/outlets";
import { fadeUp, fadeUpReduced, stagger, viewportOnce } from "@/lib/motion";

function formatStat(value: number, latest: number) {
  return Number.isInteger(value)
    ? String(Math.round(latest))
    : latest.toFixed(1);
}

function StatNumber({
  value,
  suffix,
  active,
}: {
  value: number;
  suffix: string;
  active: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    stiffness: 60,
    damping: 20,
    mass: 0.8,
  });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!active || reduceMotion) return;
    motionValue.set(value);
  }, [active, value, motionValue, reduceMotion]);

  useEffect(() => {
    if (reduceMotion) return;
    const unsub = spring.on("change", (latest) => {
      setDisplay(formatStat(value, latest));
    });
    return unsub;
  }, [spring, value, reduceMotion]);

  const shown = reduceMotion && active ? formatStat(value, value) : display;

  return (
    <span>
      {shown}
      {suffix}
    </span>
  );
}

export default function About() {
  const reduceMotion = useReducedMotion();
  const variants = reduceMotion ? fadeUpReduced : fadeUp;
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.4 });

  return (
    <section id="story" className="relative overflow-hidden py-24 md:py-32">
      <div
        className="radial-glow left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 opacity-70"
        aria-hidden
      />
      <div className="grain opacity-[0.03]" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p
            variants={variants}
            className="mb-5 text-[0.7rem] uppercase tracking-[0.3em] text-accent-bright"
          >
            Our Story
          </motion.p>
          <motion.h2
            variants={variants}
            className="font-display text-4xl leading-tight tracking-[-0.02em] text-foreground md:text-5xl lg:text-6xl"
          >
            Bengaluru&apos;s rooftop bar &amp; kitchen destination
          </motion.h2>
          <motion.div variants={variants} className="mx-auto mt-8 hairline w-24" />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mt-12 max-w-2xl space-y-6 text-center text-base leading-relaxed text-muted md:text-lg"
        >
          <motion.p variants={variants}>
            Stories Bar &amp; Kitchen is where Bengaluru gathers — for long
            dinners under open skies, a full bar poured with care, and nights
            that linger. Across four thoughtfully located outlets, we serve
            North Indian classics, Continental favourites, Italian plates, and
            bar food made for sharing.
          </motion.p>
          <motion.p variants={variants}>
            Catch live sports on the screens, settle into rooftop ambience as
            the city lights up, and stay for the nightlife. Guests consistently
            rate us 4.3–4.4 stars — for the food, the pours, and the feeling
            that every meal tells a story.
          </motion.p>
          <motion.p variants={variants}>
            From HSR to Rajajinagar, Nagarbhavi to R.R Nagar — same warmth,
            same craft, four chapters of one brand.
          </motion.p>
        </motion.div>

        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-3"
        >
          {siteConfig.highlights.map((item) => (
            <motion.li
              key={item}
              variants={variants}
              className="rounded-full border border-hairline-gold bg-accent-soft px-4 py-2 text-[0.7rem] uppercase tracking-[0.16em] text-accent-bright"
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>

        <div
          ref={statsRef}
          className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-6 border-y border-line py-10 md:gap-10"
        >
          {siteConfig.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl text-accent-bright md:text-5xl">
                <StatNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  active={statsInView}
                />
              </p>
              <p className="mt-2 text-[0.65rem] uppercase tracking-[0.22em] text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
