import Link from "next/link";
import { BookWalkthrough, TextLink } from "@/components/buttons";
import { ClosingCta } from "@/components/closing-cta";
import { FoundingPlaceholder } from "@/components/founding-placeholder";
import { HomeWaitlistSection } from "@/components/home-waitlist-section";
import { PlatformMark } from "@/components/logo";
import { PracticeBoard } from "@/components/visuals";

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
    body: "Teach the way you lead, so the team can carry the standard of care. It should not live only with the owner.",
  },
];

const platforms = [
  {
    key: "pulse" as const,
    name: "Vantage Pulse",
    href: "/platform",
    summary:
      "The practice metrics. Scoreboards the people who run the day can actually use, from the front office to the owner.",
    points: [
      "Provider stat grid and pace",
      "Front office measures, including arrivals",
      "A view for the clinical director",
      "A view for the owner",
    ],
  },
  {
    key: "scale" as const,
    name: "Vantage Scale",
    href: "/platform",
    summary:
      "The marketing rhythm. A place to plan and publish the work that keeps your community in touch with the clinic.",
    points: ["Social publishing", "Email", "Digital and print newsletters"],
  },
  {
    key: "lead" as const,
    name: "Vantage Lead",
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
        <section className="on-navy relative overflow-hidden bg-navy text-white">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(214,164,69,0.14),transparent_58%)]"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                Built for outpatient PT owners
              </p>
              <h1 className="mt-6 text-[2.65rem] font-semibold leading-[1.05] tracking-[-0.04em] text-balance sm:text-6xl md:text-7xl">
                See your whole practice clearly.
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-mist md:text-xl">
                VantagePoint OS is the operating system we built for the
                business side of an outpatient practice. The numbers that
                matter, a marketing rhythm you can keep, and leadership your
                team can learn. One offering, built owner to owner.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <BookWalkthrough />
                <Link
                  href="/platform"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:border-white/60"
                >
                  See the platform
                </Link>
              </div>
            </div>
            <div className="mx-auto mt-16 max-w-4xl md:mt-20">
              <PracticeBoard />
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
                You opened a clinic to make people better. The practice around
                that work is what wears an owner down. You can be proud of the
                people you serve and still feel unsure about the business.
                We&apos;ve been where you are.
              </p>
            </div>
            <ul className="mt-16 grid gap-10 md:grid-cols-3 md:gap-12">
              <li>
                <h3 className="text-lg font-semibold text-navy">
                  Numbers everywhere
                </h3>
                <p className="mt-3 leading-relaxed text-ink">
                  Reports live in different places, and they rarely tell the
                  same story. A clear practice starts with a picture you trust.
                </p>
              </li>
              <li>
                <h3 className="text-lg font-semibold text-navy">
                  Marketing in bursts
                </h3>
                <p className="mt-3 leading-relaxed text-ink">
                  It gets attention when the schedule thins out, then it goes
                  quiet again. A community needs a steadier rhythm than that.
                </p>
              </li>
              <li>
                <h3 className="text-lg font-semibold text-navy">
                  Leadership in your head
                </h3>
                <p className="mt-3 leading-relaxed text-ink">
                  The way you want people cared for is real. If it is not
                  taught, it leaves the building when you do.
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
                When our own practice turned, it was not a trick. It was three
                things, held with some consistency.
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
                VantagePoint OS is a single offering. Vantage Pulse, Vantage
                Scale, and Vantage Lead are how it shows up in the practice.
                They are meant to be used together.
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
                        {platform.key === "lead"
                          ? "Explore Vantage Lead"
                          : "Explore the platform"}
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
              Built by owners, for owners.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink">
              In 2014 we opened our first clinic to take exceptional care of
              our patients and the community we call home. Running the practice
              was harder than caring for people. We built VantagePoint OS so
              another owner would not have to figure that out alone.
            </p>
            <p className="mt-8">
              <TextLink href="/our-story">Read our story</TextLink>
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
