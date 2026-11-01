export const CONSENT_STORAGE_KEY = "vp-clarity-consent";
export const CONSENT_CHANGE_EVENT = "vp-clarity-change";
export const OPEN_COOKIE_SETTINGS = "vp-open-cookie-settings";

export function globalPrivacyControl() {
  return (
    typeof navigator !== "undefined" &&
    "globalPrivacyControl" in navigator &&
    (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true
  );
}

/** True only after Accept, and never when the browser sends Global Privacy Control. */
export function analyticsConsentGranted() {
  if (typeof window === "undefined") return false;
  if (globalPrivacyControl()) return false;
  try {
    return localStorage.getItem(CONSENT_STORAGE_KEY) === "accepted";
  } catch {
    return false;
  }
}
