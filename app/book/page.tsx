import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { PhoneLink } from "@/components/phone-link";
import { pageMetadata } from "@/lib/seo";
import { BOOKING_URL } from "@/lib/site";

const bookingUrl = BOOKING_URL.trim();

export const metadata: Metadata = pageMetadata({
  title: "Book a walkthrough",
  path: "/book",
  description:
    "Book a walkthrough of VantagePoint OS. One offering for outpatient physical therapy owners: VantagePulse, VantageScale, and VantageLead.",
  index: Boolean(bookingUrl),
});

export default function BookPage() {
  if (!bookingUrl) redirect("/waitlist");

  return (
    <main id="main" className="bg-paper">
      <div className="mx-auto max-w-3xl px-6 pb-24 pt-20 md:pb-32 md:pt-28">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
          VantagePoint OS
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-navy text-balance md:text-6xl md:leading-[1.05]">
          Book a walkthrough
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink md:text-xl">
          We&apos;ll look at the practice with you. VantagePulse, VantageScale,
          and VantageLead, as one offering. Bring your questions. We&apos;ll
          answer them plainly.
        </p>

        <div className="mt-12 overflow-hidden rounded-3xl bg-white ring-1 ring-navy/10">
          <iframe
            title="Booking calendar"
            src={bookingUrl}
            className="h-[760px] w-full"
          />
          <p className="border-t border-navy/10 px-6 py-4 text-sm text-ink">
            <a
              href={bookingUrl}
              className="font-semibold text-navy underline decoration-navy/30 underline-offset-4"
            >
              Open the calendar
            </a>
          </p>
        </div>

        <div className="mt-8">
          <PhoneLink />
        </div>
        <p className="mt-4">
          <Link
            href="/waitlist"
            className="text-sm font-medium text-navy underline decoration-navy/30 underline-offset-4"
          >
            Join the waitlist
          </Link>
        </p>
      </div>
    </main>
  );
}
