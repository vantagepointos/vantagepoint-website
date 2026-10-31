"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/logo";
import {
  BOOK_PATH,
  CLIENT_LOGIN_URL,
  PRIMARY_NAV,
} from "@/lib/site";

function current(pathname: string, href: string) {
  return pathname === href;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenPath(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="on-navy sticky top-0 z-50 border-b border-gold/20 bg-night/95 text-mist backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-6">
        <Link href="/" className="rounded-sm" aria-label="VantagePoint OS, home">
          <Logo className="h-8 w-auto sm:h-9" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {PRIMARY_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={current(pathname, item.href) ? "page" : undefined}
              className={`rounded-md px-2 py-1 text-sm font-medium hover:bg-navy ${
                current(pathname, item.href)
                  ? "text-white"
                  : "text-mist hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={CLIENT_LOGIN_URL}
            className="rounded-md px-2 py-1 text-sm font-medium text-mist hover:bg-navy hover:text-white"
          >
            Client Login
          </a>
          <Link
            href={BOOK_PATH}
            aria-current={current(pathname, BOOK_PATH) ? "page" : undefined}
            className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy hover:bg-[#c9963a]"
          >
            Book a walkthrough
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpenPath(open ? null : pathname)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? (
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path
                d="M4 4l10 10M14 4L4 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path
                d="M3 5h12M3 9h12M3 13h12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          )}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Primary mobile"
          className="border-t border-white/10 px-5 py-4 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {PRIMARY_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={current(pathname, item.href) ? "page" : undefined}
                  className="block rounded-lg px-2 py-3 text-base font-medium text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={CLIENT_LOGIN_URL}
                className="block rounded-lg px-2 py-3 text-base font-medium text-white"
              >
                Client Login
              </a>
            </li>
            <li className="pt-2">
              <Link
                href={BOOK_PATH}
                className="flex justify-center rounded-full bg-gold px-5 py-3 text-sm font-semibold text-navy"
              >
                Book a walkthrough
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
