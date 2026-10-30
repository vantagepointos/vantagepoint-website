"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { WALKTHROUGH_HREF } from "@/lib/site";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

export function BrandHeader() {
  const pathname = usePathname();
  const onWaitlist = pathname === "/waitlist";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 py-3 md:flex md:min-h-20 md:items-center md:justify-between md:px-6">
        <Link href="/" className={`inline-flex rounded-sm ${focusRing}`}>
          <img
            src="/images/vantagepoint_horizontal.png"
            alt="VantagePoint OS"
            className="h-12 w-auto object-contain mix-blend-lighten md:h-16"
          />
        </Link>

        <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end md:mt-0">
          <a
            href={WALKTHROUGH_HREF}
            className={`order-1 inline-flex items-center justify-center gap-2 rounded-md bg-gold px-4 py-3 text-sm font-semibold text-navy transition-colors hover:brightness-95 sm:order-2 sm:px-5 ${focusRing}`}
          >
            Book a walkthrough
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <Link
            href="/waitlist"
            aria-current={onWaitlist ? "page" : undefined}
            className={`order-2 text-center text-sm font-medium text-mist underline-offset-4 hover:text-white hover:underline sm:order-1 sm:px-2 sm:text-left ${focusRing} rounded-sm`}
          >
            Join the waitlist
          </Link>
        </div>
      </div>
    </header>
  );
}
