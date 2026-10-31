import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";

const TITLE_LIMIT = 60;

/** Append the site name only when the document title stays within 60 characters. */
export function documentTitle(title: string) {
  const branded = `${title} | ${SITE_NAME}`;
  return branded.length <= TITLE_LIMIT ? branded : title;
}

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
  const shown = documentTitle(title);
  const image = `/og?title=${encodeURIComponent(title)}`;
  return {
    title: shown === title ? { absolute: shown } : title,
    description,
    alternates: {
      canonical: path,
    },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: false },
    openGraph: {
      title: shown,
      description,
      siteName: SITE_NAME,
      type: "website",
      url: path,
      images: [{ url: image, width: 1200, height: 630, alt: shown }],
    },
    twitter: {
      card: "summary_large_image",
      title: shown,
      description,
      images: [image],
    },
  };
}
