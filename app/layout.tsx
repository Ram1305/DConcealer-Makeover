import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";
import Loader from "@/components/Loader";
import SparkleBackground from "@/components/SparkleBackground";
import Fab from "@/components/Fab";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "D_Concealer Makeover | Luxury Bridal Makeup Studio",
  description:
    "Transform your wedding day into an unforgettable experience with premium HD bridal makeup, elegant hairstyles, and flawless beauty services by D_Concealer Makeover.",
  keywords: [
    "bridal makeup",
    "HD makeup artist",
    "wedding makeup studio",
    "D_Concealer Makeover",
    "luxury bridal beauty",
  ],
  openGraph: {
    title: "D_Concealer Makeover | Luxury Bridal Makeup Studio",
    description:
      "Premium HD bridal makeup, elegant hairstyles, and flawless beauty services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`dark ${playfair.variable} ${outfit.variable}`}>
      <body className="font-body bg-surface text-on-surface antialiased">
        <Loader />
        <SparkleBackground />
        <ScrollProgress />
        <CursorGlow />
        <SmoothScroll>{children}</SmoothScroll>
        <Fab />
      </body>
    </html>
  );
}
