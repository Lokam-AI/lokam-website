"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="relative">

        {/* Car image — crop top white studio space (11.5% scales with viewport) */}
        <div className="overflow-hidden">
          <Image
            src="/assets/car.png"
            alt=""
            width={4096}
            height={3058}
            className="w-full h-auto block"
            style={{ marginTop: "-11.5%" }}
            priority
          />
        </div>

        {/* Content overlaid on top of car */}
        <div className="absolute inset-x-0 top-0 flex flex-col items-center pt-[35px] px-4">

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
                <img src="/assets/Icon.svg"       alt="" className="absolute w-5 h-5" style={{ left: 1.5, top: 1.5 }} />
                <img src="/assets/Icon-small.svg" alt="" className="absolute w-5 h-5" style={{ left: -1, top: -1 }} />
              </div>
              <span className="font-sans font-medium text-[13.5px] leading-5 text-[#272727] whitespace-nowrap">
                Voice AI follow up for dealerships.
              </span>
            </div>
          </div>

          {/* H1 */}
          <h1 className="font-sans font-medium text-center mt-[25px] w-[min(760px,90vw)] m-0 mt-[25px]" style={{ color: "#095857", fontSize: "clamp(26px, 4vw, 50px)", lineHeight: "1.06", letterSpacing: "-1px" }}>
            Sell More Cars &amp; Increase
            <br />
            service retention
          </h1>

          {/* Subtitle */}
          <p className="font-sans font-medium text-lg md:text-xl leading-[30px] text-black text-center mt-[18px] w-[min(656px,90vw)] m-0 mt-[18px]">
            Lokam calls all your customers after a service or showroom visit
            and flags issues before they cost you the sale or relationship.
          </p>

          {/* CTAs */}
          <div className="mt-[30px] flex flex-wrap gap-4 items-center justify-center">
            <a
              href="https://calendly.com/saleeq-lokam/30-minutes-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 h-[50px] bg-brand-mid rounded-lg font-sans font-medium text-[15.6px] text-white no-underline"
            >
              Book a demo
            </a>
            <a
              href="#roi"
              className="flex items-center justify-center px-6 h-[50px] border-2 border-brand-mid rounded-lg font-sans font-medium text-[15.6px] text-brand-mid no-underline"
            >
              Calculate your ROI
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
