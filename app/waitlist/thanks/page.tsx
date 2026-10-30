import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WAITLIST_THANKS_COPY, WALKTHROUGH_HREF } from "@/lib/site";

export const metadata: Metadata = {
  title: "You're on the list | VantagePoint OS",
  description: WAITLIST_THANKS_COPY,
  robots: {
    index: false,
    follow: false,
  },
};

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

export default function WaitlistThanksPage() {
  return (
    <main className="flex flex-1 items-center px-5 py-16 md:px-6">
      <div className="mx-auto max-w-xl">
        <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          {WAITLIST_THANKS_COPY}
        </h1>
        <div className="mt-8 flex flex-col items-start gap-4">
          <a
            href={WALKTHROUGH_HREF}
            className={`inline-flex items-center justify-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-navy transition-colors hover:brightness-95 ${focusRing}`}
          >
            Book a walkthrough
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <Link
            href="/"
            className={`text-sm font-medium text-mist underline decoration-white/30 underline-offset-4 hover:text-white hover:decoration-white ${focusRing} rounded-sm`}
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
