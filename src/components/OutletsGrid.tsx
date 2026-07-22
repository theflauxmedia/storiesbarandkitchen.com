"use client";

import { motion, useReducedMotion } from "framer-motion";
import { outlets } from "@/data/outlets";
import { fadeUp, fadeUpReduced, stagger, viewportOnce } from "@/lib/motion";
import OutletCard from "./OutletCard";

export default function OutletsGrid() {
  const reduceMotion = useReducedMotion();
  const variants = reduceMotion ? fadeUpReduced : fadeUp;

  return (
    <section id="outlets" className="relative overflow-hidden py-24 md:py-32">
      <div
        className="radial-glow -left-20 top-1/3 h-[500px] w-[500px] opacity-50"
        aria-hidden
      />
      <div
        className="radial-glow -right-16 bottom-0 h-[420px] w-[420px] opacity-40"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-14 max-w-2xl"
        >
          <motion.p
            variants={variants}
            className="mb-5 text-[0.7rem] uppercase tracking-[0.3em] text-accent-bright"
          >
            Four Rooftops
          </motion.p>
          <motion.h2
            variants={variants}
            className="font-display text-4xl leading-tight tracking-[-0.02em] text-foreground md:text-5xl lg:text-6xl"
          >
            Find your Stories
          </motion.h2>
          <motion.p
            variants={variants}
            className="mt-5 text-base leading-relaxed text-muted md:text-lg"
          >
            Four Bengaluru locations. Same spirit — rooftop energy, a full bar,
            and a kitchen that keeps the table talking.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-5 sm:grid-cols-2 lg:gap-6"
        >
          {outlets.map((outlet, index) => (
            <OutletCard key={outlet.id} outlet={outlet} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
