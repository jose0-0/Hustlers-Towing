const stats = [
  { num: "24/7", label: "Always\nOn Call" },
  //   { num: "4.9", label: "Google\nRating" },
  //   { num: "Top 1%", label: "ACE Award\nWinner" },
  { num: "LV", label: "CityWide\nCoverage" },
];
const StatsStrip = () => {
  return (
    <>
      <div className="bg-gold py-5 px-10 flex flex-wrap gap-8 justify-center items-center">
        {stats.map((stat, i) => (
          <div key={stat.num} className="flex items-center gap-8">
            <div className="flex items-center gap-3.5 text-site-black">
              <span className="font-bebas text-[40px] leading-none tracking-wide">
                {stat.num}
              </span>
              <span className="font-condensed text-[13px] font-bold tracking-[1.5px] uppercase opacity-70 whitespace-pre-line leading-[1.3]">
                {stat.label}
              </span>
            </div>
            {i < stats.length - 1 && (
              <div className="hidden sm:block w-px h-10 bg-black/20" />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default StatsStrip;
