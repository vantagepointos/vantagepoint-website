/** Public site configuration. Pricing stays off the public pages. */

export const SITE_URL = "https://www.vantagepointos.com";
export const SITE_NAME = "VantagePoint OS";

export const CLIENT_LOGIN_URL = "https://app.vantagepointos.com/login";

export const BUSINESS_PHONE_DISPLAY = "(316) 742-8282";
export const BUSINESS_PHONE_HREF = "tel:+13167428282";

export const BOOK_PATH = "/book";

/**
 * Google Calendar appointment-schedule URL.
 * When this is a non-empty string, /book embeds the page and links to it.
 * Leave it empty until the calendar is connected.
 */
export const BOOKING_URL = "";

/** Legacy is an unlisted agreement for the first 10 clinics. */
export const LEGACY_SEATS_TOTAL = 10;

/**
 * Seats already reserved. Leave at 0 to hide the seat line.
 * The line "X of 10 Legacy seats remaining" renders only when this is above 0.
 */
export const LEGACY_SEATS_TAKEN = 0;

export const LEGACY_DEPOSIT_URL =
  "https://buy.stripe.com/8x25kE60v1oLbqwdhOffy00";

/** Where Stripe should send someone after the deposit is paid. */
export const LEGACY_WELCOME_PATH = "/legacy/welcome";

export const WAITLIST_MEMBERSHIP_COPY =
  "The first 10 clinics become Legacy members, clinics 11-20 become Founding members, and everyone after joins onboarding in order.";

export const WAITLIST_THANKS_COPY =
  "You're on the list. We'll be in touch personally as seats open.";

export const PRIMARY_NAV = [
  { href: "/platform", label: "Platform" },
  { href: "/vantage-lead", label: "Vantage Lead" },
  { href: "/our-story", label: "Our Story" },
] as const;

export const PUBLIC_SITEMAP_PATHS = [
  "/",
  "/platform",
  "/vantage-lead",
  "/our-story",
  "/book",
  "/waitlist",
  "/privacy-policy",
  "/terms-of-service",
] as const;

export const HOME_DESCRIPTION =
  "VantagePoint OS is built for outpatient physical therapy clinic owners. One offering for North Star practice metrics, a steady marketing cadence, and leadership at the center of the team.";

export const CLOSING_LINE = "Elevate your practice, own your future.";

/**
 * Returns remaining Legacy seats when at least one seat has been taken.
 * Returns null when the seat line should stay hidden.
 */
export function legacySeatsRemaining(
  taken: number = LEGACY_SEATS_TAKEN,
  total: number = LEGACY_SEATS_TOTAL,
): number | null {
  if (!Number.isFinite(taken) || taken <= 0) return null;
  const used = Math.min(Math.floor(taken), total);
  return total - used;
}
