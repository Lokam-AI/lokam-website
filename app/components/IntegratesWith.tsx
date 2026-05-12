import Image from "next/image";

const logos = [
  { src: "/assets/dealertrack.svg",  alt: "Dealertrack" },
  { src: "/assets/cdk.svg",          alt: "CDK Global" },
  { src: "/assets/authenticom.svg",  alt: "Authenticom" },
  { src: "/assets/dealvervault.svg", alt: "DealerVault" },
];

export default function IntegratesWith() {
  return (
    <div className="relative z-30 bg-[url('/assets/integrations-bg.png')] bg-cover bg-center pt-12 md:pt-[60px] pb-14 md:pb-[72px] px-4">
      <div className="max-w-[1166px] mx-auto">

        <h2 className="font-sans font-medium text-xl md:text-[32px] leading-[52px] text-white text-center mb-10 md:mb-[79px]">
          Integrates with Your Dealership Tools
        </h2>

        <div className="overflow-hidden">
          <div className="flex animate-marquee gap-[123px] w-max items-center">
            {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
              <Image
                key={i}
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={40}
                className="flex-shrink-0 h-10 w-auto opacity-40 brightness-0 invert"
                loading={i < logos.length ? "eager" : "lazy"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
