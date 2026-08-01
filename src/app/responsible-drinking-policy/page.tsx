import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";
import { responsibleDrinkingPolicy } from "@/data/policies";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Responsible Drinking Policy",
  description:
    "Stories Bar & Kitchen's commitment to responsible alcohol service and legal drinking-age requirements in Bengaluru.",
  path: "/responsible-drinking-policy",
});

export default function Page() {
  return <PolicyPage policy={responsibleDrinkingPolicy} />;
}
