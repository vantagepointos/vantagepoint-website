"use client";

import Script from "next/script";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { clarityProjectId, gaMeasurementId } from "@/lib/analytics-config";
import {
  CONSENT_CHANGE_EVENT,
  CONSENT_STORAGE_KEY,
  OPEN_COOKIE_SETTINGS,
  globalPrivacyControl,
} from "@/lib/consent";

const clarityId = clarityProjectId();
const measurementId = gaMeasurementId();

type Choice = "accepted" | "rejected";

function readChoice(): Choice | null {
  if (globalPrivacyControl()) return "rejected";
  try {
    const value = localStorage.getItem(CONSENT_STORAGE_KEY);
    return value === "accepted" || value === "rejected" ? value : null;
  } catch {
    return null;
  }
}

function subscribeChoice(onChange: () => void) {
  window.addEventListener(CONSENT_CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CONSENT_CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

function subscribeMounted() {
  return () => {};
}

function expireCookie(name: string) {
  const host = window.location.hostname;
  document.cookie = `${name}=; Max-Age=0; path=/`;
  document.cookie = `${name}=; Max-Age=0; path=/; domain=${host}`;
  if (host.includes(".")) {
    document.cookie = `${name}=; Max-Age=0; path=/; domain=.${host}`;
  }
}

function stopClarity() {
  document.querySelectorAll('script[src*="clarity.ms"]').forEach((node) => node.remove());
  const clarity = (window as Window & { clarity?: (command: string, ...args: unknown[]) => void }).clarity;
  if (typeof clarity === "function") {
    clarity("consentv2", { ad_Storage: "denied", analytics_Storage: "denied" });
    delete (window as Window & { clarity?: unknown }).clarity;
  }
}

function stopGa() {
  const host = window as Window & { gtag?: (...args: unknown[]) => void; dataLayer?: unknown[] };
  if (typeof host.gtag === "function") {
    host.gtag("consent", "update", {
      analytics_storage: "denied",
      ad_storage: "denied",
    });
  }
  document.querySelectorAll('script[src*="googletagmanager.com/gtag"]').forEach((node) => node.remove());
  document.getElementById("ga4")?.remove();
  delete host.gtag;
  document.cookie.split(";").forEach((part) => {
    const name = part.split("=")[0]?.trim();
    if (name === "_ga" || name === "_gid" || name?.startsWith("_ga_")) expireCookie(name);
  });
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
  const accepted = choice === "accepted" && !gpc;
  const loadClarity = Boolean(clarityId) && accepted && !blocked;
  const loadGa = Boolean(measurementId) && accepted;
  const showBanner = Boolean(clarityId || measurementId);
  const open = showBanner && mounted && (forcedOpen || (choice === null && !gpc));

  useEffect(() => {
    if (!loadClarity) stopClarity();
  }, [loadClarity]);

  useEffect(() => {
    if (!loadGa) stopGa();
  }, [loadGa]);

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
      localStorage.setItem(CONSENT_STORAGE_KEY, effective);
    } catch {
      // Private mode can block storage. The button still closes the bar.
    }
    window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
    setForcedOpen(false);
  }

  if (!showBanner) return null;

  return (
    <>
      {loadClarity ? (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${clarityId}");`}
        </Script>
      ) : null}
      {loadGa ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${measurementId}');`}
          </Script>
        </>
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
                Decline
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
