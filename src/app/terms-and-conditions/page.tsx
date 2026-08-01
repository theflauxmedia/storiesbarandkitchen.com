import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";
import { termsAndConditions } from "@/data/policies";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Terms and Conditions",
  description:
    "Terms and conditions for using the Stories Bar & Kitchen website at storiesbarandkitchen.com.",
  path: "/terms-and-conditions",
});

export default function Page() {
  return <PolicyPage policy={termsAndConditions} />;
}
