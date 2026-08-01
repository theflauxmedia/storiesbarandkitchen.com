import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCta from "@/components/FinalCta";
import MapEmbed from "@/components/MapEmbed";
import GalleryGrid from "@/components/GalleryGrid";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { ButtonLink } from "@/components/Button";
import BreadcrumbJsonLd, { locationTrail } from "@/components/BreadcrumbJsonLd";
import { getOutletBySlug, outlets } from "@/data/outlets";
import { brandImagery, outletImagery } from "@/data/imagery";
import { getOutletGalleryImages } from "@/lib/gallery";
import { mapsDirectionsUrl } from "@/lib/maps";
import { whatsappUrl } from "@/lib/whatsapp";
import { createPageMetadata, DEFAULT_OG_IMAGE } from "@/lib/seo";
import { MapPinIcon, MailIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";

type LocationParams = { slug: string };

export function generateStaticParams(): LocationParams[] {
  return outlets.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<LocationParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const outlet = getOutletBySlug(slug);
  if (!outlet) return {};

  return createPageMetadata({
    title: outlet.seoTitle,
    description: outlet.seoDescription,
    path: `/locations/${outlet.slug}`,
    absoluteTitle: true,
    keywords: [
      `Stories Bar & Kitchen ${outlet.name}`,
      `${outlet.name} bar and kitchen`,
      `${outlet.name} Bengaluru restaurant`,
      "book a table Bengaluru",
      ...outlet.cuisines.slice(0, 4),
    ],
    image: {
      url: outletImagery[outlet.slug]?.schemaImage ?? brandImagery.homeHero,
      width: outletImagery[outlet.slug]?.schemaImageWidth ?? DEFAULT_OG_IMAGE.width,
      height: outletImagery[outlet.slug]?.schemaImageHeight ?? DEFAULT_OG_IMAGE.height,
      alt: `${outlet.fullTitle} — dining and bar ambience in Bengaluru`,
    },
  });
}

export default async function LocationPage({
  params,
}: {
  params: Promise<LocationParams>;
}) {
  const { slug } = await params;
  const outlet = getOutletBySlug(slug);
  if (!outlet) notFound();

  const galleryImages = getOutletGalleryImages(outlet.slug);
  const directions = mapsDirectionsUrl(outlet.address);
  const imagery = outletImagery[outlet.slug];
  const whatsappGeneral = whatsappUrl(
    outlet.whatsapp,
    `Hi Stories Bar & Kitchen — I have a question about ${outlet.fullTitle}.`,
  );

  return (
    <>
      <BreadcrumbJsonLd items={locationTrail(outlet.name, outlet.slug)} />
      <Navbar />
      <main>
        {/* Cinematic hero */}
        <section className="relative flex min-h-[88svh] items-end overflow-hidden pb-16 pt-28 md:pb-20">
          <div className="absolute inset-0" aria-hidden>
            <Image
              src={imagery.hero}
              alt={`${outlet.fullTitle} — ambience`}
              fill
              preload
              loading="eager"
              fetchPriority="high"
              unoptimized
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,6,6,0.55)_0%,rgba(8,6,6,0.3)_40%,rgba(8,6,6,0.75)_72%,rgba(8,6,6,0.98)_100%)]" />
          </div>

          <div className="relative z-10 container-site">
            <p className="eyebrow mb-5">Stories Bar &amp; Kitchen</p>
            <h1 className="headline-xl text-[clamp(3rem,9vw,6rem)] text-foreground">
              <em>{outlet.shortName}</em>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/85 md:text-lg">
              {outlet.tagline}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href={outlet.reservationUrl} external>
                Book a Table
              </ButtonLink>
              <ButtonLink href={directions} variant="secondary" external>
                Get Directions
              </ButtonLink>
              <ButtonLink href={`tel:${outlet.phone}`} variant="secondary">
                Call the Outlet
              </ButtonLink>
            </div>
            <div className="mt-12 hidden flex-wrap items-center gap-x-8 gap-y-2 border-t border-line pt-5 text-[0.62rem] uppercase tracking-[0.24em] text-foreground/60 md:flex">
              <span>{outlet.hours}</span>
              <span aria-hidden>·</span>
              <span>{outlet.cuisines.slice(0, 4).join(" — ")}</span>
              <span aria-hidden>·</span>
              <span className="text-accent-bright">{outlet.phoneDisplay}</span>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="border-t border-line section-pad">
          <div className="container-site">
            <SectionHeading
              chapter="01"
              eyebrow="Welcome"
              title={outlet.introHeading}
              lede={outlet.introBody}
              size="md"
            />
          </div>
        </section>

        {/* About + What to Expect */}
        <section className="border-t border-line section-pad">
          <div className="container-site grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <Reveal>
              <p className="eyebrow mb-5">
                <span className="chapter-num normal-case">02</span>
                About the Location
              </p>
              <p className="text-base leading-relaxed text-muted md:text-lg">
                {outlet.aboutBody}
              </p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {outlet.cuisines.map((cuisine) => (
                  <li
                    key={cuisine}
                    className="border border-line px-3 py-1 text-[0.62rem] uppercase tracking-[0.14em] text-muted"
                  >
                    {cuisine}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="eyebrow mb-5">What to Expect</p>
              <ul className="grid gap-x-6 sm:grid-cols-1">
                {outlet.whatToExpect.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-4 border-b border-line py-3 text-sm text-muted md:text-base"
                  >
                    <span className="chapter-num w-7 shrink-0 text-xs">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Food and Drinks */}
        <section className="border-t border-line section-pad">
          <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal className="frame-gold img-zoom relative aspect-[4/5]">
              <Image
                src={brandImagery.foodHero}
                alt="Signature dishes at Stories Bar & Kitchen"
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </Reveal>
            <div>
              <SectionHeading
                chapter="03"
                eyebrow="Food and Drinks"
                title={outlet.foodDrinksHeading}
                lede={outlet.foodDrinksBody}
              />
              <Reveal delay={0.1}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink href="/food-and-drinks">View Food Menu</ButtonLink>
                  <ButtonLink href="/food-and-drinks" variant="secondary">
                    View Drinks Menu
                  </ButtonLink>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Events + Celebrations */}
        <section className="border-t border-line section-pad">
          <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 lg:order-1">
              <SectionHeading
                chapter="04"
                eyebrow="Events and Experiences"
                title={
                  <>
                    What&apos;s happening at Stories <em>{outlet.shortName}</em>
                  </>
                }
                lede={outlet.eventsBody}
              />
              <Reveal delay={0.1}>
                <div className="mt-8">
                  <ButtonLink href={`/events?location=${outlet.slug}`}>
                    Explore Upcoming Events
                  </ButtonLink>
                </div>
              </Reveal>

              <Reveal delay={0.15} className="mt-12 border-t border-line pt-10">
                <p className="eyebrow mb-4">Celebrations and Corporate Parties</p>
                <h3 className="headline text-2xl text-foreground md:text-3xl">
                  {outlet.celebrationsHeading}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {outlet.celebrationsBody}
                </p>
                <div className="mt-7">
                  <ButtonLink href="/events#plan-your-event" variant="secondary">
                    Plan Your Event
                  </ButtonLink>
                </div>
              </Reveal>
            </div>
            <Reveal className="frame-gold img-zoom relative order-1 aspect-[4/5] lg:order-2">
              <Image
                src={brandImagery.drinksFeature}
                alt="Signature berry cocktails at Stories Bar & Kitchen"
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </Reveal>
          </div>
        </section>

        {/* Gallery */}
        <section className="border-t border-line section-pad">
          <div className="container-site">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                chapter="05"
                eyebrow="Gallery"
                title={
                  <>
                    Moments from Stories <em>{outlet.shortName}</em>
                  </>
                }
                lede={`Ambience, food, drinks, ${outlet.galleryCategories
                  .slice(3)
                  .join(", ")
                  .toLowerCase()} — as they happen.`}
              />
              <Reveal delay={0.15}>
                <ButtonLink
                  href={`/gallery?location=${outlet.slug}`}
                  variant="secondary"
                >
                  View Full Gallery
                </ButtonLink>
              </Reveal>
            </div>
            <GalleryGrid
              images={galleryImages}
              showLocationFilter={false}
              initialLocation={outlet.slug}
            />
          </div>
        </section>

        {/* Location details + map */}
        <section className="border-t border-line section-pad">
          <div className="container-site grid gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="eyebrow mb-6">
                <span className="chapter-num normal-case">06</span>
                Location Details
              </p>
              <ul className="space-y-5 text-sm text-muted md:text-base">
                <li className="flex items-start gap-4">
                  <MapPinIcon className="mt-1 h-4 w-4 shrink-0 text-accent" />
                  <span>
                    {outlet.address}
                    {outlet.landmark ? (
                      <>
                        <br />
                        <span className="text-foreground/70">Near {outlet.landmark}</span>
                      </>
                    ) : null}
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <PhoneIcon className="mt-1 h-4 w-4 shrink-0 text-accent" />
                  <a href={`tel:${outlet.phone}`} className="accent-underline text-foreground">
                    {outlet.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-start gap-4">
                  <WhatsAppIcon className="mt-1 h-4 w-4 shrink-0 text-accent" />
                  <a
                    href={whatsappGeneral}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="accent-underline text-foreground"
                  >
                    WhatsApp {outlet.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-start gap-4">
                  <MailIcon className="mt-1 h-4 w-4 shrink-0 text-accent" />
                  <a href={`mailto:${outlet.email}`} className="accent-underline text-foreground">
                    {outlet.email}
                  </a>
                </li>
                <li className="border-t border-line pt-5">
                  <span className="eyebrow text-[0.6rem]">Opening Hours</span>
                  <span className="mt-2 block font-display text-xl text-foreground">
                    {outlet.hours}
                  </span>
                </li>
              </ul>

              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink href={`tel:${outlet.phone}`} size="sm">
                  Call Now
                </ButtonLink>
                <ButtonLink
                  href={whatsappGeneral}
                  variant="secondary"
                  size="sm"
                  external
                >
                  WhatsApp Us
                </ButtonLink>
                <ButtonLink href={directions} variant="secondary" size="sm" external>
                  Get Directions
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="eyebrow mb-6">Find Us</p>
              <div className="frame-gold">
                <MapEmbed query={outlet.address} title={outlet.fullTitle} />
              </div>
            </Reveal>
          </div>
        </section>

        <FinalCta
          heading={outlet.finalCtaHeading}
          body={outlet.finalCtaBody}
          image={imagery.hero}
          buttons={[
            { label: "Book a Table", href: outlet.reservationUrl },
            { label: "Call the Outlet", href: `tel:${outlet.phone}` },
            { label: "Get Directions", href: directions },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
