import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/shared/PageTransition";
import StyledComponentsRegistry from "@/lib/registry";
import CustomCursor from "@/components/shared/CustomCursor";

// Display font — wide, geometric, brutalist
const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Body font — readable, neutral
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// Monospace font — for technical details
const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ACM SVNIT | Student Chapter",
  description: "Association for Computing Machinery student chapter at SVNIT.",
  metadataBase: new URL("https://acm.svnit.ac.in"),
  openGraph: {
    images: ["/og-image.jpg"],
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
      className={`${spaceGrotesk.variable} ${inter.variable} ${geistMono.variable} dark antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#000000] text-white relative cursor-none">
        <CustomCursor />
        <StyledComponentsRegistry>
          <Navbar />
          <main className="flex-1 flex flex-col pt-20">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
