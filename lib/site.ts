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
  "The first twenty clinics to join become our Legacy and Founding members, with their pricing locked in.";

export const WAITLIST_THANKS_COPY =
  "You're on the list. We look forward to learning about your practice and showing you what VantagePoint OS can do for it.";

export const PRIMARY_NAV = [
  { href: "/platform", label: "Platform" },
  { href: "/vantage-lead", label: "VantageLead" },
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

/** Third pillar named in the home hero and the default meta description. */
export const HERO_PILLAR_THREE = "culture";

export const HOME_DESCRIPTION = `VantagePoint OS is the operating system for outpatient PT owners, built around your metrics, your marketing, and your ${HERO_PILLAR_THREE}.`;

/** Home hero. Swap any line here without touching the page. */
export const HERO_HOOK =
  "Full schedule. Great clinicians. So why does it still feel this hard?";

export const HERO_HEADLINE = "There's a better way to run a PT practice.";

export const HERO_SUB = `VantagePoint OS is the operating system for outpatient PT owners, built around the three things that make or break a practice: your metrics, your marketing, and your ${HERO_PILLAR_THREE}.`;

export const STORY_TEASER_HEADING =
  "Built by PT owners who've sat in your chair.";

export const STORY_TEASER_BODY =
  "We know what it's like to give your patients everything and still lose sleep over the business. VantagePoint OS is the system we wish we'd had, built so you can get back to what you do best: making people better.";

/**
 * Direct URL of the product-tour video file (for example an mp4).
 * Leave empty until the screencast is ready.
 * When set, the media frame plays it muted, looping, and inline.
 */
export const PRODUCT_VIDEO_URL = "";

/** Optional poster image shown before the video plays. */
export const PRODUCT_VIDEO_POSTER = "";

export const CLOSING_LINE =
  "With the right system, the practice you want becomes reality.";

export const CLOSING_SUPPORT = "Let us show you how.";

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
