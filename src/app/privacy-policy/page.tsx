import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";
import { privacyPolicy } from "@/data/policies";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "How Stories Bar & Kitchen collects, uses and protects information you share through storiesbarandkitchen.com.",
  path: "/privacy-policy",
});

export default function Page() {
  return <PolicyPage policy={privacyPolicy} />;
}
