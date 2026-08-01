"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { home } from "@/data/content";
import { brandImagery } from "@/data/imagery";
import { fadeUp, fadeUpReduced, stagger, viewportOnce } from "@/lib/motion";

const collage = [
  {
    src: brandImagery.brandIntro.ambience,
    alt: "The bar counter at Stories Bar & Kitchen",
    className: "col-span-2 aspect-[16/10]",
  },
  {
    src: brandImagery.brandIntro.food,
    alt: "Donne chicken biryani served at Stories",
    className: "aspect-[4/5]",
  },
  {
    src: brandImagery.brandIntro.drinks,
    alt: "Signature berry cocktails",
    className: "aspect-[4/5]",
  },
];

const stats = [
  { value: "03", label: "Neighbourhoods across Bengaluru" },
  { value: "07", label: "Days of food, drinks and music" },
  { value: "∞", label: "Stories waiting to be written" },
];

export default function BrandIntro() {
  const reduceMotion = useReducedMotion();
  const variants = reduceMotion ? fadeUpReduced : fadeUp;

  return (
    <section className="relative section-pad">
      <div className="container-site">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20"
        >
          {/* Copy */}
          <div>
            <motion.p variants={variants} className="eyebrow mb-5">
              <span className="chapter-num normal-case">01</span>
              The Brand
            </motion.p>
            <motion.h2
              variants={variants}
              className="headline text-[clamp(2.2rem,5vw,3.75rem)] text-foreground"
            >
              Eat. Drink. Celebrate. <em>Create Stories.</em>
            </motion.h2>
            <div className="mt-7 space-y-4 text-base leading-relaxed text-muted md:text-lg">
              {home.brandIntro.body.map((para) => (
                <motion.p key={para} variants={variants}>
                  {para}
                </motion.p>
              ))}
            </div>

            <motion.div
              variants={variants}
              className="mt-10 flex flex-col gap-6 border-t border-line pt-8 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex min-w-0 items-start gap-5 border-b border-line pb-6 last:border-b-0 last:pb-0 sm:block sm:border-b-0 sm:pb-0"
                >
                  <p className="w-14 shrink-0 font-display text-4xl leading-none text-accent-bright md:text-5xl">
                    {stat.value}
                  </p>
                  <p className="min-w-0 flex-1 text-[0.65rem] uppercase leading-snug tracking-[0.1em] text-muted sm:mt-2 sm:max-w-none sm:tracking-[0.14em] md:tracking-[0.16em]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Photo collage */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {collage.map((img) => (
              <motion.div
                key={img.src}
                variants={variants}
                className={`frame-gold img-zoom relative ${img.className}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
