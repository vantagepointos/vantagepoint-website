import type { Metadata } from "next";
import Link from "next/link";
import { BookWalkthrough, TextLink } from "@/components/buttons";
import { PhoneLink } from "@/components/phone-link";
import { PlatformMark } from "@/components/logo";
import { PlatformPanel } from "@/components/platform-panel";
import { JsonLd } from "@/components/json-ld";
import { PAGE_SEO } from "@/lib/page-seo";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, softwareAppJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata({
  title: PAGE_SEO.platform.title,
  path: "/platform",
  description: PAGE_SEO.platform.description,
});

export default function PlatformPage() {
  return (
    <main id="main" className="bg-paper">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Platform", path: "/platform" },
        ])}
      />
      <JsonLd
        data={softwareAppJsonLd({
          name: "VantagePulse",
          description:
            "Clear scoreboards of outpatient physical therapy practice health for providers, the front office, clinical directors, and the owner.",
          path: "/platform#pulse",
        })}
      />
      <JsonLd
        data={softwareAppJsonLd({
          name: "VantageScale",
          description:
            "A marketing cadence for outpatient physical therapy clinics. Plan a campaign, review it, and schedule it.",
          path: "/platform#scale",
        })}
      />
      <JsonLd
        data={softwareAppJsonLd({
          name: "VantageLead",
          description: PAGE_SEO.lead.description,
          path: "/platform#lead",
        })}
      />
      <header className="mx-auto max-w-3xl px-6 pb-8 pt-20 md:pt-28">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
          VantagePoint&nbsp;OS
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-navy text-balance md:text-6xl md:leading-[1.05]">
          Everything your practice needs. In one system.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink md:text-xl">
          VantagePulse, VantageScale, and VantageLead. Built for outpatient
          physical therapy owners who want a clear view of their metrics, a
          steady marketing rhythm, and a team that can carry the standard when
          they&apos;re not in the room.
        </p>
      </header>

      <section id="pulse" className="mx-auto grid max-w-6xl scroll-mt-28 items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24" aria-labelledby="pulse-heading">
        <div>
          <PlatformMark platform="pulse" className="h-auto w-[min(100%,28rem)]" />
          <h2 id="pulse-heading" className="mt-8 text-3xl font-semibold tracking-tight text-navy md:text-4xl">
            VantagePulse
          </h2>
          <p className="mt-3 text-xl font-medium leading-snug text-navy">
            The definitive view of practice health.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink">
            Clear scoreboards for everyone who runs the day, so every clinician
            knows their numbers, cares about them, and wants to move them.
          </p>
          <ul className="mt-8 space-y-3 text-navy">
            {[
              "Every clinician logs in to their own My Performance view",
              "Efficiency, units per visit, cancellation rate, NPS, bonus progress and revenue multiple, color-coded against your clinic's goals",
              "Front office measures, including arrival rates",
              "AI coaching that helps owners and clinical directors turn each clinician's numbers into next steps",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 leading-relaxed text-ink">
            The aim is simple. Everyone looks at the same practice, knows their
            part in it, and has a reason to improve it.
          </p>
          <p className="mt-6">
            <TextLink href="/book">See VantagePulse in a walkthrough</TextLink>
          </p>
        </div>
        <PlatformPanel platform="pulse" />
      </section>

      <section id="scale" className="scroll-mt-28 border-t border-navy/10 bg-white" aria-labelledby="scale-heading">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <div className="md:order-2">
            <PlatformMark platform="scale" className="h-auto w-[min(80.14%,22.44rem)]" />
            <h2 id="scale-heading" className="mt-8 text-3xl font-semibold tracking-tight text-navy md:text-4xl">
              VantageScale
            </h2>
            <p className="mt-3 text-xl font-medium leading-snug text-navy">
              Accelerating growth. Amplifying impact.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink">
              A steady marketing cadence without the busywork. See what people
              in your county are searching for, choose what to market, then
              plan, review and schedule your campaign.
            </p>
            <ul className="mt-8 space-y-3 text-navy">
              {[
                "Local search trends: see which pain and condition topics people in your county are searching for",
                "Campaign builder: choose how many posts and how many weeks, and a full campaign is drafted in about a minute, ready for you to review",
                "Email copy drafted for you, ready to review and schedule",
                "Smart Funnels: pick a workshop, an open house or free screening, a campaign to bring past patients back, or a community education series. VantageScale drafts the landing page, email series, social posts and confirmation email. You review and publish.",
                "Digital and print newsletters",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 leading-relaxed text-ink">
              It&apos;s built to make marketing easy, efficient and right for
              your practice, instead of something that only happens when time
              allows.
            </p>
            <p className="mt-6">
              <TextLink href="/book">See VantageScale in a walkthrough</TextLink>
            </p>
          </div>
          <div className="md:order-1">
            <PlatformPanel platform="scale" />
          </div>
        </div>
      </section>

      <section id="lead" className="scroll-mt-28 border-t border-navy/10" aria-labelledby="lead-heading">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <PlatformMark platform="lead" className="h-auto w-[min(84.5%,23.66rem)]" />
            <h2 id="lead-heading" className="mt-8 text-3xl font-semibold tracking-tight text-navy md:text-4xl">
              VantageLead
            </h2>
            <p className="mt-3 text-xl font-medium leading-snug text-navy">
              The roots of enduring leadership.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink">
              Onboarding and leadership training, on demand, that builds a
              culture of ownership across your whole team, not just the people
              with leadership titles.
            </p>
            <ul className="mt-8 space-y-3 text-navy">
              {[
                "Front Office Onboarding",
                "Provider Onboarding",
                "Welcome to VantagePoint\u00A0OS",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 leading-relaxed text-ink">
              The first release is three paths every team needs, front office,
              providers, and how the team uses VantagePoint&nbsp;OS, with more
              tracks and leadership training on the way.
            </p>
            <p className="mt-6">
              <TextLink href="/book">See VantageLead in a walkthrough</TextLink>
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
            the impact they could have on it.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <BookWalkthrough />
            <p className="text-sm text-mist">
              Not ready to talk yet?{" "}
              <Link href="/waitlist" className="underline decoration-white/30 underline-offset-4 hover:text-white hover:decoration-white">
                Join the waitlist.
              </Link>
            </p>
            <PhoneLink onNavy />
          </div>
        </div>
      </section>
    </main>
  );
}
