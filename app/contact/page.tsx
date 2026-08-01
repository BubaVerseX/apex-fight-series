import type { Metadata } from "next";
import ContactContent from "@/components/pages/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with APEX Fight Series in Tbilisi — address, phone, email, and Instagram. Placeholder contact details.",
};

export default function ContactPage() {
  return <ContactContent />;
}
