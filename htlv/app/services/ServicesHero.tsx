import Link from "next/link";
import { PhoneIcon, PinIcon } from "@/components/Icons";

const trustSignals = [
  { label: "~35 Min Response", sub: "Las Vegas Valley" },
  { label: "Free Quote", sub: "No Hidden Fees" },
];

const ServicesHero = () => {
  return (
    <>
      <section
        aria-labelledby="services-heading"
        className="relative pt-[140px] pb-20 px-6 md:px-10 bg-site-black overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(245,197,24,0.07) 0%, transparent 60%), linear-gradient(180deg, #111 0%, #0a0a0a 100%)",
          }}
        />
        <div className="absolute inset-0 hero-stripe" />

        <div className="relative z-10 max-w-[800px] mx-auto text-center">
          {/* Breadcrumb — semantic + SEO */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center justify-center gap-2 list-none p-0 m-0">
              <li>
                <Link
                  href="/"
                  className="font-condensed text-[12px] font-bold tracking-[1px] uppercase text-muted hover:text-gold transition-colors no-underline"
                >
                  Home
                </Link>
              </li>
              <li className="text-muted text-[12px]" aria-hidden>
                /
              </li>
              <li>
                <span className="font-condensed text-[12px] font-bold tracking-[1px] uppercase text-gold">
                  Services
                </span>
              </li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 font-condensed text-xs font-bold tracking-[3px] uppercase text-gold border border-gold/30 px-4 py-1.5 rounded-sm mb-8">
            <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
            Las Vegas Valley — 24/7/365
          </div>

          <h1
            id="services-heading"
            className="font-bebas leading-[0.92] tracking-wide text-cream mb-6"
            style={{ fontSize: "clamp(60px, 10vw, 110px)" }}
          >
            Our <span className="text-gold">Services</span>
          </h1>

          <p className="text-[17px] leading-relaxed text-[#aaa] max-w-[560px] mx-auto mb-10">
            From a flat tire at midnight to a multi-vehicle recovery at dawn —
            Hustlers Towing has the equipment, the team, and the experience to
            handle it all, 24/7/365.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-14">
            <a
              href="tel:7021234567"
              aria-label="Call Hustlers Towing for a free quote"
              className="inline-flex items-center gap-2 font-condensed text-base font-bold tracking-[2px] uppercase text-site-black bg-gold px-10 py-[18px] rounded-sm no-underline hover:bg-gold-dark hover:-translate-y-px transition-all"
            >
              <PhoneIcon className="w-4 h-4 shrink-0" />
              Call Now — Free Quote
            </a>
            <a
              href="http://public.towbook.com/dLd7"
              aria-label="Request towing service in Las Vegas"
              className="inline-flex items-center gap-2 font-condensed text-base font-bold tracking-[2px] uppercase text-cream px-10 py-[18px] rounded-sm no-underline border border-cream/25 hover:border-gold hover:text-gold hover:-translate-y-px transition-all"
            >
              <PinIcon className="w-4 h-4 shrink-0" />
              Request Service
            </a>
          </div>

          {/* Trust signals */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-3">
            {trustSignals.map(({ label, sub }) => (
              <div
                key={label}
                className="flex flex-col items-center px-4 py-4 bg-white/[0.03] border border-gold rounded-sm"
              >
                <span className="font-condensed text-[14px] font-bold tracking-[1px] uppercase text-cream mb-0.5">
                  {label}
                </span>
                <span className="font-condensed text-[11px] tracking-[1px] uppercase text-muted">
                  {sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesHero;
