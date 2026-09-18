"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    question: "How do I compress an image to 50 KB?",
    answer: "Simply drop or select your photo, tap the 50 KB target button, and tap Compress. ToolKB automatically optimizes the image so the final file lands safely under 50 KB without you having to guess quality settings."
  },
  {
    question: "Does ToolKB upload my photo to any server?",
    answer: "No. All image processing runs directly in your browser. Your photos never leave your device, making it safe for ID cards and signatures."
  },
  {
    question: "Will compressing my photo reduce visible quality?",
    answer: "ToolKB compresses images smartly to preserve facial contours and text clarity while significantly reducing the file size. Unless compressed below 15 KB, your photos will stay crisp and perfectly readable."
  },
  {
    question: "Can I compress a photo down to 20 KB?",
    answer: "Yes. Select the 20 KB preset. The tool will automatically adjust the image slightly if needed to ensure the file complies with strict 20 KB limits."
  },
  {
    question: "Can I use ToolKB directly on mobile?",
    answer: "Yes! ToolKB is specifically optimized for mobile Safari and Chrome. You can take a photo with your camera or select from your gallery, shrink it immediately, and upload to forms."
  }
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
          Everything you need to know about preparing your files.
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
              >
                <span>{faq.question}</span>
                <span 
                  className="material-symbols-outlined text-[20px] transition-transform duration-200" 
                  style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  expand_more
                </span>
              </button>
              
              <div 
                className={`px-4 pb-4 font-body-sm text-body-sm text-on-surface-variant leading-relaxed ${isOpen ? 'block' : 'hidden'}`}
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
