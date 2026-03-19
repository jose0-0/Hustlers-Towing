"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How much does a tow cost in Las Vegas?",
    a: "Towing costs in Las Vegas vary depending on the distance, vehicle type, and time of day. Most local light duty tows start around $75–$125. We always provide a free quote before we start — call (702) 123-4567 and we'll give you an honest price upfront with no hidden fees.",
  },
  {
    q: "How quickly can you reach me in Las Vegas?",
    a: "Our fleet is strategically stationed across the Las Vegas Valley. For most areas including the Strip, Henderson, North Las Vegas, and Summerlin, we typically arrive within 35 minutes. Response times may vary during peak hours or severe weather.",
  },
  {
    q: "Do you offer towing services 24 hours a day?",
    a: "Yes — Hustlers Towing operates 24 hours a day, 7 days a week, 365 days a year. It doesn't matter if it's 2pm or 2am, a weekday or a holiday. Our dispatchers are always live and ready to take your call.",
  },
  {
    q: "Can you tow my car long distance or out of state?",
    a: "Absolutely. We handle long-distance tows throughout Nevada and out of state. Your vehicle will be secured to our flatbed for full protection the entire journey. Call us for a custom quote on any long-distance transport.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve the entire Las Vegas Valley including Las Vegas, Henderson, North Las Vegas, Summerlin, Boulder City, Pahrump, and surrounding areas.",
  },
  {
    q: "Will my car be damaged during the tow?",
    a: "We take extreme care with every vehicle we tow. Our flatbed trucks allow for damage-free loading and transport, and our operators are trained to handle everything from standard sedans to exotic and luxury vehicles. We've earned a 4.9-star Google rating because we treat your car like our own.",
  },
  {
    q: "Do you work with insurance companies?",
    a: "Yes. We can work directly with your insurance provider or roadside assistance plan. If you have coverage through AAA, your auto insurance, or another provider, let us know when you call and we'll coordinate accordingly.",
  },
];

const ServicesFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
  return (
    <>
      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="px-6 md:px-10 py-24 bg-site-black border-t border-gold"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqStructuredData),
          }}
        />

        <div className="max-w-[800px] mx-auto">
          <p className="flex items-center gap-2.5 font-condensed text-[11px] font-bold tracking-[4px] uppercase text-gold mb-4">
            Common Questions
            <span className="w-10 h-px bg-gold opacity-40 shrink-0" />
          </p>
          <h2
            id="faq-heading"
            className="font-bebas leading-[0.95] tracking-wide text-cream mb-4"
            style={{ fontSize: "clamp(42px, 6vw, 72px)" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-base text-muted leading-relaxed mb-12">
            Everything you need to know before you call. Don&apos;t see your
            question? Call us at{" "}
            <a
              href="tel:7021234567"
              className="text-gold hover:text-gold-dark transition-colors no-underline font-condensed font-bold"
            >
              (702) 123-4567
            </a>{" "}
            and we&apos;ll answer straight away.
          </p>

          <div className="flex flex-col">
            {faqs.map(({ q, a }, i) => (
              <div
                key={i}
                className="border-b border-gold first:border-t first:border-gold"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer bg-transparent border-none outline-none group"
                >
                  <span className="font-condensed text-[16px] font-bold tracking-[0.5px] uppercase text-cream group-hover:text-gold transition-colors">
                    {q}
                  </span>
                  <span
                    className={`shrink-0 w-6 h-6 flex items-center justify-center rounded-sm border border-gold/30 text-gold transition-transform duration-300 ${
                      openIndex === i ? "rotate-45" : ""
                    }`}
                  >
                    <svg
                      viewBox="0 0 12 12"
                      width="12"
                      height="12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    >
                      <line x1="6" y1="0" x2="6" y2="12" />
                      <line x1="0" y1="6" x2="12" y2="6" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === i ? "max-h-[300px] pb-5" : "max-h-0"
                  }`}
                >
                  <p className="text-[15px] text-[#999] leading-[1.8]">{a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesFAQ;
