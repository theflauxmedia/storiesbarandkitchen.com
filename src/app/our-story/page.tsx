import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FinalCta from "@/components/FinalCta";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import { ButtonLink } from "@/components/Button";
import BreadcrumbJsonLd, { pageTrail } from "@/components/BreadcrumbJsonLd";
import { ourStory, home } from "@/data/content";
import { brandImagery } from "@/data/imagery";
import { outlets } from "@/data/outlets";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Our Story",
  description:
    "Discover the story behind Stories Bar & Kitchen — a Bengaluru destination for good food, genuine hospitality, music and memorable experiences across three neighbourhoods.",
  path: "/our-story",
});

export default function OurStoryPage() {
  return (
    <>
      <BreadcrumbJsonLd items={pageTrail("Our Story", "/our-story")} />
      <Navbar />
      <main>
        <PageHero
          eyebrow="Our Story"
          heading={
            <>
              Every table has a <em>story</em>
            </>
          }
          body={ourStory.hero.body}
          image={brandImagery.ourStory.hero}
          imageAlt="Pendant-lit dining room at Stories Bar & Kitchen"
        />

        {/* The story — day to night */}
        <section className="section-pad">
          <div className="container-site grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div>
              <SectionHeading
                chapter="01"
                eyebrow={ourStory.story.eyebrow}
                title={
                  <>
                    A place that never needs a <em>special reason</em>
                  </>
                }
              />
              <Reveal delay={0.1}>
                <div className="mt-7 space-y-5 text-base leading-relaxed text-muted md:text-lg">
                  {ourStory.story.paragraphs.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>
              </Reveal>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <Reveal className="frame-gold img-zoom relative aspect-[4/5]">
                <Image
                  src={brandImagery.ourStory.day}
                  alt="Stories by day — relaxed rooftop lunches"
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
                <span className="absolute bottom-4 left-4 z-[3] text-[0.6rem] uppercase tracking-[0.28em] text-foreground/85">
                  By Day
                </span>
              </Reveal>
              <Reveal
                delay={0.12}
                className="frame-gold img-zoom relative mt-8 aspect-[4/5]"
              >
                <Image
                  src={brandImagery.ourStory.night}
                  alt="Stories by night — neon-lit evenings"
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
                <span className="absolute bottom-4 left-4 z-[3] text-[0.6rem] uppercase tracking-[0.28em] text-foreground/85">
                  By Night
                </span>
              </Reveal>
            </div>
          </div>
        </section>

        <Marquee
          items={[
            "Good Food",
            "Genuine Hospitality",
            "Memorable Experiences",
            "Something for Everyone",
          ]}
          duration={30}
        />

        {/* Philosophy */}
        <section className="section-pad">
          <div className="container-site">
            <div className="mb-12">
              <SectionHeading
                chapter="02"
                eyebrow={ourStory.philosophy.eyebrow}
                title={
                  <>
                    What we <em>believe</em> in
                  </>
                }
              />
            </div>
            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {ourStory.philosophy.items.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.06}>
                  <div className="flex h-full flex-col border-t border-hairline-gold pt-5">
                    <span className="chapter-num">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="mt-3 font-display text-2xl text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Brand promise */}
        <section className="border-t border-line section-pad">
          <div className="container-site max-w-3xl text-center">
            <Reveal>
              <p className="eyebrow eyebrow-plain mb-6 justify-center">
                {ourStory.brandPromise.eyebrow}
              </p>
              <h2 className="headline-xl text-[clamp(2.4rem,6vw,4.5rem)] text-foreground">
                Eat well. Celebrate freely. <em>Create stories.</em>
              </h2>
              <div className="hairline mx-auto my-8 w-24" />
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                {ourStory.brandPromise.body}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Presence */}
        <section className="border-t border-line section-pad">
          <div className="container-site max-w-3xl">
            <SectionHeading
              chapter="03"
              eyebrow={ourStory.presence.eyebrow}
              title={
                <>
                  Three neighbourhoods, one <em>welcome</em>
                </>
              }
              lede={ourStory.presence.intro}
            />
            <Reveal delay={0.1}>
              <ul className="mt-10">
                {outlets.map((o, i) => (
                  <li key={o.id} className="border-t border-line last:border-b">
                    <Link
                      href={`/locations/${o.slug}`}
                      className="group flex items-baseline gap-5 py-5"
                    >
                      <span className="chapter-num w-8">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-3xl text-foreground transition-colors group-hover:text-accent-bright md:text-4xl">
                        {o.shortName}
                      </span>
                      <span className="ml-auto hidden text-[0.62rem] uppercase tracking-[0.2em] text-muted transition-colors group-hover:text-accent-bright sm:block">
                        Explore →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <ButtonLink href={ourStory.presence.button.href}>
                  {ourStory.presence.button.label}
                </ButtonLink>
              </div>
            </Reveal>
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
