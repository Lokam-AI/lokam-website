"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Phone, Globe } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import AutoPlayVideo from "./AutoPlayVideo";

export default function Insights() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduce ? 0 : 0.12 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const cardClass =
    "group h-full overflow-hidden border border-zinc-200/80 bg-white shadow-sm transition-[box-shadow,border-color] duration-300 ease-out hover:shadow-md hover:border-zinc-300";

  const titleClass =
    "text-2xl font-semibold leading-snug tracking-tight text-[#095857] md:text-[30px] md:leading-[1.15]";
  const bodyClass = "mt-4 max-w-lg text-base leading-relaxed text-zinc-600";

  return (
    <section className="bg-zinc-50 py-20 md:py-32">
      <div className="mx-auto max-w-[1380px] px-6 lg:px-12">
        <h2
          className="font-sans font-medium text-center mb-14 md:mb-20"
          style={{ color: "#095857", fontSize: "clamp(28px, 4.5vw, 56px)", lineHeight: "1.12", letterSpacing: "-1px" }}
        >
          Insight To Win Back Customers<br />and Close More Deals
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto grid gap-5 sm:grid-cols-5 sm:grid-rows-[540px_420px]"
        >
          {/* Top-left — dashboard video */}
          <motion.div variants={item} className="sm:col-span-3 sm:row-start-1">
            <Card className={`${cardClass} flex flex-col rounded-2xl`}>
              <div className="flex-shrink-0 px-8 pt-8 pb-6 md:px-10 md:pt-10">
                <p className={titleClass}>Real-time win-back intelligence</p>
                <p className={bodyClass}>
                  Lokam surfaces high-intent signals the moment a customer goes cold — so your BDC calls at exactly the right time, every time.
                </p>
              </div>
              <div className="relative mx-8 mb-8 mt-auto h-60 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 sm:h-auto sm:flex-1 sm:min-h-0 md:mx-10 md:mb-10">
                <AutoPlayVideo
                  src="/assets/bento/dashboard.mp4"
                  poster="/assets/bento/dashboard-poster.jpg"
                  width={2560}
                  height={1692}
                  ariaLabel="Lokam dashboard with real-time customer insights"
                  className="absolute inset-0 h-full w-full object-contain object-center sm:object-cover sm:object-top"
                />
              </div>
            </Card>
          </motion.div>

          {/* Top-right — feedback insights scrolling scorecard */}
          <motion.div variants={item} className="sm:col-span-2 sm:row-start-1">
            <Card className={`${cardClass} flex flex-col rounded-2xl`}>
              <div className="flex-shrink-0 px-8 pt-8 pb-6 md:px-10 md:pt-10">
                <p className={titleClass}>
                  Convert missed service calls into loyal customers.
                </p>
              </div>
              <div className="relative mx-6 mb-6 h-72 overflow-hidden rounded-xl border border-zinc-200 bg-white sm:h-auto sm:flex-1 sm:min-h-0 md:mx-8 md:mb-8 [mask-image:linear-gradient(to_bottom,transparent_0%,black_8%,black_92%,transparent_100%)]">
                <div className="absolute inset-x-0 top-0 flex flex-col animate-vscroll [animation-delay:1s] group-hover:[animation-play-state:paused]">
                  <Image
                    src="/assets/bento/feedback-insights.png"
                    alt="Customer feedback scorecard"
                    width={916}
                    height={2192}
                    className="block w-full h-auto"
                  />
                  <Image
                    src="/assets/bento/feedback-insights.png"
                    alt=""
                    aria-hidden
                    width={916}
                    height={2192}
                    className="block w-full h-auto"
                  />
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Bottom-left — multilingual / availability with bobbing icons */}
          <motion.div variants={item} className="sm:col-span-2 sm:row-start-2">
            <Card className={`${cardClass} flex flex-col items-center justify-center rounded-2xl px-10 py-12`}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700 ring-1 ring-emerald-200">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
                </span>
                24/7 Live
              </div>
              <p className={`${titleClass} mb-9 max-w-[320px] text-balance text-center`}>
                Multilingual support, available 24/7 for every customer.
              </p>
              <div className="flex justify-center gap-6">
                <div className="flex aspect-square size-16 items-center justify-center rounded-2xl bg-white shadow-md ring-1 ring-zinc-200 animate-bob">
                  <Globe className="size-6 text-[#095857]" strokeWidth={1.75} />
                </div>
                <div
                  className="flex aspect-square size-16 items-center justify-center rounded-2xl bg-white shadow-md ring-1 ring-zinc-200 animate-bob"
                  style={{ animationDelay: "-1.5s" }}
                >
                  <Phone className="size-6 text-[#095857]" strokeWidth={1.75} />
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Bottom-right — issues KPI video */}
          <motion.div variants={item} className="sm:col-span-3 sm:row-start-2">
            <Card className={`${cardClass} flex flex-col rounded-2xl`}>
              <div className="flex-shrink-0 px-7 pt-7 pb-4 md:px-8 md:pt-8">
                <p className={titleClass}>
                  Track every detractor and opportunity in one tab
                </p>
                <p className={bodyClass}>
                  Open issues and at-risk customers — prioritized by revenue impact so your BDC always knows where to focus.
                </p>
              </div>
              <div className="relative mx-8 mb-8 mt-auto h-40 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 sm:h-auto sm:flex-1 sm:min-h-0 md:mx-10 md:mb-10">
                <AutoPlayVideo
                  src="/assets/bento/issues-kpi.mp4"
                  poster="/assets/bento/issues-kpi-poster.jpg"
                  width={2560}
                  height={984}
                  ariaLabel="Issues and opportunities KPI breakdown"
                  className="absolute inset-0 h-full w-full object-contain object-center"
                />
              </div>
            </Card>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
