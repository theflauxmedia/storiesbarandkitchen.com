"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { dishCategories, dishes } from "@/data/dishes";

/** Filterable, photographed dish gallery for the Food & Drinks page. */
export default function SignatureDishes() {
  const reduceMotion = useReducedMotion();
  const [category, setCategory] = useState<string>("All");
  const filtered =
    category === "All" ? dishes : dishes.filter((d) => d.category === category);

  return (
    <div>
      {/* Category pills */}
      <div className="mb-10 flex flex-wrap gap-2">
        {["All", ...dishCategories].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(cat)}
            className={`border px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.18em] transition-colors ${
              category === cat
                ? "border-accent bg-accent text-on-accent"
                : "border-line text-muted hover:border-hairline-gold hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout={!reduceMotion} className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((dish) => (
            <motion.figure
              key={dish.image}
              layout={!reduceMotion}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="group"
            >
              <div className="frame-gold img-zoom relative aspect-square">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <figcaption className="flex items-baseline justify-between gap-2 pt-3">
                <span className="font-display text-base leading-tight text-foreground md:text-lg">
                  {dish.name}
                </span>
                <span
                  className={`shrink-0 text-[0.55rem] uppercase tracking-[0.18em] ${
                    dish.veg ? "text-green-500/90" : "text-red-400/90"
                  }`}
                >
                  {dish.veg ? "Veg" : "Non-Veg"}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
