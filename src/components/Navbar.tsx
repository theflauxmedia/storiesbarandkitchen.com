"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { nav } from "@/data/content";
import { outlets } from "@/data/outlets";
import { easeOut } from "@/lib/motion";
import { ButtonLink } from "./Button";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const reduceMotion = useReducedMotion();

  // Close the menu when the route changes (state adjustment during render).
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <>
      <motion.header
        initial={reduceMotion ? false : { y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: easeOut }}
        className={`fixed inset-x-0 top-0 z-50 transition-[background,border-color,backdrop-filter] duration-500 ${
          scrolled
            ? "border-b border-line bg-background/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="container-site flex h-16 items-center justify-between gap-3 md:h-[4.75rem]">
          <Link
            href="/"
            className="relative z-[70] flex shrink-0 items-center"
            aria-label="Stories Bar & Kitchen — Home"
          >
            <Image
              src="/logo-nav.webp"
              alt="Stories Bar & Kitchen"
              width={128}
              height={96}
              className="h-9 w-auto object-contain sm:h-10 md:h-11"
              preload
              loading="eager"
              fetchPriority="high"
              sizes="48px"
              style={{ width: "auto" }}
            />
          </Link>

          <div className="hidden items-center gap-7 xl:flex">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative whitespace-nowrap text-[0.65rem] font-semibold uppercase tracking-[0.22em] transition-colors ${
                  isActive(link.href)
                    ? "text-accent-bright"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-accent transition-all duration-400 ${
                    isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <ButtonLink
              href={nav.bookCta.href}
              size="sm"
              className="hidden sm:inline-flex"
            >
              {nav.bookCta.label}
            </ButtonLink>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="relative z-[70] flex h-10 w-10 items-center justify-center xl:hidden"
            >
              <span className="sr-only">Menu</span>
              <div className="flex w-6 flex-col gap-[7px]">
                <span
                  className={`h-px w-full bg-foreground transition-transform duration-300 ${
                    open ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-px w-full bg-foreground transition-opacity duration-300 ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-px w-full bg-foreground transition-transform duration-300 ${
                    open ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Full-screen editorial menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-background/97 backdrop-blur-2xl xl:hidden"
          >
            <div
              className="pointer-events-none absolute inset-0 hero-wash opacity-60"
              aria-hidden
            />
            <div className="container-site relative flex min-h-full flex-col pb-10 pt-24">
              <nav className="flex flex-col">
                {nav.links.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.05 + i * 0.055,
                      ease: easeOut,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`group flex items-baseline gap-4 border-b border-line py-4 ${
                        isActive(link.href) ? "text-accent-bright" : "text-foreground"
                      }`}
                    >
                      <span className="chapter-num w-8 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-[2rem] leading-none transition-colors group-hover:text-accent-bright sm:text-[2.4rem]">
                        {link.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5, ease: easeOut }}
                className="mt-8"
              >
                <ButtonLink
                  href={nav.bookCta.href}
                  className="w-full sm:w-auto"
                  onClick={() => setOpen(false)}
                >
                  {nav.bookCta.label}
                </ButtonLink>

                <div className="mt-10">
                  <p className="eyebrow mb-4">Call an Outlet</p>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {outlets.map((outlet) => (
                      <li key={outlet.id}>
                        <a
                          href={`tel:${outlet.phone}`}
                          className="flex items-baseline justify-between gap-3 border-b border-line py-2.5 text-sm text-muted transition-colors hover:text-foreground"
                        >
                          <span>{outlet.shortName}</span>
                          <span className="text-foreground/80">
                            {outlet.phoneDisplay}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
