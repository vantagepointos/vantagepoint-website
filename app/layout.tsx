import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ClarityConsent } from "@/components/clarity-consent";
import { ConversionClicks } from "@/components/conversion-clicks";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PAGE_SEO } from "@/lib/page-seo";
import { documentTitle } from "@/lib/seo";
import { organizationJsonLd } from "@/lib/structured-data";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const homeTitle = documentTitle(PAGE_SEO.home.title);
const homeImage = `/og?title=${encodeURIComponent(PAGE_SEO.home.title)}`;
const searchConsole =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim() ||
  process.env.NEXT_PUBLIC_GSC_VERIFICATION?.trim();

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: homeTitle,
    template: `%s | ${SITE_NAME}`,
  },
  description: PAGE_SEO.home.description,
  applicationName: SITE_NAME,
  ...(searchConsole ? { verification: { google: searchConsole } } : {}),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    title: homeTitle,
    description: PAGE_SEO.home.description,
    url: "/",
    images: [{ url: homeImage, width: 1200, height: 630, alt: homeTitle }],
  },
  alternates: {
    canonical: "/",
  },
  robots: { index: true, follow: true },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: PAGE_SEO.home.description,
    images: [homeImage],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon-180.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#111729",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full`}>
      <body
        className={`${montserrat.className} flex min-h-full flex-col bg-paper text-navy antialiased`}
      >
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <JsonLd data={organizationJsonLd(PAGE_SEO.home.description)} />
        <ConversionClicks />
        {process.env.NODE_ENV === "production" ? (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        ) : null}
        <ClarityConsent />
        <SiteHeader />
        <div className="flex flex-1 flex-col">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
