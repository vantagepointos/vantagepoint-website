/** Build-time IDs. Empty values mean the tag is never added. */

export function gaMeasurementId() {
  const raw =
    process.env.NEXT_PUBLIC_GA_ID?.trim() ||
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ||
    "";
  return /^G-[A-Z0-9]+$/i.test(raw) ? raw : "";
}

export function clarityProjectId() {
  const raw = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID?.trim() ?? "";
  return /^[a-z0-9]+$/i.test(raw) ? raw : "";
}

export function cookieConsentEnabled() {
  return Boolean(gaMeasurementId() || clarityProjectId());
}
