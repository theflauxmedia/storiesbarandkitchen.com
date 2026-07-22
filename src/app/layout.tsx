import type { Metadata } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const siteUrl = "https://storiesbarandkitchen.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Stories Bar & Kitchen | Rooftop Bar & Kitchen in Bengaluru",
  description:
    "Stories Bar & Kitchen — Bengaluru's rooftop bar & kitchen destination. North Indian, Continental, Italian & bar food across 4 outlets in HSR, Rajajinagar, Nagarbhavi & R.R Nagar. Rated 4.4★.",
  keywords: [
    "Stories Bar & Kitchen",
    "rooftop bar Bengaluru",
    "bar and kitchen Bangalore",
    "HSR rooftop",
    "North Indian restaurant Bangalore",
    "Italian Continental Bengaluru",
  ],
  authors: [{ name: "Stories Bar & Kitchen" }],
  creator: "Stories Bar & Kitchen",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Stories Bar & Kitchen",
    title: "Stories Bar & Kitchen | Rooftop Bar & Kitchen in Bengaluru",
    description:
      "Where every meal tells a story. Rooftop dining, a full bar, live sports & nightlife across 4 Bengaluru outlets — North Indian, Continental, Italian & bar food.",
    images: [
      {
        url: "/og-image.png",
        width: 447,
        height: 447,
        alt: "Stories Bar & Kitchen logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stories Bar & Kitchen | Rooftop Bar & Kitchen in Bengaluru",
    description:
      "Bengaluru's rooftop bar & kitchen — 4 outlets, North Indian · Continental · Italian · Bar Food. Rated 4.4★.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
