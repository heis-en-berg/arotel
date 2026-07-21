import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
        <p className="text-[11px] tracking-[0.35em] uppercase text-white/70 mb-5">
          Est. 2014 · A Private Sanctuary
        </p>

        <h1
          className="text-5xl md:text-7xl font-normal mb-6 leading-[1.05] tracking-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Arotel Rooms
          <span className="block">&amp; Suites</span>
        </h1>

        <p className="text-base md:text-lg text-white/75 mb-12 max-w-xl mx-auto leading-relaxed font-light">
          A quiet, considered luxury — thoughtfully designed rooms, fine
          dining, and attentive service in the heart of the city.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/book"
            className="bg-white text-[#16161A] text-xs tracking-[0.15em] uppercase px-9 py-4 transition-colors duration-300 hover:bg-white/90"
          >
            Reserve Your Stay
          </Link>
          <Link
            href="/rooms"
            className="border border-white/50 text-white text-xs tracking-[0.15em] uppercase px-9 py-4 transition-colors duration-300 hover:bg-white/10"
          >
            Explore Rooms
          </Link>
        </div>
      </div>
    </section>
  );
}
