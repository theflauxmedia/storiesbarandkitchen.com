import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import FinalCta from "@/components/FinalCta";
import { ButtonLink } from "@/components/Button";
import BreadcrumbJsonLd, { pageTrail } from "@/components/BreadcrumbJsonLd";
import { galleryPage } from "@/data/content";
import { brandImagery } from "@/data/imagery";
import { getAllGalleryImages } from "@/lib/gallery";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Gallery",
  description:
    "Explore photos of food, drinks, ambience, live music, DJ nights and celebrations from Stories Bar & Kitchen across Bengaluru.",
  path: "/gallery",
});

export default function GalleryPage() {
  const images = getAllGalleryImages();

  return (
    <>
      <BreadcrumbJsonLd items={pageTrail("Gallery", "/gallery")} />
      <Navbar />
      <main>
        <PageHero
          eyebrow="Gallery"
          heading={
            <>
              Moments from <em>Stories</em>
            </>
          }
          body={galleryPage.hero.body}
          image={brandImagery.galleryHero}
          imageAlt="Rooftop glasshouse seating at Stories Bar & Kitchen"
        />

        <section className="section-pad">
          <div className="container-site">
            <div className="mb-12">
              <SectionHeading
                chapter="01"
                eyebrow="The Album"
                title={
                  <>
                    Browse every <em>frame</em>
                  </>
                }
                lede="Filter by location and category — tap any image to view it full size."
              />
            </div>
            <GalleryGrid images={images} />
          </div>
        </section>

        <section className="border-t border-line section-pad">
          <div className="container-site max-w-2xl text-center">
            <Reveal>
              <div className="hairline mx-auto mb-8 w-20" />
              <h2 className="headline text-3xl text-foreground md:text-4xl">
                Share your <em>story</em>
              </h2>
              <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted md:text-lg">
                {galleryPage.social.body}
              </p>
              <div className="mt-8 flex justify-center">
                <ButtonLink href={galleryPage.social.button.href} external>
                  {galleryPage.social.button.label}
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </section>

        <FinalCta
          heading={
            <>
              Be part of the next <em>frame</em>
            </>
          }
          body="Choose your nearest Stories location and plan your visit."
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
