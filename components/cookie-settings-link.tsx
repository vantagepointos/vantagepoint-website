"use client";

import { cookieConsentEnabled } from "@/lib/analytics-config";
import { OPEN_COOKIE_SETTINGS } from "@/lib/consent";

export function CookieSettingsLink({ className }: { className: string }) {
  if (!cookieConsentEnabled()) return null;
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS))}
    >
      Cookie settings
    </button>
  );
}
