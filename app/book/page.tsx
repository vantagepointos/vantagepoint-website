import type { Metadata } from "next";
import { BookVisit } from "@/components/book-visit";
import { JsonLd } from "@/components/json-ld";
import { PhoneLink } from "@/components/phone-link";
import { PAGE_SEO } from "@/lib/page-seo";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { BOOKING_EMBED_URL, BOOKING_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: PAGE_SEO.book.title,
  path: "/book",
  description: PAGE_SEO.book.description,
});

export default function BookPage() {
  return (
    <main id="main" className="bg-paper">
      <BookVisit />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Book a walkthrough", path: "/book" },
        ])}
      />
      <div className="mx-auto max-w-4xl px-6 pb-24 pt-20 md:pb-32 md:pt-28">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
          VantagePoint OS
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-navy text-balance md:text-6xl md:leading-[1.05]">
          Book a walkthrough
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink md:text-xl">
          Pick a time that works for you. We&apos;ll walk through VantagePoint
          OS together and show you how it fits your practice.
        </p>
        <div className="mt-6">
          <PhoneLink leadIn="Or call" />
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl bg-white ring-1 ring-navy/10">
          <iframe
            title="Schedule a walkthrough with VantagePoint OS"
            src={BOOKING_EMBED_URL}
            loading="lazy"
            className="h-[800px] w-full border-0 md:h-[700px]"
            style={{ border: 0 }}
          />
          <p className="border-t border-navy/10 px-6 py-4 text-sm text-ink">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener"
              className="rounded-sm font-medium text-navy underline decoration-navy/30 underline-offset-4 hover:decoration-navy"
            >
              Trouble seeing the calendar? Open it in a new tab
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
