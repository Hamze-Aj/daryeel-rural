import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Daryeel Rural Development For Action",
    template: "%s | Daryeel Rural Development For Action",
  },
  description:
    "Empowering Pastoralist Communities Through Education, Sustainability & Dignity. Supporting quality education, girls' empowerment, tree planting, clean sanitation, and community development in the Somali Region of Ethiopia.",
  keywords: [
    "Daryeel",
    "charity",
    "Somalia",
    "Ethiopia",
    "education",
    "pastoralist",
    "girls education",
    "Shaykosh",
    "nonprofit",
    "Minnesota diaspora",
  ],
  authors: [{ name: "Daryeel Rural Development For Action" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://daryeel.org",
    siteName: "Daryeel Rural Development For Action",
    title: "Daryeel Rural Development For Action",
    description:
      "Empowering Pastoralist Communities Through Education, Sustainability & Dignity.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daryeel Rural Development For Action",
    description:
      "Empowering Pastoralist Communities Through Education, Sustainability & Dignity.",
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-white text-[#1a1a2e] antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
