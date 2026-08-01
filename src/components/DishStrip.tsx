"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { Dish } from "@/data/dishes";
import { fadeUp, fadeUpReduced, stagger, viewportOnce } from "@/lib/motion";

/**
 * Horizontal scroll-snap strip of signature dish photography.
 * Used on Home (curated subset) and Food & Drinks (full selection).
 */
export default function DishStrip({ dishes }: { dishes: Dish[] }) {
  const reduceMotion = useReducedMotion();
  const variants = reduceMotion ? fadeUpReduced : fadeUp;

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="scroll-strip -mx-5 px-5 md:-mx-10 md:px-10"
    >
      {dishes.map((dish, i) => (
        <motion.figure
          key={dish.image}
          variants={variants}
          className="group w-[68vw] shrink-0 sm:w-[42vw] lg:w-[23rem]"
        >
          <div className="frame-gold img-zoom relative aspect-[4/5]">
            <Image
              src={dish.image}
              alt={dish.name}
              fill
              unoptimized
              sizes="(max-width: 640px) 68vw, (max-width: 1024px) 42vw, 368px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <span className="chapter-num absolute right-4 top-3 z-[3]">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
          <figcaption className="flex items-baseline justify-between gap-3 pt-4">
            <span className="font-display text-lg leading-tight text-foreground">
              {dish.name}
            </span>
            <span
              className={`shrink-0 text-[0.58rem] uppercase tracking-[0.2em] ${
                dish.veg ? "text-green-500/90" : "text-red-400/90"
              }`}
            >
              {dish.veg ? "Veg" : "Non-Veg"}
            </span>
          </figcaption>
          <p className="mt-1 text-[0.62rem] uppercase tracking-[0.18em] text-muted">
            {dish.category}
          </p>
        </motion.figure>
      ))}
    </motion.div>
  );
}
