export default function Results() {
  return (
    <section id="results" className="bg-white">
      {/* Divider */}
      <div className="max-w-[1330px] mx-auto px-[50px]">
        <div className="h-px" style={{ background: "#0000001a" }} />
      </div>

      {/* Full-width product screenshot */}
      {/* TODO: replace with <Image src="/image-49.png" …> — full-width dashboard screenshot */}
      <div
        className="relative w-full"
        style={{ height: 296, background: "linear-gradient(135deg, #f0f7f9 0%, #daeef4 50%, #c2e4ed 100%)" }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-sm text-center" style={{ color: "#2c697b", opacity: 0.5 }}>
            [ image-49.png — full-width product screenshot<br />add to /public once assets are exported ]
          </p>
        </div>
      </div>
    </section>
  );
}
