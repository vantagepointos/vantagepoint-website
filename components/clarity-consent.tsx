"use client";

import Script from "next/script";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "vp-clarity-consent";
const CHANGE_EVENT = "vp-clarity-change";
export const OPEN_COOKIE_SETTINGS = "vp-open-cookie-settings";

const rawClarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID?.trim() ?? "";
const clarityProjectId = /^[a-z0-9]+$/i.test(rawClarityId) ? rawClarityId : "";

type Choice = "accepted" | "rejected";

function globalPrivacyControl() {
  return (
    typeof navigator !== "undefined" &&
    "globalPrivacyControl" in navigator &&
    (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true
  );
}

function readChoice(): Choice | null {
  if (globalPrivacyControl()) return "rejected";
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "accepted" || value === "rejected" ? value : null;
  } catch {
    return null;
  }
}

function subscribeChoice(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

function subscribeMounted() {
  return () => {};
}

function stopClarity() {
  document.querySelectorAll('script[src*="clarity.ms"]').forEach((node) => node.remove());
  const clarity = (window as Window & { clarity?: (command: string, ...args: unknown[]) => void }).clarity;
  if (typeof clarity === "function") {
    clarity("consentv2", { ad_Storage: "denied", analytics_Storage: "denied" });
  }
}

function pageBlocksClarity(pathname: string) {
  if (pathname === "/waitlist" || pathname.startsWith("/waitlist/")) return true;
  if (pathname === "/legacy" || pathname.startsWith("/legacy/")) return true;
  return typeof document !== "undefined" && document.querySelector("form") !== null;
}

export function ClarityConsent() {
  const pathname = usePathname();
  const mounted = useSyncExternalStore(subscribeMounted, () => true, () => false);
  const choice = useSyncExternalStore(subscribeChoice, readChoice, () => null);
  const [forcedOpen, setForcedOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const blocked = mounted && pageBlocksClarity(pathname);
  const gpc = mounted && globalPrivacyControl();
  const loadClarity = Boolean(clarityProjectId) && choice === "accepted" && !gpc && !blocked;
  const open = Boolean(clarityProjectId) && mounted && (forcedOpen || (choice === null && !gpc));

  useEffect(() => {
    if (!loadClarity) stopClarity();
  }, [loadClarity]);

  useEffect(() => {
    function reopen() {
      setForcedOpen(true);
    }
    window.addEventListener(OPEN_COOKIE_SETTINGS, reopen);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS, reopen);
  }, []);

  useEffect(() => {
    if (open) dialogRef.current?.focus();
  }, [open]);

  function choose(next: Choice) {
    const effective: Choice = globalPrivacyControl() ? "rejected" : next;
    try {
      localStorage.setItem(STORAGE_KEY, effective);
    } catch {
      // Private mode can block storage. The button still closes the bar.
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
    setForcedOpen(false);
  }

  if (!clarityProjectId) return null;

  return (
    <>
      {loadClarity ? (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${clarityProjectId}");`}
        </Script>
      ) : null}
      {open ? (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="false"
          aria-labelledby="cookie-banner-text"
          tabIndex={-1}
          className="fixed inset-x-0 bottom-0 z-[60] border-t border-gold/40 bg-navy text-white shadow-[0_-12px_40px_rgba(11,15,29,0.35)] outline-none"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between md:px-6">
            <p id="cookie-banner-text" className="max-w-3xl text-sm leading-relaxed text-mist">
              We use cookies to understand how visitors use our site so we can improve it.
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                onClick={() => choose("rejected")}
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/30 px-5 text-sm font-semibold text-white hover:bg-white/10"
              >
                Reject
              </button>
              <button
                type="button"
                onClick={() => choose("accepted")}
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-gold px-5 text-sm font-semibold text-navy hover:bg-[#c9963a]"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
