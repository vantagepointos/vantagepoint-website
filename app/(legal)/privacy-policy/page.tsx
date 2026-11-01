import type { Metadata } from "next";
import { BarChart3, FileText, Database, Lock, ShieldCheck, Smartphone } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { PAGE_SEO } from "@/lib/page-seo";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata({
  title: PAGE_SEO.privacy.title,
  path: "/privacy-policy",
  description: PAGE_SEO.privacy.description,
});

const card = "rounded-3xl border border-navy/10 bg-white p-8 md:p-10";
const heading =
  "mb-4 flex items-center gap-3 text-2xl font-semibold tracking-tight text-navy";

export default function PrivacyPolicy() {
  return (
    <main id="main" className="bg-paper pb-24">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ])}
      />
      <div className="mx-auto max-w-3xl px-6 pt-20 md:pt-28">
        <div className="mb-12">
          <div className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink">
            <ShieldCheck className="h-4 w-4 text-navy" aria-hidden="true" /> Legal & Compliance
          </div>
          <h1 className="mb-4 text-4xl font-semibold tracking-tight text-navy md:text-5xl">
            Privacy Policy
          </h1>
          <p className="text-ink">
            Last Updated: November 1, 2026
          </p>
        </div>

        <div className="space-y-8 leading-relaxed text-ink">
          <section className={card}>
            <h2 className={heading}>
              <FileText className="h-6 w-6 text-navy" aria-hidden="true" /> 1. Introduction
            </h2>
            <p>
              Welcome to VantagePoint&nbsp;OS. We respect your privacy and are committed to protecting the personal and business data you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you use our suite of applications, including VantageScale, VantagePulse, and VantageLead.
            </p>
          </section>

          <section className={card}>
            <h2 className={heading}>
              <Database className="h-6 w-6 text-navy" aria-hidden="true" /> 2. Information We Collect & How We Use It
            </h2>
            <p className="mb-4">
              We collect information strictly to provide and improve services for our clinic partners. This includes:
            </p>
            <ul className="mb-6 ml-4 list-disc list-inside space-y-2">
              <li>
                <strong className="text-navy">Account Information:</strong> Name, email address, phone number, and clinic details provided during registration.
              </li>
            </ul>
            <p>
              If you connect your Meta (Facebook and Instagram) accounts, VantageScale retrieves limited performance metrics, such as reach, impressions and clicks for your posts, and impressions, clicks, spend and leads for your ads, and displays them in your VantageScale dashboard. We access this data only with your permission and use it only to provide VantageScale to you. You can remove VantageScale&apos;s access at any time in your Meta account settings.
            </p>
            <div className="mt-6 rounded-2xl bg-paper px-4 py-4">
              <p className="text-center font-semibold text-navy">
                We do not sell, rent, or share your data with unauthorized third parties.
              </p>
            </div>
          </section>

          <section className={card}>
            <h2 className={heading}>
              <Smartphone className="h-6 w-6 text-navy" aria-hidden="true" /> 3. Text messages
            </h2>
            <p>
              If you text our business line, we use your number and messages only to respond to you. We don&apos;t sell mobile numbers, and we don&apos;t share mobile numbers or text-message consent with third parties or affiliates for their marketing.
            </p>
          </section>

          <section className={card}>
            <h2 className={heading}>
              <BarChart3 className="h-6 w-6 text-navy" aria-hidden="true" /> 4. Analytics
            </h2>
            <p className="mb-4">
              We use Vercel Web Analytics to understand site traffic. It doesn&apos;t use cookies and collects general usage data such as pages visited, referring site, device type and country. With your consent, we also use Microsoft Clarity, which uses cookies and similar technology to record how visitors use our site (clicks, scrolling and pages viewed) as heatmaps and session recordings. We set Clarity to mask what you type into forms. Microsoft processes this data under the{" "}
              <a
                href="https://privacy.microsoft.com/privacystatement"
                className="font-semibold text-navy underline decoration-navy/30 underline-offset-4"
              >
                Microsoft Privacy Statement
              </a>
              . You can decline or withdraw consent at any time through Cookie settings. Our website doesn&apos;t collect patient or health information.
            </p>
          </section>

          <section id="data-deletion" className={`${card} relative overflow-hidden`}>
            <div className="absolute top-0 right-0 rounded-bl-xl bg-gold px-4 py-1.5 text-xs font-semibold text-navy">
              Required Meta Notice
            </div>
            <h2 className={heading}>
              <Lock className="h-6 w-6 text-navy" aria-hidden="true" /> 5. Meta (Facebook/Instagram) Data Deletion
            </h2>
            <p className="mb-4">
              If you connected a Meta account, you can remove VantageScale&apos;s access in your Facebook settings. If you want to delete your activity or disconnect your Facebook/Instagram account from VantageScale, please follow these exact steps:
            </p>
            <ol className="mb-6 list-decimal list-inside space-y-3 rounded-2xl bg-paper p-6">
              <li>
                Go to your Facebook Account’s <strong className="text-navy">Settings & Privacy</strong>. Click <strong className="text-navy">Settings</strong>.
              </li>
              <li>
                Look for <strong className="text-navy">Apps and Websites</strong> in the menu. You will see all of the apps and websites linked to your account.
              </li>
              <li>
                Search for and click on <strong className="text-navy">VantagePoint&nbsp;OS</strong> (or VantageScale).
              </li>
              <li>
                Scroll down and click <strong className="text-navy">Remove</strong>.
              </li>
              <li>
                In the confirmation box, check the box to delete posts/videos published by the app, and click <strong className="text-navy">Remove</strong>.
              </li>
            </ol>
            <p className="text-sm">
              To request manual deletion of your account data from our servers, contact support@vantagepointos.com.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
