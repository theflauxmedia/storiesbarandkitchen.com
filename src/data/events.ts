export type EventItem = {
  id: string;
  name: string;
  description: string;
  outletSlug: string;
  date: string;
  time: string;
  featuring?: string;
  genre?: string;
  entry: string;
  type: string;
  familyFriendly: boolean;
};

export const eventTypes = [
  "Live Music",
  "DJ Nights",
  "Karaoke Nights",
  "Sports Screenings",
  "Themed Parties",
  "Seasonal Events",
  "Family Experiences",
];

// TODO: replace with the real, current events calendar per outlet — this is
// placeholder/sample data so the Events page has something real to render
// and filter while the actual calendar is being put together.
export const events: EventItem[] = [
  {
    id: "sample-hsr-dj-saturday",
    name: "Saturday DJ Night",
    description: "Bollywood, commercial and retro hits with our resident DJ.",
    outletSlug: "hsr-layout",
    date: "Every Saturday",
    time: "9:00 PM onwards",
    featuring: "Resident DJ",
    genre: "Bollywood / Commercial",
    entry: "Free Entry",
    type: "DJ Nights",
    familyFriendly: false,
  },
  {
    id: "sample-hsr-sports",
    name: "Weekend Sports Screening",
    description: "Catch the big match on the big screen with food and drinks specials.",
    outletSlug: "hsr-layout",
    date: "Every weekend (match days)",
    time: "From kick-off",
    entry: "Free Entry",
    type: "Sports Screenings",
    familyFriendly: true,
  },
  {
    id: "sample-nagarbhavi-sunday-family",
    name: "Sunday Family Experience",
    description: "A relaxed Sunday programme with food, entertainment and activities for the whole family.",
    outletSlug: "nagarbhavi",
    date: "Every Sunday",
    time: "1:00 PM – 4:00 PM",
    entry: "Free Entry",
    type: "Family Experiences",
    familyFriendly: true,
  },
  {
    id: "sample-rajajinagar-live-music",
    name: "Friday Live Music",
    description: "Live band performances to kick off the weekend.",
    outletSlug: "rajajinagar",
    date: "Every Friday",
    time: "8:30 PM onwards",
    featuring: "Live Band",
    genre: "Bollywood / Retro",
    entry: "Cover charge applicable",
    type: "Live Music",
    familyFriendly: false,
  },
];
