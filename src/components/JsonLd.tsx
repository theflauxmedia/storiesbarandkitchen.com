import { outlets, siteConfig } from "@/data/outlets";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${siteConfig.url}/#restaurant`,
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/logo.png`,
    logo: `${siteConfig.url}/logo.png`,
    description:
      "Rooftop bar & kitchen in Bengaluru serving North Indian, Continental, Italian, and bar food across four outlets.",
    email: siteConfig.email,
    servesCuisine: [
      "North Indian",
      "Continental",
      "Italian",
      "Bar Food",
      "Chinese",
    ],
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.4",
      bestRating: "5",
      ratingCount: "40000",
    },
    sameAs: outlets.map((o) => o.instagram),
    department: outlets.map((outlet) => ({
      "@type": "Restaurant",
      name: `${siteConfig.name} — ${outlet.name}`,
      telephone: outlet.phoneDisplay,
      image: `${siteConfig.url}/logo.png`,
      address: {
        "@type": "PostalAddress",
        streetAddress: outlet.address,
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "12:00",
        closes: "01:00",
      },
      sameAs: outlet.instagram,
      servesCuisine: outlet.cuisines,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
