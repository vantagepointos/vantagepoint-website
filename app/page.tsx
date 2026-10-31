import Link from "next/link";
import { BookWalkthrough, TextLink } from "@/components/buttons";
import { ClosingCta } from "@/components/closing-cta";
import { FoundingPlaceholder } from "@/components/founding-placeholder";
import { HomeWaitlistSection } from "@/components/home-waitlist-section";
import { PlatformMark } from "@/components/logo";
import { ProductTour } from "@/components/product-tour";
import {
  HERO_EYEBROW,
  HERO_HEADLINE,
  HERO_HOOK,
  HERO_SUB,
  STORY_TEASER_BODY,
  STORY_TEASER_HEADING,
} from "@/lib/site";

const pillars = [
  {
    index: "01",
    title: "North Star metrics",
    body: "Own the few numbers that tell you whether the practice is healthy. Not a bigger pile of reports. A picture you and your team can share.",
  },
  {
    index: "02",
    title: "A marketing cadence",
    body: "Show up for your community on a rhythm. The work is planned and sent, instead of reinvented when the front office gets quiet.",
  },
  {
    index: "03",
    title: "Leadership at the center",
    body: "Teach the way you lead, so the team can carry the standard of care. It shouldn't live only with you.",
  },
];

const platforms = [
  {
    key: "pulse" as const,
    name: "VantagePulse",
    href: "/platform#pulse",
    summary: "Clear scoreboards for everyone who runs the day",
    points: [
      "Provider stat grid and pace",
      "Front office measures, including arrivals",
      "A view for the clinical director",
      "A view for the owner",
    ],
  },
  {
    key: "scale" as const,
    name: "VantageScale",
    href: "/platform#scale",
    summary:
      "The marketing rhythm. A place to plan and publish the work that keeps your community in touch with the clinic.",
    points: ["Social publishing", "Email", "Digital and print newsletters"],
  },
  {
    key: "lead" as const,
    name: "VantageLead",
    href: "/vantage-lead",
    summary:
      "Onboarding and leadership training, on video, so the standard of the practice can be taught.",
    points: [
      "Front Office Onboarding",
      "Provider Onboarding",
      "Welcome to VantagePoint OS",
    ],
  },
];

export default function Home() {
  return (
    <>
      <main id="main">
        <section className="on-navy relative overflow-hidden bg-deep text-white">
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#111729_0%,#0B0F1D_100%)]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(214,164,69,0.16),transparent_52%)]"
            aria-hidden="true"
          />
          <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col px-6 pb-6 pt-6 md:min-h-[90vh] md:pb-8 md:pt-8 lg:min-h-[90vh]">
            <div className="mx-auto w-full max-w-5xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                {HERO_EYEBROW}
              </p>
              <p className="mx-auto mt-5 max-w-5xl text-balance text-2xl font-medium leading-snug tracking-[-0.03em] text-gold sm:text-[1.7rem] lg:max-w-none lg:text-[2rem] lg:leading-tight">
                {HERO_HOOK}
              </p>
              <h1 className="mx-auto mt-5 max-w-3xl text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.04em] text-balance sm:text-6xl lg:text-7xl">
                {HERO_HEADLINE}
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-mist md:text-lg">
                {HERO_SUB}
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <BookWalkthrough />
                <Link
                  href="/platform"
                  className="inline-flex items-center justify-center rounded-full border border-gold/40 px-6 py-3 text-sm font-semibold text-white hover:bg-navy"
                >
                  See the platform
                </Link>
              </div>
            </div>
            <div className="mt-8 md:mt-10">
              <ProductTour />
            </div>
          </div>
        </section>

        <section className="bg-paper" aria-labelledby="problem-heading">
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <div className="max-w-3xl">
              <h2
                id="problem-heading"
                className="text-4xl font-semibold tracking-[-0.03em] text-navy text-balance md:text-5xl"
              >
                The care was never the hard part.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink md:text-xl">
                You opened a clinic to make people&apos;s lives better. Then
                the business started running you. That&apos;s why VantagePoint
                OS exists.
              </p>
            </div>
            <ul className="mt-16 grid gap-10 md:grid-cols-2 md:gap-12">
              <li>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink">
                  North Star metrics
                </p>
                <h3 className="mt-3 text-lg font-semibold text-navy">
                  Reports that don&apos;t agree, so the practice is hard to
                  steer.
                </h3>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink">
                  Practice health
                </p>
                <h3 className="mt-3 text-lg font-semibold text-navy">
                  So many metrics. Which ones actually move your practice&apos;s
                  health?
                </h3>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink">
                  A marketing cadence
                </p>
                <h3 className="mt-3 text-lg font-semibold text-navy">
                  Marketing that starts and stops
                </h3>
                <p className="mt-3 leading-relaxed text-ink">
                  When marketing only happens in a slow week, growth comes in
                  bursts. A steady rhythm keeps it moving.
                </p>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink">
                  Leadership at the center
                </p>
                <h3 className="mt-3 text-lg font-semibold text-navy">
                  A standard that lives only with you
                </h3>
                <p className="mt-3 leading-relaxed text-ink">
                  When the standard lives only with you, you&apos;re always
                  filling the gaps. Teach it, and the team can carry it.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className="border-t border-navy/10 bg-white" aria-labelledby="pillars-heading">
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
                The three pillars
              </p>
              <h2
                id="pillars-heading"
                className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-navy text-balance md:text-5xl"
              >
                What we came back to.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink">
                When our own clinics turned around, it came down to three
                things, done with consistency.
              </p>
            </div>
            <ol className="mt-16 grid gap-14 md:grid-cols-3">
              {pillars.map((pillar) => (
                <li key={pillar.index}>
                  <p className="text-sm font-semibold tracking-[0.16em] text-ink">
                    {pillar.index}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-navy">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-ink">{pillar.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-t border-navy/10 bg-paper" aria-labelledby="platforms-heading">
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
                The offering
              </p>
              <h2
                id="platforms-heading"
                className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-navy md:text-5xl"
              >
                One offering. Three platforms.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink">
                It has three parts, VantagePulse, VantageScale, and
                VantageLead, built to work together.
              </p>
            </div>
            <div className="mt-16 divide-y divide-navy/10 border-y border-navy/10">
              {platforms.map((platform) => (
                <article
                  key={platform.name}
                  className="grid gap-8 py-12 md:grid-cols-[minmax(0,16rem)_1fr] md:gap-16 md:py-14"
                >
                  <PlatformMark platform={platform.key} className="h-12 w-auto" />
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-navy">
                      {platform.name}
                    </h3>
                    <p className="mt-3 max-w-xl leading-relaxed text-ink">
                      {platform.summary}
                    </p>
                    <ul className="mt-6 space-y-2 text-sm text-navy">
                      {platform.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy"
                            aria-hidden="true"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6">
                      <TextLink href={platform.href}>
                        {`Explore ${platform.name}`}
                      </TextLink>
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white" aria-labelledby="story-teaser-heading">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
              Our story
            </p>
            <h2
              id="story-teaser-heading"
              className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-navy text-balance md:text-5xl"
            >
              {STORY_TEASER_HEADING}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink">
              {STORY_TEASER_BODY}
            </p>
            <p className="mt-8">
              <TextLink href="/our-story">Read why we built it</TextLink>
            </p>
          </div>
        </section>

        <FoundingPlaceholder />
        <HomeWaitlistSection />
        <ClosingCta />
      </main>
    </>
  );
}
