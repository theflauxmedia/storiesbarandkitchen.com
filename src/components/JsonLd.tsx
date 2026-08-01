import { outlets, siteConfig } from "@/data/outlets";
import { getOutletSchemaImage } from "@/data/imagery";
import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/seo";

function outletNode(outlet: (typeof outlets)[number]) {
  const heroImage = getOutletSchemaImage(outlet.slug);
  return {
    "@type": "Restaurant",
    "@id": `${SITE_URL}/locations/${outlet.slug}/#restaurant`,
    name: `${SITE_NAME} — ${outlet.name}`,
    image: `${SITE_URL}${heroImage}`,
    url: absoluteUrl(`/locations/${outlet.slug}`),
    telephone: outlet.phone,
    email: outlet.email,
    priceRange: "$$",
    servesCuisine: outlet.cuisines,
    menu: absoluteUrl("/food-and-drinks"),
    acceptsReservations: "True",
    address: {
      "@type": "PostalAddress",
      streetAddress: outlet.address,
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      {
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
    ],
    sameAs: [outlet.instagram],
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: outlet.reservationUrl,
        inLanguage: "en-IN",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      result: {
        "@type": "Reservation",
        name: "Table reservation",
      },
    },
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
  };
}

export default function JsonLd() {
  const graph = [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
      image: `${SITE_URL}/logo.png`,
      email: siteConfig.email,
      sameAs: outlets.map((o) => o.instagram),
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description:
        "Bengaluru bar & kitchen destinations for food, drinks, music and celebrations across HSR Layout, Nagarbhavi and Rajajinagar.",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN",
    },
    {
      "@type": "Restaurant",
      "@id": `${SITE_URL}/#restaurant`,
      name: SITE_NAME,
      url: SITE_URL,
      image: `${SITE_URL}/logo.png`,
      logo: `${SITE_URL}/logo.png`,
      description:
        "Stories Bar & Kitchen is a Bengaluru dining and entertainment destination bringing together food, beverages, music and memorable experiences across three neighbourhoods.",
      email: siteConfig.email,
      servesCuisine: [
        "North Indian",
        "Continental",
        "Italian",
        "Bar Food",
        "Chinese",
        "Asian",
      ],
      priceRange: "$$",
      acceptsReservations: "True",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.4",
        bestRating: "5",
        ratingCount: "40000",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
      areaServed: {
        "@type": "City",
        name: "Bengaluru",
      },
      sameAs: outlets.map((o) => o.instagram),
      hasMenu: absoluteUrl("/food-and-drinks"),
      department: outlets.map((o) => ({
        "@id": `${SITE_URL}/locations/${o.slug}/#restaurant`,
      })),
    },
    ...outlets.map(outletNode),
  ];

  const data = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
