import PageTemplate from "@/components/PageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ToolKB — Compress Image to 100KB Online",
  description: "Shrink your photo to 100 KB instantly in your browser. Perfect for college admissions and official portals.",
};

export default function Page() {
  return (
    <PageTemplate 
      h1="Compress image to 100 KB."
      h2="Make your image fit perfectly into 100 KB limits for college admissions and official portals."
      defaultTargetKb={100}
    />
  );
}
