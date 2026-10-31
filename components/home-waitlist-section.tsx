import Link from "next/link";
import { BOOK_PATH, WAITLIST_MEMBERSHIP_COPY } from "@/lib/site";

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
          Add your clinic, and we&apos;ll reach out to learn about you and your
          practice, and show you what VantagePoint OS can do for you.
        </p>
        <div className="mt-8 flex flex-col items-start gap-3">
          <Link
            href="/waitlist"
            className="inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-[#243656]"
          >
            Join the waitlist
          </Link>
          <Link
            href={BOOK_PATH}
            className="rounded-sm text-sm font-medium text-navy underline decoration-navy/30 underline-offset-4 hover:decoration-navy"
          >
            Prefer to see it first? Book a walkthrough
          </Link>
        </div>
      </div>
    </section>
  );
}
