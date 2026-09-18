import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About PhotoKB",
  description: "Learn how PhotoKB securely compresses your images locally in your browser without any server uploads.",
};

export default function AboutPage() {
  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.03)] pt-safe">
        <div className="h-14 px-margin flex items-center justify-between max-w-4xl mx-auto">
          <div className="flex items-center gap-space-sm">
            <Image src="/logo.svg" alt="PhotoKB Brand Logo" width={160} height={44} className="h-8 w-auto object-contain" />
            <Link href="/" className="flex items-baseline tracking-tight">
              <span className="font-headline-sm text-headline-sm text-primary">Photo</span>
              <span className="font-headline-sm text-headline-sm text-secondary ml-0.5">KB</span>
            </Link>
            <span className="hidden xs:inline-block font-mono-spec text-mono-spec uppercase text-on-surface-variant bg-surface-container-high px-space-xs py-0.5 rounded">v2.4</span>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col relative w-full pt-24 pb-28 px-margin bg-surface max-w-2xl mx-auto">
        <div className="flex flex-col gap-space-lg">
          
          <section className="flex flex-col items-start gap-space-sm">
            <div className="inline-flex items-center gap-space-xs px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-label-sm font-label-sm">
              <span className="font-mono-spec tracking-wider uppercase">ABOUT</span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-1">
              Why we built PhotoKB.
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              We were tired of uploading personal passport photos and handwritten signatures to random cloud servers just to shrink their file size by a few kilobytes.
            </p>
          </section>

          <section className="flex flex-col gap-space-md">
            <h2 className="font-headline-md text-headline-md text-primary">The Privacy Problem</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Most online image compressors work by taking your photo, uploading it to a remote server, processing it with server-side tools, and then sending it back to you. This is fundamentally insecure for sensitive documents.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              PhotoKB works differently. It uses modern HTML5 Canvas and JavaScript APIs to process the pixels directly inside your device&apos;s memory. When you select a photo, it is loaded into the browser tab, compressed locally, and saved directly to your hard drive. 
            </p>
            <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm border border-surface-container-highest mt-2">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Zero Server Architecture</h3>
              <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant list-disc pl-4">
                <li>No image uploads to any server.</li>
                <li>No cloud storage or retention.</li>
                <li>No third-party image processing APIs.</li>
                <li>Works entirely offline once the page loads.</li>
              </ul>
            </div>
          </section>

          <section className="flex flex-col gap-space-md">
            <h2 className="font-headline-md text-headline-md text-primary">How to verify it</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              You don&apos;t have to take our word for it. Open your browser&apos;s Developer Tools (F12), switch to the Network tab, and compress a photo. You will see that zero network requests are made to upload your image. The entire process is strictly local.
            </p>
          </section>

        </div>
      </main>
    </>
  );
}
