import PageTemplate from "@/components/PageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PhotoKB - Fast Image Compressor",
  description: "Compress images without the headache. Shrink photos to 20 KB, 50 KB, 100 KB, or any size you need right in your browser.",
};

export default function Home() {
  return (
    <PageTemplate 
      h1="Compress images without the headache."
      h2="Shrink a photo to 20 KB, 50 KB, 100 KB or any size you need — right in your browser."
      defaultTargetKb={50}
    />
  );
}
