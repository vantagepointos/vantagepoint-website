import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import {
  BOOKING_URL,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_HREF,
} from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Book a walkthrough",
  description:
    "Book a walkthrough of VantagePoint OS. One offering for outpatient physical therapy owners: Vantage Pulse, Vantage Scale, and Vantage Lead.",
});

export default function BookPage() {
  const bookingUrl = BOOKING_URL.trim();

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
          We will look at the practice with you. Vantage Pulse, Vantage Scale,
          and Vantage Lead, as one offering. Bring your questions. We will
          answer them plainly.
        </p>

        <div className="mt-12">
          {bookingUrl ? (
            <div className="overflow-hidden rounded-3xl bg-white ring-1 ring-navy/10">
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
          ) : (
            <div className="rounded-3xl border border-dashed border-navy/20 bg-white px-6 py-16 text-center md:px-12">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink">
                Calendar
              </p>
              <p className="mt-4 text-2xl font-semibold tracking-tight text-navy">
                Booking calendar coming soon
              </p>
              <p className="mx-auto mt-4 max-w-md leading-relaxed text-ink">
                The scheduling page is not connected yet. Until it is, the
                waitlist and the phone will reach us.
              </p>
            </div>
          )}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <Link
            href="/waitlist"
            className="rounded-3xl bg-white px-6 py-6 ring-1 ring-navy/10 hover:ring-navy/25"
          >
            <p className="text-sm font-semibold text-navy">Join the waitlist</p>
            <p className="mt-2 text-sm leading-relaxed text-ink">
              Leave your name and we will write you as a seat opens.
            </p>
          </Link>
          <a
            href={BUSINESS_PHONE_HREF}
            className="rounded-3xl bg-white px-6 py-6 ring-1 ring-navy/10 hover:ring-navy/25"
          >
            <p className="text-sm font-semibold text-navy">Call</p>
            <p className="mt-2 text-sm leading-relaxed text-ink">
              {BUSINESS_PHONE_DISPLAY}
            </p>
          </a>
        </div>
      </div>
    </main>
  );
}
