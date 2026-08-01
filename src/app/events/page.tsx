import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FinalCta from "@/components/FinalCta";
import EventsExplorer from "@/components/EventsExplorer";
import EventEnquiryForm from "@/components/EventEnquiryForm";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import { ButtonLink } from "@/components/Button";
import BreadcrumbJsonLd, { pageTrail } from "@/components/BreadcrumbJsonLd";
import { eventsPage } from "@/data/content";
import { brandImagery } from "@/data/imagery";
import { outlets } from "@/data/outlets";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Events, Celebrations & Experiences",
  description:
    "Live music, DJ nights, karaoke, sports screenings, birthdays and corporate parties at Stories Bar & Kitchen across HSR Layout, Nagarbhavi and Rajajinagar.",
  path: "/events",
  keywords: [
    "live music Bengaluru",
    "DJ night Bangalore",
    "corporate party venue Bengaluru",
    "birthday party restaurant Bangalore",
    "Stories Bar & Kitchen events",
  ],
});

function SimpleList({ items }: { items: string[] }) {
  return (
    <ul className="columns-1 gap-x-10 sm:columns-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex break-inside-avoid items-baseline gap-3 border-b border-line py-2 text-sm text-muted"
        >
          <span className="h-1 w-1 shrink-0 translate-y-[-2px] rounded-full bg-accent" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function EventsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={pageTrail("Events, Celebrations & Experiences", "/events")}
      />
      <Navbar />
      <main>
        <PageHero
          eyebrow="Events, Celebrations & Experiences"
          heading={
            <>
              Every occasion becomes a <em>story</em>
            </>
          }
          body={eventsPage.hero.body}
          image={brandImagery.eventsHero}
          imageAlt="Evening lounge atmosphere at Stories Bar & Kitchen"
        >
          {eventsPage.hero.buttons.map((btn, i) => (
            <ButtonLink
              key={btn.label}
              href={btn.href}
              variant={i === 0 ? "primary" : "secondary"}
            >
              {btn.label}
            </ButtonLink>
          ))}
        </PageHero>

        <Marquee
          items={[
            "Live Music",
            "DJ Nights",
            "Karaoke",
            "Sports Screenings",
            "Themed Parties",
            "Birthdays",
            "Corporate Nights",
            "Sundowners",
          ]}
          duration={40}
        />

        {/* Intro */}
        <section className="section-pad">
          <div className="container-site max-w-3xl">
            <Reveal>
              <p className="eyebrow mb-5">{eventsPage.intro.eyebrow}</p>
              <div className="space-y-4 text-base leading-relaxed text-muted md:text-lg">
                {eventsPage.intro.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Upcoming events */}
        <section className="border-t border-line section-pad">
          <div className="container-site">
            <div className="mb-12">
              <SectionHeading
                chapter="01"
                eyebrow={eventsPage.upcoming.eyebrow}
                title={
                  <>
                    Upcoming <em>events</em>
                  </>
                }
                lede={eventsPage.upcoming.body}
              />
            </div>
            <EventsExplorer />
          </div>
        </section>

        {/* Event categories */}
        <section className="border-t border-line section-pad">
          <div className="container-site">
            <div className="mb-12">
              <SectionHeading
                chapter="02"
                eyebrow="Event Categories"
                title={
                  <>
                    Pick your kind of <em>night</em>
                  </>
                }
              />
            </div>
            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {eventsPage.eventCategories.map((cat, i) => (
                <Reveal key={cat.title} delay={i * 0.04}>
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

        {/* Signature experiences + by location */}
        <section className="border-t border-line section-pad">
          <div className="container-site grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <SectionHeading
                chapter="03"
                eyebrow={eventsPage.signatureExperiences.eyebrow}
                title={
                  <>
                    Experiences worth <em>remembering</em>
                  </>
                }
                lede={eventsPage.signatureExperiences.intro}
              />
              <Reveal delay={0.1} className="mt-8">
                <SimpleList items={eventsPage.signatureExperiences.items} />
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <div className="surface p-7 md:p-9">
                <p className="eyebrow mb-6">Explore Experiences by Location</p>
                <ul>
                  {outlets.map((o, i) => (
                    <li
                      key={o.slug}
                      className="flex flex-wrap items-center justify-between gap-3 border-b border-line py-4 last:border-b-0"
                    >
                      <Link
                        href={`/locations/${o.slug}`}
                        className="group flex items-baseline gap-3"
                      >
                        <span className="chapter-num w-6 text-xs">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-xl text-foreground transition-colors group-hover:text-accent-bright">
                          {o.shortName}
                        </span>
                      </Link>
                      <ButtonLink
                        href={`/events?location=${o.slug}#upcoming-events`}
                        variant="secondary"
                        size="sm"
                      >
                        Explore
                      </ButtonLink>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Social celebrations */}
        <section className="border-t border-line section-pad">
          <div className="container-site">
            <div className="mb-12">
              <SectionHeading
                chapter="04"
                eyebrow={eventsPage.socialCelebrations.eyebrow}
                title={
                  <>
                    Every celebration deserves a great <em>story</em>
                  </>
                }
                lede={eventsPage.socialCelebrations.body}
              />
            </div>
            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {eventsPage.celebrationsWeHost.items.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.03}>
                  <div className="border-t border-line pt-5">
                    <h3 className="font-display text-xl text-foreground">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Corporate */}
        <section className="border-t border-line section-pad">
          <div className="container-site">
            <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
              <div>
                <SectionHeading
                  chapter="05"
                  eyebrow={eventsPage.corporate.eyebrow}
                  title={
                    <>
                      Work together. <em>Celebrate together.</em>
                    </>
                  }
                  lede={eventsPage.corporate.body}
                />
                <Reveal delay={0.1} className="mt-10">
                  <p className="eyebrow mb-4 text-[0.6rem]">Suitable For</p>
                  <SimpleList items={eventsPage.corporate.occasions} />
                </Reveal>
              </div>
              <div>
                <Reveal className="frame-gold img-zoom relative mb-10 aspect-[16/10]">
                  <Image
                    src={brandImagery.brandIntro.lounge}
                    alt="Guests gathered in the lounge at Stories Bar & Kitchen"
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="eyebrow mb-4 text-[0.6rem]">Our Team Can Assist With</p>
                  <SimpleList items={eventsPage.corporate.support} />
                  <p className="mt-4 text-xs text-muted/70">{eventsPage.corporate.note}</p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Private & group events + customisation */}
        <section className="border-t border-line section-pad">
          <div className="container-site grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading
                chapter="06"
                eyebrow={eventsPage.privateGroupEvents.eyebrow}
                title={
                  <>
                    Your occasion, your <em>experience</em>
                  </>
                }
                lede={eventsPage.privateGroupEvents.body}
              />
              <Reveal delay={0.1} className="mt-8">
                <SimpleList items={eventsPage.privateGroupEvents.suitableFor} />
              </Reveal>
            </div>
            <div>
              <Reveal>
                <p className="eyebrow mb-6">Customisation Options</p>
                <SimpleList items={eventsPage.customisationOptions} />
              </Reveal>
            </div>
          </div>
        </section>

        {/* Why celebrate */}
        <section className="border-t border-line section-pad">
          <div className="container-site">
            <div className="mb-12">
              <SectionHeading
                chapter="07"
                eyebrow="Why Celebrate at Stories?"
                title={
                  <>
                    One destination, the <em>complete</em> experience
                  </>
                }
              />
            </div>
            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {eventsPage.whyCelebrate.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.04}>
                  <div className="border-t border-line pt-5">
                    <h3 className="font-display text-xl text-foreground">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Event gallery pointer */}
        <section className="border-t border-line section-pad">
          <div className="container-site max-w-3xl">
            <SectionHeading
              chapter="08"
              eyebrow={eventsPage.gallerySection.eyebrow}
              title={
                <>
                  Moments created at <em>Stories</em>
                </>
              }
            />
            <Reveal delay={0.1}>
              <ul className="mt-6 flex flex-wrap gap-2">
                {eventsPage.gallerySection.categories.map((cat) => (
                  <li
                    key={cat}
                    className="border border-line px-3 py-1 text-[0.62rem] uppercase tracking-[0.14em] text-muted"
                  >
                    {cat}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <ButtonLink href={eventsPage.gallerySection.button.href}>
                  {eventsPage.gallerySection.button.label}
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Plan your event */}
        <section id="plan-your-event" className="border-t border-line section-pad">
          <div className="container-site max-w-3xl">
            <SectionHeading
              chapter="09"
              eyebrow="Plan Your Event"
              title={
                <>
                  Tell us about your <em>occasion</em>
                </>
              }
              lede="Share your requirements — submitting opens WhatsApp with everything pre-filled for the outlet team."
            />
            <div className="mt-10">
              <EventEnquiryForm submitLabel="Submit Event Enquiry" />
            </div>
          </div>
        </section>

        {/* Event terms */}
        <section className="border-t border-line py-12">
          <div className="container-site max-w-3xl">
            <p className="eyebrow mb-4 text-[0.6rem]">Event Terms</p>
            <ul className="space-y-1.5 text-xs leading-relaxed text-muted/80">
              {eventsPage.terms.map((term) => (
                <li key={term}>{term}</li>
              ))}
            </ul>
          </div>
        </section>

        <FinalCta
          heading={
            <>
              Let&apos;s create your next <em>story</em>
            </>
          }
          body={eventsPage.finalCta.body}
          buttons={eventsPage.finalCta.buttons}
        />
      </main>
      <Footer />
    </>
  );
}
