import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WAITLIST_MEMBERSHIP_COPY, WALKTHROUGH_HREF } from "@/lib/site";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

export function HomeWaitlistSection() {
  return (
    <section
      id="waitlist"
      aria-labelledby="waitlist-heading"
      className="border-t border-white/10 bg-navy font-brand text-mist"
    >
      <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
          Waitlist
        </p>
        <h2
          id="waitlist-heading"
          className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl"
        >
          Join the waitlist
        </h2>
        <p className="mt-4 text-base leading-relaxed text-white md:text-lg">
          {WAITLIST_MEMBERSHIP_COPY}
        </p>
        <p className="mt-4 text-base leading-relaxed">
          We&apos;re opening VantagePoint OS owner to owner. Leave your name
          and we&apos;ll be in touch personally as a seat opens. If you&apos;d
          like to see it with someone first, book a walkthrough.
        </p>
        <div className="mt-8 flex flex-col items-start gap-4">
          <a
            href={WALKTHROUGH_HREF}
            className={`inline-flex items-center justify-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-navy transition-colors hover:brightness-95 ${focusRing}`}
          >
            Book a walkthrough
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <Link
            href="/waitlist"
            className={`text-sm font-medium text-mist underline decoration-white/30 underline-offset-4 hover:text-white hover:decoration-white ${focusRing} rounded-sm`}
          >
            Join the waitlist
          </Link>
        </div>
      </div>
    </section>
  );
}
