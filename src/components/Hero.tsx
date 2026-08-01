"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { home } from "@/data/content";
import { brandImagery } from "@/data/imagery";
import { fadeUp, fadeUpReduced, stagger } from "@/lib/motion";
import { ButtonLink } from "./Button";
import HeroSlider from "./HeroSlider";

/** Renders the last word of the headline in italic gold. */
function AccentedHeading({ text }: { text: string }) {
  const words = text.trim().split(" ");
  const last = words.pop();
  return (
    <>
      {words.join(" ")} <em>{last}</em>
    </>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.15]);
  const variants = reduceMotion ? fadeUpReduced : fadeUp;

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-end overflow-hidden pb-20 pt-28 md:pb-24"
    >
      <motion.div
        style={reduceMotion ? undefined : { y: bgY }}
        className="absolute inset-0"
        aria-hidden
      >
        <HeroSlider slides={brandImagery.homeHeroSlides} />
      </motion.div>

      {/* Layered scrims — keeps photo visible while anchoring copy readability */}
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,6,6,0.78)_0%,rgba(8,6,6,0.35)_28%,rgba(8,6,6,0.55)_52%,rgba(8,6,6,0.92)_78%,rgba(8,6,6,0.98)_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,6,6,0.88)_0%,rgba(8,6,6,0.65)_42%,rgba(8,6,6,0.2)_68%,transparent_88%)]"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 h-[72%] bg-[linear-gradient(180deg,transparent_0%,rgba(8,6,6,0.5)_40%,rgba(8,6,6,0.94)_100%)] md:h-[65%]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_25%_95%,rgba(201,157,79,0.1),transparent_58%)]"
        aria-hidden
      />

      <motion.div
        style={reduceMotion ? undefined : { opacity: contentOpacity }}
        className="relative z-10 container-site w-full"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.p variants={variants} className="eyebrow mb-6 [text-shadow:0_1px_16px_rgba(8,6,6,0.6)]">
            Bar · Kitchen · Live Music · Celebrations
          </motion.p>

          <motion.h1
            variants={variants}
            className="headline-xl text-[clamp(3rem,9.5vw,6.5rem)] text-foreground [text-shadow:0_2px_32px_rgba(8,6,6,0.75)]"
          >
            <AccentedHeading text={home.hero.heading} />
          </motion.h1>

          <motion.p
            variants={variants}
            className="mt-7 max-w-xl text-base leading-relaxed text-foreground/90 md:text-lg [text-shadow:0_1px_24px_rgba(8,6,6,0.65)]"
          >
            {home.hero.body}
          </motion.p>

          <motion.p
            variants={variants}
            className="mt-3 max-w-xl text-sm leading-relaxed text-foreground/75 md:text-base [text-shadow:0_1px_20px_rgba(8,6,6,0.55)]"
          >
            {home.hero.intro}
          </motion.p>

          <motion.div variants={variants} className="mt-10 flex flex-wrap gap-3">
            {home.hero.buttons.map((btn, i) => (
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

        {/* Bottom meta strip */}
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9 }}
          className="mt-14 hidden items-center justify-between border-t border-line pt-5 text-[0.62rem] uppercase tracking-[0.28em] text-foreground/55 md:flex"
        >
          <span>HSR Layout</span>
          <span>Nagarbhavi</span>
          <span>Rajajinagar</span>
          <span className="text-accent-bright">Open Daily · 12 Noon – 1 AM</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
