/**
 * WhatsApp deep-link helpers.
 * Booking and event enquiry forms build a structured, prefilled message and
 * redirect the guest to the selected outlet's WhatsApp — no backend involved.
 */

export function whatsappUrl(phone: string, message: string) {
  const digits = phone.replace(/[^\d]/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

type Field = { label: string; value: string };

function formatLines(heading: string, fields: Field[]) {
  const lines = fields
    .filter((f) => f.value.trim() !== "")
    .map((f) => `• ${f.label}: ${f.value.trim()}`);
  return `${heading}\n\n${lines.join("\n")}`;
}

export function buildBookingMessage(input: {
  outletName: string;
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: string;
  occasion: string;
  seating: string;
  requests: string;
}) {
  return formatLines(
    `Hi Stories Bar & Kitchen — I'd like to book a table at ${input.outletName}.`,
    [
      { label: "Name", value: input.name },
      { label: "Mobile", value: input.phone },
      { label: "Email", value: input.email },
      { label: "Date", value: input.date },
      { label: "Time", value: input.time },
      { label: "Guests", value: input.guests },
      { label: "Occasion", value: input.occasion },
      { label: "Seating preference", value: input.seating },
      { label: "Special requests", value: input.requests },
    ],
  );
}

export function buildEventEnquiryMessage(input: {
  outletName: string;
  name: string;
  phone: string;
  email: string;
  company: string;
  eventType: string;
  date: string;
  time: string;
  guests: string;
  budget: string;
  food: string;
  beverage: string;
  entertainment: string;
  seating: string;
  requests: string;
}) {
  return formatLines(
    `Hi Stories Bar & Kitchen — I'd like to plan an event at ${input.outletName}.`,
    [
      { label: "Name", value: input.name },
      { label: "Mobile", value: input.phone },
      { label: "Email", value: input.email },
      { label: "Company", value: input.company },
      { label: "Event type", value: input.eventType },
      { label: "Date", value: input.date },
      { label: "Time", value: input.time },
      { label: "Expected guests", value: input.guests },
      { label: "Approximate budget", value: input.budget },
      { label: "Food preference", value: input.food },
      { label: "Beverage requirements", value: input.beverage },
      { label: "Entertainment", value: input.entertainment },
      { label: "Seating requirements", value: input.seating },
      { label: "Additional requirements", value: input.requests },
    ],
  );
}
