export default function IntegratesWith() {
  return (
    <div className="relative z-30 bg-[url('/assets/integrations-bg.png')] bg-cover bg-center pt-12 md:pt-[60px] pb-14 md:pb-[72px] px-4">
      <div className="max-w-[1166px] mx-auto">

        <h2 className="font-sans font-medium text-xl md:text-[32px] leading-[52px] text-white text-center mb-10 md:mb-[79px]">
          Integrates with Your Dealership Tools
        </h2>

        <div className="overflow-hidden">
          <div className="flex animate-marquee gap-[123px] w-max">
            {[...["Dealertrack", "CDK Global", "Authenticom", "Dealervault"], ...["Dealertrack", "CDK Global", "Authenticom", "Dealervault"], ...["Dealertrack", "CDK Global", "Authenticom", "Dealervault"], ...["Dealertrack", "CDK Global", "Authenticom", "Dealervault"]].map((name, i) => (
              <span key={i} className="font-sans font-semibold text-lg text-white/50 flex-shrink-0 tracking-tight">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
