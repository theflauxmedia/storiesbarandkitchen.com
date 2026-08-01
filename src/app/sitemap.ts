import type { MetadataRoute } from "next";
import { outlets } from "@/data/outlets";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

const lastModified = new Date("2026-07-28");

function entry(
  path: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
): MetadataRoute.Sitemap[number] {
  const url =
    path === "/"
      ? `${SITE_URL}/`
      : `${SITE_URL}${path.endsWith("/") ? path : `${path}/`}`;

  return { url, lastModified, changeFrequency, priority };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    entry("/", 1, "weekly"),
    entry("/our-story", 0.7, "monthly"),
    entry("/locations", 0.9, "weekly"),
    ...outlets.map((outlet) =>
      entry(`/locations/${outlet.slug}`, 0.85, "weekly"),
    ),
    entry("/food-and-drinks", 0.8, "monthly"),
    entry("/events", 0.85, "weekly"),
    entry("/gallery", 0.6, "monthly"),
    entry("/contact", 0.9, "monthly"),
    entry("/privacy-policy", 0.2, "yearly"),
    entry("/terms-and-conditions", 0.2, "yearly"),
    entry("/booking-policy", 0.3, "yearly"),
    entry("/responsible-drinking-policy", 0.3, "yearly"),
  ];
}
