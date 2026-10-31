import Link from "next/link";
import { BookWalkthrough } from "@/components/buttons";
import { WAITLIST_MEMBERSHIP_COPY } from "@/lib/site";

export function HomeWaitlistSection() {
  return (
    <section
      id="waitlist"
      aria-labelledby="waitlist-heading"
      className="border-t border-navy/10 bg-white"
    >
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink">
          Waitlist
        </p>
        <h2
          id="waitlist-heading"
          className="mt-4 text-3xl font-semibold tracking-tight text-navy md:text-4xl"
        >
          Join the waitlist
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-navy">
          {WAITLIST_MEMBERSHIP_COPY}
        </p>
        <p className="mt-4 text-lg leading-relaxed text-ink">
          Add your clinic, and we&apos;ll reach out to learn about your
          practice and show you what VantagePoint OS can do for it. Want to
          see it first? Book a walkthrough.
        </p>
        <div className="mt-8 flex flex-col items-start gap-4">
          <BookWalkthrough tone="navy" />
          <Link
            href="/waitlist"
            className="rounded-sm text-sm font-medium text-navy underline decoration-navy/30 underline-offset-4 hover:decoration-navy"
          >
            Join the waitlist
          </Link>
        </div>
      </div>
    </section>
  );
}
