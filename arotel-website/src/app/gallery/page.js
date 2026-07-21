import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Gallery | Arotel",
  description:
    "Explore Arotel through our photo gallery — rooms, restaurant, pool, spa, and more.",
};

const categories = ["All", "Rooms", "Restaurant", "Pool", "Spa", "Exterior"];

const images = [
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    alt: "Infinity Pool at Sunset",
    category: "Pool",
  },
  {
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    alt: "Two Bedroom Apartment with Pool Facing Balcony",
    category: "Rooms",
  },
  {
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    alt: "Presidential Suite",
    category: "Rooms",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    alt: "Fine Dining Restaurant",
    category: "Restaurant",
  },
  {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
    alt: "Luxury Spa",
    category: "Spa",
  },
  {
    src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
    alt: "Two Bedroom Suite with Pool Facing Balcony",
    category: "Rooms",
  },
  {
    src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
    alt: "Hotel Exterior",
    category: "Exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    alt: "Restaurant Ambiance",
    category: "Restaurant",
  },
  {
    src: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80",
    alt: "Hotel Pool Area",
    category: "Pool",
  },
  {
    src: "https://images.unsplash.com/photo-1606402179428-a57976d71fa4?w=800&q=80",
    alt: "Spa Treatment Room",
    category: "Spa",
  },
  {
    src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
    alt: "Two Bedroom Apartment with Pool Facing Balcony",
    category: "Rooms",
  },
  {
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    alt: "Hotel Architecture",
    category: "Exterior",
  },
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />

      {/* Page Hero */}
      <div className="relative h-72 md:h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-[11px] tracking-[0.35em] uppercase text-white/70 mb-3">
            Visual Tour
          </p>
          <h1
            className="text-4xl md:text-5xl font-normal"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Gallery
          </h1>
        </div>
      </div>

      <main className="py-24 md:py-32 px-6 bg-[#FAFAF9]">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-[#6B6B6F] max-w-lg mx-auto mb-16 leading-relaxed text-sm">
            A visual journey through the world of Arotel — every corner tells a
            story of elegance and refined luxury.
          </p>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {images.map((image, i) => (
              <div
                key={i}
                className="relative overflow-hidden group h-64 md:h-72"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-white text-xs tracking-[0.15em] uppercase">
                    {image.alt}
                  </span>
                  <span className="text-white/60 text-[11px] tracking-wide uppercase">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
