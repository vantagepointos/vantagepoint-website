export type ConversionEvent = "waitlist_submit" | "book_visit";

type Gtag = (command: "event", name: string) => void;

/** No-ops unless an analytics env var is set. Nothing here sets cookies by itself. */
export function trackConversion(name: ConversionEvent) {
  if (typeof window === "undefined") return;

  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
  const gtag = (window as Window & { gtag?: Gtag }).gtag;
  if (measurementId && typeof gtag === "function") {
    gtag("event", name);
  }

  if (process.env.NEXT_PUBLIC_VERCEL_ANALYTICS === "1") {
    void import("@vercel/analytics").then(({ track }) => {
      track(name);
    });
  }
}
