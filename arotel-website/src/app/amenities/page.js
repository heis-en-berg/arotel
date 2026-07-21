import Navbar from "@/components/Navbar";
import Amenities from "@/components/Amenities";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Amenities | Arotel",
  description:
    "Discover world-class amenities at Arotel — infinity pool, spa, fine dining, fitness center, and more.",
};

const detailedAmenities = [
  {
    icon: "🏊",
    title: "Infinity Pool",
    description:
      "Our stunning rooftop infinity pool offers breathtaking 360° views of the city skyline. Open daily from 7:00 AM to 10:00 PM, the pool area features sun loungers, pool-side bar service, and a dedicated pool attendant.",
    hours: "7:00 AM – 10:00 PM",
    location: "Rooftop, Level 25",
  },
  {
    icon: "💆",
    title: "Luxury Spa & Wellness",
    description:
      "Our full-service spa offers a comprehensive menu of rejuvenating treatments, massages, facials, and body wraps. The spa also features a steam room, sauna, and relaxation lounge.",
    hours: "9:00 AM – 9:00 PM",
    location: "Level 3",
  },
  {
    icon: "🏋️",
    title: "Fitness Center",
    description:
      "Stay in shape with our state-of-the-art fitness center, equipped with the latest cardiovascular machines, free weights, and functional training equipment. Personal training sessions are available upon request.",
    hours: "24 Hours",
    location: "Level 4",
  },
  {
    icon: "🍽️",
    title: "Fine Dining Restaurant",
    description:
      "Experience culinary excellence at our award-winning restaurant, offering a sophisticated menu crafted from the finest seasonal ingredients. Open for breakfast, lunch, and dinner.",
    hours: "7:00 AM – 11:00 PM",
    location: "Level 1",
  },
  {
    icon: "🥂",
    title: "Rooftop Lounge Bar",
    description:
      "Unwind with handcrafted cocktails and premium spirits at our elegant rooftop bar. Enjoy live music on weekends and panoramic views of the city lights.",
    hours: "4:00 PM – 1:00 AM",
    location: "Rooftop, Level 25",
  },
  {
    icon: "🛎️",
    title: "Concierge Services",
    description:
      "Our knowledgeable concierge team is available around the clock to assist with restaurant reservations, tour bookings, transportation, event tickets, and any request to make your stay exceptional.",
    hours: "24 Hours",
    location: "Lobby",
  },
];

export default function AmenitiesPage() {
  return (
    <>
      <Navbar />

      {/* Page Hero */}
      <div className="relative h-72 md:h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/property/pool.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-[11px] tracking-[0.35em] uppercase text-white/70 mb-3">
            Hotel Facilities
          </p>
          <h1
            className="text-4xl md:text-5xl font-normal"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Amenities
          </h1>
        </div>
      </div>

      <main className="bg-[#FAFAF9]">
        {/* Detailed Amenities */}
        <section className="py-24 md:py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <p className="text-center text-[#6B6B6F] max-w-lg mx-auto mb-16 leading-relaxed text-sm">
              From wellness to recreation, every facility at Arotel is designed
              to enhance your stay and create lasting memories.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E5E3DD]">
              {detailedAmenities.map((amenity) => (
                <div key={amenity.title} className="bg-[#FAFAF9] p-8">
                  <div className="text-2xl mb-4 opacity-80">{amenity.icon}</div>
                  <h3
                    className="text-lg font-normal text-[#16161A] mb-3"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {amenity.title}
                  </h3>
                  <p className="text-[#6B6B6F] text-sm leading-relaxed mb-5">
                    {amenity.description}
                  </p>
                  <div className="flex gap-6 text-[11px] tracking-wide text-[#96784A] border-t border-[#E5E3DD] pt-4">
                    <span>{amenity.hours}</span>
                    <span>{amenity.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Grid Overview */}
        <Amenities />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
