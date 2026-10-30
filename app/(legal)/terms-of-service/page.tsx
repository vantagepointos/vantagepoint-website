import type { Metadata } from "next";
import {
  Activity,
  AlertTriangle,
  MessageSquare,
  Scale,
  ShieldCheck,
} from "lucide-react";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description: "Terms of Service for using the VantagePoint OS platform.",
});

const card = "rounded-3xl border border-navy/10 bg-white p-8 md:p-10";
const heading =
  "mb-4 flex items-center gap-3 text-2xl font-semibold tracking-tight text-navy";

export default function TermsOfService() {
  return (
    <main id="main" className="bg-paper pb-24">
      <div className="mx-auto max-w-3xl px-6 pt-20 md:pt-28">
        <div className="mb-12">
          <div className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink">
            <ShieldCheck className="h-4 w-4 text-navy" aria-hidden="true" /> Legal & Compliance
          </div>
          <h1 className="mb-4 text-4xl font-semibold tracking-tight text-navy md:text-5xl">
            Terms of Service
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
              <Scale className="h-6 w-6 text-navy" aria-hidden="true" /> 1. Acceptance of Terms
            </h2>
            <p className="mb-4">
              By accessing or using the VantagePoint OS platform (including VantageScale OS, VantagePulse OS, and VantageLead OS), you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our services.
            </p>
            <p>
              VantagePoint OS provides a suite of operational, marketing, and leadership tools specifically designed for physical therapy clinics and healthcare providers. 
            </p>
          </section>

          <section className={`${card} relative overflow-hidden`}>
            <div className="absolute top-0 right-0 rounded-bl-xl bg-navy px-4 py-1.5 text-xs font-semibold text-white">
              Carrier Compliance
            </div>
            <h2 className={heading}>
              <MessageSquare className="h-6 w-6 text-navy" aria-hidden="true" /> 2. SMS and Communications Policy
            </h2>
            <p className="mb-4">
              VantageScale OS allows users to send SMS text messages and email campaigns to their patients and leads. By utilizing these features, you agree to the following mandatory carrier requirements:
            </p>
            <ul className="mb-6 ml-4 list-disc list-inside space-y-2">
              <li>
                You must obtain explicit, legally valid consent (opt-in) from recipients before sending automated marketing or informational text messages.
              </li>
              <li>
                <strong className="text-navy">Message and data rates may apply.</strong>
              </li>
              <li>
                <strong className="text-navy">Message frequency varies</strong> based on the clinic&apos;s campaign settings.
              </li>
              <li>
                Recipients can opt out of SMS communications at any time by replying <strong className="text-navy">STOP</strong>.
              </li>
              <li>
                Recipients can request customer support or assistance by replying <strong className="text-navy">HELP</strong>.
              </li>
            </ul>
            <p className="text-sm">
              VantagePoint OS reserves the right to suspend SMS privileges for any account found to be violating carrier policies or sending unsolicited spam.
            </p>
          </section>

          <section className={card}>
            <h2 className={heading}>
              <Activity className="h-6 w-6 text-navy" aria-hidden="true" /> 3. Healthcare, HIPAA, and Compliance
            </h2>
            <p className="mb-4">
              While VantagePoint OS provides secure tools for managing patient data and marketing, <strong className="text-navy">you (the clinic or healthcare provider) are solely responsible for ensuring that your use of the platform complies with all applicable local, state, and federal healthcare laws, including the Health Insurance Portability and Accountability Act (HIPAA).</strong>
            </p>
            <p>
              You agree not to use our marketing tools (VantageScale OS) to transmit Protected Health Information (PHI) through unencrypted channels such as standard SMS or social media publishing unless explicitly permitted by law and authorized by the patient.
            </p>
          </section>

          <section className={card}>
            <h2 className={heading}>
              <AlertTriangle className="h-6 w-6 text-navy" aria-hidden="true" /> 4. Third-Party Integrations (Meta/Google)
            </h2>
            <p className="mb-4">
              Our platform integrates with third-party services, including Meta (Facebook/Instagram) and Google. By authenticating your accounts with VantagePoint OS, you agree to comply with the respective Terms of Service of those platforms.
            </p>
            <p>
              VantagePoint OS is not responsible for any account suspensions, content removals, or penalties issued by Meta or Google due to the content you publish through our platform.
            </p>
          </section>

          <section className={card}>
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-navy">
              5. Limitation of Liability
            </h2>
            <p className="mb-4">
              To the maximum extent permitted by law, VantagePoint OS and its founders shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from your use of the software. The platform is provided &quot;as is&quot; without warranties of any kind.
            </p>
            <p className="mt-6 font-semibold text-navy">Contact Information</p>
            <p>For legal inquiries, please contact: support@vantagepointos.com</p>
          </section>
        </div>
      </div>
    </main>
  );
}
