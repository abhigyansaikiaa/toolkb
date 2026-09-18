import PageTemplate from "@/components/PageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ToolKB — Image Compressor | Compress JPG, PNG & WebP",
  description: "Compress your images instantly in your browser to any target size you need.",
};

export default function Page() {
  return (
    <PageTemplate 
      h1="Compress images instantly."
      h2="Shrink a photo to any size you need without complicated settings."
      defaultTargetKb={50}
    />
  );
}
