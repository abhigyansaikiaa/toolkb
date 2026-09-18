import PageTemplate from "@/components/PageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compress Signature to 20 KB - PhotoKB",
  description: "Shrink your scanned signature down to 20 KB. Essential for job applications, passports, and exams.",
};

export default function Page() {
  return (
    <PageTemplate 
      h1="Compress signature to 20 KB."
      h2="Fit your digital signature into a strict 20 KB limit for exams, visas, and ATS systems."
      defaultTargetKb={20}
    />
  );
}
