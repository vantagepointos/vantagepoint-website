import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

const rawMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? "";
const measurementId = /^G-[A-Z0-9]+$/i.test(rawMeasurementId) ? rawMeasurementId : "";
const vercelAnalytics = process.env.NEXT_PUBLIC_VERCEL_ANALYTICS === "1";
const rawClarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID?.trim() ?? "";
const clarityProjectId = /^[a-z0-9]+$/i.test(rawClarityId) ? rawClarityId : "";

/** Renders nothing unless an analytics env var is set at build time. */
export function SiteAnalytics() {
  return (
    <>
      {vercelAnalytics ? <Analytics /> : null}
      {clarityProjectId ? (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${clarityProjectId}");`}
        </Script>
      ) : null}
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
