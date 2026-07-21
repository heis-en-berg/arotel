import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import RoomImageCarousel from "@/components/RoomImageCarousel";
import Link from "next/link";

export const metadata = {
  title: "Rooms & Suites | Arotel",
  description:
    "Explore our luxurious rooms and suites at Arotel, including our Presidential Suite and pool-facing two bedroom accommodations.",
};

const rooms = [
  {
    id: "presidential-suite",
    name: "Presidential Suite",
    description:
      "The pinnacle of luxury living at Arotel. Our Presidential Suite is a private sanctuary spanning an entire floor, with a private terrace, personal butler, and exclusive access to all premium hotel services.",
    image: "/images/property/presidential-suite-bedroom-4.jpg",
    images: [
      "/images/property/presidential-suite-bedroom-4.jpg",
      "/images/property/presidential-suite-bedroom-1.jpg",
      "/images/property/presidential-suite-bedroom-2.jpg",
      "/images/property/presidential-suite-bedroom-3.jpg",
      "/images/property/presidential-suite-bedroom-5.jpg",
      "/images/property/presidential-suite-bedroom-6.jpg",
      "/images/property/presidential-suite-bathroom-1.jpg",
      "/images/property/presidential-suite-bathroom-2.jpg",
      "/images/property/presidential-suite-bathroom-3.jpg",
      "/images/property/presidential-suite-amenities.jpg",
    ],
    features: [
      "Master Bedroom",
      "Private Terrace",
      "Pool Access",
      "24h Butler",
      "Dining Room",
      "Kitchen",
      "Home Theater",
      "Luxury Amenities",
    ],
    size: "45 m²",
    maxGuests: 3,
  },
  {
    id: "two-bedroom-suite-pool-balcony",
    name: "Two Bedroom Suite with Pool Facing Balcony",
    description:
      "Our Two Bedroom Suite offers generous space for families or groups, with a separate living area and a private balcony overlooking the pool. Premium furnishings and panoramic views make this suite a relaxing retreat.",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80",
    images: [
      "/images/property/two-bedroom-suite-bedroom-1.jpg",
      "/images/property/two-bedroom-suite-bedroom-2.jpg",
      "/images/property/two-bedroom-suite-bedroom-3.jpg",
      "/images/property/two-bedroom-suite-bedroom-4.jpg",
      "/images/property/two-bedroom-suite-bedroom-5.jpg",
      "/images/property/two-bedroom-suite-bathroom-1.jpg",
      "/images/property/two-bedroom-suite-bathroom-2.jpg",
      "/images/property/two-bedroom-suite-bathroom-3.jpg",
      "/images/property/two-bedroom-suite-bathroom-4.jpg",
      "/images/property/two-bedroom-suite-kitchen-1.jpg",
      "/images/property/two-bedroom-suite-kitchen-2.jpg",
      "/images/property/two-bedroom-suite-balcony-1.jpg",
      "/images/property/two-bedroom-suite-balcony-2.jpg",
      "/images/property/two-bedroom-suite-amenities.jpg",
    ],
    features: [
      "Two Bedrooms",
      "Pool-Facing Balcony",
      "Living Room",
      "Butler Service",
      "Espresso Machine",
      "Panoramic Pool View",
      "Walk-in Closet",
      "Priority Reservations",
    ],
    size: "85 m²",
    maxGuests: 5,
  },
  {
    id: "two-bedroom-apartment-pool-balcony",
    name: "Two Bedroom Apartment with Pool Facing Balcony",
    description:
      "A self-contained apartment-style residence featuring two bedrooms, a full kitchen, and a private pool-facing balcony. Perfect for extended stays and families who want the comforts of home with hotel-grade service.",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&q=80",
    images: [
      "/images/property/two-bedroom-apartment-bedroom-1.jpg",
      "/images/property/two-bedroom-apartment-bedroom-2.jpg",
      "/images/property/two-bedroom-apartment-living-1.jpg",
      "/images/property/two-bedroom-apartment-living-2.jpg",
      "/images/property/two-bedroom-apartment-living-3.jpg",
      "/images/property/two-bedroom-apartment-living-4.jpg",
      "/images/property/two-bedroom-apartment-kitchen-1.jpg",
      "/images/property/two-bedroom-apartment-kitchen-2.jpg",
      "/images/property/two-bedroom-apartment-bathroom-1.jpg",
      "/images/property/two-bedroom-apartment-bathroom-2.jpg",
      "/images/property/two-bedroom-apartment-balcony-1.jpg",
      "/images/property/two-bedroom-apartment-balcony-2.jpg",
      "/images/property/two-bedroom-apartment-amenities.jpg",
    ],
    features: [
      "Two Bedrooms",
      "Full Kitchen",
      "Pool-Facing Balcony",
      "Dining Area",
      "Washer/Dryer",
      "Free WiFi",
      "Living Room",
      "Large Bathroom",
    ],
    size: "110 m²",
    maxGuests: 6,
  },
];

export default function RoomsPage() {
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
            Accommodations
          </p>
          <h1
            className="text-4xl md:text-5xl font-normal"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Rooms & Suites
          </h1>
        </div>
      </div>

      <main className="py-24 md:py-32 px-6 bg-[#FAFAF9]">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-[#6B6B6F] max-w-xl mx-auto mb-20 leading-relaxed text-sm">
            Each of our rooms and suites has been meticulously designed to offer
            an unparalleled experience of comfort, style, and luxury.
          </p>

          <div className="space-y-20">
            {rooms.map((room, index) => (
              <div
                key={room.id}
                id={room.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden h-80 md:h-96 ${
                    index % 2 !== 0 ? "lg:order-2" : ""
                  }`}
                >
                  {room.images && room.images.length > 0 ? (
                    <RoomImageCarousel images={room.images} alt={room.name} />
                  ) : (
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute top-4 left-4 bg-[#16161A]/80 text-white px-3 py-1.5 text-xs">
                    {room.size} · Up to {room.maxGuests} guests
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                  {/* <p className="text-[11px] tracking-[0.2em] uppercase text-[#96784A] mb-3">
                    {room.price}
                  </p> */}
                  <h2
                    className="text-2xl md:text-3xl font-normal text-[#16161A] mb-4"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {room.name}
                  </h2>
                  <p className="text-[#6B6B6F] leading-relaxed mb-6 text-sm">
                    {room.description}
                  </p>

                  {/* Features */}
                  <p className="text-[11px] tracking-wide text-[#6B6B6F] mb-8">
                    {room.features.join("  ·  ")}
                  </p>

                  <Link
                    href="/book"
                    className="inline-block border border-[#16161A] hover:bg-[#16161A] hover:text-white text-[#16161A] text-xs tracking-[0.15em] uppercase px-8 py-3.5 transition-all duration-300"
                  >
                    Book This Room
                  </Link>
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
