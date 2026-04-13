// Connector line between steps (matches line-80.svg, line-81.svg from Figma)
function ConnectorLine() {
  return <div className="w-px h-[70px] ml-[23px]" style={{ background: "rgba(0,0,0,0.15)" }} />;
}

// Step icon circle (matches vector circles in Figma)
function StepIcon() {
  return (
    <div
      className="w-[47px] h-[47px] rounded-full flex items-center justify-center flex-shrink-0"
      style={{
        background: "url(/vector-7.svg) 100% 100% no-repeat, #085856",
      }}
    >
      <div
        className="w-[8.4px] h-[18.3px] rounded-full"
        style={{ background: "#ffffff", boxShadow: "0px 0px 10px #ffffffd1" }}
      />
    </div>
  );
}

const csiSteps = [
  {
    title: "Immediate Outreach",
    desc: "Lokam's AI calls every customer within 24 hours post-service.",
  },
  {
    title: "Instant Escalation",
    desc: "Instantly escalates detractors with full context and transcripts to your service manager.",
  },
  {
    title: "Review Generation",
    desc: "Automatically sends Google review links to promoters via SMS.",
  },
];

const walkoutSteps = [
  {
    title: "Objection Discovery",
    desc: "Identifies the primary objections (price, trade-in, spouse) holding them back.",
  },
  {
    title: "Hot Lead Handoff",
    desc: "Instantly escalates hot leads to the sales team with full context.",
  },
  {
    title: "Deal Closing Insights",
    desc: "Gives you every insight to close more deals before they buy a competitor's vehicle",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white">
      {/* Top divider */}
      <div className="max-w-[1330px] mx-auto px-[50px]">
        <div className="h-px" style={{ background: "#ffffff1a" }} />
      </div>

      {/* === CSI WORKFLOW === */}
      <div className="max-w-[1330px] mx-auto px-[50px] py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: dashboard image placeholder */}
          {/* TODO: replace with <Image src="/layer-1-2.svg" …> */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{ height: 486, background: "linear-gradient(135deg, #e8f4f7 0%, #d0e9ef 50%, #b8dde6 100%)" }}
          >
            <div className="h-full flex items-center justify-center">
              <p className="text-sm text-center px-8" style={{ color: "#2c697b", opacity: 0.5 }}>
                [ layer-1-2.svg — CSI dashboard screenshot<br />add to /public once assets are exported ]
              </p>
            </div>
          </div>

          {/* Right: CSI workflow steps */}
          <div>
            <p
              className="text-[32px] leading-[37px] mb-8"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 500, color: "#085856" }}
            >
              Automate Your CSI Calls
            </p>
            <div className="flex flex-col">
              {csiSteps.map((step, i) => (
                <div key={step.title}>
                  <div className="flex gap-4">
                    <StepIcon />
                    <div className="pb-0">
                      <h4
                        className="text-[22px] leading-[56px]"
                        style={{ fontFamily: "var(--font-inter)", fontWeight: 600, color: "#000" }}
                      >
                        {step.title}
                      </h4>
                      <p
                        className="text-[19px] leading-6 -mt-2"
                        style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "#3b3b3b" }}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>
                  {i < csiSteps.length - 1 && <ConnectorLine />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-[1330px] mx-auto px-[50px]">
        <div className="h-px" style={{ background: "#0000001a" }} />
      </div>

      {/* === WALK-OUT WORKFLOW === */}
      <div className="max-w-[1330px] mx-auto px-[50px] py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: walk-out workflow steps */}
          <div>
            <p
              className="text-[32px] leading-[37px] mb-8"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 500, color: "#085856" }}
            >
              Automate Unsold Showroom Lead Follow-Up
            </p>
            <div className="flex flex-col">
              {walkoutSteps.map((step, i) => (
                <div key={step.title}>
                  <div className="flex gap-4">
                    <StepIcon />
                    <div>
                      <h4
                        className="text-[22px] leading-[56px]"
                        style={{ fontFamily: "var(--font-inter)", fontWeight: 600, color: "#000" }}
                      >
                        {step.title}
                      </h4>
                      <p
                        className="text-[19px] leading-6 -mt-2"
                        style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "#3b3b3b" }}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>
                  {i < walkoutSteps.length - 1 && <ConnectorLine />}
                </div>
              ))}
            </div>
          </div>

          {/* Right: dashboard image placeholder */}
          {/* TODO: replace with <Image src="/layer-1.svg" …> */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{ height: 482, background: "linear-gradient(135deg, #e8f4f7 0%, #d0e9ef 50%, #b8dde6 100%)" }}
          >
            <div className="h-full flex items-center justify-center">
              <p className="text-sm text-center px-8" style={{ color: "#2c697b", opacity: 0.5 }}>
                [ layer-1.svg — walk-out dashboard screenshot<br />add to /public once assets are exported ]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
