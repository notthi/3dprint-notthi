import type { Metadata } from "next";

const BASE_URL = "https://3dprint.notthi.com";
const SITE_NAME = "3Dプリントラボ";

/**
 * Generates consistent OGP/metadata for article pages.
 * href should start with "/" e.g. "/filaments/pla"
 */
export function generateArticleMetadata(
  href: string,
  meta: { title: string; description: string }
): Metadata {
  const url = `${BASE_URL}${href}`;
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      type: "website",
      locale: "ja_JP",
      siteName: SITE_NAME,
      url,
      title: meta.title,
      description: meta.description,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
    alternates: {
      canonical: url,
    },
  };
}
