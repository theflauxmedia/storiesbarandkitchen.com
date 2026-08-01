import type { ReactNode } from "react";
import Reveal from "./Reveal";

/**
 * Editorial section heading: chapter numeral + eyebrow rule + oversized serif
 * title (supports <em> italic-gold accents) + optional lede.
 */
export default function SectionHeading({
  chapter,
  eyebrow,
  title,
  lede,
  align = "left",
  className = "",
  size = "md",
}: {
  chapter?: string;
  eyebrow?: string;
  title: ReactNode;
  lede?: string;
  align?: "left" | "center";
  className?: string;
  size?: "md" | "lg";
}) {
  const centered = align === "center";

  return (
    <Reveal
      className={`${centered ? "mx-auto text-center" : ""} max-w-3xl ${className}`}
    >
      {(chapter || eyebrow) && (
        <p
          className={`eyebrow mb-5 ${centered ? "eyebrow-plain justify-center" : ""}`}
        >
          {chapter && <span className="chapter-num normal-case">{chapter}</span>}
          {eyebrow}
        </p>
      )}
      <h2
        className={`headline text-foreground ${
          size === "lg"
            ? "text-[clamp(2.5rem,6vw,4.5rem)]"
            : "text-[clamp(2.1rem,4.5vw,3.4rem)]"
        }`}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={`mt-5 text-base leading-relaxed text-muted md:text-lg ${
            centered ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {lede}
        </p>
      )}
    </Reveal>
  );
}
