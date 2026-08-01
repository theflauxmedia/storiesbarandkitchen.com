import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/seo";

type Crumb = { name: string; path: string };

export default function BreadcrumbJsonLd({ items }: { items: Crumb[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function homeTrail(): Crumb[] {
  return [{ name: SITE_NAME, path: "/" }];
}

export function pageTrail(name: string, path: string): Crumb[] {
  return [
    { name: "Home", path: "/" },
    { name, path },
  ];
}

export function locationTrail(name: string, slug: string): Crumb[] {
  return [
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations" },
    { name, path: `/locations/${slug}` },
  ];
}

export { SITE_URL };
