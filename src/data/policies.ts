// Draft legal copy assembled from the disclaimers already present in the
// content doc, plus standard clauses for an F&B / nightlife business.
// TODO: have a lawyer review all four policies before publishing.

export type PolicySection = { heading: string; body: string[] };
export type Policy = { title: string; updated: string; intro: string; sections: PolicySection[] };

export const privacyPolicy: Policy = {
  title: "Privacy Policy",
  updated: "28 July 2026",
  intro:
    "This Privacy Policy explains how Stories Bar & Kitchen collects, uses and protects information you share with us through this website.",
  sections: [
    {
      heading: "Information We Collect",
      body: [
        "When you submit a booking request or event enquiry, we collect the details you provide — including your name, phone number, email address, preferred location, and any event or dining requirements you share.",
        "Bookings and enquiries submitted through this website are delivered to us by email through our form provider (Web3Forms). We do not operate our own server-side database for form submissions.",
      ],
    },
    {
      heading: "How We Use Your Information",
      body: [
        "Information you share is used solely to respond to your booking or event enquiry, confirm availability, and coordinate your visit or event with the relevant Stories outlet.",
        "We do not sell or rent your personal information to third parties.",
      ],
    },
    {
      heading: "Third-Party Services",
      body: [
        "This website uses Web3Forms to deliver booking and event enquiry emails, WhatsApp for optional direct messaging with outlets, and Google Maps to show outlet locations and directions. Your use of these services is also subject to their respective privacy policies.",
      ],
    },
    {
      heading: "Cookies and Analytics",
      body: [
        "This website may use basic analytics to understand how visitors use the site. No personally identifiable information is collected through analytics.",
      ],
    },
    {
      heading: "Contact Us",
      body: [
        "For questions about this Privacy Policy, contact us at hello@storiesbarandkitchen.com.",
      ],
    },
  ],
};

export const termsAndConditions: Policy = {
  title: "Terms and Conditions",
  updated: "28 July 2026",
  intro:
    "By using this website, you agree to the following terms. Please read them carefully.",
  sections: [
    {
      heading: "Use of This Website",
      body: [
        "This website is provided to help guests learn about Stories Bar & Kitchen, explore our locations, food and drinks, events, and to submit booking or event enquiries.",
        "Content on this site — including text, images, logos and design — is the property of Stories Bar & Kitchen and may not be reproduced without permission.",
      ],
    },
    {
      heading: "Menu, Pricing and Availability",
      body: [
        "Menu items, prices, serving sizes and availability are subject to change without notice and may vary by location.",
        "Taxes may be charged additionally where applicable.",
      ],
    },
    {
      heading: "Bookings and Enquiries",
      body: [
        "Submitting a booking or event enquiry through this website does not guarantee a table or event confirmation. All bookings are subject to confirmation from the selected outlet.",
      ],
    },
    {
      heading: "Limitation of Liability",
      body: [
        "Stories Bar & Kitchen is not liable for any indirect or consequential loss arising from use of this website or reliance on information provided on it.",
      ],
    },
    {
      heading: "Governing Law",
      body: [
        "These terms are governed by the laws of India, and any disputes are subject to the jurisdiction of the courts in Bengaluru, Karnataka.",
      ],
    },
  ],
};

export const bookingPolicy: Policy = {
  title: "Booking Policy",
  updated: "28 July 2026",
  intro:
    "This Booking Policy applies to table reservations and event/celebration enquiries made through this website, WhatsApp or by phone.",
  sections: [
    {
      heading: "Table Reservations",
      body: [
        "Submitting the booking form sends your request to our team by email. This does not guarantee a table until you receive confirmation from the outlet.",
        "The outlet will contact you to confirm date, time and table availability.",
      ],
    },
    {
      heading: "Events and Group Reservations",
      body: [
        "Events and group reservations are subject to availability.",
        "Advance payment may be required, and minimum guest commitments may apply depending on the outlet and event type.",
        "Food and beverage packages and entertainment options may differ by location and are subject to availability.",
      ],
    },
    {
      heading: "Outside Food, Décor and Damages",
      body: [
        "Outside food and beverages are not permitted, except cakes brought in with prior approval.",
        "Decoration arrangements require prior approval from the outlet.",
        "Damage to outlet property may result in additional charges.",
      ],
    },
    {
      heading: "Cover Charges and Admission",
      body: [
        "Cover charges may apply during selected events.",
        "Management reserves the right of admission.",
      ],
    },
    {
      heading: "Cancellations and Refunds",
      body: [
        "Cancellation and refund terms, where applicable, will be communicated by the outlet before a booking or event is confirmed.",
      ],
    },
  ],
};

export const responsibleDrinkingPolicy: Policy = {
  title: "Responsible Drinking Policy",
  updated: "28 July 2026",
  intro:
    "Stories Bar & Kitchen is committed to responsible service of alcohol across all our locations.",
  sections: [
    {
      heading: "Legal Drinking Age",
      body: [
        "Alcohol will not be served to guests below the legally permitted drinking age in Karnataka.",
        "Guests may be required to present valid government-issued identification to verify their age.",
      ],
    },
    {
      heading: "Responsible Service",
      body: [
        "Our team reserves the right to refuse service of alcohol to any guest who appears intoxicated or is unable to provide valid identification when requested.",
        "Government regulations regarding the sale and service of alcohol apply at all times.",
      ],
    },
    {
      heading: "Drink Responsibly",
      body: [
        "Please drink responsibly. Do not drink and drive — we encourage guests to arrange safe transport home.",
      ],
    },
    {
      heading: "Right of Admission",
      body: [
        "Management reserves the right of admission at all Stories Bar & Kitchen locations.",
      ],
    },
  ],
};
