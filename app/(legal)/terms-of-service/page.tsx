import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Scale, MessageSquare, AlertTriangle, Activity } from 'lucide-react';

export default function TermsOfService() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Terms of Service</h1>
          <p className="text-slate-400">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>

        <div className="space-y-8 text-slate-300 leading-relaxed">
          
          {/* Section 1: Introduction */}
          <section className="bg-[#0f172a] border border-slate-800 rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Scale className="h-6 w-6 text-[#c5a059]" /> 1. Acceptance of Terms
            </h2>
            <p className="mb-4">
              By accessing or using the VantagePoint OS platform (including VantageScale OS, VantagePulse OS, and VantageLead OS), you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our services.
            </p>
            <p>
              VantagePoint OS provides a suite of operational, marketing, and leadership tools specifically designed for physical therapy clinics and healthcare providers. 
            </p>
          </section>

          {/* Section 2: SMS & Communications (CRITICAL FOR TWILIO COMPLIANCE) */}
          <section className="bg-[#0f172a] border border-slate-800 rounded-2xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-slate-800 text-slate-300 text-xs font-bold px-4 py-1.5 rounded-bl-xl">Carrier Compliance</div>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <MessageSquare className="h-6 w-6 text-[#c5a059]" /> 2. SMS and Communications Policy
            </h2>
            <p className="mb-4">
              VantageScale OS allows users to send SMS text messages and email campaigns to their patients and leads. By utilizing these features, you agree to the following mandatory carrier requirements:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-400 ml-4 mb-6">
              <li>You must obtain explicit, legally valid consent (opt-in) from recipients before sending automated marketing or informational text messages.</li>
              <li><strong>Message and data rates may apply.</strong></li>
              <li><strong>Message frequency varies</strong> based on the clinic's campaign settings.</li>
              <li>Recipients can opt out of SMS communications at any time by replying <strong>STOP</strong>.</li>
              <li>Recipients can request customer support or assistance by replying <strong>HELP</strong>.</li>
            </ul>
            <p className="text-sm text-slate-400">
              VantagePoint OS reserves the right to suspend SMS privileges for any account found to be violating carrier policies or sending unsolicited spam.
            </p>
          </section>

          {/* Section 3: Healthcare Disclaimer (CRITICAL FOR ENTERPRISE PT CLINICS) */}
          <section className="bg-[#0f172a] border border-slate-800 rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Activity className="h-6 w-6 text-[#c5a059]" /> 3. Healthcare, HIPAA, and Compliance
            </h2>
            <p className="mb-4">
              While VantagePoint OS provides secure tools for managing patient data and marketing, <strong>you (the clinic or healthcare provider) are solely responsible for ensuring that your use of the platform complies with all applicable local, state, and federal healthcare laws, including the Health Insurance Portability and Accountability Act (HIPAA).</strong>
            </p>
            <p>
              You agree not to use our marketing tools (VantageScale OS) to transmit Protected Health Information (PHI) through unencrypted channels such as standard SMS or social media publishing unless explicitly permitted by law and authorized by the patient.
            </p>
          </section>

          {/* Section 4: Third-Party Integrations & Meta */}
          <section className="bg-[#0f172a] border border-slate-800 rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-[#c5a059]" /> 4. Third-Party Integrations (Meta/Google)
            </h2>
            <p className="mb-4">
              Our platform integrates with third-party services, including Meta (Facebook/Instagram) and Google. By authenticating your accounts with VantagePoint OS, you agree to comply with the respective Terms of Service of those platforms.
            </p>
            <p>
              VantagePoint OS is not responsible for any account suspensions, content removals, or penalties issued by Meta or Google due to the content you publish through our platform.
            </p>
          </section>

          {/* Section 5: Limitation of Liability */}
          <section className="bg-[#0f172a] border border-slate-800 rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
            <p className="mb-4">
              To the maximum extent permitted by law, VantagePoint OS and its founders shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from your use of the software. The platform is provided "as is" without warranties of any kind.
            </p>
            <p className="font-bold text-white mt-6">Contact Information</p>
            <p className="text-slate-400">For legal inquiries, please contact: support@vantagepointos.com</p>
          </section>

        </div>
      </main>
    </div>
  );
}