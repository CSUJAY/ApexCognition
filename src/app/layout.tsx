import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apex Cognition LLP - Secure AI, Digital Transformation & IT Solutions",
  description:
    "Apex Cognition LLP specializes in secure, locally-deployed AI and digital transformation—including MeetingBuddy AI for meeting automation—alongside cybersecurity, web, and mobile development.",
  openGraph: {
    title: "Apex Cognition LLP - Secure AI, Digital Transformation & IT Solutions",
    description:
      "Apex Cognition LLP specializes in secure, locally-deployed AI and digital transformation—including MeetingBuddy AI for meeting automation—alongside cybersecurity, web, and mobile development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans bg-dark-bg text-gray-100">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
