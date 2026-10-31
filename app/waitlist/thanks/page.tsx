import type { Metadata } from "next";
import Link from "next/link";
import { PhoneLink } from "@/components/phone-link";
import { JsonLd } from "@/components/json-ld";
import { PAGE_SEO } from "@/lib/page-seo";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { BOOK_PATH, WAITLIST_THANKS_COPY } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: PAGE_SEO.thanks.title,
  path: "/waitlist/thanks",
  description: PAGE_SEO.thanks.description,
  index: false,
});

export default function WaitlistThanksPage() {
  return (
    <main id="main" className="on-navy flex flex-1 items-center px-5 py-16 md:px-6">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Waitlist", path: "/waitlist" },
          { name: "You're on the list", path: "/waitlist/thanks" },
        ])}
      />
      <div className="mx-auto max-w-xl">
        <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          {WAITLIST_THANKS_COPY}
        </h1>
        <div className="mt-8 flex flex-col items-start gap-4">
          <Link
            href={BOOK_PATH}
            className="inline-flex items-center justify-center rounded-full bg-gold px-5 py-3 text-sm font-semibold text-navy hover:bg-[#c9963a]"
          >
            Book a walkthrough
          </Link>
          <PhoneLink onNavy />
          <Link
            href="/"
            className="rounded-sm text-sm font-medium text-mist underline decoration-white/30 underline-offset-4 hover:text-white hover:decoration-white"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
