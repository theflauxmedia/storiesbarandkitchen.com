import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import LocationsGrid from "@/components/LocationsGrid";
import FinalCta from "@/components/FinalCta";
import BreadcrumbJsonLd, { pageTrail } from "@/components/BreadcrumbJsonLd";
import { locationsPage, home } from "@/data/content";
import { brandImagery } from "@/data/imagery";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Locations in Bengaluru",
  description:
    "Find Stories Bar & Kitchen across Bengaluru — HSR Layout, Nagarbhavi and Rajajinagar. Explore food, drinks, events and directions for each outlet.",
  path: "/locations",
  keywords: [
    "Stories Bar & Kitchen locations",
    "HSR Layout",
    "Nagarbhavi",
    "Rajajinagar",
    "Bengaluru restaurants",
  ],
});

export default function LocationsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={pageTrail("Locations", "/locations")} />
      <Navbar />
      <main>
        <PageHero
          eyebrow="Our Locations"
          heading={
            <>
              Three locations. <em>Countless stories.</em>
            </>
          }
          body={locationsPage.hero.body}
          image={brandImagery.ourStory.day}
          imageAlt="Rooftop seating at Stories Bar & Kitchen"
        />

        <section className="border-t border-line section-pad">
          <div className="container-site">
            <LocationsGrid showSuitableFor />
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
