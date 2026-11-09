import type { Metadata } from "next";
import { AlertTriangle, Mail, Scale, ShieldCheck } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { PAGE_SEO } from "@/lib/page-seo";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata({
  title: PAGE_SEO.terms.title,
  path: "/terms-of-service",
  description: PAGE_SEO.terms.description,
});

const card = "rounded-3xl border border-navy/10 bg-white p-8 md:p-10";
const heading =
  "mb-4 flex items-center gap-3 text-2xl font-semibold tracking-tight text-navy";

export default function TermsOfService() {
  return (
    <main id="main" className="bg-paper pb-24">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Terms of Service", path: "/terms-of-service" },
        ])}
      />
      <div className="mx-auto max-w-3xl px-6 pt-20 md:pt-28">
        <div className="mb-12">
          <div className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink">
            <ShieldCheck className="h-4 w-4 text-navy" aria-hidden="true" /> Legal & Compliance
          </div>
          <h1 className="mb-4 text-4xl font-semibold tracking-tight text-navy md:text-5xl">
            Terms of Service
          </h1>
          <p className="text-ink">
            Last Updated: November 1, 2026
          </p>
        </div>

        <div className="space-y-8 leading-relaxed text-ink">
          <section className={card}>
            <h2 className={heading}>
              <Scale className="h-6 w-6 text-navy" aria-hidden="true" /> 1. Acceptance of Terms
            </h2>
            <p className="mb-4">
              By accessing or using the VantagePoint&nbsp;OS platform (including VantageScale, VantagePulse, and VantageLead), you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our services.
            </p>
            <p>
              VantagePoint&nbsp;OS provides a suite of operational, marketing, and leadership tools specifically designed for physical therapy clinics and healthcare providers. 
            </p>
          </section>

          <section className={card}>
            <h2 className={heading}>
              <Mail className="h-6 w-6 text-navy" aria-hidden="true" /> 2. Communications
            </h2>
            <p>
              We may contact you by email or phone about your account, demos and our services. We don&apos;t currently offer a text message (SMS) program. If we add one, we&apos;ll update these Terms and ask for your consent before sending you texts.
            </p>
          </section>

          <section className={card}>
            <h2 className={heading}>
              <AlertTriangle className="h-6 w-6 text-navy" aria-hidden="true" /> 3. Third-Party Services
            </h2>
            <p>
              Third-Party Services. The Services can connect to third-party services you choose to link, such as Meta (Facebook and Instagram), and we use trusted vendors to help deliver the Services, such as email, mail, hosting and AI providers. Your use of a third-party service is governed by that provider&apos;s terms. We aren&apos;t responsible for third-party services, and integrations may change, be limited by the provider, or become unavailable.
            </p>
          </section>

          <section className={card}>
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-navy">
              4. Limitation of Liability
            </h2>
            <p className="mb-4">
              To the maximum extent permitted by law, VantagePoint&nbsp;OS and its founders shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from your use of the software. The platform is provided &quot;as is&quot; without warranties of any kind.
            </p>
            <p className="mt-6 font-semibold text-navy">Contact Information</p>
            <p>For legal inquiries, please contact: support@vantagepointos.com</p>
          </section>
        </div>
      </div>
    </main>
  );
}
