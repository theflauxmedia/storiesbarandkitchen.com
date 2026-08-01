"use client";

import Image from "next/image";
import Link from "next/link";
import { outlets, siteConfig } from "@/data/outlets";
import { footerContent } from "@/data/content";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="relative border-t border-hairline-gold">
      {/* Statement band */}
      <div className="border-b border-line">
        <div className="container-site py-14 md:py-20">
          <Reveal>
            <p className="eyebrow mb-5">Stories Bar &amp; Kitchen — Bengaluru</p>
            <p className="headline-xl text-[clamp(2.2rem,6vw,4.75rem)] text-foreground">
              Every table has a <em>story</em>.
              <br />
              Come write yours.
            </p>
            <div className="mt-8">
              <Link
                href="/contact#book-a-table"
                className="btn-primary"
              >
                Book a Table
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="container-site pb-10 pt-14 md:pt-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.25fr_0.65fr_1.1fr]">
          <div>
            <Image
              src="/logo-white.webp"
              alt="Stories Bar & Kitchen"
              width={256}
              height={192}
              className="h-12 w-auto object-contain md:h-14"
              style={{ width: "auto" }}
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              {footerContent.brandDescription}
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-5 inline-block accent-underline text-sm text-accent-bright"
            >
              {siteConfig.email}
            </a>
            <ul className="mt-6 space-y-2 text-sm">
              {outlets.map((outlet) => (
                <li key={outlet.id}>
                  <a
                    href={outlet.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted accent-underline transition-colors hover:text-foreground"
                  >
                    Instagram — {outlet.shortName}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-6">Quick Links</p>
            <ul className="space-y-3 text-sm">
              {footerContent.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted accent-underline transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-6">Our Locations</p>
            <ul className="space-y-5">
              {outlets.map((outlet, i) => (
                <li key={outlet.id} className="flex items-baseline gap-4">
                  <span className="chapter-num w-7 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <Link
                      href={`/locations/${outlet.slug}`}
                      className="font-display text-lg text-foreground transition-colors hover:text-accent-bright"
                    >
                      {outlet.shortName}
                    </Link>
                    <a
                      href={`tel:${outlet.phone}`}
                      className="block text-xs tracking-[0.08em] text-muted transition-colors hover:text-foreground"
                    >
                      {outlet.phoneDisplay}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs uppercase tracking-[0.16em] text-muted/80">
              Open daily · 12 noon – 1 am
            </p>
          </div>
        </div>

        <div className="mt-12 space-y-1.5 border-t border-line pt-7 text-xs leading-relaxed text-muted/80">
          {footerContent.disclaimer.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-site flex flex-col items-start justify-between gap-4 py-5 text-[0.68rem] tracking-[0.06em] text-muted md:flex-row md:items-center">
          <p>© 2026 Stories Bar &amp; Kitchen. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {footerContent.legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="uppercase tracking-[0.12em] transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
