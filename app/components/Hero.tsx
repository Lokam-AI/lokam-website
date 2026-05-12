import Image from "next/image";
import SmoothAnchor from "./SmoothAnchor";
import CalendlyButton from "./CalendlyButton";

export default function Hero() {
  return (
    <section className="bg-[#f4f4f6]">
      <div className="relative overflow-hidden h-[470px] sm:h-[520px] md:h-[calc(100dvh-96px)] md:min-h-[580px]">

        {/* Car image — natural size at viewport width, anchored at bottom.
            Top extends above the section and is cropped by overflow-hidden. */}
        <Image
          src="/assets/car.avif"
          alt="Automotive dealership - Lokam Voice AI improves service retention and sales follow-up"
          width={2560}
          height={3391}
          priority
          fetchPriority="high"
          sizes="100vw"
          className="block w-full h-auto absolute inset-x-0 bottom-[-10vw] origin-bottom"
        />

        {/* Content overlaid on top of car */}
        <div className="absolute inset-x-0 top-0 z-10 flex flex-col items-center pt-[35px] px-4 pb-10">

          {/* Badge */}
          <div className="relative inline-flex">
            {/* Glow */}
            <div
              className="absolute rounded-full"
              style={{
                inset: -5,
                background: "linear-gradient(90deg, rgba(47,115,137,0.5) 0%, rgba(58,165,197,0.4) 50%, rgba(66,197,219,0.5) 100%)",
                filter: "blur(8px)",
              }}
            />
            <div className="relative h-8 rounded-full bg-white flex items-center gap-1.5 px-3.5 pl-2 shadow-[0px_1px_2px_rgba(0,0,0,0.06),0px_4px_8px_rgba(0,0,0,0.06),0px_10px_16px_rgba(0,0,0,0.04)]">
              <div className="relative w-5 h-5 flex-shrink-0">
                <Image src="/assets/Icon.svg" alt="" width={20} height={20} className="absolute w-5 h-5" style={{ left: 1.5, top: 1.5 }} />
                <Image src="/assets/Icon-small.svg" alt="" width={20} height={20} className="absolute w-5 h-5" style={{ left: -1, top: -1 }} />
              </div>
              <span className="font-sans font-medium text-[13.5px] leading-5 text-[#272727] whitespace-nowrap">
                Voice AI follow up for dealerships.
              </span>
            </div>
          </div>

          {/* H1 */}
          <h1 className="font-sans font-medium text-center mt-[25px] w-[min(760px,90vw)]" style={{ color: "#095857", fontSize: "clamp(26px, 4vw, 50px)", lineHeight: "1.06", letterSpacing: "-1px" }}>
            Sell More Cars &amp; Increase
            <br />
            service retention
          </h1>

          {/* Subtitle */}
          <p className="font-sans font-medium text-base md:text-xl leading-[1.6] text-black text-center mt-[18px] w-[min(656px,90vw)]">
            Lokam calls all your customers after a service or showroom visit
            and flags issues before they cost you the sale or relationship.
          </p>

          {/* CTAs */}
          <div className="mt-[30px] flex flex-wrap gap-4 items-center justify-center">
            <CalendlyButton className="flex items-center justify-center px-6 h-[50px] bg-brand-mid rounded-lg font-sans font-medium text-[15.6px] text-white">
              Book a demo
            </CalendlyButton>
            <SmoothAnchor
              href="#roi"
              className="flex items-center justify-center px-6 h-[50px] border-2 border-brand-mid rounded-lg font-sans font-medium text-[15.6px] text-brand-mid no-underline"
            >
              Calculate your ROI
            </SmoothAnchor>
          </div>
        </div>

      </div>
    </section>
  );
}
