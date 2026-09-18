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
  metadataBase: new URL("https://toolkb.in"),
  title: {
    default: "ToolKB — Free Online File & Image Tools",
    template: "%s | ToolKB",
  },
  description:
    "Free online tools for compressing, resizing, and preparing images and files directly in your browser. No sign-up. No uploads.",
  keywords: ["image compressor", "compress photo", "reduce file size", "free online tool"],
  authors: [{ name: "ToolKB" }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    siteName: "ToolKB",
    title: "ToolKB — Free Online File & Image Tools",
    description:
      "Free online tools for compressing, resizing, and preparing images and files. Runs in your browser — your files never leave your device.",
    url: "https://toolkb.in",
  },
  twitter: {
    card: "summary",
    title: "ToolKB — Free Online File & Image Tools",
    description:
      "Compress photos to any KB target. Free, no sign-up, fully in-browser.",
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
        className={`${manrope.variable} ${newsreader.variable} font-body-md text-on-surface antialiased flex flex-col min-h-screen selection:bg-secondary-container selection:text-on-secondary-container`}
      >
        {children}
      </body>
    </html>
  );
}
