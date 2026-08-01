import type { Metadata } from "next";

export const SITE_URL = "https://storiesbarandkitchen.com";
export const SITE_NAME = "Stories Bar & Kitchen";
export const SITE_LOCALE = "en_IN";

export const DEFAULT_TITLE =
  "Stories Bar & Kitchen — Bengaluru Bar, Kitchen & Live Music";

export const DEFAULT_DESCRIPTION =
  "Stories Bar & Kitchen brings food, drinks, live music and celebrations to HSR Layout, Nagarbhavi and Rajajinagar. Book your table in Bengaluru today.";

export const DEFAULT_OG_IMAGE = {
  url: "/og-image.png",
  width: 447,
  height: 447,
  alt: "Stories Bar & Kitchen — Bengaluru bar and kitchen",
} as const;

/** Absolute URL helper — respects trailingSlash on the live site */
export function absoluteUrl(path = "/") {
  if (path === "/" || path === "") return `${SITE_URL}/`;
  const clean = path.startsWith("/") ? path : `/${path}`;
  const withSlash = clean.endsWith("/") ? clean : `${clean}/`;
  return `${SITE_URL}${withSlash}`;
}

type PageSeoInput = {
  title: string;
  description: string;
  /** Path without domain, e.g. "/contact" or "/" */
  path: string;
  /** Use for titles that already include the brand (location SEO titles) */
  absoluteTitle?: boolean;
  keywords?: string[];
  noIndex?: boolean;
  image?: {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  };
};

export function createPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  keywords,
  noIndex = false,
  image = DEFAULT_OG_IMAGE,
}: PageSeoInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;
  const url = absoluteUrl(path);
  const ogImage = {
    url: image.url,
    width: image.width ?? DEFAULT_OG_IMAGE.width,
    height: image.height ?? DEFAULT_OG_IMAGE.height,
    alt: image.alt ?? DEFAULT_OG_IMAGE.alt,
  };

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: SITE_LOCALE,
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}
