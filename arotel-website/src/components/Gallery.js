const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    alt: "Hotel Pool",
    span: "lg:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    alt: "Two Bedroom Apartment with Pool Facing Balcony",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    alt: "Presidential Suite",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    alt: "Restaurant",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
    alt: "Spa",
    span: "lg:col-span-2",
  },
];

export default function Gallery() {
  return (
    <section className="py-24 md:py-32 px-6 bg-[#FAFAF9]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="label mb-3">Visual Tour</p>
          <h2
            className="text-3xl md:text-4xl font-normal text-[#16161A]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Experience Arotel
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden group h-64 md:h-72 ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs tracking-[0.15em] uppercase">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-14">
          <a
            href="/gallery"
            className="inline-block border border-[#16161A] hover:bg-[#16161A] hover:text-white text-[#16161A] text-xs tracking-[0.15em] uppercase px-9 py-3.5 transition-all duration-300"
          >
            View Full Gallery
          </a>
        </div>
      </div>
    </section>
  );
}
