import PageTemplate from "@/components/PageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ToolKB — Free Online Tools for Files, Images & More",
  description: "Free online tools for compressing, resizing, converting and working with images, PDFs and files directly in your browser.",
};

export default function Home() {
  return (
    <PageTemplate 
      h1="ToolKB"
      h2="Free online tools for files, images & more. Compress, resize and convert files with simple browser-based tools."
      defaultTargetKb={50}
    />
  );
}
