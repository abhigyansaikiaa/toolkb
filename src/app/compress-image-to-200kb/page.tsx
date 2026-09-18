import PageTemplate from "@/components/PageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ToolKB — Compress Image to 200KB Online",
  description: "Quickly reduce your image file size to 200 KB. High quality, zero server uploads, directly in your browser.",
};

export default function Page() {
  return (
    <PageTemplate 
      h1="Compress image to 200 KB."
      h2="Reduce your image file size to 200 KB for uploads that require a larger file size limit without losing quality."
      defaultTargetKb={200}
    />
  );
}
