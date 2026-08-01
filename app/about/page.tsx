import type { Metadata } from "next";
import AboutContent from "@/components/pages/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story, mission, and coaching team behind APEX Fight Series — Tbilisi's combat sports and fitness studio.",
};

export default function AboutPage() {
  return <AboutContent />;
}
