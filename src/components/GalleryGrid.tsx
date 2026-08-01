"use client";

import {
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import type { GalleryImage } from "@/lib/gallery";
import { outlets } from "@/data/outlets";
import EmptyState from "./EmptyState";

const selectClass =
  "border border-line bg-panel px-3 py-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted outline-none transition-colors hover:border-hairline-gold focus:border-hairline-gold";

function toLabel(slug: string) {
  if (slug === "shared") return "Stories";
  return slug
    .split("-")
    .map((w) => w[0]?.toUpperCase() + w.slice(1))
    .join(" ");
}

function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onNavigate: (next: number) => void;
}) {
  const img = images[index];

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % images.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + images.length) % images.length);
    },
    [index, images.length, onClose, onNavigate],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  if (!img) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[90] flex items-center justify-center bg-background/95 p-4 backdrop-blur-md md:p-10"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${toLabel(img.outletSlug)} — ${toLabel(img.category)}`}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center border border-line text-foreground transition-colors hover:border-hairline-gold"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" stroke="currentColor" strokeWidth="1.5" fill="none" aria-hidden>
          <path d="m6 6 12 12M18 6 6 18" />
        </svg>
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index - 1 + images.length) % images.length);
        }}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-line text-foreground transition-colors hover:border-hairline-gold md:left-6"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" stroke="currentColor" strokeWidth="1.5" fill="none" aria-hidden>
          <path d="M15 6l-6 6 6 6" />
        </svg>
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index + 1) % images.length);
        }}
        aria-label="Next image"
        className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-line text-foreground transition-colors hover:border-hairline-gold md:right-6"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" stroke="currentColor" strokeWidth="1.5" fill="none" aria-hidden>
          <path d="m9 6 6 6-6 6" />
        </svg>
      </button>

      <div
        className="relative flex max-h-full max-w-5xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={img.src}
          alt={`${toLabel(img.outletSlug)} — ${toLabel(img.category)}`}
          width={1600}
          height={1200}
          unoptimized
          className="h-auto max-h-[80svh] w-auto max-w-full border border-line object-contain"
        />
        <p className="mt-4 text-[0.62rem] uppercase tracking-[0.24em] text-muted">
          {toLabel(img.outletSlug)} — {toLabel(img.category)}
          <span className="ml-4 text-muted/60">
            {index + 1} / {images.length}
          </span>
        </p>
      </div>
    </motion.div>
  );
}

function GalleryGridInner({
  images,
  showLocationFilter = true,
  initialLocation = "all",
}: {
  images: GalleryImage[];
  showLocationFilter?: boolean;
  initialLocation?: string;
}) {
  const searchParams = useSearchParams();
  const queryLocation = searchParams.get("location");
  const validQueryLocation =
    queryLocation && outlets.some((o) => o.slug === queryLocation)
      ? queryLocation
      : null;

  const [location, setLocation] = useState(validQueryLocation ?? initialLocation);
  const [lastQueryLocation, setLastQueryLocation] = useState(validQueryLocation);
  const [category, setCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Follow ?location= changes from client-side navigation (render adjustment).
  if (validQueryLocation !== lastQueryLocation) {
    setLastQueryLocation(validQueryLocation);
    setLocation(validQueryLocation ?? initialLocation);
  }

  const categories = useMemo(
    () => Array.from(new Set(images.map((img) => img.category))).sort(),
    [images],
  );

  const filtered = images.filter((img) => {
    // Brand-shared food/etc. shows for every location filter.
    if (
      location !== "all" &&
      img.outletSlug !== location &&
      img.outletSlug !== "shared"
    ) {
      return false;
    }
    if (category !== "all" && img.category !== category) return false;
    return true;
  });

  return (
    <div>
      <div className="mb-10 flex flex-wrap items-center gap-3">
        {showLocationFilter && (
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className={selectClass}
            aria-label="Filter by location"
          >
            <option value="all">All Locations</option>
            {outlets.map((o) => (
              <option key={o.slug} value={o.slug}>
                {o.shortName}
              </option>
            ))}
          </select>
        )}

        <div className="flex flex-wrap gap-2">
          {["all", ...categories].map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={`border px-3.5 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.16em] transition-colors ${
                category === c
                  ? "border-accent bg-accent text-on-accent"
                  : "border-line text-muted hover:border-hairline-gold hover:text-foreground"
              }`}
            >
              {c === "all" ? "All" : toLabel(c)}
            </button>
          ))}
        </div>
      </div>

      {images.length === 0 ? (
        <EmptyState
          title="Gallery coming soon"
          body="Photography is being organised by location and category — check back shortly."
        />
      ) : filtered.length === 0 ? (
        <EmptyState
          title="No images match those filters"
          body="Try a different location or category."
        />
      ) : (
        <div className="columns-2 gap-3 md:columns-3 md:gap-4 lg:columns-4 [&>*]:mb-3 md:[&>*]:mb-4">
          {filtered.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setLightboxIndex(i)}
              className="group relative block w-full break-inside-avoid overflow-hidden border border-line text-left transition-colors hover:border-hairline-gold"
              aria-label={`View ${toLabel(img.outletSlug)} — ${toLabel(img.category)}`}
            >
              <Image
                src={img.src}
                alt={`${toLabel(img.outletSlug)} — ${toLabel(img.category)}`}
                width={800}
                height={600}
                unoptimized
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-2 items-center justify-between bg-gradient-to-t from-background/95 to-transparent px-3 pb-2.5 pt-8 text-[0.55rem] uppercase tracking-[0.18em] text-foreground/85 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                <span>{toLabel(img.category)}</span>
                <span className="text-accent-bright">{toLabel(img.outletSlug)}</span>
              </span>
            </button>
          ))}
        </div>
      )}

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={filtered}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onNavigate={setLightboxIndex}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default function GalleryGrid({
  images,
  showLocationFilter = true,
  initialLocation = "all",
}: {
  images: GalleryImage[];
  showLocationFilter?: boolean;
  initialLocation?: string;
}) {
  return (
    <Suspense fallback={<div className="text-sm text-muted">Loading gallery…</div>}>
      <GalleryGridInner
        images={images}
        showLocationFilter={showLocationFilter}
        initialLocation={initialLocation}
      />
    </Suspense>
  );
}
