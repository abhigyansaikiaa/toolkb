import PageTemplate from "@/components/PageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compress Image to 50 KB - PhotoKB",
  description: "Shrink your photo to 50 KB instantly in your browser. Perfect for job applications, passports, and university portals.",
};

export default function Page() {
  return (
    <PageTemplate 
      h1="Compress image to 50 KB."
      h2="Make your image fit perfectly into 50 KB limits for job applications, ATS systems, and university forms."
      defaultTargetKb={50}
    />
  );
}
