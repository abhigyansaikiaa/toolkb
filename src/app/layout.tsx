import type { Metadata } from "next";
import { Manrope, Newsreader } from "next/font/google";
import "./globals.css";
import "material-symbols/outlined.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "ToolKB — Free Online Tools for Files, Images & More",
  description: "Free online tools for compressing, resizing, converting and working with images, PDFs and files directly in your browser.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${newsreader.variable} font-body-md text-on-surface antialiased flex flex-col min-h-screen selection:bg-secondary-container selection:text-on-secondary-container`}
      >
        {children}
      </body>
    </html>
  );
}
