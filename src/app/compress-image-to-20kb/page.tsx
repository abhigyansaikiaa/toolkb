import PageTemplate from "@/components/PageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compress Image to 20 KB - PhotoKB",
  description: "Easily compress your image down to 20 KB for exams, portals, and strict application forms. 100% secure in your browser.",
};

export default function Page() {
  return (
    <PageTemplate 
      h1="Compress image to 20 KB."
      h2="Quickly shrink your photo to 20 KB to fit into strict government portals and exam registration forms."
      defaultTargetKb={20}
    />
  );
}
