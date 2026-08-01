import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Policy } from "@/data/policies";

export default function PolicyPage({ policy }: { policy: Policy }) {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-44">
          <div className="absolute inset-0 hero-wash opacity-60" aria-hidden />
          <div className="relative container-site max-w-3xl">
            <p className="eyebrow mb-5">Stories Bar &amp; Kitchen</p>
            <h1 className="headline text-4xl text-foreground md:text-5xl">
              {policy.title}
            </h1>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted">
              Last updated: {policy.updated}
            </p>

            <div className="mt-6 border border-hairline-gold bg-accent-soft px-5 py-4 text-xs leading-relaxed text-accent-bright">
              Draft content — pending legal review before publishing.
            </div>

            <p className="mt-8 text-base leading-relaxed text-muted md:text-lg">
              {policy.intro}
            </p>

            <div className="mt-10 space-y-8">
              {policy.sections.map((section, i) => (
                <div key={section.heading} className="border-t border-line pt-6">
                  <h2 className="flex items-baseline gap-4 font-display text-2xl text-foreground">
                    <span className="chapter-num text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {section.heading}
                  </h2>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted">
                    {section.body.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
