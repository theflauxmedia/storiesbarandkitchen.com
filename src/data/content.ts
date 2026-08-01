// Page-level copy that isn't tied to a specific outlet.
// Pulled directly from "STORIES BAR & KITCHEN - Website Content.docx".

export const nav = {
  links: [
    { href: "/", label: "Home" },
    { href: "/our-story", label: "Story" },
    { href: "/locations", label: "Locations" },
    { href: "/food-and-drinks", label: "Menu" },
    { href: "/events", label: "Events" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ],
  bookCta: { label: "Book a Table", href: "/contact#book-a-table" },
};

export const home = {
  hero: {
    heading: "Every Table Has a Story",
    body: "Good food, refreshing drinks, music and memorable experiences across Bengaluru.",
    intro:
      "Welcome to Stories Bar & Kitchen, a neighbourhood destination created for relaxed lunches, casual evenings, celebrations and unforgettable nights.",
    buttons: [
      { label: "Explore Our Locations", href: "/locations" },
      { label: "Book a Table", href: "/contact#book-a-table" },
    ],
  },
  brandIntro: {
    heading: "Eat. Drink. Celebrate. Create Stories.",
    body: [
      "Stories Bar & Kitchen brings together flavourful food, refreshing beverages, lively entertainment and welcoming spaces.",
      "Whether you are meeting friends, spending time with family, catching up with colleagues or celebrating a special occasion, there is always a Stories location ready to welcome you.",
    ],
  },
  locationsSection: {
    eyebrow: "Our Locations",
    heading: "Find Your Nearest Stories",
    body: "Explore Stories Bar & Kitchen across three neighbourhoods in Bengaluru.",
  },
  finalCta: {
    heading: "Your Next Story Starts Here",
    body: "Choose your nearest Stories location and plan your visit.",
    buttons: [
      { label: "Explore Locations", href: "/locations" },
      { label: "Book a Table", href: "/contact#book-a-table" },
    ],
  },
};

export const ourStory = {
  hero: {
    heading: "Every Table Has a Story",
    body: "Food brings people together. Music turns moments into memories. The right space can make an ordinary day unforgettable. That belief is at the heart of Stories Bar & Kitchen.",
  },
  story: {
    eyebrow: "Our Story",
    paragraphs: [
      "Stories Bar & Kitchen was created as a place where guests could eat, drink, relax and connect without needing a special reason.",
      "Our restaurants combine approachable food, refreshing beverages, comfortable interiors and lively entertainment to create experiences suited to different occasions throughout the week.",
      "During the day, Stories offers a relaxed setting for lunches, meetings and casual conversations.",
      "As evening begins, the atmosphere transforms with music, entertainment and celebrations.",
      "Whether you visit with family, friends, colleagues or someone special, our goal remains the same—to give you a space where memorable stories can begin.",
    ],
  },
  philosophy: {
    eyebrow: "Our Philosophy",
    items: [
      {
        title: "Good Food",
        body: "A diverse menu designed for different preferences, occasions and group sizes.",
      },
      {
        title: "Genuine Hospitality",
        body: "Friendly and attentive service that makes every guest feel welcome.",
      },
      {
        title: "Memorable Experiences",
        body: "Music, entertainment, celebrations and moments that go beyond dining.",
      },
      {
        title: "Something for Everyone",
        body: "Comfortable spaces for families, friends, couples, colleagues and groups.",
      },
    ],
  },
  brandPromise: {
    eyebrow: "Our Brand Promise",
    heading: "Eat Well. Celebrate Freely. Create Stories.",
    body: "Every Stories location has its own personality while offering the same core experience of food, drinks, entertainment and welcoming hospitality.",
  },
  presence: {
    eyebrow: "Our Presence",
    intro: "Stories Bar & Kitchen welcomes guests across three Bengaluru neighbourhoods:",
    button: { label: "Explore Our Locations", href: "/locations" },
  },
};

export const locationsPage = {
  hero: {
    heading: "Three Locations. Countless Stories.",
    body: "Discover the Stories Bar & Kitchen experience across Bengaluru. Select your nearest outlet to explore its food, drinks, ambience, events, celebrations and contact details.",
  },
};

export const foodAndDrinksPage = {
  hero: {
    heading: "Flavours Made for Sharing",
    body: "Explore a menu created for relaxed meals, lively gatherings and memorable evenings.",
  },
  intro: [
    "At Stories Bar & Kitchen, food is at the centre of every experience.",
    "Our menu brings together Indian classics, global favourites, comforting dishes, shareable starters and indulgent desserts.",
    "Pair your meal with signature cocktails, classic beverages, beers, spirits, mocktails and refreshing non-alcoholic drinks.",
    "Menu items, prices and availability may vary by location.",
  ],
  foodCategories: [
    { title: "Small Plates and Starters", body: "Perfect for sharing over conversations and drinks." },
    { title: "Indian Favourites", body: "Comforting dishes prepared with aromatic spices and familiar flavours." },
    { title: "Asian Selection", body: "Flavourful dishes, wok-tossed favourites and bold sauces." },
    { title: "Continental Selection", body: "Popular classics and contemporary preparations." },
    { title: "Main Courses", body: "Wholesome dishes for relaxed and satisfying meals." },
    { title: "Desserts", body: "Sweet creations to complete your dining experience." },
  ],
  drinksCategories: [
    { title: "Signature Cocktails", body: "Creative beverages designed to complement your evening." },
    { title: "Classic Cocktails", body: "Familiar favourites prepared with care." },
    { title: "Beer and Spirits", body: "A varied beverage selection based on location availability." },
    { title: "Mocktails and Refreshers", body: "Flavourful and refreshing alcohol-free beverages." },
  ],
  selectLocation: {
    heading: "Select Your Location",
    body: "Choose your nearest outlet to view the correct food and beverage menu:",
  },
  disclaimer: [
    "Menu items, prices, serving sizes and availability are subject to change.",
    "Taxes may be charged additionally where applicable.",
    "Guests with food allergies or dietary restrictions should inform the service team before ordering.",
  ],
};

export const eventsPage = {
  hero: {
    heading: "Every Occasion Becomes a Story",
    body: "From live performances and weekend parties to birthdays, corporate gatherings and private celebrations, Stories Bar & Kitchen brings people together through memorable experiences.",
    buttons: [
      { label: "Explore Upcoming Events", href: "#upcoming-events" },
      { label: "Plan Your Event", href: "#plan-your-event" },
    ],
  },
  intro: {
    eyebrow: "More Than Dining",
    paragraphs: [
      "Stories Bar & Kitchen is where food, drinks, music and celebrations come together.",
      "Across HSR Layout, Nagarbhavi and Rajajinagar, guests can enjoy a changing calendar of entertainment, curated experiences, corporate gatherings and celebration options.",
      "Whether you are planning a casual evening, attending a live performance, organising a birthday or hosting a corporate party, our team will help you create an experience suited to your occasion.",
    ],
  },
  upcoming: {
    heading: "Upcoming Events",
    eyebrow: "There's Always Something Happening",
    body: "Discover live music, DJ nights, karaoke evenings, sports screenings, themed parties and seasonal celebrations across Stories Bar & Kitchen locations. Events, performers and schedules may vary by outlet.",
  },
  eventCategories: [
    { title: "Live Music", body: "Enjoy performances by singers, musicians and bands in a lively setting." },
    { title: "DJ Nights", body: "Dance to Bollywood, commercial, retro, pop, Afro and other popular music formats." },
    { title: "Karaoke Nights", body: "Take the microphone and perform your favourite songs." },
    { title: "Sports Screenings", body: "Watch selected matches and tournaments with food, drinks and an energetic crowd." },
    { title: "Themed Parties", body: "Experience curated nights built around music genres, festivals and special occasions." },
    { title: "Seasonal Events", body: "Celebrate festivals, long weekends and special calendar dates with themed experiences." },
    { title: "Family Experiences", body: "Enjoy selected family-friendly programmes featuring food, entertainment and activities." },
  ],
  filters: ["Location", "Date", "Event type", "Music genre", "Family-friendly or nightlife", "Free entry or ticketed", "Artist or performer"],
  signatureExperiences: {
    eyebrow: "Signature Experiences",
    heading: "Experiences Worth Remembering",
    intro: "Depending on the location and schedule, Stories experiences may include:",
    items: [
      "Live band performances",
      "DJ-led party nights",
      "Karaoke evenings",
      "Ladies' nights",
      "Corporate nights",
      "Retro music nights",
      "Bollywood nights",
      "Sunday family programmes",
      "Sundowner experiences",
      "Food and beverage festivals",
      "Seasonal menu launches",
      "Sports screenings",
      "Interactive games",
      "Festival-themed celebrations",
      "Special artist performances",
    ],
  },
  socialCelebrations: {
    eyebrow: "Social Celebrations",
    heading: "Every Celebration Deserves a Great Story",
    body: "Celebrate life's special moments in a vibrant and welcoming setting. Whether you are organising an intimate gathering or a large celebration, our team can assist with seating, food, beverages, entertainment and customised requirements.",
  },
  celebrationsWeHost: {
    eyebrow: "Celebrations We Host",
    items: [
      { title: "Birthday Parties", body: "Celebrate birthdays with great food, refreshing drinks, music and group arrangements." },
      { title: "Anniversaries", body: "Create a memorable evening with your loved ones." },
      { title: "Reunions", body: "Bring friends, classmates, families or former colleagues together." },
      { title: "Farewell Parties", body: "Give colleagues, friends or loved ones a memorable send-off." },
      { title: "Proposals and Special Moments", body: "Plan an intimate celebration for an important personal occasion." },
      { title: "Bachelor and Bachelorette Parties", body: "Celebrate with your group through music, food and beverages." },
      { title: "Family Gatherings", body: "Host birthdays, milestones, festive celebrations and family reunions." },
      { title: "Community Gatherings", body: "Organise social clubs, interest groups and private meet-ups." },
    ],
  },
  corporate: {
    eyebrow: "Corporate Parties and Events",
    heading: "Work Together. Celebrate Together.",
    body: "Stories Bar & Kitchen provides versatile spaces for corporate gatherings, team celebrations and professional events. From informal team lunches to large employee parties, our team can help create an experience based on your organisation's requirements.",
    occasions: [
      "Team lunches",
      "Team dinners",
      "Employee engagement events",
      "Office parties",
      "Annual celebrations",
      "Achievement celebrations",
      "Team outings",
      "Corporate farewell parties",
      "Networking evenings",
      "Client entertainment",
      "Informal business meetings",
      "Product launches",
      "Brand gatherings",
      "Corporate festive celebrations",
      "Award and recognition evenings",
    ],
    support: [
      "Reserved seating",
      "Dedicated sections",
      "Customised food menus",
      "Food and beverage packages",
      "Welcome drinks",
      "Buffet or set-menu options",
      "Cocktail and mocktail packages",
      "DJ and live entertainment",
      "Dance-floor access",
      "Audio-visual arrangements",
      "Projector or LED-screen requirements",
      "Microphone and sound arrangements",
      "Company branding",
      "Company-name display on LED screens",
      "Photography and videography coordination",
      "Decoration assistance",
      "Dedicated service staff",
      "Guest-list management",
      "Entry coordination",
    ],
    note: "Only display services that are available at the selected outlet.",
  },
  privateGroupEvents: {
    eyebrow: "Private and Group Events",
    heading: "Your Occasion, Your Experience",
    body: "Stories Bar & Kitchen can accommodate different event formats based on outlet capacity and availability.",
    suitableFor: [
      "Private parties",
      "Large group dinners",
      "Social meet-ups",
      "Influencer gatherings",
      "Brand events",
      "Community events",
      "Workshops",
      "Networking events",
      "Media gatherings",
      "Food-tasting events",
      "Launch celebrations",
    ],
  },
  customisationOptions: [
    "Reserved tables",
    "Dedicated sections",
    "Custom menus",
    "Beverage packages",
    "Event décor",
    "Cake-cutting arrangements",
    "Music and entertainment",
    "Branded displays",
    "Photography",
    "Special entry arrangements",
    "Personalised guest experiences",
  ],
  whyCelebrate: [
    { title: "Multiple Bengaluru Locations", body: "Choose from HSR Layout, Nagarbhavi or Rajajinagar." },
    { title: "Food and Beverage Options", body: "Select from vegetarian and non-vegetarian food, cocktails, beers, spirits, mocktails and non-alcoholic drinks." },
    { title: "Entertainment", body: "Add live music, DJs or other entertainment options based on availability." },
    { title: "Flexible Group Arrangements", body: "Our locations can assist with different group sizes and requirements." },
    { title: "Convenient Planning", body: "Share your occasion, guest count and budget, and our team will recommend suitable options." },
    { title: "Complete Experience", body: "Bring together food, drinks, music, ambience and hospitality in one destination." },
  ],
  gallerySection: {
    eyebrow: "Event and Celebration Gallery",
    heading: "Moments Created at Stories",
    categories: [
      "Live music",
      "DJ nights",
      "Birthday parties",
      "Corporate parties",
      "Family gatherings",
      "Sports screenings",
      "Seasonal celebrations",
      "Private events",
      "Guest experiences",
      "Food and beverage arrangements",
    ],
    button: { label: "View Event Gallery", href: "/gallery" },
  },
  eventTypeOptions: [
    "Birthday party",
    "Anniversary",
    "Corporate party",
    "Team lunch",
    "Team dinner",
    "Employee engagement event",
    "Farewell party",
    "Reunion",
    "Private gathering",
    "Brand event",
    "Community event",
    "Networking event",
    "Other",
  ],
  confirmation: {
    heading: "Thank You for Considering Stories Bar & Kitchen",
    body: "Your event enquiry has been received. Our team will review your preferred location, date, group size and requirements before contacting you with suitable options. Submitting an enquiry does not confirm the event. A booking will be confirmed only after approval from the selected outlet and completion of any required advance payment.",
  },
  terms: [
    "Events and group reservations are subject to availability.",
    "Advance payment may be required.",
    "Minimum guest commitments may apply.",
    "Food and beverage packages may differ by location.",
    "Entertainment options are subject to availability.",
    "Outside food and beverages are not permitted, except cakes with prior approval.",
    "Decoration arrangements require prior approval.",
    "Damage to outlet property may result in additional charges.",
    "Cover charges may apply during selected events.",
    "Government regulations and legal drinking-age requirements apply.",
    "Valid government-issued identification may be requested.",
    "Management reserves the right of admission.",
    "Cancellation and refund terms will be communicated before confirmation.",
  ],
  finalCta: {
    heading: "Let's Create Your Next Story",
    body: "Whether it is a live event, birthday, corporate party, private gathering or special celebration, Stories Bar & Kitchen is ready to make it memorable.",
    buttons: [
      { label: "Plan Your Event", href: "#plan-your-event" },
      { label: "Contact Our Team", href: "/contact" },
      { label: "Explore Locations", href: "/locations" },
    ],
  },
};

export const galleryPage = {
  hero: {
    heading: "Moments from Stories",
    body: "Explore the food, drinks, spaces, music and celebrations that make every Stories experience memorable.",
  },
  categories: [
    "Ambience",
    "Food",
    "Drinks",
    "Live music",
    "DJ nights",
    "Celebrations",
    "Corporate parties",
    "Family experiences",
    "Guest moments",
    "Seasonal events",
  ],
  social: {
    heading: "Share Your Story",
    body: "Tag Stories Bar & Kitchen in your photographs and videos for a chance to be featured.",
    button: { label: "Follow Us on Instagram", href: "https://www.instagram.com/storiesbarandkitchen_hsr/" },
  },
};

export const contactPage = {
  hero: {
    heading: "Contact Stories Bar & Kitchen",
    body: "Bookings, celebrations, events, corporate parties, enquiries or feedback—connect with your nearest Stories location.",
  },
  booking: {
    eyebrow: "Book a Table",
    heading: "Reserve Your Table",
    body: "Choose your nearest Stories location to reserve a table through our online booking system.",
    submitLabel: "Reserve a Table",
    confirmation: {
      heading: "Thank you for choosing Stories Bar & Kitchen.",
      body: "Your table reservation will be confirmed once you complete the booking on ReserveGo for your selected outlet.",
    },
  },
  eventEnquiry: {
    eyebrow: "Event and Celebration Enquiry",
    heading: "Planning an Event or Celebration?",
    body: "Share your requirements and our team will contact you with suitable options.",
    submitLabel: "Submit Event Enquiry",
  },
};

export const footerContent = {
  brandDescription:
    "Stories Bar & Kitchen is a Bengaluru dining and entertainment destination bringing together food, beverages, music and memorable experiences across HSR Layout, Nagarbhavi and Rajajinagar.",
  quickLinks: [
    { href: "/", label: "Home" },
    { href: "/our-story", label: "Story" },
    { href: "/locations", label: "Locations" },
    { href: "/food-and-drinks", label: "Menu" },
    { href: "/events", label: "Events" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
    { href: "/contact#book-a-table", label: "Book a Table" },
  ],
  legalLinks: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-and-conditions", label: "Terms and Conditions" },
    { href: "/booking-policy", label: "Booking Policy" },
    { href: "/responsible-drinking-policy", label: "Responsible Drinking Policy" },
  ],
  disclaimer: [
    "Alcohol will not be served to guests below the legally permitted drinking age.",
    "Guests may be required to present valid government-issued identification.",
    "Please drink responsibly. Do not drink and drive.",
  ],
};
