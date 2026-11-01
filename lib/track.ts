export type LeadEvent = "waitlist_submit" | "book_walkthrough" | "legacy_deposit";

type Gtag = (
  command: "event",
  name: string,
  params?: Record<string, string>,
) => void;

type Clarity = (command: string, ...args: unknown[]) => void;

/**
 * Sends a lead event when the matching tool is actually loaded.
 * gtag and clarity are left alone when they are not defined.
 * A booking confirmation inside the calendar iframe is not visible to this page.
 */
export function trackLead(name: LeadEvent) {
  if (typeof window === "undefined") return;

  const gtag = (window as Window & { gtag?: Gtag }).gtag;
  if (typeof gtag === "function") {
    gtag("event", "generate_lead", { method: name });
    gtag("event", name);
  }

  const clarity = (window as Window & { clarity?: Clarity }).clarity;
  if (typeof clarity === "function") {
    clarity("event", name);
    clarity("set", "lead_method", name);
  }

  if (process.env.NODE_ENV === "production") {
    void import("@vercel/analytics").then(({ track }) => {
      track(name);
    });
  }
}
