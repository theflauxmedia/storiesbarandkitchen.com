export type Outlet = {
  id: string;
  name: string;
  shortName: string;
  address: string;
  phone: string;
  phoneDisplay: string;
  hours: string;
  cuisines: string[];
  instagram: string;
};

export const outlets: Outlet[] = [
  {
    id: "hsr",
    name: "HSR",
    shortName: "HSR Layout",
    address:
      "365, 365A & 366, Time Square, 6th Sector, HSR Layout, 5th Main Road, Ring Road (Service Road), HSR, Bangalore",
    phone: "+918046809320",
    phoneDisplay: "+91 80468 09320",
    hours: "12 noon – 1 am daily",
    cuisines: ["North Indian", "Continental", "Italian"],
    instagram: "https://www.instagram.com/storiesbarandkitchen_hsr/",
  },
  {
    id: "rajajinagar",
    name: "Rajajinagar",
    shortName: "Rajajinagar",
    address:
      "77, 1st R Block, West of Chord Road, Rajajinagar, Bangalore",
    phone: "+918046809322",
    phoneDisplay: "+91 80468 09322",
    hours: "12 noon – 1 am daily",
    cuisines: [
      "Bar Food",
      "Chinese",
      "North Indian",
      "Italian",
      "Pizza",
      "Seafood",
      "Desserts",
    ],
    instagram: "https://www.instagram.com/storiesbar_rajajinagar/",
  },
  {
    id: "nagarbhavi",
    name: "Nagarbhavi",
    shortName: "Nagarbhavi",
    address:
      "857, 3rd Floor, C L Arcade, 2nd Stage, Near Vinayaka Layout, 80 Feet Main Road, Nagarbhavi, Bangalore",
    phone: "+918046809512",
    phoneDisplay: "+91 80468 09512",
    hours: "12 noon – 1 am daily",
    cuisines: [
      "Bar Food",
      "Chinese",
      "Oriental",
      "North Indian",
      "Italian",
      "Pizza",
      "BBQ",
      "Desserts",
    ],
    instagram: "https://www.instagram.com/storiesbar_nagarbhavi/",
  },
  {
    id: "rr-nagar",
    name: "Rajarajeshwari Nagar",
    shortName: "R.R Nagar",
    address:
      "Site 414–415, 3rd Floor, Vaddarapalya Village, 5th Stage, Opposite Mantri Alpyne Apartment, Rajarajeshwari Nagar, Bangalore",
    phone: "+918047186986",
    phoneDisplay: "+91 80471 86986",
    hours: "12 noon – 1 am daily",
    cuisines: [
      "Bar Food",
      "Chinese",
      "North Indian",
      "Italian",
      "Pizza",
      "Seafood",
      "Desserts",
    ],
    instagram: "https://www.instagram.com/storiesrrnagar",
  },
];

export const siteConfig = {
  name: "Stories Bar & Kitchen",
  tagline: "Where Every Meal Tells a Story",
  eyebrow: "North Indian · Continental · Italian · Bar Food · Rooftop",
  url: "https://storiesbarandkitchen.com",
  email: "hello@storiesbarandkitchen.com",
  closing: "Come write your story with us.",
  highlights: [
    "Full Bar",
    "Rooftop Seating",
    "Live Sports",
    "Valet Parking",
    "Family Friendly",
  ],
  stats: [
    { label: "Outlets", value: 4, suffix: "" },
    { label: "Diners Loved Us", value: 40, suffix: "K+" },
    { label: "Avg Rating", value: 4.4, suffix: "★" },
  ],
} as const;
