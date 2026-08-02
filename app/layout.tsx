import type { Metadata } from "next";
import { Anton, Oswald, Inter, Noto_Sans_Georgian } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/context";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HexGridBackground from "@/components/effects/HexGridBackground";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// Anton/Oswald/Inter have no Georgian glyphs — this covers `:lang(ka)` text
// (see globals.css) so Georgian copy doesn't fall back to a generic system font.
const notoGeorgian = Noto_Sans_Georgian({
  variable: "--font-noto-georgian",
  subsets: ["georgian"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = "https://apexfightseries.ge";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "APEX Fight Series | Tbilisi's Fight & Fitness Studio",
    template: "%s | APEX Fight Series",
  },
  description:
    "APEX Fight Series is Tbilisi's combat sports and fitness studio — MMA, Boxing, Muay Thai, BJJ, Strength & Conditioning, and Kids classes for all levels.",
  keywords: [
    "APEX Fight Series",
    "MMA Tbilisi",
    "Boxing Tbilisi",
    "Muay Thai Tbilisi",
    "BJJ Tbilisi",
    "fight gym Georgia",
    "fitness studio Tbilisi",
  ],
  openGraph: {
    title: "APEX Fight Series | Tbilisi's Fight & Fitness Studio",
    description:
      "MMA, Boxing, Muay Thai, BJJ, Strength & Conditioning, and Kids classes — for beginners and competing athletes alike.",
    url: siteUrl,
    siteName: "APEX Fight Series",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "APEX Fight Series" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "APEX Fight Series | Tbilisi's Fight & Fitness Studio",
    description:
      "MMA, Boxing, Muay Thai, BJJ, Strength & Conditioning, and Kids classes — for beginners and competing athletes alike.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${oswald.variable} ${inter.variable} ${notoGeorgian.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-apex-black font-body text-apex-white">
        <HexGridBackground />
        <LanguageProvider>
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
