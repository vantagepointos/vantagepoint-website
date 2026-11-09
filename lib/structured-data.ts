import { SITE_NAME, SITE_URL } from "@/lib/site";

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

/**
 * Home structured-data description. Matches the public positioning
 * without adding an AI capability claim.
 */
export const HOME_STRUCTURED_DESCRIPTION =
  "A business operating system for outpatient PT owners, built around practice metrics, marketing, and culture.";

export function organizationJsonLd(description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/app-tile-navy-512.png`,
    email: "gabe@vantagepointos.com",
    telephone: "+1-316-742-8282",
    description,
    founder: {
      "@type": "Person",
      name: "Gabe Harter",
      jobTitle: "Founder",
    },
  };
}

export function softwareAppJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: path.startsWith("http") ? path : `${SITE_URL}${path}`,
    description,
    provider: { "@id": ORGANIZATION_ID },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? SITE_URL : `${SITE_URL}${item.path}`,
    })),
  };
}
