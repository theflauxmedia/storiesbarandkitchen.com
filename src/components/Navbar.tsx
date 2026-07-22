"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/data/outlets";

const links = [
  { href: "#story", label: "Story" },
  { href: "#outlets", label: "Outlets" },
  { href: "#visit", label: "Visit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={reduceMotion ? false : { y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,backdrop-filter] duration-500 ${
        scrolled || open
          ? "border-b border-line bg-[#0b0b0d]/80 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20 md:px-8">
        <a
          href="#top"
          className="relative z-10 flex shrink-0 items-center"
          aria-label="Stories Bar & Kitchen — Home"
        >
          <Image
            src="/logo-nav.webp"
            alt="Stories Bar & Kitchen"
            width={128}
            height={96}
            className="h-10 w-auto object-contain sm:h-11 md:h-12"
            priority
            sizes="(max-width: 640px) 52px, 64px"
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="accent-underline text-[0.72rem] font-medium uppercase tracking-[0.22em] text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <motion.a
            href="https://www.instagram.com/storiesbarandkitchen_hsr/"
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.98 }}
            className="rounded-full border border-hairline-gold px-4 py-2 text-[0.68rem] uppercase tracking-[0.18em] text-accent-bright transition-colors hover:bg-accent-soft"
          >
            Instagram
          </motion.a>
          <motion.a
            href="#outlets"
            whileTap={{ scale: 0.98 }}
            className="rounded-full bg-accent px-4 py-2 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#0b0b0d] transition-colors hover:bg-accent-bright"
          >
            Reserve
          </motion.a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-10 flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-px w-full bg-foreground transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-foreground transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-foreground transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {open && (
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-line bg-[#0b0b0d]/95 px-5 pb-8 pt-4 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#outlets"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit rounded-full bg-accent px-5 py-3 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[#0b0b0d]"
            >
              Reserve · Call an Outlet
            </a>
            <p className="text-sm text-muted">{siteConfig.tagline}</p>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
