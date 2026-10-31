import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";

export function pageMetadata({
  title,
  description,
  path,
  index = true,
}: {
  title: string;
  description: string;
  path: string;
  index?: boolean;
}): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const image = `/og?title=${encodeURIComponent(title)}`;
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: false },
    openGraph: {
      title: fullTitle,
      description,
      siteName: SITE_NAME,
      type: "website",
      url: path,
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
