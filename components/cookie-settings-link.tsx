"use client";

import { OPEN_COOKIE_SETTINGS } from "@/components/clarity-consent";

const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID?.trim() ?? "";

export function CookieSettingsLink({ className }: { className: string }) {
  if (!/^[a-z0-9]+$/i.test(projectId)) return null;
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
