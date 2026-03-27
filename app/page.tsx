import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Activity, 
  BarChart3, 
  Megaphone, 
  Users, 
  ShieldCheck, 
  CheckCircle2,
  Building2,
  Mail
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-[#c5a059] selection:text-[#020617] font-sans">
      
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-800/60 bg-[#020617]/80 backdrop-blur-md">
        {/* Adjusted from px-6 to px-4 to push the logo further to the left edge, max-w-[1400px] expands the bar */}
        <div className="max-w-[1400px] mx-auto px-4 h-20 flex items-center justify-between">
          
          {/* TOP LEFT HORIZONTAL LOGO */}
          <div className="flex items-center">
            {/* Changed from h-18 (invalid class) to h-16 (standard 64px) or h-[72px] for proper rendering */}
            <img src="/images/vantagepoint_horizontal.png" alt="VantagePoint OS" className="h-[72px] w-auto object-contain" /> 
          </div>

          {/* Fixed the missing gap number (gap-8) to improve navbar spacing */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12 text-sm font-medium text-slate-300">
            <Link href="#ecosystem" className="hover:text-[#c5a059] transition-colors">The Ecosystem</Link>
            <Link href="#story" className="hover:text-[#c5a059] transition-colors">Our Story</Link>
            <Link href="#pricing" className="hover:text-[#c5a059] transition-colors">Enterprise Tiers</Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <Link href="https://app.vantagepointos.com/login" className="hidden md:block text-sm font-medium hover:text-white transition-colors">
              Client Login
            </Link>
            <Link href="#pricing" className="bg-[#c5a059] hover:bg-[#b08d4f] text-[#020617] px-5 py-2.5 rounded-md font-semibold text-sm transition-all flex items-center gap-2">
              Book Demo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0f172a] via-[#020617] to-[#020617] -z-10"></div>
        <div className="container mx-auto px-6 text-center max-w-5xl">
          
          {/* NEW LARGE HERO LOGO */}
          <div className="flex justify-center mb-2">
             <img src="/images/vantagepoint.png" alt="VantagePoint OS" className="h-20 md:h-58 w-auto object-contain drop-shadow-2xl" />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f172a] border border-[#c5a059]/30 text-[#c5a059] text-xs font-semibold uppercase tracking-wider mb-8">
            <ShieldCheck className="h-4 w-4" /> Official Enterprise Meta Tech Provider
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-8">
            The Enterprise Operating System for <span className="text-[#c5a059]">Physical Therapy</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            VantagePoint OS provides multi-location clinics with the ultimate software infrastructure to manage operational data, <strong className="text-slate-200 font-semibold">omnichannel marketing, social media publishing, and unified communications</strong>—all from one secure dashboard.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#pricing" className="w-full sm:w-auto bg-[#c5a059] hover:bg-[#b08d4f] text-[#020617] px-8 py-4 rounded-md font-bold text-lg transition-all flex items-center justify-center gap-2">
              Request Enterprise Demo
            </Link>
            <Link href="#ecosystem" className="w-full sm:w-auto bg-[#0f172a] hover:bg-slate-800 border border-slate-700 text-white px-8 py-4 rounded-md font-semibold text-lg transition-all">
              Explore The Platform
            </Link>
          </div>
        </div>
      </section>

      {/* FOUNDER STORY SECTION */}
      <section id="story" className="py-24 bg-[#0f172a] border-y border-slate-800">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Built by Clinic Owners, <br/><span className="text-[#c5a059]">For Clinic Owners.</span></h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                After 12 years of running a physical therapy clinic, navigating the ups and downs of a healthcare business, we discovered that sustainable, scalable growth always comes down to three core pillars: <strong>Gathering Proper Data, A Sound Marketing Strategy, and A Culture of Leadership.</strong>
              </p>
              <p className="text-slate-400 leading-relaxed">
                When we mastered these pillars, our business experienced substantial growth. We built VantagePoint OS to give other clinic owners the exact same competitive advantage. By providing this operating system, we aim to support the success and elevation of the entire PT profession.
              </p>
            </div>
            <div className="bg-[#020617] p-8 rounded-2xl border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-4">The 3 Pillars of Success</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="bg-[#0f172a] p-3 rounded-lg text-[#c5a059] h-fit"><BarChart3 className="h-6 w-6"/></div>
                  <div>
                    <strong className="text-white block mb-1">1. Proper Data (VantagePulse)</strong>
                    <span className="text-sm text-slate-400">Real-time metrics, behavioral impact, and clinical efficiency tracking.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-[#0f172a] p-3 rounded-lg text-[#c5a059] h-fit"><Megaphone className="h-6 w-6"/></div>
                  <div>
                    <strong className="text-white block mb-1">2. Sound Marketing (VantageScale)</strong>
                    <span className="text-sm text-slate-400">Omnichannel patient acquisition, social publishing, and ROI analytics.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-[#0f172a] p-3 rounded-lg text-[#c5a059] h-fit"><Users className="h-6 w-6"/></div>
                  <div>
                    <strong className="text-white block mb-1">3. Leadership Culture (VantageLead)</strong>
                    <span className="text-sm text-slate-400">Automated onboarding, clinical director training, and CEO modules.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* THE ECOSYSTEM SECTION */}
      <section id="ecosystem" className="py-24 bg-[#020617]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Complete PT Ecosystem</h2>
            <p className="text-slate-400 text-lg">Three powerful, deeply interconnected platforms designed to work together, feeding data seamlessly from the front desk to your marketing campaigns.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* PLATFORM 1: VANTAGEPULSE OS */}
            <div className="bg-[#0f172a] border border-slate-800 p-8 rounded-2xl flex flex-col hover:border-slate-600 transition-colors">
              <div className="mb-6">
                {/* Changed h-26 (invalid class) to h-24 (96px) so it renders predictably */}
                <img src="/images/vantagepulse.png" alt="VantagePulse OS" className="h-24 w-auto object-contain mb-4" /> 
                <p className="text-sm text-[#c5a059] font-semibold uppercase tracking-wider mb-2">The Operational Heartbeat</p>
                <p className="text-slate-400 text-sm leading-relaxed">Live metric tracking and compelling scoreboards designed for behavioral impact. Takes providers less than 1 minute per day to track efficiency.</p>
              </div>
              <ul className="space-y-3 text-sm text-slate-300 mt-auto pt-6 border-t border-slate-800/60">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-[#c5a059] shrink-0 mt-0.5" /> Provider Stat Grid & Pace Boxes</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-[#c5a059] shrink-0 mt-0.5" /> Front Office KPI & Arrival Rates</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-[#c5a059] shrink-0 mt-0.5" /> Clinical Director & Owner Dashboards</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-[#c5a059] shrink-0 mt-0.5" /> Seamless Patient Tracker Integration</li>
              </ul>
            </div>

            {/* PLATFORM 2: VANTAGESCALE OS */}
            <div className="bg-[#0f172a] border border-[#c5a059]/50 p-8 rounded-2xl flex flex-col relative transform lg:-translate-y-4 shadow-2xl shadow-[#c5a059]/5">
              <div className="mb-6 mt-2">
                <img src="/images/vantagescale.png" alt="VantageScale OS" className="h-36 w-auto object-contain mb-4" />
                <p className="text-sm text-[#c5a059] font-semibold uppercase tracking-wider mb-2">The Growth Engine</p>  
                <p className="text-slate-400 text-sm leading-relaxed">The ultimate omnichannel marketing platform. Create, organize, and automate your entire clinic growth strategy from a unified communication hub.</p>
              </div>
              <ul className="space-y-3 text-sm text-slate-300 mt-auto pt-6 border-t border-slate-800/60">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-[#c5a059] shrink-0 mt-0.5" /> Meta Social Media Publishing</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-[#c5a059] shrink-0 mt-0.5" /> Automated Email & SMS Campaigns</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-[#c5a059] shrink-0 mt-0.5" /> Digital & Print Newsletters (Postgrid)</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-[#c5a059] shrink-0 mt-0.5" /> Smart Funnels & ROI Analytics</li>
              </ul>
            </div>

            {/* PLATFORM 3: VANTAGELEAD OS */}
            <div className="bg-[#0f172a] border border-slate-800 p-8 rounded-2xl flex flex-col hover:border-slate-600 transition-colors">
              <div className="mb-6">
                <img src="/images/vantagelead.png" alt="VantageLead OS" className="h-36 w-auto object-contain mb-4 -ml-2" />
                <p className="text-sm text-[#c5a059] font-semibold uppercase tracking-wider mb-2">The Culture Engine</p>
                <p className="text-slate-400 text-sm leading-relaxed">The roots and growth of your company culture. Role-based training modules designed to create an unbreakable culture of leadership within your clinics.</p>
              </div>
              <ul className="space-y-3 text-sm text-slate-300 mt-auto pt-6 border-t border-slate-800/60">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-[#c5a059] shrink-0 mt-0.5" /> New Hire Onboarding Modules</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-[#c5a059] shrink-0 mt-0.5" /> Clinical Director Training Paths</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-[#c5a059] shrink-0 mt-0.5" /> Owner & CEO Leadership Masterclass</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-[#c5a059] shrink-0 mt-0.5" /> Customizable Role-Based Access</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ENTERPRISE PRICING / DEMO SECTION */}
      <section id="pricing" className="py-24 bg-[#0f172a] border-t border-slate-800">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <Building2 className="h-12 w-12 text-[#c5a059] mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Tailored for Enterprise Growth</h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            VantagePoint OS operates on custom-tailored enterprise configurations. We align our platform features, print margins, and AI generation capabilities specifically to your clinic's volume and operational needs.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 text-left mb-12">
            <div className="bg-[#020617] p-8 rounded-xl border border-slate-800">
              <h3 className="text-2xl font-bold text-white mb-2">Momentum Tier</h3>
              <p className="text-slate-400 text-sm mb-6">Built for growing multi-location clinics ready to consolidate their marketing and operational stack.</p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#c5a059]" /> Full VantageScale Ecosystem</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#c5a059]" /> Standard Print-to-Mail Margins</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#c5a059]" /> Baseline AI Content Allocations</li>
              </ul>
            </div>
            <div className="bg-[#020617] p-8 rounded-xl border border-[#c5a059]/30">
              <h3 className="text-2xl font-bold text-[#c5a059] mb-2">Pinnacle Tier</h3>
              <p className="text-slate-400 text-sm mb-6">The ultimate infrastructure for enterprise organizations requiring maximum scale and AI leverage.</p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#c5a059]" /> Preferred Enterprise Print Margins</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#c5a059]" /> Unlimited AI Text & Image Generation</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#c5a059]" /> Dedicated AI Video Allocations</li>
              </ul>
            </div>
          </div>

          <div className="inline-block p-1 rounded-lg bg-gradient-to-r from-[#0f172a] via-[#c5a059] to-[#0f172a]">
             {/* DIRECT EMAIL LINK */}
             <Link href="mailto:gabe@vantagepointos.com?subject=Enterprise Demo Request" className="block bg-[#020617] hover:bg-[#0f172a] text-white px-10 py-4 rounded-md font-bold text-lg transition-all">
               Request Enterprise Pricing & Demo
             </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#020617] border-t border-slate-800 pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Activity className="h-6 w-6 text-[#c5a059]" />
                <span className="text-xl font-bold text-white tracking-tight">VantagePoint <span className="text-[#c5a059]">OS</span></span>
              </div>
              <p className="text-slate-400 text-sm max-w-sm mb-6">
                The premier clinic management operating system powering the growth of enterprise physical therapy practices.
              </p>
              {/* Added Contact Link in Footer */}
              <div className="flex gap-4">
                <Link href="mailto:gabe@vantagepointos.com" className="flex items-center gap-2 text-slate-400 hover:text-[#c5a059] transition-colors text-sm font-medium">
                  <Mail className="h-4 w-4" /> gabe@vantagepointos.com
                </Link>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Platform</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><Link href="#ecosystem" className="hover:text-[#c5a059] transition-colors">The Ecosystem</Link></li>
                <li><Link href="#pricing" className="hover:text-[#c5a059] transition-colors">Enterprise Tiers</Link></li>
                <li><Link href="https://app.vantagepointos.com/login" className="hover:text-[#c5a059] transition-colors">Client Login</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal & Compliance</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><Link href="/privacy-policy" className="hover:text-[#c5a059] transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="hover:text-[#c5a059] transition-colors">Terms of Service</Link></li>
                <li><Link href="/privacy-policy#data-deletion" className="hover:text-[#c5a059] transition-colors">Data Deletion Instructions</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800/60 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} VantagePoint OS. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Built for Enterprise Physical Therapy.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}