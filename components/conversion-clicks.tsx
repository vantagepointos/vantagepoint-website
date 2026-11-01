"use client";

import { useEffect } from "react";
import { BOOK_PATH, LEGACY_DEPOSIT_URL } from "@/lib/site";
import { trackLead } from "@/lib/track";

function isBookWalkthrough(href: string, label: string) {
  const path = href.split(/[?#]/)[0];
  return path === BOOK_PATH && label.includes("Book a walkthrough");
}

/** Clicks only. The calendar confirmation stays inside a cross-origin iframe. */
export function ConversionClicks() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (event.button !== 0) return;
      const anchor = (event.target as Element | null)?.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;
      const label = anchor.textContent?.replace(/\s+/g, " ").trim() ?? "";
      if (isBookWalkthrough(href, label)) {
        trackLead("book_walkthrough");
      } else if (href === LEGACY_DEPOSIT_URL) {
        trackLead("legacy_deposit");
      }
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
