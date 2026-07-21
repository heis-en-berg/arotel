import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Gallery | Arotel",
  description:
    "Explore Arotel through our photo gallery — rooms, restaurant, pool, and the property grounds.",
};

const categories = ["All", "Rooms", "Restaurant", "Pool", "Exterior"];

const images = [
  {
    src: "/images/property/pool.jpg",
    alt: "Poolside Escape Framed by Palms",
    category: "Pool",
  },
  {
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    alt: "Two Bedroom Apartment with Pool Facing Balcony",
    category: "Rooms",
  },
  {
    src: "/images/property/presidential-suite-bedroom-4.jpg",
    alt: "Presidential Suite Bedroom & Lounge",
    category: "Rooms",
  },
  {
    src: "/images/property/presidential-suite-bedroom-1.jpg",
    alt: "Presidential Suite King Bedroom",
    category: "Rooms",
  },
  {
    src: "/images/property/presidential-suite-bathroom-1.jpg",
    alt: "Presidential Suite Bathroom",
    category: "Rooms",
  },
  {
    src: "/images/property/presidential-suite-bedroom-5.jpg",
    alt: "Presidential Suite Seating Area",
    category: "Rooms",
  },
  {
    src: "/images/property/restaurant-dining.jpg",
    alt: "Alfresco Dining Room Overlooking the Garden",
    category: "Restaurant",
  },
  {
    src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
    alt: "Two Bedroom Suite with Pool Facing Balcony",
    category: "Rooms",
  },
  {
    src: "/images/property/exterior-hero.jpg",
    alt: "Arotel at Golden Hour",
    category: "Exterior",
  },
  {
    src: "/images/property/restaurant-interior-1.jpg",
    alt: "Casual Dining & Lounge Seating",
    category: "Restaurant",
  },
  {
    src: "/images/property/pool-aerial.jpg",
    alt: "Bird's-Eye View of the Pool Deck",
    category: "Pool",
  },
  {
    src: "/images/property/exterior-entrance.jpg",
    alt: "Welcoming Entrance & Driveway",
    category: "Exterior",
  },
  {
    src: "/images/property/exterior-aerial-2.jpg",
    alt: "Arotel Rising Above the Coconut Groves",
    category: "Exterior",
  },
  {
    src: "/images/property/restaurant-breakfast-buffet.jpg",
    alt: "Morning Breakfast Spread",
    category: "Restaurant",
  },
  {
    src: "/images/property/reception.jpg",
    alt: "Reception & Travel Desk",
    category: "Exterior",
  },
  {
    src: "/images/property/exterior-aerial-1.jpg",
    alt: "Nestled Amid the Palms",
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
              "url('/images/property/pool-aerial.jpg')",
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
