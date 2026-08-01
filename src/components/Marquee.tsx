/**
 * Infinite ticker of brand words — a signature device of the revamp.
 * Pure CSS animation (see .marquee-track in globals.css), no JS needed.
 */
export default function Marquee({
  items,
  className = "",
  duration = 36,
}: {
  items: string[];
  className?: string;
  duration?: number;
}) {
  return (
    <div
      className={`relative overflow-hidden border-y border-line bg-panel/40 py-5 ${className}`}
    >
      <div
        className="marquee-track"
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {[0, 1].map((half) => (
          <div
            key={half}
            aria-hidden={half === 1}
            className="flex shrink-0 items-center"
          >
            {items.map((item, i) => (
              <span key={`${half}-${i}`} className="flex items-center">
                <span className="font-display text-xl italic tracking-wide text-foreground/80 md:text-2xl">
                  {item}
                </span>
                <span className="mx-6 text-accent md:mx-10" aria-hidden>
                  ✦
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
