import Link from "next/link";

export default function RestaurantSection() {
  return (
    <section className="py-24 md:py-32 px-6 bg-[#FAFAF9]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div>
            <div className="relative overflow-hidden h-[420px]">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80"
                alt="Arotel Restaurant"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-[#6B6B6F] mt-4">
              Open Daily · 7:00 AM – 11:00 PM
            </p>
          </div>

          {/* Text Side */}
          <div>
            <p className="label mb-3">Fine Dining</p>

            <h2
              className="text-3xl md:text-4xl font-normal text-[#16161A] mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              A Culinary Journey Awaits
            </h2>

            <p className="text-[#6B6B6F] leading-relaxed mb-4 text-sm">
              Our restaurant offers an exquisite blend of international and
              local cuisine, crafted by our executive chef using the finest
              seasonal ingredients.
            </p>

            <p className="text-[#6B6B6F] leading-relaxed mb-8 text-sm">
              Whether joining us for breakfast, a business lunch, or a
              romantic dinner, our dining room provides the perfect setting
              for every occasion.
            </p>

            {/* Menu Highlights */}
            <p className="text-[11px] tracking-wide text-[#6B6B6F] mb-8">
              Breakfast Buffet · À la Carte Dinner · Sunday Brunch ·
              Private Dining
            </p>

            <Link
              href="/restaurant"
              className="inline-block border border-[#16161A] hover:bg-[#16161A] hover:text-white text-[#16161A] text-xs tracking-[0.15em] uppercase px-9 py-3.5 transition-all duration-300"
            >
              Explore Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
