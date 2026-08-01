import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FinalCta from "@/components/FinalCta";
import SectionHeading from "@/components/SectionHeading";
import SignatureDishes from "@/components/SignatureDishes";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import { ButtonLink } from "@/components/Button";
import BreadcrumbJsonLd, { pageTrail } from "@/components/BreadcrumbJsonLd";
import { foodAndDrinksPage } from "@/data/content";
import { brandImagery } from "@/data/imagery";
import { outlets } from "@/data/outlets";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Food and Drinks",
  description:
    "Explore Stories Bar & Kitchen food and drinks — Indian classics, global favourites, shareable starters, signature cocktails, beers, spirits and mocktails across Bengaluru.",
  path: "/food-and-drinks",
  keywords: [
    "Stories Bar & Kitchen menu",
    "cocktails Bengaluru",
    "North Indian restaurant Bangalore",
    "mocktails Bangalore",
  ],
});

const drinkImages = [
  {
    src: brandImagery.drinksFeature,
    alt: "Signature berry cocktails at Stories Bar & Kitchen",
    className: "col-span-2 aspect-[16/10]",
  },
  {
    src: brandImagery.drinksBar,
    alt: "Back-bar spirit shelves",
    className: "aspect-[4/5]",
  },
  {
    src: brandImagery.drinksTap,
    alt: "Fresh beer being poured from the tap",
    className: "aspect-[4/5]",
  },
];

export default function FoodAndDrinksPage() {
  return (
    <>
      <BreadcrumbJsonLd items={pageTrail("Food and Drinks", "/food-and-drinks")} />
      <Navbar />
      <main>
        <PageHero
          eyebrow="Food & Drinks"
          heading={
            <>
              Flavours made for <em>sharing</em>
            </>
          }
          body={foodAndDrinksPage.hero.body}
          image={brandImagery.foodHero}
          imageAlt="Dahi masala chicken tikka at Stories Bar & Kitchen"
        />

        <Marquee
          items={[
            "Small Plates",
            "Indian Favourites",
            "Asian Selection",
            "Continental",
            "Main Courses",
            "Desserts",
            "Signature Cocktails",
            "Mocktails",
          ]}
          duration={42}
        />

        {/* Intro */}
        <section className="section-pad">
          <div className="container-site max-w-3xl">
            <Reveal>
              <div className="space-y-4 text-base leading-relaxed text-muted md:text-lg">
                {foodAndDrinksPage.intro.slice(0, 3).map((para) => (
                  <p key={para}>{para}</p>
                ))}
                <p className="text-sm italic text-muted/80">
                  {foodAndDrinksPage.intro[3]}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Signature dishes gallery */}
        <section className="border-t border-line section-pad">
          <div className="container-site">
            <div className="mb-12">
              <SectionHeading
                chapter="01"
                eyebrow="From the Kitchen"
                title={
                  <>
                    Signature <em>plates</em>, photographed at our tables
                  </>
                }
                lede="A rotating look at the dishes guests keep coming back for. Filter by category to browse the kitchen's range."
              />
            </div>
            <SignatureDishes />
          </div>
        </section>

        {/* Food categories */}
        <section className="border-t border-line section-pad">
          <div className="container-site">
            <div className="mb-12">
              <SectionHeading
                chapter="02"
                eyebrow="Food Categories"
                title={
                  <>
                    Something for every <em>appetite</em>
                  </>
                }
              />
            </div>
            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {foodAndDrinksPage.foodCategories.map((cat, i) => (
                <Reveal key={cat.title} delay={i * 0.05}>
                  <div className="flex h-full flex-col border-t border-hairline-gold pt-5">
                    <span className="chapter-num">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="mt-3 font-display text-2xl text-foreground">
                      {cat.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{cat.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Drinks */}
        <section className="border-t border-line section-pad">
          <div className="container-site grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <div>
              <SectionHeading
                chapter="03"
                eyebrow="From the Bar"
                title={
                  <>
                    Raise a glass to the <em>evening</em>
                  </>
                }
                lede="Signature cocktails, classics, beers, spirits and alcohol-free refreshers — poured to match the mood of the night."
              />
              <div className="mt-9 grid gap-x-8 gap-y-8 sm:grid-cols-2">
                {foodAndDrinksPage.drinksCategories.map((cat, i) => (
                  <Reveal key={cat.title} delay={i * 0.05}>
                    <div className="border-t border-line pt-4">
                      <h3 className="font-display text-xl text-foreground">{cat.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{cat.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {drinkImages.map((img, i) => (
                <Reveal
                  key={img.src}
                  delay={i * 0.08}
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
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Select your location */}
        <section className="border-t border-line section-pad">
          <div className="container-site max-w-3xl">
            <SectionHeading
              chapter="04"
              eyebrow="Menus by Outlet"
              title={foodAndDrinksPage.selectLocation.heading}
              lede={foodAndDrinksPage.selectLocation.body}
            />
            <Reveal delay={0.1}>
              <ul className="mt-10">
                {outlets.map((outlet, i) => (
                  <li
                    key={outlet.slug}
                    className="flex flex-wrap items-center justify-between gap-3 border-t border-line py-5 last:border-b"
                  >
                    <Link
                      href={`/locations/${outlet.slug}`}
                      className="group flex items-baseline gap-4"
                    >
                      <span className="chapter-num w-7">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-2xl text-foreground transition-colors group-hover:text-accent-bright md:text-3xl">
                        {outlet.shortName}
                      </span>
                    </Link>
                    <ButtonLink href={`/locations/${outlet.slug}`} size="sm">
                      View Menu
                    </ButtonLink>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="border-t border-line py-12">
          <div className="container-site max-w-3xl space-y-2 text-xs leading-relaxed text-muted/80">
            {foodAndDrinksPage.disclaimer.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </section>

        <FinalCta
          heading={
            <>
              Hungry for a new <em>story</em>?
            </>
          }
          body="Choose your nearest Stories location and book a table."
          buttons={[
            { label: "Book a Table", href: "/contact#book-a-table" },
            { label: "Explore Locations", href: "/locations" },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
