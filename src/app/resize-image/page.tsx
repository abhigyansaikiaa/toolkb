import PageTemplate from "@/components/PageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resize Image - PhotoKB",
  description: "Resize image dimensions and shrink file size in seconds. Keep your photos local and secure.",
};

export default function Page() {
  return (
    <PageTemplate 
      h1="Resize your images."
      h2="Change image dimensions and shrink file size securely in your browser."
      defaultTargetKb={50}
    />
  );
}
