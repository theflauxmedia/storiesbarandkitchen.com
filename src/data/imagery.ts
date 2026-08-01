/**
 * Central map of hero/feature photography per outlet and per surface.
 */

export type HeroSlide = {
  src: string;
  label: string;
  /** Short location hint for screen readers / slide controls */
  outlet: "hsr-layout" | "nagarbhavi" | "rajajinagar" | "brand";
};

export const brandImagery = {
  homeHeroSlides: [
    {
      src: "/assets/hsr-layout/ambience/interior-bar-dining.webp",
      label: "Bar and dining room, HSR Layout",
      outlet: "hsr-layout",
    },
    {
      src: "/assets/hsr-layout/ambience/dining-hall.webp",
      label: "Window dining hall, HSR Layout",
      outlet: "hsr-layout",
    },
    {
      src: "/assets/nagarbhavi/ambience/evening-ambience.webp",
      label: "Evening dining, Nagarbhavi",
      outlet: "nagarbhavi",
    },
    {
      src: "/assets/rajajinagar/ambience/terrace-day.webp",
      label: "Garden terrace, Rajajinagar",
      outlet: "rajajinagar",
    },
    {
      src: "/assets/hsr-layout/ambience/bar-counter.webp",
      label: "Bar counter, HSR Layout",
      outlet: "hsr-layout",
    },
    {
      src: "/assets/nagarbhavi/ambience/tropical-dining.webp",
      label: "Tropical dining room, Nagarbhavi",
      outlet: "nagarbhavi",
    },
    {
      src: "/assets/rajajinagar/ambience/terrace-evening.webp",
      label: "Terrace at night, Rajajinagar",
      outlet: "rajajinagar",
    },
  ] as const satisfies readonly HeroSlide[],
  /** @deprecated Use homeHeroSlides — kept for OG / fallbacks */
  homeHero: "/assets/hsr-layout/ambience/interior-bar-dining.webp",
  brandIntro: {
    ambience: "/assets/hsr-layout/ambience/interior-bar-dining.webp",
    lounge: "/assets/hsr-layout/guest-moments/logo-selfie.webp",
    food: "/assets/_shared/food/donne-chicken-biryani.webp",
    drinks: "/assets/hsr-layout/drinks/berry-cocktails.webp",
  },
  finalCta: "/assets/hsr-layout/ambience/bar-counter.webp",
  ourStory: {
    hero: "/assets/hsr-layout/ambience/dining-room-01.webp",
    day: "/assets/hsr-layout/ambience/dining-room-02.webp",
    night: "/assets/hsr-layout/ambience/interior-bar-dining.webp",
  },
  foodHero: "/assets/_shared/food/dahi-masala-chicken-tikka.webp",
  drinksFeature: "/assets/hsr-layout/drinks/berry-cocktails.webp",
  drinksBar: "/assets/hsr-layout/drinks/bar-shelves.webp",
  drinksTap: "/assets/hsr-layout/drinks/beer-pour.webp",
  eventsHero: "/assets/hsr-layout/ambience/dining-room-01.webp",
  contactHero: "/assets/hsr-layout/ambience/dining-hall.webp",
  galleryHero: "/assets/hsr-layout/ambience/dining-room-02.webp",
} as const;

/** Feature card image per outlet (dedicated shoot when available). */
export const outletImagery: Record<
  string,
  {
    card: string;
    hero: string;
    dedicated: boolean;
    schemaImage: string;
    /** Real pixel dimensions of schemaImage — keep in sync so OG/meta tags don't lie to crawlers. */
    schemaImageWidth: number;
    schemaImageHeight: number;
  }
> = {
  "hsr-layout": {
    card: "/assets/hsr-layout/ambience/interior-bar-dining.webp",
    hero: "/assets/hsr-layout/ambience/interior-bar-dining.webp",
    schemaImage: "/assets/hsr-layout/ambience/interior-bar-dining.webp",
    schemaImageWidth: 1024,
    schemaImageHeight: 682,
    dedicated: true,
  },
  nagarbhavi: {
    card: "/assets/nagarbhavi/ambience/lounge-seating.webp",
    hero: "/assets/nagarbhavi/ambience/dining-hall.webp",
    schemaImage: "/assets/nagarbhavi/ambience/evening-ambience.webp",
    schemaImageWidth: 1920,
    schemaImageHeight: 1280,
    dedicated: true,
  },
  rajajinagar: {
    card: "/assets/rajajinagar/ambience/terrace-day.webp",
    hero: "/assets/rajajinagar/ambience/terrace-wide.webp",
    schemaImage: "/assets/rajajinagar/ambience/terrace-day.webp",
    schemaImageWidth: 1203,
    schemaImageHeight: 917,
    dedicated: true,
  },
};

export function getOutletSchemaImage(slug: string) {
  return outletImagery[slug]?.schemaImage ?? brandImagery.homeHero;
}
