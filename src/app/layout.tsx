import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohamed Helmy — Creative Technologist & Full-Stack Architect",
  description:
    "Portfolio of Mohamed Helmy. Engineering high-conversion digital flagships, luxury e-commerce stores, 3D interactive experiences, and high-impact brand identities.",
  keywords: [
    "Mohamed Helmy",
    "Creative Technologist",
    "Full-Stack Developer",
    "UI/UX Designer",
    "E-Commerce Architect",
    "Next.js",
    "WebGL",
    "Three.js",
  ],
  authors: [{ name: "Mohamed Helmy" }],
  openGraph: {
    title: "Mohamed Helmy — Creative Technologist & Full-Stack Architect",
    description:
      "Crafting high-conversion digital flagships, bespoke e-commerce platforms, and cinematic brand identities.",
    url: "https://mohamed-helmy.vercel.app",
    siteName: "Mohamed Helmy Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serifFont.variable} ${sansFont.variable} ${monoFont.variable} scroll-smooth`}>
      <body className="bg-noir-900 text-bone antialiased selection:bg-champagne selection:text-noir-950 font-sans min-h-screen">
        <div className="film-grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
