import { Fragment } from "react";
import Link from "next/link";
import { CookieSettingsLink } from "@/components/cookie-settings-link";
import { Logo } from "@/components/logo";
import {
  BOOK_PATH,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_HREF,
  CLIENT_LOGIN_URL,
  PRIMARY_NAV,
} from "@/lib/site";

const linkClass = "rounded-sm text-sm text-mist hover:text-white";

export function SiteFooter() {
  return (
    <footer className="on-navy border-t border-gold/15 bg-deep text-mist">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[minmax(0,1.4fr)_1fr_1fr] md:px-6">
        <div>
          <Link href="/" className="inline-flex rounded-sm" aria-label="VantagePoint OS, home">
            <Logo className="h-12 w-auto md:h-[3.375rem]" />
          </Link>
          <p className="mt-4 max-w-xs text-base font-medium leading-snug text-mist">
            Elevate your practice. Own your future.
          </p>
          <p className="mt-12 max-w-xs text-sm leading-relaxed text-mist">
            Built by PT owners, for PT owners.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
            Explore
          </p>
          <ul className="mt-4 space-y-3">
            {PRIMARY_NAV.map((item) => (
              <Fragment key={item.href}>
                <li>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              </Fragment>
            ))}
            <li>
              <Link href={BOOK_PATH} className={linkClass}>
                Book a walkthrough
              </Link>
            </li>
            <li>
              <a href={CLIENT_LOGIN_URL} className={linkClass}>
                Client Login
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
            Contact
          </p>
          <ul className="mt-4 space-y-3">
            <li>
              <a href={BUSINESS_PHONE_HREF} className={linkClass}>
                {BUSINESS_PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <Link href="/waitlist" className={linkClass}>
                Waitlist
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className={linkClass}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className={linkClass}>
                Terms of Service
              </Link>
            </li>
            {/^[a-z0-9]+$/i.test(process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID?.trim() ?? "") ? (
              <li>
                <CookieSettingsLink className={`${linkClass} text-left`} />
              </li>
            ) : null}
          </ul>
        </div>
      </div>
      <div className="border-t border-gold/15">
        <p className="mx-auto max-w-6xl px-5 py-6 text-xs text-mist md:px-6">
          &copy; {new Date().getFullYear()} VantagePoint OS
        </p>
      </div>
    </footer>
  );
}
