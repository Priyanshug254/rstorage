import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import BackToTop from "@/components/layout/BackToTop";
import MobileActionBar from "@/components/layout/MobileActionBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Well India Racking System - Industrial Storage Rack Manufacturer",
  description: "Leading manufacturer of industrial storage racks, heavy duty racks, mezzanine floors, display racks, and warehouse storage solutions since 2013. Custom manufacturing with PAN India delivery.",
  keywords: "industrial storage racks, heavy duty racks, mezzanine floor, pallet racks, display racks, warehouse storage, supermarket racks, slotted angle racks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <BackToTop />
        <MobileActionBar />
      </body>
    </html>
  );
}
