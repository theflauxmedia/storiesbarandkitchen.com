import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";
import { bookingPolicy } from "@/data/policies";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Booking Policy",
  description:
    "Table reservation and event enquiry terms for Stories Bar & Kitchen outlets in Bengaluru.",
  path: "/booking-policy",
});

export default function Page() {
  return <PolicyPage policy={bookingPolicy} />;
}
