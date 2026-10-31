import type { Metadata } from "next";
import { FileText, Database, Smartphone, Lock, ShieldCheck } from "lucide-react";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for VantagePoint OS. How we collect, use, and safeguard information shared with us.",
});

const card = "rounded-3xl border border-navy/10 bg-white p-8 md:p-10";
const heading =
  "mb-4 flex items-center gap-3 text-2xl font-semibold tracking-tight text-navy";

export default function PrivacyPolicy() {
  return (
    <main id="main" className="bg-paper pb-24">
      <div className="mx-auto max-w-3xl px-6 pt-20 md:pt-28">
        <div className="mb-12">
          <div className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink">
            <ShieldCheck className="h-4 w-4 text-navy" aria-hidden="true" /> Legal & Compliance
          </div>
          <h1 className="mb-4 text-4xl font-semibold tracking-tight text-navy md:text-5xl">
            Privacy Policy
          </h1>
          <p className="text-ink">
            Last Updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>

        <div className="space-y-8 leading-relaxed text-ink">
          <section className={card}>
            <h2 className={heading}>
              <FileText className="h-6 w-6 text-navy" aria-hidden="true" /> 1. Introduction
            </h2>
            <p>
              Welcome to VantagePoint OS. We respect your privacy and are committed to protecting the personal and business data you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you use our suite of applications, including VantageScale, VantagePulse, and VantageLead.
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
              <li>
                <strong className="text-navy">Third-Party Integrations:</strong> If you connect third-party accounts (such as Meta/Facebook, Instagram, or Google Business), we receive authentication tokens required to publish content on your behalf.
              </li>
            </ul>
            <p>
              We use third-party OAuth tokens (like the Meta Graph API) exclusively to publish social media posts to your connected business pages and retrieve engagement analytics to display within your VantageScale dashboard.
            </p>
            <div className="mt-6 rounded-2xl bg-paper px-4 py-4">
              <p className="text-center font-semibold text-navy">
                We do not sell, rent, or share your data with unauthorized third parties.
              </p>
            </div>
          </section>

          <section className={card}>
            <h2 className={heading}>
              <Smartphone className="h-6 w-6 text-navy" aria-hidden="true" /> 3. SMS and Communication Policy
            </h2>
            <p>
              No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. All other categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
            </p>
          </section>

          <section id="data-deletion" className={`${card} relative overflow-hidden`}>
            <div className="absolute top-0 right-0 rounded-bl-xl bg-gold px-4 py-1.5 text-xs font-semibold text-navy">
              Required Meta Notice
            </div>
            <h2 className={heading}>
              <Lock className="h-6 w-6 text-navy" aria-hidden="true" /> 4. Meta (Facebook/Instagram) Data Deletion
            </h2>
            <p className="mb-4">
              VantageScale uses Facebook Login and Meta Graph APIs to provide social media publishing features. If you want to delete your activity or disconnect your Facebook/Instagram account from VantageScale, please follow these exact steps:
            </p>
            <ol className="mb-6 list-decimal list-inside space-y-3 rounded-2xl bg-paper p-6">
              <li>
                Go to your Facebook Account’s <strong className="text-navy">Settings & Privacy</strong>. Click <strong className="text-navy">Settings</strong>.
              </li>
              <li>
                Look for <strong className="text-navy">Apps and Websites</strong> in the menu. You will see all of the apps and websites linked to your account.
              </li>
              <li>
                Search for and click on <strong className="text-navy">VantagePoint OS</strong> (or VantageScale).
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
