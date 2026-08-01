import type { Metadata } from "next";
import PricingContent from "@/components/pages/PricingContent";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Membership plans at APEX Fight Series — Drop-In, Monthly, and Unlimited/VIP options. Placeholder pricing shown in GEL.",
};

export default function PricingPage() {
  return <PricingContent />;
}
