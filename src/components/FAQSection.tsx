"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    question: "How do I compress an image to 50KB?",
    answer:
      "Drop or select your photo, tap the 50KB preset button, and tap Compress. ToolKB automatically finds the highest quality that fits within 50KB — you don't need to guess quality settings manually.",
  },
  {
    question: "Can I compress a JPG to 20KB, 50KB, 100KB, or 200KB?",
    answer:
      "Yes. ToolKB accepts JPG, PNG, and WebP files and compresses them to any KB target. Select one of the preset sizes or enter a custom value. The output is always a JPEG file.",
  },
  {
    question: "Can I use a custom target size?",
    answer:
      "Yes. Use the Custom Target field to type any KB value between 1KB and 10,240KB. You can also use the stepper buttons to adjust in 5KB increments.",
  },
  {
    question: "How does the compressor hit the exact file size?",
    answer:
      "ToolKB uses a binary search algorithm to find the highest JPEG quality level that keeps the file below your target. If quality adjustment alone isn't enough — for very small targets — it also proportionally reduces the image dimensions until the file fits.",
  },
  {
    question: "Is my image processed in the browser?",
    answer:
      "Yes. The entire compression process runs inside your browser tab using standard web APIs (Canvas, OffscreenCanvas, Web Workers). Your image is never sent to a server. You can verify this by opening your browser's Network tab (F12) during compression — there are no outgoing file transfers.",
  },
  {
    question: "What image formats does ToolKB accept?",
    answer:
      "ToolKB accepts JPG/JPEG, PNG, and WebP images. HEIC is not currently supported. The compressed output is always a JPEG file regardless of the input format.",
  },
  {
    question: "Will my photo still look clear after compression?",
    answer:
      "For portrait-style photos compressed to 50KB or above, the quality difference is barely noticeable. At 20KB, faces remain recognisable though fine background detail may show some softening. At very small targets (under 15KB), some quality loss is unavoidable.",
  },
  {
    question: "Can I use ToolKB on my phone?",
    answer:
      "Yes. ToolKB is designed for mobile use. You can select a photo from your gallery or take one with your camera. The compressor works in mobile Chrome and Safari.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col gap-space-md mb-2">
      <div className="flex flex-col gap-1">
        <span className="font-mono-spec text-mono-spec uppercase text-secondary font-bold tracking-wider">FAQ</span>
        <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
          Common Questions
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Everything you need to know about compressing images to an exact size.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="rounded-xl bg-surface-container-lowest shadow-sm overflow-hidden">
              <button
                type="button"
                onClick={() => toggleAccordion(index)}
                className="w-full p-4 text-left flex items-center justify-between gap-2 font-headline-sm text-headline-sm text-primary"
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <span
                  className="material-symbols-outlined text-[20px] transition-transform duration-200 shrink-0"
                  style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  aria-hidden="true"
                >
                  expand_more
                </span>
              </button>

              <div
                className={`px-4 pb-4 font-body-sm text-body-sm text-on-surface-variant leading-relaxed ${isOpen ? "block" : "hidden"}`}
              >
                {faq.answer}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
