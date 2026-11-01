import type { Metadata } from "next";
import { BookWalkthrough } from "@/components/buttons";
import { PhoneLink } from "@/components/phone-link";
import { PlatformMark } from "@/components/logo";
import { JsonLd } from "@/components/json-ld";
import { PAGE_SEO } from "@/lib/page-seo";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, softwareAppJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata({
  title: PAGE_SEO.lead.title,
  path: "/vantage-lead",
  description: PAGE_SEO.lead.description,
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
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "VantageLead", path: "/vantage-lead" },
        ])}
      />
      <JsonLd
        data={softwareAppJsonLd({
          name: "VantageLead",
          description: PAGE_SEO.lead.description,
          path: "/vantage-lead",
        })}
      />
      <header className="mx-auto max-w-3xl px-6 pb-4 pt-20 md:pt-28">
        <PlatformMark platform="lead" className="h-12 w-auto" />
        <h1 className="mt-8 text-4xl font-semibold tracking-[-0.035em] text-navy text-balance md:text-6xl md:leading-[1.05]">
          Teach the way you lead.
        </h1>
        <p className="mt-5 text-xl font-medium leading-snug text-navy md:text-2xl">
          The roots of enduring leadership.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-ink md:text-xl">
          Onboarding and leadership training, on demand, so the standard of
          your practice can always be referred to and taught.
        </p>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-16 md:py-24" aria-labelledby="launch-heading">
        <h2 id="launch-heading" className="text-3xl font-semibold tracking-tight text-navy md:text-4xl">
          What&apos;s in the first release.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-ink">
          Our first release is focused on purpose: three paths that cover the
          essentials every team needs, with more tracks and leadership training
          on the way.
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
              The owners who need leadership most rarely think of it as
              leadership training. What they want is a team that takes
              ownership. VantageLead starts there, teaching your standard from
              day one and helping it grow across the company. That means less
              on your plate and your directors&apos;, and a healthier business.
            </p>
            <p>
              VantageLead works together with VantagePulse and VantageScale as
              one system. Metrics, marketing and leadership. The same practice,
              seen from three sides.
            </p>
          </div>
        </div>
      </section>

      <section className="on-navy bg-night text-white">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            See the training in a walkthrough.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-mist">
            We&apos;ll show you the three paths and how a new hire would move
            through them.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <BookWalkthrough />
            <PhoneLink onNavy />
          </div>
        </div>
      </section>
    </main>
  );
}
