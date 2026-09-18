import PageTemplate from "@/components/PageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compress Signature to 50 KB - PhotoKB",
  description: "Compress your digital signature to 50 KB easily and securely.",
};

export default function Page() {
  return (
    <PageTemplate 
      h1="Compress signature to 50 KB."
      h2="Ensure your digital signature meets the 50 KB requirement for official forms."
      defaultTargetKb={50}
    />
  );
}
