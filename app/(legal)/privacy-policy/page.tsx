import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Lock, Database, Smartphone, FileText } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-[#c5a059] selection:text-[#020617] font-sans pb-24">
      
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-800/60 bg-[#020617]/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-20 flex items-center">
          <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-[#c5a059] transition-colors text-sm font-medium">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 max-w-4xl pt-16">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f172a] border border-slate-800 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <ShieldCheck className="h-4 w-4 text-[#c5a059]" /> Legal & Compliance
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-slate-400">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>

        <div className="space-y-8 text-slate-300 leading-relaxed">
          
          {/* Section 1: Intro */}
          <section className="bg-[#0f172a] border border-slate-800 rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <FileText className="h-6 w-6 text-[#c5a059]" /> 1. Introduction
            </h2>
            <p className="mb-4">
              Welcome to VantagePoint OS. We respect your privacy and are committed to protecting the personal and business data you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you use our suite of applications, including VantageScale OS, VantagePulse OS, and VantageLead OS.
            </p>
          </section>

          {/* Section 2: Data Collection & API Usage (Merged from your old policy) */}
          <section className="bg-[#0f172a] border border-slate-800 rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Database className="h-6 w-6 text-[#c5a059]" /> 2. Information We Collect & How We Use It
            </h2>
            <p className="mb-4">We collect information strictly to provide and improve services for our clinic partners. This includes:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-400 ml-4 mb-6">
              <li><strong className="text-slate-200">Account Information:</strong> Name, email address, phone number, and clinic details provided during registration.</li>
              <li><strong className="text-slate-200">Third-Party Integrations:</strong> If you connect third-party accounts (such as Meta/Facebook, Instagram, or Google Business), we receive authentication tokens required to publish content on your behalf.</li>
            </ul>
            <p className="mb-4">
              We use third-party OAuth tokens (like the Meta Graph API) exclusively to publish social media posts to your connected business pages and retrieve engagement analytics to display within your VantageScale dashboard.
            </p>
            <div className="bg-[#020617] border border-[#c5a059]/30 p-4 rounded-lg mt-6">
              <p className="font-bold text-[#c5a059] text-center">We do not sell, rent, or share your data with unauthorized third parties.</p>
            </div>
          </section>

          {/* Section 3: SMS Compliance (CRUCIAL for Twilio / Carrier Approval) */}
          <section className="bg-[#0f172a] border border-slate-800 rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Smartphone className="h-6 w-6 text-[#c5a059]" /> 3. SMS and Communication Policy
            </h2>
            <p className="text-slate-300">
              No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. All other categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
            </p>
          </section>

          {/* Section 4: Meta Data Deletion (Required for Meta App Review) */}
          <section id="data-deletion" className="bg-[#0f172a] border border-[#c5a059]/50 rounded-2xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#c5a059] text-[#020617] text-xs font-bold px-4 py-1.5 rounded-bl-xl">Required Meta Notice</div>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Lock className="h-6 w-6 text-[#c5a059]" /> 4. Meta (Facebook/Instagram) Data Deletion
            </h2>
            <p className="mb-4">
              VantageScale OS uses Facebook Login and Meta Graph APIs to provide social media publishing features. If you want to delete your activity or disconnect your Facebook/Instagram account from VantageScale OS, please follow these exact steps:
            </p>
            <ol className="list-decimal list-inside space-y-3 mb-6 bg-[#020617] p-6 rounded-xl border border-slate-800 text-slate-400">
              <li>Go to your Facebook Account’s <strong>Settings & Privacy</strong>. Click <strong>Settings</strong>.</li>
              <li>Look for <strong>Apps and Websites</strong> in the menu. You will see all of the apps and websites linked to your account.</li>
              <li>Search for and click on <strong>VantagePoint OS</strong> (or VantageScale OS).</li>
              <li>Scroll down and click <strong>Remove</strong>.</li>
              <li>In the confirmation box, check the box to delete posts/videos published by the app, and click <strong>Remove</strong>.</li>
            </ol>
            <p className="text-sm text-slate-400">
              To request manual deletion of your account data from our servers, contact support@vantagepointos.com.
            </p>
          </section>

        </div>
      </main>
    </div>
  );
}