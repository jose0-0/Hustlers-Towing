import { PhoneIcon, PinIcon } from "@/components/Icons";

const hours = [
  { day: "Monday – Sunday", hours: "24 Hours / 7 Days" },
  { day: "Holidays", hours: "Open — No exceptions" },
  { day: "Emergencies", hours: "Always dispatching" },
];

const serviceAreas = [
  "Las Vegas Strip",
  "Henderson",
  "North Las Vegas",
  "Summerlin",
  "Boulder City",
  "Spring Valley",
  "Enterprise",
  "Paradise",
];

const reviews = [
  {
    name: "Matthew W.",
    text: "Was quoted an hour wait and the driver showed up within 35 minutes. Extremely professional.",
    rating: 5,
  },
  {
    name: "Lynn H.",
    text: "Fast, friendly, efficient service. John went above and beyond — following me to the service station after fixing my flat.",
    rating: 5,
  },
  {
    name: "Ryan S.",
    text: "Driver was great, equipment was great. They made the best of a bad experience for me.",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-gold">
          <path d="M10 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L10 14.4l-4.8 2.5.9-5.4L2.2 7.7l5.4-.8L10 2z" />
        </svg>
      ))}
    </div>
  );
}
const ContactInfo = () => {
  return (
    <>
      <div className="px-8 md:px-14 py-16 flex flex-col gap-10">
        {/* Call block — most important */}
        <div>
          <p className="flex items-center gap-2.5 font-condensed text-[11px] font-bold tracking-[4px] uppercase text-gold mb-4">
            Fastest Response
            <span className="w-10 h-px bg-gold opacity-40 shrink-0" />
          </p>
          <h2 className="font-bebas text-[36px] leading-[0.95] tracking-wide text-cream mb-4">
            Call for Immediate Dispatch
          </h2>
          <p className="text-[14px] text-muted leading-relaxed mb-6">
            Filling out a form takes time you might not have. If you need a tow
            right now, call us directly — our dispatchers pick up immediately,
            24 hours a day.
          </p>
          <a
            href="tel:7021234567"
            aria-label="Call Hustlers Towing at 702-123-4567"
            className="inline-flex items-center gap-3 font-bebas text-[28px] tracking-[2px] text-site-black bg-gold px-8 py-4 rounded-sm no-underline hover:bg-gold-dark hover:-translate-y-px transition-all"
          >
            <PhoneIcon className="w-5 h-5 shrink-0" />
            (702) 123-4567
          </a>
        </div>

        {/* Hours */}
        <div>
          <h3 className="font-bebas text-[24px] tracking-wide text-cream mb-4">
            Hours of Operation
          </h3>
          <ul className="flex flex-col gap-0 list-none p-0 m-0">
            {hours.map(({ day, hours: h }) => (
              <li
                key={day}
                className="flex justify-between items-center py-3.5 border-b border-gold/15 last:border-0"
              >
                <span className="font-condensed text-[14px] font-bold tracking-[0.5px] uppercase text-cream">
                  {day}
                </span>
                <span className="font-condensed text-[14px] font-bold tracking-[0.5px] uppercase text-gold">
                  {h}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Service area */}
        <div>
          <h3 className="font-bebas text-[24px] tracking-wide text-cream mb-1">
            Service Area
          </h3>
          <p className="text-[13px] text-muted mb-4">
            Serving the entire Las Vegas Valley
          </p>
          <div className="flex flex-wrap gap-2">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-1.5 font-condensed text-[12px] font-bold tracking-[1px] uppercase text-cream bg-white/[0.04] border border-gold/15 px-3 py-1.5 rounded-sm"
              >
                <PinIcon className="w-3 h-3 text-gold shrink-0" />
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Mini reviews */}
        <div>
          <h3 className="font-bebas text-[24px] tracking-wide text-cream mb-1">
            What Customers Say
          </h3>
          <a
            href="https://g.page/r/hustlerstowing/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-condensed text-[12px] font-bold tracking-[1px] uppercase text-gold hover:text-gold-dark transition-colors no-underline mb-6"
          >
            View all Google reviews →
          </a>
          <div className="flex flex-col gap-4">
            {reviews.map(({ name, text, rating }) => (
              <div
                key={name}
                className="p-5 bg-site-card border border-gold/15 rounded-sm"
              >
                <Stars count={rating} />
                <p className="text-[13px] text-[#bbb] leading-[1.7] my-2">
                  &ldquo;{text}&rdquo;
                </p>
                <span className="font-condensed text-[12px] font-bold tracking-[1px] uppercase text-muted">
                  — {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
