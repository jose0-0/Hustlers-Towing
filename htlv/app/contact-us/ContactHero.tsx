import Link from "next/link";
import { PhoneIcon } from "@/components/Icons";

const trustSignals = [
  { label: "24/7 Dispatch", sub: "Always live, always ready" },
  { label: "Free Quote", sub: "No obligation, no hidden fees" },
  { label: "~35 Min Response", sub: "Across Las Vegas Valley" },
  { label: "4.9 Star Rated", sub: "33+ Google reviews" },
];
const ContactHero = () => {
  return (
    <>
      <section
        aria-labelledby="contact-heading"
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
          {/* Breadcrumb */}
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
                  Contact
                </span>
              </li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 font-condensed text-xs font-bold tracking-[3px] uppercase text-gold border border-gold/30 px-4 py-1.5 rounded-sm mb-8">
            <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
            Available 24/7 — Las Vegas Valley
          </div>

          <h1
            id="contact-heading"
            className="font-bebas leading-[0.92] tracking-wide text-cream mb-6"
            style={{ fontSize: "clamp(60px, 10vw, 110px)" }}
          >
            Get in <span className="text-gold">Touch</span>
          </h1>

          <p className="text-[17px] leading-relaxed text-[#aaa] max-w-[520px] mx-auto mb-10">
            Broken down, locked out, or need a tow? Call us for immediate
            dispatch or fill out the form below and we&apos;ll get back to you
            fast.
          </p>

          {/* Primary CTA — calling is highest conversion */}
          <a
            href="tel:7021234567"
            aria-label="Call Hustlers Towing now at 702-123-4567"
            className="inline-flex items-center gap-3 font-bebas text-[32px] tracking-[2px] text-site-black bg-gold px-10 py-5 rounded-sm no-underline hover:bg-gold-dark hover:-translate-y-px transition-all mb-3"
          >
            <PhoneIcon className="w-6 h-6 shrink-0" />
            (702) 123-4567
          </a>
          <p className="text-[12px] font-condensed font-bold tracking-[2px] uppercase text-muted mb-12">
            Tap to call — dispatchers answer immediately
          </p>

          {/* Trust signals */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {trustSignals.map(({ label, sub }) => (
              <div
                key={label}
                className="flex flex-col items-center px-4 py-4 bg-white/[0.03] border border-gold rounded-sm"
              >
                <span className="font-condensed text-[14px] font-bold tracking-[1px] uppercase text-cream mb-0.5">
                  {label}
                </span>
                <span className="font-condensed text-[11px] tracking-[1px] uppercase text-muted text-center">
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

export default ContactHero;
