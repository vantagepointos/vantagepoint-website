import Link from "next/link";
import { BookWalkthrough, TextLink } from "@/components/buttons";
import { ClosingCta } from "@/components/closing-cta";
import { HomeWaitlistSection } from "@/components/home-waitlist-section";
import { PlatformMark } from "@/components/logo";
import { JsonLd } from "@/components/json-ld";
import { ProductTour } from "@/components/product-tour";
import { HOME_STRUCTURED_DESCRIPTION, softwareAppJsonLd } from "@/lib/structured-data";
import {
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
    body: "It took us years to learn which numbers matter. We'll help you get there faster, and give every person on your team their own numbers to own. Ownership, not another report, is what moves a practice.",
  },
  {
    index: "02",
    title: "A marketing cadence",
    body: "Most owners know they should market. The hard part is knowing what to do, how to do it, and finding the time in a busy schedule. Consistent, efficient outreach that fits your practice keeps your name in front of patients and referral sources.",
  },
  {
    index: "03",
    title: "Leadership at the center",
    body: "Great practices don't depend on one leader. Make leadership a core principle for your whole team, and the standard rises, even when you're not in the room.",
  },
];

const platforms = [
  {
    key: "pulse" as const,
    name: "VantagePulse",
    href: "/platform#pulse",
    markClass: "h-auto w-[min(100%,26.125rem)]",
    tagline: "The definitive view of practice health.",
    summary:
      "Clear scoreboards for everyone who runs the day, so every clinician knows their numbers, cares about them, and wants to move them.",
    points: [
      "Every clinician logs in to their own My Performance view",
      "Efficiency, units per visit, cancellation rate, NPS, bonus progress and revenue multiple, color-coded against your clinic's goals",
      "Front office measures, including arrival rates",
      "AI coaching that helps owners and clinical directors turn each clinician's numbers into next steps",
    ],
  },
  {
    key: "scale" as const,
    name: "VantageScale",
    href: "/platform#scale",
    markClass: "h-auto w-[min(80.14%,20.94rem)]",
    tagline: "Accelerating growth. Amplifying impact.",
    summary:
      "A steady marketing cadence without the busywork. See what people in your county are searching for, choose what to market, then plan, review and schedule your campaign.",
    points: [
      "Local search trends: see which pain and condition topics people in your county are searching for",
      "Campaign builder: choose how many posts and how many weeks, and a full campaign is drafted in about a minute, ready for you to review",
      "Email copy drafted for you, ready to review and schedule",
      "Smart Funnels: ready-made campaigns for a workshop, an event, bringing past patients back, or community education",
      "Digital and print newsletters",
    ],
  },
  {
    key: "lead" as const,
    name: "VantageLead",
    href: "/platform#lead",
    markClass: "h-auto w-[min(84.5%,22.08rem)]",
    tagline: "The roots of enduring leadership.",
    summary:
      "Onboarding and leadership training, on demand, so the standard of your practice can always be referred to and taught.",
    points: [
      "Front Office Onboarding",
      "Provider Onboarding",
      "Welcome to VantagePoint\u00A0OS",
    ],
  },
];

export default function Home() {
  return (
    <>
      <JsonLd
        data={softwareAppJsonLd({
          name: "VantagePoint OS",
          description: HOME_STRUCTURED_DESCRIPTION,
          path: "/",
        })}
      />
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
          <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col px-6 pb-6 pt-8 md:min-h-[90vh] md:pb-8 md:pt-12 lg:min-h-[90vh]">
            <div className="mx-auto w-full max-w-5xl text-center">
              <p className="mx-auto max-w-5xl text-balance text-2xl font-medium leading-snug tracking-[-0.03em] text-gold sm:text-[1.7rem] lg:max-w-none lg:text-[2rem] lg:leading-tight">
                {HERO_HOOK}
              </p>
              <h1 className="mx-auto mt-5 max-w-3xl text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.04em] text-balance sm:text-6xl lg:mt-6 lg:text-7xl">
                {HERO_HEADLINE}
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-mist md:text-lg">
                {HERO_SUB}
              </p>
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <BookWalkthrough />
                <Link
                  href="/platform"
                  className="inline-flex items-center justify-center rounded-full border border-gold/40 px-6 py-3 text-sm font-semibold text-white hover:bg-navy"
                >
                  See the platform
                </Link>
              </div>
              <p className="mt-3">
                <Link
                  href="/waitlist"
                  className="text-sm text-mist underline decoration-white/30 underline-offset-4 hover:text-white hover:decoration-white"
                >
                  Or join the waitlist
                </Link>
              </p>
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
            <ul className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-16 md:gap-y-12">
              <li className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink">
                  North Star metrics
                </p>
                <h3 className="mt-3 text-lg font-semibold leading-snug text-pretty text-navy">
                  Reports that don&apos;t agree, so
                  <br />
                  the practice is hard to steer.
                </h3>
              </li>
              <li className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink">
                  Practice health
                </p>
                <h3 className="mt-3 text-lg font-semibold leading-snug text-pretty text-navy">
                  So many metrics. Which ones actually move your practice, and
                  what do you do about them?
                </h3>
              </li>
              <li className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink">
                  A marketing cadence
                </p>
                <h3 className="mt-3 text-lg font-semibold leading-snug text-pretty text-navy">
                  Marketing that starts and stops
                </h3>
                <p className="mt-3 text-pretty leading-relaxed text-ink">
                  When marketing only happens when you have time, growth stalls.
                  A steady cadence keeps growth consistent.
                </p>
              </li>
              <li className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink">
                  Leadership at the center
                </p>
                <h3 className="mt-3 text-lg font-semibold leading-snug text-pretty text-navy">
                  A culture that lives only with you
                </h3>
                <p className="mt-3 text-pretty leading-relaxed text-ink">
                  When the culture lives only with you, you&apos;re always
                  filling the gaps. Culture can be taught and trained, so the
                  whole team can carry it.
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
                For nearly a decade, we worked harder and nothing changed.
                What finally turned our practice around was three things, done
                with consistency.
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
                The system
              </p>
              <h2
                id="platforms-heading"
                className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-navy md:text-5xl"
              >
                One system. Three platforms.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink">
                VantagePulse, VantageScale, and VantageLead, built to work
                together. Powered by AI.
              </p>
            </div>
            <div className="mt-16 divide-y divide-navy/10 border-y border-navy/10">
              {platforms.map((platform) => (
                <article
                  key={platform.name}
                  className="grid items-start gap-8 py-12 md:grid-cols-[minmax(0,27rem)_1fr] md:gap-16 md:py-14"
                >
                  <PlatformMark platform={platform.key} className={platform.markClass} />
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-navy">
                      {platform.name}
                    </h3>
                    <p className="mt-2 text-lg font-medium leading-snug text-navy">
                      {platform.tagline}
                    </p>
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

        <HomeWaitlistSection />
        <ClosingCta />
      </main>
    </>
  );
}
