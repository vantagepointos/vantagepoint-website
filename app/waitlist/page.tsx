import type { Metadata } from "next";
import Link from "next/link";
import { WaitlistForm } from "@/components/waitlist-form";
import { pageMetadata } from "@/lib/seo";
import { BOOK_PATH, WAITLIST_MEMBERSHIP_COPY } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Join the waitlist",
  description:
    "Join the VantagePoint OS waitlist. The first 10 clinics become Legacy members, clinics 11-20 become Founding members, and everyone after joins onboarding in order.",
});

export default function WaitlistPage() {
  return (
    <main id="main" className="on-navy px-5 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
          VantagePoint OS
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Join the waitlist
        </h1>
        <p className="mt-5 text-base leading-relaxed text-white md:text-lg">
          {WAITLIST_MEMBERSHIP_COPY}
        </p>
        <p className="mt-4 text-base leading-relaxed">
          Tell us a little about your clinics. We read every note ourselves and
          write back personally as a seat opens. A walkthrough is still the
          best way to see whether VantagePoint OS is the right fit.
        </p>
        <p className="mt-4">
          <Link
            href={BOOK_PATH}
            className="rounded-sm text-sm font-medium text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
          >
            Book a walkthrough
          </Link>
        </p>
        <div className="mt-8">
          <WaitlistForm />
        </div>
      </div>
    </main>
  );
}
