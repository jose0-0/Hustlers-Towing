import {
  LightTowIcon,
  HeavyTowIcon,
  ParkingIcon,
  LockIcon,
  BatteryIcon,
  KeyIcon,
  TireIcon,
  FuelIcon,
  RoadIcon,
  SirenIcon,
} from "@/components/Icons";
import { PhoneIcon } from "@/components/Icons";

const services = [
  {
    num: "01",
    icon: LightTowIcon,
    name: "Light Duty Towing",
    tagline: "Cars, trucks & SUVs",
    desc: "Whether you've broken down on the highway or need a vehicle moved from private property, our flatbed fleet handles all light duty tows quickly and without damage. We serve every corner of the Las Vegas Valley around the clock.",
    features: [
      "Flatbed & wheel-lift available",
      "Local & long-distance",
      "Damage-free loading",
      "Available 24/7",
    ],
    urgency: "Most light duty tows dispatched within 35 minutes.",
  },
  {
    num: "02",
    icon: HeavyTowIcon,
    name: "Heavy Duty Towing",
    tagline: "Big rigs, RVs & commercial",
    desc: "Our heavy duty rigs are equipped to handle the largest commercial vehicles on the road. From semi-trucks and box trucks to RVs and construction equipment, we have the power and expertise to move it safely.",
    features: [
      "Semi-trucks & 18-wheelers",
      "RVs & motorhomes",
      "Construction equipment",
      "Commercial fleet towing",
    ],
    urgency: "Heavy duty crews available 24/7 — call for immediate dispatch.",
  },
  {
    num: "03",
    icon: ParkingIcon,
    name: "Parking Enforcement",
    tagline: "Private property management",
    desc: "We partner with property managers, HOAs, and commercial lots to keep parking areas clear and accessible. Our team handles unauthorized vehicle removal professionally and by the book, every time.",
    features: [
      "24/7 patrol options",
      "Fully documented tows",
      "Compliant signage guidance",
      "Fast response times",
    ],
    urgency:
      "Recurring patrol contracts available — ask about our property rates.",
  },
  {
    num: "04",
    icon: LockIcon,
    name: "Impounding",
    tagline: "Law enforcement & private impound",
    desc: "Hustlers Towing works alongside law enforcement and private property owners to provide reliable impound services. Every impound is handled with full documentation and strict adherence to Nevada regulations.",
    features: [
      "Law enforcement calls",
      "Private property impounds",
      "Full paperwork & compliance",
      "Secure storage available",
    ],
    urgency: "Fully compliant with Nevada towing regulations.",
  },
  {
    num: "05",
    icon: BatteryIcon,
    name: "Jump Starts",
    tagline: "Dead battery? We've got you",
    desc: "A dead battery doesn't have to ruin your day. Our technicians will come to you and get your vehicle started fast, whether you're at home, at work, or stranded in a parking lot at 3am.",
    features: [
      "Fast on-site response",
      "All vehicle types",
      "Battery health check included",
      "Available day & night",
    ],
    urgency: "Typically on-site in under 35 minutes anywhere in the valley.",
  },
  {
    num: "06",
    icon: KeyIcon,
    name: "Lockouts",
    tagline: "Back in your vehicle fast",
    desc: "Locked your keys inside? Our professional lockout technicians use the latest non-destructive tools to get you back into your vehicle safely and without any damage to your locks or windows.",
    features: [
      "Non-destructive entry",
      "Cars, trucks & SUVs",
      "No damage guaranteed",
      "Rapid dispatch",
    ],
    urgency:
      "No damage guarantee on every lockout — your vehicle is safe with us.",
  },
  {
    num: "07",
    icon: TireIcon,
    name: "Tire Changes",
    tagline: "Flat tire on the side of the road",
    desc: "A flat tire in the Las Vegas heat is no fun. We'll come to your location and swap your flat for your spare quickly and safely, getting you back on the road with minimal disruption to your day.",
    features: [
      "On-location tire swap",
      "All vehicle sizes",
      "Safe roadside setup",
      "Spare tire installation",
    ],
    urgency: "Safe roadside setup — we put your safety first.",
  },
  {
    num: "08",
    icon: FuelIcon,
    name: "Fuel Delivery",
    tagline: "Ran dry? We deliver",
    desc: "Running out of fuel happens to everyone. We'll bring enough gas or diesel to get you to the nearest station. We also offer water delivery for overheated vehicles — just give us a call.",
    features: [
      "Gas & diesel delivery",
      "Water delivery available",
      "Quick response",
      "All areas of the valley",
    ],
    urgency: "Gas, diesel & water delivery — we cover the whole valley.",
  },
  {
    num: "09",
    icon: RoadIcon,
    name: "Long Distance Towing",
    tagline: "Nevada & out of state",
    desc: "Need your vehicle transported further than across town? We handle long-distance tows throughout Nevada and across state lines. Your vehicle is secured to our flatbed and treated with the same care as a local tow.",
    features: [
      "Statewide Nevada coverage",
      "Out-of-state transport",
      "Flatbed for full protection",
      "Real-time updates",
    ],
    urgency:
      "Statewide & out-of-state — call for a custom long-distance quote.",
  },
  {
    num: "10",
    icon: SirenIcon,
    name: "Emergency Recovery",
    tagline: "Accidents, rollovers & off-road",
    desc: "When things go seriously wrong, you need a team that knows what they're doing. Our recovery specialists handle accident scenes, rollovers, off-road recoveries, and complex extractions with precision equipment and calm expertise.",
    features: [
      "Accident scene recovery",
      "Rollover recovery",
      "Off-road & ditch extraction",
      "Winching services",
    ],
    urgency:
      "Emergency recovery specialists — call immediately for priority dispatch.",
  },
];
const ServicesList = () => {
  return (
    <>
      <section
        aria-label="Full list of towing services"
        className="bg-site-dark border-t border-gold"
      >
        {services.map(
          ({ num, icon: Icon, name, tagline, desc, features, urgency }, i) => (
            <article
              key={num}
              id={name.toLowerCase().replace(/\s+/g, "-")}
              className={`grid grid-cols-1 lg:grid-cols-2 border-b border-gold ${
                i % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Icon panel */}
              <div
                className={`flex flex-col justify-center items-center px-10 py-16 bg-site-card border-b lg:border-b-0 border-gold ${
                  i % 2 === 1
                    ? "lg:col-start-2 lg:border-l border-gold"
                    : "lg:border-r border-gold"
                }`}
              >
                <span className="font-bebas text-[100px] leading-none text-white/[0.03] tracking-tighter select-none mb-[-20px]">
                  {num}
                </span>
                <Icon className="w-20 h-20 text-gold mb-6" aria-hidden />
                <div className="font-bebas text-[32px] tracking-wide text-cream text-center mb-2">
                  {name}
                </div>
                <div className="font-condensed text-[13px] font-bold tracking-[2px] uppercase text-muted text-center">
                  {tagline}
                </div>
              </div>

              {/* Content panel */}
              <div
                className={`flex flex-col justify-center px-10 py-16 ${
                  i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
              >
                <p className="flex items-center gap-2.5 font-condensed text-[11px] font-bold tracking-[4px] uppercase text-gold mb-4">
                  Service {num}
                  <span className="w-10 h-px bg-gold opacity-40 shrink-0" />
                </p>
                <h2 className="font-bebas text-[42px] leading-[0.95] tracking-wide text-cream mb-5">
                  {name}
                </h2>
                <p className="text-base text-[#999] leading-[1.8] mb-6">
                  {desc}
                </p>

                {/* Feature list */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none p-0 m-0 mb-8">
                  {features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2.5 text-[14px] text-cream font-condensed font-semibold tracking-[0.5px]"
                    >
                      <span
                        className="w-1.5 h-1.5 bg-gold rounded-full shrink-0"
                        aria-hidden
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Urgency signal + CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-6 border-t border-gold">
                  <p className="text-[13px] text-muted leading-[1.5] flex-1">
                    <span className="text-gold font-condensed font-bold tracking-[0.5px]">
                      &#10003;&nbsp;
                    </span>
                    {urgency}
                  </p>
                  <a
                    href="tel:7021234567"
                    aria-label={`Call for ${name}`}
                    className="inline-flex items-center gap-2 font-condensed text-[13px] font-bold tracking-[2px] uppercase text-site-black bg-gold px-6 py-3 rounded-sm no-underline hover:bg-gold-dark hover:-translate-y-px transition-all shrink-0"
                  >
                    <PhoneIcon className="w-3.5 h-3.5 shrink-0" />
                    Free Quote
                  </a>
                </div>
              </div>
            </article>
          ),
        )}
      </section>
    </>
  );
};

export default ServicesList;
