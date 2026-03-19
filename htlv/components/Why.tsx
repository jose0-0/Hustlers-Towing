const reasons = [
  {
    num: "01",
    title: "Faster Response Times",
    desc: "Our dispatchers are live 24/7 and our fleet is strategically positioned across the valley to reach you as fast as humanly possible.",
  },
  {
    num: "02",
    title: "State-of-the-Art Equipment",
    desc: "Modern flatbed trucks, heavy recovery equipment, and fully stocked service vehicles — we have the right tool for every job.",
  },
  {
    num: "03",
    title: "Transparent Pricing",
    desc: "No hidden fees, no surprises. You get a clear quote before we start — and the final bill matches it.",
  },
  {
    num: "04",
    title: "ACE Award Winner — Top 1%",
    desc: "We've earned the Ace Award two years in a row, recognizing us among the top 1% of towing companies across the entire nation.",
  },
  {
    num: "05",
    title: "Local Las Vegas Expertise",
    desc: "Born and based in Las Vegas. We know every highway, back street, and hot zone — and we partner with the best local auto shops after the tow.",
  },
];
const Why = () => {
  return (
    <>
      <section
        id="why"
        className="px-10 py-24 bg-site-dark border-y border-gold"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20 items-start">
          <div>
            <p className="flex items-center gap-2.5 font-condensed text-[11px] font-bold tracking-[4px] uppercase text-gold mb-4">
              Why Choose Us{" "}
              <span className="w-10 h-px bg-gold opacity-40 shrink-0" />
            </p>
            <h2
              className="font-bebas leading-[0.95] tracking-wide mb-4"
              style={{ fontSize: "clamp(48px, 7vw, 80px)" }}
            >
              The Hustlers Difference
            </h2>
            <p className="text-base text-muted leading-relaxed">
              We don&apos;t just show up — we show up right, every single time.
            </p>
          </div>

          <div className="lg:col-span-2 flex flex-col">
            {reasons.map(({ num, title, desc }) => (
              <div
                key={num}
                className="flex gap-5 py-7 border-b border-gold first:border-t first:border-gold"
              >
                <span className="font-bebas text-[18px] text-gold shrink-0 pt-0.5">
                  {num}
                </span>
                <div>
                  <div className="font-condensed text-[18px] font-bold tracking-[1px] uppercase text-cream mb-1.5">
                    {title}
                  </div>
                  <div className="text-sm text-muted leading-[1.6]">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Why;
