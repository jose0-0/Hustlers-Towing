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
} from "./Icons";

const services = [
  {
    num: "01",
    icon: LightTowIcon,
    name: "Light Duty Towing",
    desc: "Cars, SUVs, and small trucks towed quickly and safely anywhere in the valley.",
  },
  {
    num: "02",
    icon: HeavyTowIcon,
    name: "Heavy Duty Towing",
    desc: "Big rigs, RVs, and commercial vehicles handled by experienced operators.",
  },
  {
    num: "03",
    icon: ParkingIcon,
    name: "Parking Enforcement",
    desc: "Private property management and authorized towing for commercial clients.",
  },
  {
    num: "04",
    icon: LockIcon,
    name: "Impounding",
    desc: "Law enforcement and private impound services with full documentation.",
  },
  {
    num: "05",
    icon: BatteryIcon,
    name: "Jump Starts",
    desc: "Dead battery? We'll get you running again fast, any time of day or night.",
  },
  {
    num: "06",
    icon: KeyIcon,
    name: "Lockouts",
    desc: "Locked out of your vehicle? Professional lockout service, no damage guaranteed.",
  },
  {
    num: "07",
    icon: TireIcon,
    name: "Tire Changes",
    desc: "Flat tire on the side of the road? We'll swap it out and get you moving.",
  },
  {
    num: "08",
    icon: FuelIcon,
    name: "Fuel Delivery",
    desc: "Ran dry? We deliver fuel and water to get you back on the road.",
  },
  {
    num: "09",
    icon: RoadIcon,
    name: "Long Distance",
    desc: "Local to long-distance hauls across Nevada and out of state — no job too far.",
  },
  {
    num: "10",
    icon: SirenIcon,
    name: "Emergency Recovery",
    desc: "Accidents, rollovers, and off-road recoveries handled with precision equipment.",
  },
];
const Services = () => {
  return (
    <>
      <section id="services" className="px-10 py-24 bg-site-black">
        <div className="flex flex-wrap justify-between items-end gap-6 mb-14">
          <div>
            <p className="flex items-center gap-2.5 font-condensed text-[11px] font-bold tracking-[4px] uppercase text-gold mb-4">
              What We Do{" "}
              <span className="w-10 h-px bg-gold opacity-40 shrink-0" />
            </p>
            <h2
              className="font-bebas leading-[0.95] tracking-wide"
              style={{ fontSize: "clamp(48px, 7vw, 80px)" }}
            >
              Our Services
            </h2>
          </div>
          <p className="text-base text-muted leading-relaxed max-w-[560px]">
            From a dead battery to a major recovery, we have the equipment and
            expertise to handle it all.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2px]">
          {services.map(({ num, icon: Icon, name, desc }) => (
            <div
              key={num}
              className="service-card relative bg-site-card px-9 py-10 border border-transparent overflow-hidden hover:border-gold hover:bg-[#1d1d1d] transition-all"
            >
              <span className="absolute top-5 right-6 font-bebas text-[64px] leading-none text-white/[0.04] tracking-tighter select-none">
                {num}
              </span>
              <Icon className="w-9 h-9 text-gold mb-5 block" />
              <div className="font-condensed text-[22px] font-bold tracking-[1px] uppercase text-cream mb-2.5">
                {name}
              </div>
              <div className="text-sm text-muted leading-[1.6]">{desc}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
