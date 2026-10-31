import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

const rawMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? "";
const measurementId = /^G-[A-Z0-9]+$/i.test(rawMeasurementId) ? rawMeasurementId : "";
const vercelAnalytics = process.env.NEXT_PUBLIC_VERCEL_ANALYTICS === "1";

/** Renders nothing unless an analytics env var is set at build time. */
export function SiteAnalytics() {
  return (
    <>
      {vercelAnalytics ? <Analytics /> : null}
      {measurementId ? (
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
    </>
  );
}
