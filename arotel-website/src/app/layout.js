import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Arotel Rooms & Suites | Luxury Hotel",
  description:
    "Experience unparalleled luxury at Arotel Rooms & Suites. Premium accommodations, fine dining, and world-class amenities await you.",
  keywords: "luxury hotel, rooms, suites, Arotel, fine dining, amenities",
  openGraph: {
    title: "Arotel Rooms & Suites | Luxury Hotel",
    description:
      "Experience unparalleled luxury at Arotel Rooms & Suites. Premium accommodations, fine dining, and world-class amenities await you.",
    type: "website",
    url: "https://arotel.net",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
