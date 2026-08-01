import type { Metadata } from "next";
import ClassesContent from "@/components/pages/ClassesContent";

export const metadata: Metadata = {
  title: "Classes",
  description:
    "MMA, Boxing, Muay Thai, BJJ, Strength & Conditioning, and Kids classes at APEX Fight Series in Tbilisi. All levels welcome.",
};

export default function ClassesPage() {
  return <ClassesContent />;
}
