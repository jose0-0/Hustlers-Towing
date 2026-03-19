import { TrophyIcon, MapPinIcon, BoltIcon, ShieldCheckIcon } from "./Icons";

const highlights = [
  { icon: MapPinIcon, title: "LV", desc: "Full coverage across Las Vegas" },
  {
    icon: BoltIcon,
    title: "Fast Dispatch",
    desc: "State-of-the-art fleet & equipment",
  },
  {
    icon: ShieldCheckIcon,
    title: "True Integrity",
    desc: "Honest pricing, respectful service",
  },
];

const About = () => {
  return (
    <>
      <section
        id="about"
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center px-10 py-24 bg-site-dark border-y border-gold"
      >
        {/* Visual */}
        <div className="relative">
          <div className="relative w-full aspect-4/3 bg-linear-to-br from-[#1e1e1e] to-[#161616] border border-gold rounded-sm flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,197,24,0.07)_0%,transparent_70%)]" />
            <svg
              width="220"
              height="150"
              viewBox="0 0 220 150"
              fill="none"
              className="relative z-10"
            >
              <ellipse
                cx="110"
                cy="140"
                rx="90"
                ry="6"
                fill="rgba(245,197,24,0.06)"
              />
              <rect
                x="14"
                y="68"
                width="96"
                height="52"
                rx="5"
                stroke="#f5c518"
                strokeWidth="2"
                fill="rgba(245,197,24,0.04)"
              />
              <path
                d="M14 68 L14 50 Q14 44 20 44 L50 44 Q56 44 62 50 L78 68"
                stroke="#f5c518"
                strokeWidth="2"
                fill="rgba(245,197,24,0.07)"
                strokeLinejoin="round"
              />
              <path
                d="M22 68 L22 54 Q22 50 26 50 L48 50 Q52 50 56 54 L68 68"
                stroke="#f5c518"
                strokeWidth="1.2"
                fill="rgba(245,197,24,0.13)"
                strokeLinejoin="round"
              />
              <line
                x1="78"
                y1="68"
                x2="78"
                y2="120"
                stroke="#f5c518"
                strokeWidth="1"
                opacity="0.5"
              />
              <line
                x1="110"
                y1="76"
                x2="196"
                y2="38"
                stroke="#f5c518"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <line
                x1="110"
                y1="90"
                x2="196"
                y2="90"
                stroke="#f5c518"
                strokeWidth="1.5"
                opacity="0.5"
              />
              <line
                x1="196"
                y1="38"
                x2="196"
                y2="90"
                stroke="#f5c518"
                strokeWidth="1.5"
                opacity="0.6"
              />
              <path
                d="M194 90 Q202 90 202 100 Q202 110 194 110"
                stroke="#f5c518"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
              <line
                x1="194"
                y1="110"
                x2="194"
                y2="128"
                stroke="#f5c518"
                strokeWidth="1.2"
                strokeDasharray="4 3"
                opacity="0.7"
              />
              <circle
                cx="38"
                cy="122"
                r="14"
                stroke="#f5c518"
                strokeWidth="2"
                fill="rgba(245,197,24,0.05)"
              />
              <circle
                cx="38"
                cy="122"
                r="6"
                stroke="#f5c518"
                strokeWidth="1.5"
                fill="none"
              />
              <circle
                cx="76"
                cy="122"
                r="14"
                stroke="#f5c518"
                strokeWidth="2"
                fill="rgba(245,197,24,0.05)"
              />
              <circle
                cx="76"
                cy="122"
                r="6"
                stroke="#f5c518"
                strokeWidth="1.5"
                fill="none"
              />
              <rect
                x="11"
                y="76"
                width="5"
                height="10"
                rx="1.5"
                stroke="#f5c518"
                strokeWidth="1"
                fill="rgba(245,197,24,0.35)"
              />
              <rect
                x="108"
                y="76"
                width="4"
                height="8"
                rx="1"
                stroke="#f5c518"
                strokeWidth="1"
                fill="rgba(245,197,24,0.25)"
              />
              <rect
                x="30"
                y="41"
                width="20"
                height="4"
                rx="2"
                fill="rgba(245,197,24,0.4)"
              />
            </svg>
          </div>
        </div>

        {/* Text */}
        <div>
          <SectionLabel>Who We Are</SectionLabel>
          <h2
            className="font-bebas leading-[0.95] tracking-wide mb-5"
            style={{ fontSize: "clamp(48px, 7vw, 80px)" }}
          >
            Built on the Hustle
          </h2>
          <p className="text-base text-[#999] leading-[1.8] mb-6">
            Hustlers Towing is an all-in-one towing company providing everything
            from scheduled tows and parking enforcement to roadside assistance
            and emergency recovery. We tow local, statewide, and out-of-state —
            far and wide.
          </p>
          <p className="text-base text-[#999] leading-[1.8] mb-8">
            We treat every customer with honesty and respect. No runarounds, no
            surprises — just dependable service and real integrity.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-5 bg-white/[0.03] border border-gold rounded-sm"
              >
                <Icon className="w-7 h-7 text-gold mb-2.5" />
                <div className="font-condensed text-[15px] font-bold tracking-[1px] uppercase text-cream mb-1">
                  {title}
                </div>
                <div className="text-[13px] text-muted leading-[1.5]">
                  {desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-2.5 font-condensed text-[11px] font-bold tracking-[4px] uppercase text-gold mb-4">
      {children}
      <span className="w-10 h-px bg-gold opacity-40 shrink-0" />
    </p>
  );
}
