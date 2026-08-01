"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import type { HeroSlide } from "@/data/imagery";

type HeroSliderProps = {
  slides: readonly HeroSlide[];
  intervalMs?: number;
};

export default function HeroSlider({
  slides,
  intervalMs = 6500,
}: HeroSliderProps) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const count = slides.length;
  const active = slides[index]!;

  const go = useCallback(
    (next: number) => {
      setIndex((next + count) % count);
    },
    [count],
  );

  useEffect(() => {
    if (reduceMotion || count <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs, reduceMotion, count]);

  return (
    <div className="absolute inset-0" aria-hidden>
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={active.src}
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 1.1, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 scale-[1.06]"
        >
          <Image
            src={active.src}
            alt=""
            fill
            preload={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
            unoptimized
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {count > 1 && !reduceMotion && (
        <div className="absolute bottom-6 right-6 z-[2] flex gap-2 md:bottom-8 md:right-10">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => go(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index
                  ? "w-8 bg-accent-bright"
                  : "w-1.5 bg-foreground/35 hover:bg-foreground/55"
              }`}
              aria-label={`Show ${slide.label}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
