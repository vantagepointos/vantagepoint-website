import type { Metadata } from "next";
import { BookWalkthrough } from "@/components/buttons";
import { PlatformMark } from "@/components/logo";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "VantageLead",
  description:
    "VantageLead is the onboarding and leadership training video platform in VantagePoint OS. The first release covers Front Office Onboarding, Provider Onboarding, and Welcome to VantagePoint OS.",
});

const paths = [
  {
    index: "01",
    title: "Front Office Onboarding",
    body: "For the people who answer the phone, greet the day, and keep the schedule honest. This is their path into how your clinic runs the front of the house.",
  },
  {
    index: "02",
    title: "Provider Onboarding",
    body: "For the clinicians who deliver care. How they come into the practice, what the rhythm of the day looks like, and the standard you want them to carry.",
  },
  {
    index: "03",
    title: "Welcome to VantagePoint OS",
    body: "How the team uses VantagePoint OS itself, so the metrics, the marketing cadence, and the training aren't a mystery to anyone but the owner.",
  },
];

export default function VantageLeadPage() {
  return (
    <main id="main" className="bg-paper">
      <header className="mx-auto max-w-3xl px-6 pb-4 pt-20 md:pt-28">
        <PlatformMark platform="lead" className="h-12 w-auto" />
        <h1 className="mt-8 text-4xl font-semibold tracking-[-0.035em] text-navy text-balance md:text-6xl md:leading-[1.05]">
          Teach the way you lead.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink md:text-xl">
          VantageLead is the onboarding and leadership training video platform
          inside VantagePoint OS. It gives a new person on your team a way to
          learn how the clinic actually works. Not a binder on a shelf. Films,
          in an order, for the roles that hold the day together.
        </p>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-16 md:py-24" aria-labelledby="launch-heading">
        <h2 id="launch-heading" className="text-3xl font-semibold tracking-tight text-navy md:text-4xl">
          What&apos;s in the first release.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-ink">
          Three paths. We&apos;d rather these be clear and useful than pretend
          the library is larger than it is.
        </p>
        <ol className="mt-12">
          {paths.map((path) => (
            <li key={path.index} className="border-t border-navy/10 py-10">
              <p className="text-sm font-semibold tracking-[0.16em] text-ink">
                {path.index}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-navy">
                {path.title}
              </h3>
              <p className="mt-4 max-w-2xl leading-relaxed text-ink">{path.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-navy/10 bg-white" aria-labelledby="why-heading">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <h2 id="why-heading" className="text-3xl font-semibold tracking-tight text-navy md:text-4xl">
            So the standard doesn&apos;t depend on you being in every room.
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-ink">
            <p>
              Owners we know are excellent at the work and tired of being the
              only copy of the culture. VantageLead is how that standard gets
              out of your head and into the team, at the moment someone joins.
            </p>
            <p>
              It sits with VantagePulse and VantageScale as one offering.
              Metrics, marketing, and leadership. The same practice, seen from
              three sides.
            </p>
          </div>
        </div>
      </section>

      <section className="on-navy bg-night text-white">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            See the films in a walkthrough.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-mist">
            We&apos;ll show you the three paths and how a new hire would move
            through them.
          </p>
          <div className="mt-10">
            <BookWalkthrough />
          </div>
        </div>
      </section>
    </main>
  );
}
