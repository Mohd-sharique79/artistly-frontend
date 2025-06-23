import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Artistly.com | Book Performing Artists for Your Event",
    template: "%s | Artistly.com"
  },
  description: "Artistly.com is a platform for event planners and artist managers to connect, discover, and book performing artists. Browse artists, submit onboarding forms, and manage bookings.",
  keywords: [
    "artist booking",
    "event planning",
    "performing artists",
    "singers",
    "dancers",
    "speakers",
    "DJs",
    "Artistly"
  ],
  openGraph: {
    title: "Artistly.com | Book Performing Artists for Your Event",
    description: "Artistly.com is a platform for event planners and artist managers to connect, discover, and book performing artists.",
    url: "https://artistly.com",
    siteName: "Artistly.com",
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Artistly.com | Book Performing Artists for Your Event",
    description: "Artistly.com is a platform for event planners and artist managers to connect, discover, and book performing artists."
  },
  metadataBase: new URL("https://artistly.com")
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
