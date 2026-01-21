import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Interview Questions Collection | Ace Your Next Coding Interview",
  description: "A comprehensive collection of interview questions categorized by company, position, and tech stack. Prepare for your next frontend, backend, or fullstack engineer interview.",
  keywords: ["interview questions", "coding interview", "software engineer", "frontend", "backend", "system design", "react", "java", "javascript", "amazon", "google"],
  authors: [{ name: "VitableTech" }],
  openGraph: {
    title: "Interview Questions Collection",
    description: "Curated interview questions to help you prepare for your dream job.",
    url: "https://interview-questions.vitabletech.com",
    siteName: "Interview Questions Collection",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Interview Questions Collection Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interview Questions Collection",
    description: "Prepare for your coding interview with real questions from top companies.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950`}
      >
        <Header />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
