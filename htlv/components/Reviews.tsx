import { StarIcon, QuoteIcon, VerifiedIcon } from "./Icons";

const reviews = [
  {
    name: "Matthew Winburn",
    initial: "M",
    text: "Awesome experience with the driver and his wife. Was quoted an hour wait and the driver showed up within 35 minutes! Both were extremely professional and made my experience very smooth, fast and comfortable. Will HIGHLY recommend!",
  },
  {
    name: "Lynn Hagen",
    initial: "L",
    text: "Fast, friendly, efficient service. John got my car back on the road, and went above and beyond — following me to the service station and back to my other car so I wouldn't be stranded in the dark and rain.",
  },
  {
    name: "Ryan S.",
    initial: "R",
    text: "Was in a pretty bad situation and called to bail me out. Driver was great, equipment was great. They made the best of a bad experience for me. Couldn't ask for more in that moment.",
  },
  {
    name: "Suzanne Affeldt",
    initial: "S",
    text: "Jon was great and got our car started in minutes. He also recommended a place to purchase a new battery. He was extremely friendly. We will definitely call again if we need assistance. Thank you Jon!",
  },
  {
    name: "Julie Dastrup",
    initial: "J",
    text: "Quick, reliable service. They have taken care of us twice now and been great both times. When you need a tow, you want someone dependable — and that's exactly what you get here.",
  },
  {
    name: "Alex de Guzman",
    initial: "A",
    text: "Justin in Reno was great and kept me informed throughout the entire process. Very busy with a great attitude. Never a convenient time to get towed but they do the best they can. Thank you!",
  },
];
const Reviews = () => {
  return (
    <>
      <section id="reviews" className="px-10 py-24 bg-site-black">
        <div className="mb-14">
          <p className="flex items-center gap-2.5 font-condensed text-[11px] font-bold tracking-[4px] uppercase text-gold mb-4">
            What They Say{" "}
            <span className="w-10 h-px bg-gold opacity-40 shrink-0" />
          </p>
          <h2
            className="font-bebas leading-[0.95] tracking-wide mb-6"
            style={{ fontSize: "clamp(48px, 7vw, 80px)" }}
          >
            Customer Reviews
          </h2>
          <div className="inline-flex items-center gap-4 bg-gold/[0.07] border border-gold/20 px-7 py-5 rounded-sm">
            <span className="font-bebas text-[48px] leading-none text-gold">
              4.9
            </span>
            <div className="leading-[1.4]">
              <strong className="font-condensed text-base font-bold tracking-[1px] uppercase text-cream block">
                Excellent Rating
              </strong>
              <span className="text-[13px] text-muted">
                Based on 33+ Google reviews
              </span>
            </div>
            <StarIcon className="w-9 h-9 fill-gold ml-2" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {reviews.map(({ name, initial, text }) => (
            <div
              key={name}
              className="relative bg-site-card border border-gold p-9 rounded-sm"
            >
              <Stars />
              <QuoteIcon className="absolute top-5 right-6 w-10 h-10 fill-gold opacity-[0.08]" />
              <p className="text-[15px] text-[#bbb] leading-[1.7] mb-6">
                {text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center font-bebas text-lg text-site-black shrink-0">
                  {initial}
                </div>
                <div>
                  <div className="font-condensed text-base font-bold tracking-[0.5px] text-cream">
                    {name}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted mt-0.5">
                    <VerifiedIcon className="w-3 h-3" />
                    Google Review
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Reviews;

function Stars() {
  return (
    <div className="flex gap-1 mb-5">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className="w-4 h-4 fill-gold" />
      ))}
    </div>
  );
}
