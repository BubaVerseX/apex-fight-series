import type { Metadata } from "next";
import HomeContent from "@/components/pages/HomeContent";

export const metadata: Metadata = {
  title: "APEX Fight Series | Tbilisi's Fight & Fitness Studio",
  description:
    "APEX Fight Series is Tbilisi's combat sports and fitness studio — MMA, Boxing, Muay Thai, BJJ, Strength & Conditioning, and Kids classes for all levels.",
};

export default function Home() {
  return <HomeContent />;
}
