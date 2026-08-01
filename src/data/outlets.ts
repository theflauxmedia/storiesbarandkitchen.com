export type Outlet = {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  fullTitle: string;
  tagline: string;
  /** Home page card blurb */
  blurb: string;
  /** Locations index card blurb (doc has different copy than Home) */
  indexBlurb: string;
  suitableFor: string[];

  seoTitle: string;
  seoDescription: string;

  address: string;
  landmark: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  email: string;
  hours: string;
  cuisines: string[];
  instagram: string;
  /** ReserveGo online table reservation widget URL */
  reservationUrl: string;

  introHeading: string;
  introBody: string;
  aboutBody: string;
  whatToExpect: string[];

  foodDrinksHeading: string;
  foodDrinksBody: string;

  eventsBody: string;
  celebrationsHeading: string;
  celebrationsBody: string;

  galleryCategories: string[];

  finalCtaHeading: string;
  finalCtaBody: string;
};

export const outlets: Outlet[] = [
  {
    id: "hsr",
    slug: "hsr-layout",
    name: "HSR Layout",
    shortName: "HSR Layout",
    fullTitle: "Stories Bar & Kitchen – HSR Layout",
    tagline: "Good food, vibrant evenings and stories worth sharing.",
    blurb:
      "A lively neighbourhood destination for relaxed lunches, after-work gatherings, music nights and weekend celebrations.",
    indexBlurb:
      "A lively neighbourhood destination for food, drinks, entertainment and celebrations.",
    suitableFor: [
      "Casual dining",
      "After-work gatherings",
      "Music nights",
      "Group celebrations",
    ],
    seoTitle: "Stories Bar & Kitchen HSR Layout | Food, Drinks and Events",
    seoDescription:
      "Visit Stories Bar & Kitchen in HSR Layout for delicious food, refreshing drinks, entertainment, group gatherings and celebrations.",
    address:
      "365, 365A & 366, Time Square, 6th Sector, HSR Layout, 5th Main Road, Ring Road (Service Road), HSR, Bangalore",
    landmark: "",
    phone: "+918046809320",
    phoneDisplay: "080468 09320",
    whatsapp: "+918046809320",
    email: "hsr@storiesbarandkitchen.com",
    hours: "12 noon – 1 am daily",
    cuisines: ["North Indian", "Continental", "Italian"],
    instagram: "https://www.instagram.com/storiesbarandkitchen_hsr/",
    reservationUrl:
      "https://widget.reservego.co/reserveOutlets/69bcd9150f2197fb3951dcb3",
    introHeading: "Your Neighbourhood Place to Eat, Drink and Unwind",
    introBody:
      "Stories Bar & Kitchen, HSR Layout, offers a lively yet comfortable setting for lunches, evening drinks, friendly gatherings and weekend celebrations. Visit us for a relaxed afternoon meal, meet your colleagues after work or experience the energy of our music and entertainment nights.",
    aboutBody:
      "Located in HSR Layout, this Stories outlet offers a welcoming setting for casual dining, group outings, celebrations and evening entertainment. Guests can enjoy a varied food and beverage menu along with live performances, DJ nights and special experiences on selected days.",
    whatToExpect: [
      "Comfortable seating",
      "Vegetarian and non-vegetarian food",
      "Cocktails, beers, spirits and mocktails",
      "Live music and entertainment on selected days",
      "Group dining arrangements",
      "Birthday and celebration assistance",
      "Corporate gathering options",
      "Table booking support",
    ],
    foodDrinksHeading: "Flavours for Every Occasion",
    foodDrinksBody:
      "Explore a wide selection of shareable starters, Indian favourites, Asian dishes, continental selections, main courses and desserts. Pair your meal with signature cocktails, classic beverages, beers, spirits, mocktails and refreshing non-alcoholic drinks.",
    eventsBody:
      "Experience live music, DJ evenings, karaoke, themed celebrations, sports screenings and special weekend experiences on selected days.",
    celebrationsHeading: "Celebrate at Stories HSR Layout",
    celebrationsBody:
      "Planning a birthday, anniversary, reunion, team outing or corporate gathering? Our team can assist with seating, food and beverage packages, entertainment and customised arrangements based on your requirements.",
    galleryCategories: [
      "Ambience",
      "Food",
      "Drinks",
      "Events",
      "Live performances",
      "Celebrations",
      "Guest moments",
    ],
    finalCtaHeading: "Ready to Create Your Next Story?",
    finalCtaBody:
      "Join us at Stories Bar & Kitchen, HSR Layout, for great food, refreshing drinks and memorable experiences.",
  },
  {
    id: "nagarbhavi",
    slug: "nagarbhavi",
    name: "Nagarbhavi",
    shortName: "Nagarbhavi",
    fullTitle: "Stories Bar & Kitchen – Nagarbhavi",
    tagline: "Where great flavours meet great company.",
    blurb:
      "A warm and welcoming space for family dining, friendly gatherings, live entertainment and celebrations.",
    indexBlurb:
      "A welcoming destination for family meals, friendly gatherings, entertainment and special occasions.",
    suitableFor: [
      "Family dining",
      "Group outings",
      "Weekend events",
      "Celebrations",
    ],
    seoTitle: "Stories Bar & Kitchen Nagarbhavi | Dining, Drinks and Events",
    seoDescription:
      "Visit Stories Bar & Kitchen in Nagarbhavi for family dining, drinks, entertainment, celebrations and group gatherings.",
    address:
      "857, 3rd Floor, C L Arcade, 2nd Stage, Near Vinayaka Layout, 80 Feet Main Road, Nagarbhavi, Bangalore",
    landmark: "",
    phone: "+918046809512",
    phoneDisplay: "080468 09512",
    whatsapp: "+918046809512",
    email: "nagarbhavi@storiesbarandkitchen.com",
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
    reservationUrl:
      "https://widget.reservego.co/reserveOutlets/653e6e8416d6a2476004295f",
    introHeading: "Your Destination for Dining and Celebrations",
    introBody:
      "Stories Bar & Kitchen, Nagarbhavi, brings together flavourful food, refreshing beverages and lively entertainment in a warm and welcoming atmosphere. Whether you are dining with family, meeting friends or organising a special celebration, the space is designed to make every visit memorable.",
    aboutBody:
      "Located in Nagarbhavi, this Stories outlet offers a comfortable environment for family dining, casual outings, group gatherings and special celebrations. Guests can enjoy a varied food and beverage selection along with entertainment and weekend experiences.",
    whatToExpect: [
      "Family-friendly dining",
      "Comfortable seating for groups",
      "Vegetarian and non-vegetarian dishes",
      "Cocktails, beers, spirits and mocktails",
      "Entertainment on selected days",
      "Birthday and celebration support",
      "Corporate gathering options",
      "Group reservations",
    ],
    foodDrinksHeading: "Something for Everyone at the Table",
    foodDrinksBody:
      "From shareable starters and comforting main courses to refreshing mocktails and signature cocktails, our menu offers something for different moods and preferences.",
    eventsBody:
      "Enjoy artist performances, DJ evenings, Sunday experiences, festive celebrations and special event nights.",
    celebrationsHeading: "Make Your Occasion Memorable",
    celebrationsBody:
      "Celebrate birthdays, anniversaries, reunions, office gatherings and group occasions with customised arrangements based on availability and group size.",
    galleryCategories: [
      "Ambience",
      "Food",
      "Drinks",
      "Family gatherings",
      "Music nights",
      "Celebrations",
      "Guest experiences",
    ],
    finalCtaHeading: "Your Next Gathering Starts Here",
    finalCtaBody:
      "Join us at Stories Bar & Kitchen, Nagarbhavi, for great food, refreshing drinks and memorable celebrations.",
  },
  {
    id: "rajajinagar",
    slug: "rajajinagar",
    name: "Rajajinagar",
    shortName: "Rajajinagar",
    fullTitle: "Stories Bar & Kitchen – Rajajinagar",
    tagline: "Food, music and unforgettable evenings.",
    blurb:
      "A vibrant dining and entertainment destination offering flavourful food, signature drinks and energetic evenings.",
    indexBlurb:
      "A vibrant location offering flavourful food, refreshing drinks and energetic evenings.",
    suitableFor: [
      "Lunches",
      "Evening outings",
      "Music nights",
      "Group gatherings",
    ],
    seoTitle: "Stories Bar & Kitchen Rajajinagar | Food, Drinks and Music",
    seoDescription:
      "Experience Stories Bar & Kitchen in Rajajinagar with flavourful food, refreshing drinks, entertainment and memorable celebrations.",
    address: "77, 1st R Block, West of Chord Road, Rajajinagar, Bangalore",
    landmark: "",
    phone: "+918046809322",
    phoneDisplay: "080468 09322",
    whatsapp: "+918046809322",
    email: "rajajinagar@storiesbarandkitchen.com",
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
    reservationUrl:
      "https://widget.reservego.co/reserveOutlets/653e6e8316d6a247600428d4",
    introHeading: "A Vibrant Stories Experience in Rajajinagar",
    introBody:
      "Stories Bar & Kitchen, Rajajinagar, is a destination for relaxed dining, refreshing drinks, music and energetic evenings. Visit us for lunch, evening conversations, weekend entertainment or a celebration with your favourite people.",
    aboutBody:
      "Located in Rajajinagar, this Stories outlet offers a vibrant yet comfortable setting for casual dining, group outings and celebrations. Guests can enjoy a diverse food and beverage menu along with entertainment and special experiences on selected days.",
    whatToExpect: [
      "Contemporary and comfortable ambience",
      "Vegetarian and non-vegetarian dishes",
      "Cocktails, beers, spirits and mocktails",
      "Music and entertainment on selected days",
      "Group reservations",
      "Celebration arrangements",
      "Corporate gathering support",
      "Seasonal experiences",
    ],
    foodDrinksHeading: "From Quick Bites to Long Evenings",
    foodDrinksBody:
      "Begin with shareable appetisers, explore our selection of main courses and complete your experience with desserts and refreshing beverages.",
    eventsBody:
      "Discover DJ nights, music experiences, themed evenings, sports screenings and seasonal celebrations.",
    celebrationsHeading: "Bring Your Celebration to Stories",
    celebrationsBody:
      "Our team can assist with birthdays, office parties, reunions, corporate gatherings and other social occasions.",
    galleryCategories: [
      "Ambience",
      "Food",
      "Drinks",
      "DJ nights",
      "Live performances",
      "Group events",
      "Guest moments",
    ],
    finalCtaHeading: "Make Your Evening a Story",
    finalCtaBody:
      "Join us at Stories Bar & Kitchen, Rajajinagar, for food, drinks, music and memorable moments.",
  },
];

export function getOutletBySlug(slug: string) {
  return outlets.find((o) => o.slug === slug);
}

export const siteConfig = {
  name: "Stories Bar & Kitchen",
  url: "https://storiesbarandkitchen.com",
  email: "hello@storiesbarandkitchen.com",
} as const;
