import { PinIcon, PhoneIcon } from "./Icons";

const Request = () => {
  return (
    <>
      <section
        id="request"
        className="relative px-10 py-20 bg-gold text-center overflow-hidden"
      >
        <span
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bebas text-[300px] leading-none text-black/[0.05] whitespace-nowrap pointer-events-none tracking-[10px] select-none"
          aria-hidden
        >
          HUSTLERS
        </span>

        <div className="relative">
          <p className="flex items-center justify-center gap-2.5 font-condensed text-[11px] font-bold tracking-[4px] uppercase text-black/45 mb-4">
            Get Help Now <span className="w-10 h-px bg-black/25 shrink-0" />
          </p>
          <h2
            className="font-bebas leading-[0.95] tracking-wide text-site-black mb-5"
            style={{ fontSize: "clamp(48px, 7vw, 80px)" }}
          >
            Need a Tow? We&apos;re Ready.
          </h2>
          <p className="text-lg text-black/60 max-w-[560px] mx-auto mb-12 leading-relaxed">
            Select your location or call us directly — our dispatchers are live
            24 hours a day, 7 days a week, 365 days a year. No job too big, no
            hour too late.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href=""
              className="inline-flex items-center gap-2.5 font-condensed text-base font-bold tracking-[2px] uppercase text-gold bg-site-black px-9 py-[18px] rounded-sm no-underline hover:bg-[#222] hover:-translate-y-px transition-all"
            >
              <PinIcon className="w-4 h-4" />
              Request — Las Vegas
            </a>
            <a
              href="tel:7021234567"
              className="inline-flex items-center gap-2.5 font-condensed text-base font-bold tracking-[2px] uppercase text-site-black px-9 py-[18px] rounded-sm no-underline border-2 border-black/30 hover:border-black hover:-translate-y-px transition-all"
            >
              <PhoneIcon className="w-4 h-4" />
              (702) 123-4567
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Request;
