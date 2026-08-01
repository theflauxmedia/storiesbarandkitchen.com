import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import BookingForm from "@/components/BookingForm";
import EventEnquiryForm from "@/components/EventEnquiryForm";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { ButtonLink } from "@/components/Button";
import BreadcrumbJsonLd, { pageTrail } from "@/components/BreadcrumbJsonLd";
import { contactPage } from "@/data/content";
import { brandImagery } from "@/data/imagery";
import { outlets } from "@/data/outlets";
import { mapsDirectionsUrl } from "@/lib/maps";
import { whatsappUrl } from "@/lib/whatsapp";
import { createPageMetadata } from "@/lib/seo";
import { MapPinIcon, PhoneIcon } from "@/components/icons";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Us & Book a Table",
  description:
    "Book a table or enquire about events at Stories Bar & Kitchen. Call, WhatsApp or visit HSR Layout, Nagarbhavi and Rajajinagar in Bengaluru.",
  path: "/contact",
  keywords: [
    "book a table Stories Bar & Kitchen",
    "Stories Bar & Kitchen contact",
    "HSR Layout booking",
    "Bengaluru restaurant reservation",
  ],
});

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={pageTrail("Contact Us", "/contact")} />
      <Navbar />
      <main>
        <PageHero
          eyebrow="Contact Us"
          heading={
            <>
              Let&apos;s get you a <em>table</em>
            </>
          }
          body={contactPage.hero.body}
          image={brandImagery.contactHero}
          imageAlt="Window seating at Stories Bar & Kitchen"
        >
          <ButtonLink href="#book-a-table">Book a Table</ButtonLink>
          <ButtonLink href="#event-enquiry" variant="secondary">
            Plan an Event
          </ButtonLink>
        </PageHero>

        {/* Quick location contacts */}
        <section className="section-pad">
          <div className="container-site">
            <div className="mb-12">
              <SectionHeading
                chapter="01"
                eyebrow="Quick Location Contacts"
                title={
                  <>
                    Reach your nearest <em>Stories</em>
                  </>
                }
              />
            </div>
            <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2">
              {outlets.map((outlet, i) => (
                <Reveal key={outlet.slug} delay={i * 0.05}>
                  <div className="flex h-full flex-col border-t border-hairline-gold pt-6">
                    <span className="chapter-num">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="mt-2 font-display text-2xl text-foreground md:text-3xl">
                      {outlet.fullTitle}
                    </h3>
                    <p className="mt-4 flex items-start gap-3 text-sm leading-relaxed text-muted">
                      <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {outlet.address}
                    </p>
                    <p className="mt-3 flex items-center gap-3 text-sm text-muted">
                      <PhoneIcon className="h-4 w-4 shrink-0 text-accent" />
                      <a
                        href={`tel:${outlet.phone}`}
                        className="accent-underline text-accent-bright"
                      >
                        {outlet.phoneDisplay}
                      </a>
                    </p>
                    <p className="mt-2 text-[0.65rem] uppercase tracking-[0.18em] text-muted">
                      {outlet.hours}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      <ButtonLink
                        href={outlet.reservationUrl}
                        size="sm"
                        external
                      >
                        Reserve
                      </ButtonLink>
                      <ButtonLink href={`tel:${outlet.phone}`} size="sm">
                        Call
                      </ButtonLink>
                      <ButtonLink
                        href={whatsappUrl(
                          outlet.whatsapp,
                          `Hi Stories Bar & Kitchen — I have a question about ${outlet.fullTitle}.`,
                        )}
                        variant="secondary"
                        size="sm"
                        external
                      >
                        WhatsApp
                      </ButtonLink>
                      <ButtonLink
                        href={mapsDirectionsUrl(outlet.address)}
                        variant="secondary"
                        size="sm"
                        external
                      >
                        Directions
                      </ButtonLink>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Book a table */}
        <section id="book-a-table" className="scroll-mt-24 border-t border-line section-pad">
          <div className="container-site max-w-3xl">
            <SectionHeading
              chapter="02"
              eyebrow={contactPage.booking.eyebrow}
              title={
                <>
                  Reserve your <em>table</em>
                </>
              }
              lede="Choose your nearest Stories location — you'll be taken to ReserveGo to complete your table reservation."
            />
            <div className="mt-10">
              <BookingForm />
            </div>
          </div>
        </section>

        {/* Event enquiry */}
        <section
          id="event-enquiry"
          className="scroll-mt-24 border-t border-line section-pad"
        >
          <div className="container-site max-w-3xl">
            <SectionHeading
              chapter="03"
              eyebrow={contactPage.eventEnquiry.eyebrow}
              title={
                <>
                  Planning an event or <em>celebration</em>?
                </>
              }
              lede={contactPage.eventEnquiry.body}
            />
            <div className="mt-10">
              <EventEnquiryForm submitLabel={contactPage.eventEnquiry.submitLabel} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
