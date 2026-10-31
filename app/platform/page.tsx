import type { Metadata } from "next";
import { BookWalkthrough, TextLink } from "@/components/buttons";
import { PlatformMark } from "@/components/logo";
import { PlatformPanel } from "@/components/platform-panel";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Platform",
  description:
    "Vantage Pulse, Vantage Scale, and Vantage Lead. The three platforms inside VantagePoint OS, one offering for outpatient physical therapy owners.",
});

export default function PlatformPage() {
  return (
    <main id="main" className="bg-paper">
      <header className="mx-auto max-w-3xl px-6 pb-8 pt-20 md:pt-28">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
          VantagePoint OS
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-navy text-balance md:text-6xl md:leading-[1.05]">
          Everything your practice runs on, in three parts.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink md:text-xl">
          Vantage Pulse, Vantage Scale, and Vantage Lead. Built for outpatient
          physical therapy owners who want a clear practice, a steady marketing
          rhythm, and a team that can carry the standard when you&apos;re not in
          the room.
        </p>
      </header>

      <section id="pulse" className="mx-auto grid max-w-6xl scroll-mt-24 items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24" aria-labelledby="pulse-heading">
        <div>
          <PlatformMark platform="pulse" className="h-12 w-auto" />
          <h2 id="pulse-heading" className="mt-8 text-3xl font-semibold tracking-tight text-navy md:text-4xl">
            Vantage Pulse
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink">
            Most owners we know aren&apos;t short on data. They&apos;re short on a
            picture they trust. Vantage Pulse is where the North Star practice
            metrics live, visible to the people who need them.
          </p>
          <ul className="mt-8 space-y-3 text-navy">
            {[
              "A provider stat grid and pace",
              "Front office measures, including arrivals",
              "A view for the clinical director",
              "A view for the owner",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 leading-relaxed text-ink">
            The aim is simple. Everyone looks at the same practice, and the
            numbers start to mean something in the day to day.
          </p>
        </div>
        <PlatformPanel platform="pulse" />
      </section>

      <section id="scale" className="scroll-mt-24 border-t border-navy/10 bg-white" aria-labelledby="scale-heading">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <div className="md:order-2">
            <PlatformMark platform="scale" className="h-12 w-auto" />
            <h2 id="scale-heading" className="mt-8 text-3xl font-semibold tracking-tight text-navy md:text-4xl">
              Vantage Scale
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink">
              Marketing slips in a clinic for a simple reason. It&apos;s not on the
              calendar. Vantage Scale is where you keep that cadence: what
              you&apos;ll publish, who it&apos;s for, and whether it went out.
            </p>
            <ul className="mt-8 space-y-3 text-navy">
              {[
                "Social publishing, including Meta",
                "Email for the people you want to stay close to",
                "Digital and print newsletters",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 leading-relaxed text-ink">
              It&apos;s built to make a consistent rhythm easier to keep. A steady
              practice of showing up, not a promise about what comes back.
            </p>
          </div>
          <div className="md:order-1">
            <PlatformPanel platform="scale" />
          </div>
        </div>
      </section>

      <section id="lead" className="scroll-mt-24 border-t border-navy/10" aria-labelledby="lead-heading">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <PlatformMark platform="lead" className="h-12 w-auto" />
            <h2 id="lead-heading" className="mt-8 text-3xl font-semibold tracking-tight text-navy md:text-4xl">
              Vantage Lead
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink">
              Vantage Lead is the onboarding and leadership training platform.
              Video lessons, in order, so a new hire learns how your clinic
              actually works.
            </p>
            <ul className="mt-8 space-y-3 text-navy">
              {[
                "Front Office Onboarding",
                "Provider Onboarding",
                "Welcome to VantagePoint OS",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8">
              <TextLink href="/vantage-lead">Read about Vantage Lead</TextLink>
            </p>
          </div>
          <PlatformPanel platform="lead" />
        </div>
      </section>

      <section className="on-navy bg-night text-white">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-28">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Walk through it together.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-mist">
            We&apos;ll show you how the three platforms fit your practice, and
            you can decide if it&apos;s right.
          </p>
          <div className="mt-10">
            <BookWalkthrough />
          </div>
        </div>
      </section>
    </main>
  );
}
