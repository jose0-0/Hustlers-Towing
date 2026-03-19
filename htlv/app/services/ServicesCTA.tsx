import { PhoneIcon, PinIcon } from "@/components/Icons";

const ServicesCTA = () => {
  return (
    <>
      <section
        aria-labelledby="cta-heading"
        className="relative px-6 md:px-10 py-24 bg-gold text-center overflow-hidden"
      >
        <span
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bebas text-[280px] leading-none text-black/[0.05] whitespace-nowrap pointer-events-none tracking-[10px] select-none"
          aria-hidden
        >
          HUSTLERS
        </span>

        <div className="relative max-w-[640px] mx-auto">
          <p className="flex items-center justify-center gap-2.5 font-condensed text-[11px] font-bold tracking-[4px] uppercase text-black/45 mb-4">
            Get Help Now
            <span className="w-10 h-px bg-black/25 shrink-0" />
          </p>
          <h2
            id="cta-heading"
            className="font-bebas leading-[0.95] tracking-wide text-site-black mb-4"
            style={{ fontSize: "clamp(48px, 7vw, 80px)" }}
          >
            Ready to Roll?
          </h2>

          {/* Trust line */}
          <p className="font-condensed text-[13px] font-bold tracking-[1px] uppercase text-black/50 mb-4">
            Free quote &nbsp;·&nbsp; No hidden fees &nbsp;·&nbsp; ~35 min
            response &nbsp;·&nbsp; 4.9★ rated
          </p>

          <p className="text-lg text-black/60 max-w-[520px] mx-auto mb-12 leading-relaxed">
            Our dispatchers are live around the clock. Call for a free quote or
            tap below to request service in your area right now.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <a
              href="http://public.towbook.com/"
              aria-label="Request towing service in Las Vegas"
              className="inline-flex items-center gap-2.5 font-condensed text-base font-bold tracking-[2px] uppercase text-gold bg-site-black px-9 py-[18px] rounded-sm no-underline hover:bg-[#222] hover:-translate-y-px transition-all"
            >
              <PinIcon className="w-4 h-4" />
              Request — Las Vegas
            </a>
            <a
              href="http://public.towbook.com/"
              aria-label="Request towing service in surrounding areas"
              className="inline-flex items-center gap-2.5 font-condensed text-base font-bold tracking-[2px] uppercase text-gold bg-site-black px-9 py-[18px] rounded-sm no-underline hover:bg-[#222] hover:-translate-y-px transition-all"
            >
              <PinIcon className="w-4 h-4" />
              Request
            </a>
            <a
              href="tel:7021234567"
              aria-label="Call Hustlers Towing at 702-1234567"
              className="inline-flex items-center gap-2.5 font-condensed text-base font-bold tracking-[2px] uppercase text-site-black px-9 py-[18px] rounded-sm no-underline border-2 border-black/30 hover:border-black hover:-translate-y-px transition-all"
            >
              <PhoneIcon className="w-4 h-4" />
              (702) 123-4567
            </a>
          </div>

          {/* Social proof line */}
          <p className="text-[13px] text-black/50 font-condensed tracking-[0.5px]">
            Trusted by thousands of drivers across Las Vegas
          </p>
        </div>
      </section>
    </>
  );
};

export default ServicesCTA;
