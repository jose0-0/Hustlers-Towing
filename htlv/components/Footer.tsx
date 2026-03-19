import Link from "next/link";
import { TruckIcon, TrophyIcon } from "./Icons";

const nav = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#reviews", label: "Reviews" },
  { href: "#request", label: "Contact" },
];
const svcs = [
  "Light & Heavy Towing",
  "Emergency Recovery",
  "Roadside Assistance",
  "Parking Enforcement",
  "Fuel & Jump Starts",
];
const areas = ["Las Vegas", "Henderson", "North Las Vegas", "Summerlin"];

const Footer = () => {
  return (
    <>
      <footer className="bg-site-black border-t border-gold px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 font-bebas text-[28px] tracking-[3px] text-cream mb-4">
              <TruckIcon className="w-6 h-6 text-gold" />
              Hustlers <span className="text-gold">Towing</span>
            </div>
            <p className="text-sm text-muted leading-relaxed mb-5">
              Las Vegas&apos;s dependable towing company. Serving the entire Las
              Vegas Valley with integrity, speed, and care — around the clock.
            </p>
            <a
              href="tel:7021234567"
              className="font-bebas text-[28px] text-gold no-underline tracking-wide block mb-1"
            >
              (702) 123-4567
            </a>
            <span className="font-condensed text-[11px] font-bold tracking-[2px] uppercase text-muted">
              Available 24/7 — 365 days a year
            </span>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="font-condensed text-[13px] font-bold tracking-[2.5px] uppercase text-cream mb-5 pb-3 border-b border-gold">
              Navigate
            </h4>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              {nav.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted no-underline hover:text-gold transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-condensed text-[13px] font-bold tracking-[2.5px] uppercase text-cream mb-5 pb-3 border-b border-gold">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              {svcs.map((s) => (
                <li key={s}>
                  <Link
                    href="#services"
                    className="text-sm text-muted no-underline hover:text-gold transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h4 className="font-condensed text-[13px] font-bold tracking-[2.5px] uppercase text-cream mb-5 pb-3 border-b border-gold">
              Service Area
            </h4>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              {areas.map((a) => (
                <li key={a}>
                  <Link
                    href="#request"
                    className="text-sm text-muted no-underline hover:text-gold transition-colors"
                  >
                    {a}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center pt-8 border-t border-gold text-[13px] text-[#555] gap-3">
          <span>© Hustlers Towing 2026 — Las Vegas, Nevada</span>
          <span>
            <a href="" className="hover:text-gold transition-colors">
              Built by Atlas Digital
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
