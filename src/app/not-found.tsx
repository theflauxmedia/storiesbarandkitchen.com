import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ButtonLink } from "@/components/Button";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="section-pad">
        <div className="container-site max-w-xl pt-16 text-center md:pt-24">
          <p className="eyebrow eyebrow-plain mb-4 justify-center">404</p>
          <h1 className="headline text-4xl text-foreground md:text-5xl">
            This page is <em>off the menu</em>
          </h1>
          <p className="mt-4 text-base text-muted md:text-lg">
            That page doesn&apos;t exist — or may have moved. Head back home or
            find your nearest Stories location.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/">Go Home</ButtonLink>
            <ButtonLink href="/locations" variant="secondary">
              View Locations
            </ButtonLink>
          </div>
          <p className="mt-8 text-sm text-muted">
            Or{" "}
            <Link href="/contact" className="accent-underline text-accent-bright">
              contact us
            </Link>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
