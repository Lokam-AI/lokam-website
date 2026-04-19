import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Phone, Globe } from "lucide-react";


export default function Insights() {
  return (
    <section className="bg-zinc-50 py-20 md:py-40">
      <div className="mx-auto max-w-5xl px-6">
        <h2
          className="font-sans font-medium text-center mb-12 md:mb-16"
          style={{ color: "#095857", fontSize: "clamp(26px, 4vw, 50px)", lineHeight: "1.12", letterSpacing: "-1px" }}
        >
          Insight To Win Back Customers<br />and Close More Deals
        </h2>

        <div className="mx-auto grid gap-2 sm:grid-cols-5 rounded-xl overflow-hidden">

          {/* Top-left — dashboard screenshot */}
          <Card className="group overflow-hidden border-0 sm:col-span-3 sm:rounded-none sm:rounded-tl-xl" style={{ border: "0.2px solid #d1d5db" }}>
            <CardHeader>
              <div className="md:p-6">
                <p className="font-medium text-[#095857]">Real-time win-back intelligence</p>
                <p className="text-muted-foreground mt-3 max-w-sm text-sm">
                  Lokam surfaces high-intent signals the moment a customer goes cold — so your BDC calls at exactly the right time, every time.
                </p>
              </div>
            </CardHeader>
            <div className="relative h-fit pl-6 md:pl-12">
              <div className="absolute -inset-6 [background:radial-gradient(75%_95%_at_50%_0%,transparent,hsl(var(--background))_100%)]" />
              <div className="bg-background overflow-hidden rounded-tl-lg pl-2 pt-2">
                <Image
                  src="/assets/dashboard.png"
                  alt="Lokam dashboard showing customer insights"
                  width={1051}
                  height={600}
                  className="w-full h-auto"
                  style={{ border: "0.5px solid #d1d5db" }}
                />
              </div>
            </div>
          </Card>

          {/* Top-right — insights image */}
          <Card className="group overflow-hidden border-0 sm:col-span-2 sm:rounded-none sm:rounded-tr-xl" style={{ border: "0.2px solid #d1d5db" }}>
            <p className="mx-auto my-6 max-w-md text-balance px-6 text-center text-lg font-semibold sm:text-2xl" style={{ color: "#095857" }}>
              Convert missed service calls into loyal customers.
            </p>
            <CardContent className="mt-auto h-fit">
              <div className="relative mb-6 sm:mb-0">
                <div className="absolute -inset-6 [background:radial-gradient(50%_75%_at_75%_50%,transparent,hsl(var(--background))_100%)]" />
                <div className="overflow-hidden rounded-r-lg">
                  <Image
                    src="/assets/insights.png"
                    alt="Customer insights"
                    width={760}
                    height={1100}
                    className="w-full h-auto object-cover object-top"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bottom-left — multilingual / availability */}
          <Card className="group p-6 border-0 sm:col-span-2 sm:rounded-none sm:rounded-bl-xl md:p-12" style={{ border: "0.2px solid #d1d5db" }}>
            <p className="mx-auto mb-12 max-w-md text-balance text-center text-lg font-semibold sm:text-2xl" style={{ color: "#095857" }}>
              Multilingual support, available 24/7 for every customer.
            </p>
            <div className="flex justify-center gap-6">
              <div className="bg-muted/35 relative flex aspect-square size-16 items-center rounded-[7px] p-3 shadow-lg">
                <Globe className="mt-auto size-4 text-[#095857]" />
              </div>
              <div className="bg-muted/35 flex aspect-square size-16 items-center justify-center rounded-[7px] p-3 shadow-lg">
                <Phone className="size-4 text-[#095857]" />
              </div>
            </div>
          </Card>

          {/* Bottom-right — KPI screenshot */}
          <Card className="group relative border-0 sm:col-span-3 sm:rounded-none sm:rounded-br-xl" style={{ border: "0.2px solid #d1d5db" }}>
            <CardHeader className="p-6 md:p-12">
              <p className="font-medium text-[#095857]">Track all your detractors and opportunities in one tab</p>
              <p className="text-muted-foreground mt-2 max-w-sm text-sm">
                Every open issue, missed follow-up, and at-risk customer — prioritized by revenue impact so your BDC always knows where to focus first.
              </p>
            </CardHeader>
            <CardContent className="px-6 pb-6 md:px-12 md:pb-12">
              <Image
                src="/assets/issues-kpi.png"
                alt="Issues KPI breakdown"
                width={760}
                height={200}
                className="w-full h-auto rounded-lg"
              />
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}
