import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { BUSINESS_PHONE_DISPLAY, BUSINESS_PHONE_HREF } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Deposit received",
  description:
    "Thank you for reserving a Legacy seat with VantagePoint OS. Here's what happens next.",
  index: false,
});

const steps = [
  "We confirm the deposit with you personally.",
  "We send the letter of intent for you to read in your own time.",
  "We plan go-live together. Billing starts then, not today.",
];

export default function LegacyWelcomePage() {
  return (
    <main id="main" className="bg-paper">
      <article className="mx-auto max-w-2xl px-6 pb-24 pt-20 md:pb-32 md:pt-28">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
          Legacy
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-navy text-balance md:text-5xl">
          We received your deposit. Thank you.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink">
          You reserved a Legacy seat with VantagePoint OS. That matters to us,
          and we&apos;ll treat it that way.
        </p>
        <h2 className="mt-12 text-2xl font-semibold tracking-tight text-navy">
          What happens next
        </h2>
        <ol className="mt-6 space-y-5">
          {steps.map((step, index) => (
            <li key={step} className="flex gap-4">
              <span className="mt-0.5 text-sm font-semibold text-navy">
                0{index + 1}
              </span>
              <span className="leading-relaxed text-ink">{step}</span>
            </li>
          ))}
        </ol>
        <p className="mt-10 leading-relaxed text-ink">
          If anything looks off, or you want to talk before the letter
          arrives, call{" "}
          <a
            href={BUSINESS_PHONE_HREF}
            className="font-semibold text-navy underline decoration-navy/30 underline-offset-4"
          >
            {BUSINESS_PHONE_DISPLAY}
          </a>
          .
        </p>
        <p className="mt-8">
          <Link
            href="/"
            className="text-sm font-semibold text-navy underline decoration-navy/30 underline-offset-4"
          >
            Back to VantagePoint OS
          </Link>
        </p>
      </article>
    </main>
  );
}
