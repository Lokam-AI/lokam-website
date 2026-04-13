export default function Testimonial() {
  return (
    <section id="case-study" className="py-20 bg-white">
      {/* Divider */}
      <div className="max-w-[1330px] mx-auto px-[50px]">
        <div className="h-px mb-20" style={{ background: "#0000001a" }} />
      </div>

      {/* TODO: replace with <Image src="/rectangle-99.svg" …> for background shape */}
      <div className="max-w-[1330px] mx-auto px-[50px]">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Quote */}
          <div>
            <p
              className="text-black text-xl leading-8"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 300, maxWidth: 540 }}
            >
              &ldquo;Lokam boosted our Google ratings from 4.0 to 4.6 in 5 weeks
              by catching service detractors in real time. On sales, it uncovered
              hidden objections from unsold desklog traffic, helping us close
              15–20 extra cars monthly&rdquo;
            </p>

            <div className="mt-10">
              <p
                className="text-[22px] leading-8"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 600, color: "#000" }}
              >
                Scott Falcone
              </p>
              <p
                className="text-xl leading-[27px] mt-1"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 300, color: "#000" }}
              >
                Dealer principal,
                <br />
                World Auto Group.
              </p>
            </div>
          </div>

          {/* Testimonial visual */}
          {/* TODO: replace with actual Falcone/World Auto Group imagery */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{ height: 400, background: "linear-gradient(135deg, #e8f4f7 0%, #c2e4ed 100%)" }}
          >
            <div className="h-full flex items-center justify-center">
              <p className="text-sm text-center px-8" style={{ color: "#2c697b", opacity: 0.5 }}>
                [ falcone-1.png — customer photo<br />add to /public once assets are exported ]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
