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
  title: "PhotoKB - Fast Image Compressor",
  description: "Compress images without the headache. Shrink photos to 20 KB, 50 KB, 100 KB, or any size you need right in your browser.",
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
