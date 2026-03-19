import { PhoneIcon } from "./Icons";

const bullets = [
  "All-in-One Towing",
  "Prompt Dispatch",
  "Emergency Recovery",
  "Licensed & Insured",
];

const Hero = () => {
  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden pt-[120px] pb-20 px-10"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(212,43,43,0.11) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 30% 80%, rgba(245,197,24,0.06) 0%, transparent 50%), linear-gradient(160deg, #111 0%, #0a0a0a 100%)",
          }}
        />
        <div className="absolute inset-0 hero-stripe" />

        <div className="relative z-10 max-w-[700px]">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 font-condensed text-xs font-bold tracking-[3px] uppercase text-gold border border-gold/30 px-4 py-1.5 rounded-sm mb-8">
            <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
            Las Vegas Valley — 24/7/365
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-up delay-100 font-bebas leading-[0.92] tracking-wide text-cream mb-8"
            style={{ fontSize: "clamp(72px, 12vw, 140px)" }}
          >
            <span
              className="block font-bebas tracking-[8px] text-muted"
              style={{ fontSize: "0.45em" }}
            >
              Las Vegas
            </span>
            Hustlers
            <span className="block text-gold">Towing</span>
          </h1>

          {/* Description */}
          <p className="animate-fade-up delay-200 text-[17px] leading-relaxed text-[#aaa] max-w-[520px] mb-10">
            All-in-one towing built for the Valley. Whether you need a quick
            jump start on the Strip or a long-haul recovery across Nevada, we
            hustle so you don&apos;t have to wait.
          </p>

          {/* Bullets */}
          <div className="animate-fade-up delay-250 flex flex-wrap gap-3 mb-12">
            {bullets.map((b) => (
              <span
                key={b}
                className="flex items-center gap-1.5 font-condensed text-[13px] font-semibold tracking-[1.5px] uppercase text-cream"
              >
                <span className="w-[5px] h-[5px] bg-gold rounded-full shrink-0" />
                {b}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="animate-fade-up delay-300 flex flex-wrap gap-4">
            <a
              href="tel:702-123-4567"
              className="inline-flex items-center gap-2 font-condensed text-base font-bold tracking-[2px] uppercase text-site-black bg-gold px-10 py-[18px] rounded-sm no-underline hover:bg-gold-dark hover:-translate-y-px transition-all"
            >
              <PhoneIcon className="w-4 h-4 shrink-0" />
              Call Now — Free Quote
            </a>
            <a
              href="#services"
              className="inline-flex items-center font-condensed text-base font-bold tracking-[2px] uppercase text-cream px-10 py-[18px] rounded-sm no-underline border border-cream/25 hover:border-gold hover:text-gold hover:-translate-y-px transition-all"
            >
              View Services
            </a>
          </div>
        </div>

        {/* Floating phone */}
        <div className="animate-fade-up delay-400 absolute right-[6%] bottom-[12%] hidden lg:flex flex-col items-end gap-2 z-10">
          <span className="flex items-center gap-1.5 font-condensed text-[11px] font-bold tracking-[3px] uppercase text-muted">
            <span className="w-1.5 h-1.5 bg-[#3ddb7a] rounded-full animate-blink" />
            Live Dispatch
          </span>
          <a
            href="tel:702-123-4567"
            className="font-bebas text-[54px] leading-none tracking-wide text-cream no-underline hover:text-gold transition-colors"
          >
            (702) 123-4567
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
