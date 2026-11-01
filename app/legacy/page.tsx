import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { PAGE_SEO } from "@/lib/page-seo";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import {
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_HREF,
  LEGACY_DEPOSIT_URL,
  LEGACY_SEATS_TOTAL,
  legacySeatsRemaining,
} from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: PAGE_SEO.legacy.title,
  path: "/legacy",
  description: PAGE_SEO.legacy.description,
  index: false,
});

const terms = [
  "$699 a month, per clinic, for as long as your subscription is active.",
  "Half the setup fee.",
  "Billing starts at go-live.",
];

export default function LegacyPage() {
  const remaining = legacySeatsRemaining();

  return (
    <main id="main" className="bg-paper">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Legacy", path: "/legacy" },
        ])}
      />
      <article className="mx-auto max-w-2xl px-6 pb-24 pt-20 md:pb-32 md:pt-28">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
          A private note
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-navy md:text-5xl">
          Legacy membership
        </h1>
        {remaining !== null ? (
          <p className="mt-6 text-sm font-medium text-navy">
            {remaining} of {LEGACY_SEATS_TOTAL} practices remaining
          </p>
        ) : null}
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink">
          <p>
            This page isn&apos;t on the public site. We&apos;re sharing it with you
            because you&apos;re one of the first ten practices we&apos;re inviting to
            build VantagePoint&nbsp;OS with us.
          </p>
          <p>
            Legacy pricing is locked at $699 per clinic per month for as long
            as your practice keeps an active subscription in good standing,
            including every clinic you add. It&apos;s our thank-you to the
            practices that help build VantagePoint&nbsp;OS from the start. Legacy
            pricing doesn&apos;t transfer if the practice is sold.
          </p>
        </div>

        <h2 className="mt-12 text-2xl font-semibold tracking-tight text-navy">
          What you&apos;re reserving
        </h2>
        <ul className="mt-6 space-y-4 border-t border-navy/10 pt-6 text-navy">
          {terms.map((term) => (
            <li key={term} className="flex gap-3 leading-relaxed">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy" aria-hidden="true" />
              <span>{term}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 leading-relaxed text-ink">
          Your $500 deposit reserves your Legacy spot and is credited toward
          your setup fee. It&apos;s fully refundable if you cancel before
          onboarding kickoff. Setup fees are otherwise non-refundable,
          including if the go-live date moves, but if VantagePoint&nbsp;OS
          doesn&apos;t launch, we refund all setup fees. Full terms are in your
          Letter of Intent.
        </p>
        <p className="mt-5 leading-relaxed text-ink">
          The deposit doesn&apos;t start your billing. It holds the seat while we
          prepare the letter of intent and the steps toward go-live. Once
          it&apos;s received, we&apos;ll be in touch to plan next steps.
        </p>

        <p className="mt-10">
          <a
            href={LEGACY_DEPOSIT_URL}
            className="inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-[#243656]"
          >
            Place the $500 deposit
          </a>
        </p>
        <p className="mt-6 text-sm leading-relaxed text-ink">
          Questions before you do that are welcome. Call{" "}
          <a
            href={BUSINESS_PHONE_HREF}
            className="font-semibold text-navy underline decoration-navy/30 underline-offset-4"
          >
            {BUSINESS_PHONE_DISPLAY}
          </a>
          .
        </p>
      </article>
    </main>
  );
}
