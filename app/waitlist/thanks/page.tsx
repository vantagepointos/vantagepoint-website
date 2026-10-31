import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { BOOK_PATH, WAITLIST_THANKS_COPY } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "You're on the list",
  description: WAITLIST_THANKS_COPY,
  index: false,
});

export default function WaitlistThanksPage() {
  return (
    <main id="main" className="on-navy flex flex-1 items-center px-5 py-16 md:px-6">
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
