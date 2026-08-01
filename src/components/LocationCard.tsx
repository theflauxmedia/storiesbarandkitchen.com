"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Outlet } from "@/data/outlets";
import { outletImagery } from "@/data/imagery";
import { fadeUp, fadeUpReduced } from "@/lib/motion";
import { mapsDirectionsUrl } from "@/lib/maps";
import { ButtonLink } from "./Button";

export default function LocationCard({
  outlet,
  index,
  showSuitableFor = false,
  exploreLabel,
}: {
  outlet: Outlet;
  index: number;
  showSuitableFor?: boolean;
  /** Override primary CTA label. Default: Explore {shortName} */
  exploreLabel?: string;
}) {
  const reduceMotion = useReducedMotion();
  const variants = reduceMotion ? fadeUpReduced : fadeUp;
  const blurb = showSuitableFor ? outlet.indexBlurb : outlet.blurb;
  const primaryLabel =
    exploreLabel ?? (showSuitableFor ? "Explore Location" : `Explore ${outlet.shortName}`);
  const image = outletImagery[outlet.slug];

  return (
    <motion.article variants={variants} className="group flex h-full flex-col">
      {/* Photo */}
      <Link
        href={`/locations/${outlet.slug}`}
        className="frame-gold img-zoom relative block aspect-[16/11] overflow-hidden"
        aria-label={`Explore ${outlet.fullTitle}`}
      >
        <Image
          src={image.card}
          alt={`${outlet.fullTitle} — ambience`}
          fill
          unoptimized
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
        <span className="chapter-num absolute left-5 top-4 z-[3] text-lg">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="absolute bottom-5 left-5 z-[3] font-display text-3xl leading-none text-foreground md:text-4xl">
          {outlet.shortName}
        </span>
      </Link>

      {/* Body */}
      <div className="flex grow flex-col pt-6">
        <h3 className="font-display text-xl text-foreground transition-colors group-hover:text-accent-bright">
          <Link href={`/locations/${outlet.slug}`}>{outlet.fullTitle}</Link>
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{blurb}</p>

        {showSuitableFor && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {outlet.suitableFor.map((item) => (
              <li
                key={item}
                className="border border-line px-3 py-1 text-[0.62rem] uppercase tracking-[0.14em] text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          <ButtonLink href={`/locations/${outlet.slug}`} size="sm">
            {primaryLabel}
          </ButtonLink>
          <ButtonLink
            href={mapsDirectionsUrl(outlet.address)}
            variant="secondary"
            size="sm"
            external
          >
            Get Directions
          </ButtonLink>
        </div>
      </div>
    </motion.article>
  );
}
