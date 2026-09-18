import PageTemplate from "@/components/PageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ToolKB — Signature Compressor",
  description: "Compress digital signatures for forms, portals, and official documents without uploading them to a server.",
};

export default function Page() {
  return (
    <PageTemplate 
      h1="Compress your signature."
      h2="Quickly shrink a scanned signature image to fit into strict file size limits for forms and applications."
      defaultTargetKb={10}
    />
  );
}
