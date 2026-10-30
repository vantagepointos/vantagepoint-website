import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import {
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_HREF,
  LEGACY_DEPOSIT_URL,
  LEGACY_SEATS_TOTAL,
  legacySeatsRemaining,
} from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Legacy",
  description:
    "A private note for clinics invited into Legacy membership with VantagePoint OS.",
  index: false,
});

const terms = [
  "$699 a month, per clinic, for life.",
  "Half the setup fee.",
  "A $500 deposit reserves your seat. The deposit is refundable.",
  "Billing starts at go-live.",
  "If VantagePoint OS ends the letter of intent, only the $500 deposit is refunded.",
  "Setup fees are non-refundable.",
];

export default function LegacyPage() {
  const remaining = legacySeatsRemaining();

  return (
    <main id="main" className="bg-paper">
      <article className="mx-auto max-w-2xl px-6 pb-24 pt-20 md:pb-32 md:pt-28">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
          A private note
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-navy md:text-5xl">
          Legacy membership
        </h1>
        {remaining !== null ? (
          <p className="mt-6 text-sm font-medium text-navy">
            {remaining} of {LEGACY_SEATS_TOTAL} Legacy seats remaining
          </p>
        ) : null}
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink">
          <p>
            This page is not on the public site. We are sharing it with you
            because you are one of the first ten clinics we are inviting to
            build VantagePoint OS with us.
          </p>
          <p>
            Legacy is a lifetime place in the offering, held owner to owner. It
            is a quiet agreement. There is no promotion attached to it.
          </p>
        </div>

        <h2 className="mt-12 text-2xl font-semibold tracking-tight text-navy">
          What you are reserving
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
          The deposit does not start your billing. It holds the seat while we
          prepare the letter of intent and the steps toward go-live. Once it
          is received, we write you personally.
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
