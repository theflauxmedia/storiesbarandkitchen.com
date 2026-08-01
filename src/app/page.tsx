import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import BrandIntro from "@/components/BrandIntro";
import LocationsGrid from "@/components/LocationsGrid";
import DishStrip from "@/components/DishStrip";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import FinalCta from "@/components/FinalCta";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { ButtonLink } from "@/components/Button";
import { home } from "@/data/content";
import { dishes } from "@/data/dishes";
import { brandImagery } from "@/data/imagery";
import { createPageMetadata, DEFAULT_DESCRIPTION, DEFAULT_TITLE } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  path: "/",
  absoluteTitle: true,
  keywords: [
    "Stories Bar & Kitchen Bengaluru",
    "bar and kitchen Bangalore",
    "restaurant HSR Layout",
    "Nagarbhavi restaurant and bar",
    "Rajajinagar rooftop dining",
    "book a table Bangalore",
    "live music restaurant Bengaluru",
    "birthday celebration restaurant Bangalore",
  ],
  image: {
    url: brandImagery.homeHeroSlides[0].src,
    width: 1024,
    height: 682,
    alt: "Stories Bar & Kitchen HSR Layout — bar and dining room in Bengaluru",
  },
});

const marqueeItems = [
  "Eat",
  "Drink",
  "Celebrate",
  "Create Stories",
  "Live Music",
  "DJ Nights",
  "Cocktails",
  "Karaoke",
];

const featuredDishes = dishes.filter((d) =>
  [
    "Donne Chicken Biryani",
    "Dahi Masala Chicken Tikka",
    "Sticky Basil Chicken",
    "Honey Chilli Potatoes",
    "Pesto Spaghetti",
    "Peni Rasmalai with Rabri",
  ].includes(d.name),
);

const nightHighlights = [
  "Live band performances",
  "DJ-led party nights",
  "Karaoke evenings",
  "Sports screenings",
  "Sundowner experiences",
  "Festival celebrations",
];

export default function HomePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }]} />
      <Navbar />
      <main>
        <Hero />

        <Marquee items={marqueeItems} />

        <BrandIntro />

        {/* Signature dishes */}
        <section className="relative border-t border-line section-pad">
          <div className="container-site">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-14">
              <SectionHeading
                chapter="02"
                eyebrow="From the Kitchen"
                title={
                  <>
                    A taste of what&apos;s <em>cooking</em>
                  </>
                }
                lede="Indian classics, wok-tossed Asian favourites, continental comforts and indulgent desserts — every plate photographed at our own tables."
              />
              <Reveal delay={0.15}>
                <ButtonLink href="/food-and-drinks" variant="secondary">
                  View Food &amp; Drinks
                </ButtonLink>
              </Reveal>
            </div>
            <DishStrip dishes={featuredDishes} />
          </div>
        </section>

        {/* Locations */}
        <section
          id="locations-preview"
          className="relative border-t border-line section-pad"
        >
          <div className="container-site">
            <div className="mb-12 md:mb-16">
              <SectionHeading
                chapter="03"
                eyebrow={home.locationsSection.eyebrow}
                title={
                  <>
                    Find your nearest <em>Stories</em>
                  </>
                }
                lede={home.locationsSection.body}
              />
            </div>
            <LocationsGrid />
          </div>
        </section>

        {/* Nights at Stories */}
        <section className="relative border-t border-line section-pad">
          <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal className="frame-gold img-zoom relative order-2 aspect-[4/5] lg:order-1">
              <Image
                src={brandImagery.eventsHero}
                alt="Evening atmosphere in the lounge at Stories Bar & Kitchen"
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </Reveal>
            <div className="order-1 lg:order-2">
              <SectionHeading
                chapter="04"
                eyebrow="After Dark"
                title={
                  <>
                    When the sun sets, the <em>stories</em> begin
                  </>
                }
                lede="As evening arrives, the lights dim, the music rises and every Stories location turns into a stage for the night."
              />
              <Reveal delay={0.1}>
                <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
                  {nightHighlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 border-b border-line py-2.5 text-sm text-muted"
                    >
                      <span className="h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-9 flex flex-wrap gap-3">
                  <ButtonLink href="/events">Explore Events &amp; Experiences</ButtonLink>
                  <ButtonLink href="/gallery" variant="secondary">
                    View Gallery
                  </ButtonLink>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <FinalCta
          heading={
            <>
              Your next story <em>starts here</em>
            </>
          }
          body={home.finalCta.body}
          buttons={home.finalCta.buttons}
        />
      </main>
      <Footer />
    </>
  );
}
