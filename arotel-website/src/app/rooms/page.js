import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata = {
  title: "Rooms & Suites | Arotel",
  description:
    "Explore our luxurious rooms and suites at Arotel. From Deluxe Rooms to Presidential Suites.",
};

const rooms = [
  {
    id: "deluxe-room",
    name: "Deluxe Room",
    description:
      "Our Deluxe Rooms offer a perfect blend of contemporary elegance and comfort. Featuring a plush king-size bed, premium linens, and stunning city views, these rooms are designed for the discerning traveler.",
    price: "From $150/night",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80",
    features: [
      "King Bed",
      "City View",
      "Free WiFi",
      "Mini Bar",
      "Smart TV",
      "Rain Shower",
      "Work Desk",
      "Room Service",
    ],
    size: "35 m²",
    maxGuests: 2,
  },
  {
    id: "superior-suite",
    name: "Superior Suite",
    description:
      "Our Superior Suites offer a separate living area for ultimate relaxation. With panoramic views, premium amenities, and a private Jacuzzi, these suites redefine the meaning of luxury.",
    price: "From $280/night",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80",
    features: [
      "King Bed",
      "Living Room",
      "Jacuzzi",
      "Butler Service",
      "Espresso Machine",
      "Panoramic View",
      "Walk-in Closet",
      "Priority Reservations",
    ],
    size: "65 m²",
    maxGuests: 3,
  },
  {
    id: "presidential-suite",
    name: "Presidential Suite",
    description:
      "The pinnacle of luxury living at Arotel. Our Presidential Suite is a private sanctuary spanning an entire floor, with a private terrace, personal butler, and exclusive access to all premium hotel services.",
    price: "From $550/night",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80",
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
    size: "120 m²",
    maxGuests: 4,
  },
  {
    id: "family-room",
    name: "Family Room",
    description:
      "Spacious and thoughtfully designed for families, our Family Rooms offer ample space for parents and children alike, with connecting room options and family-friendly amenities.",
    price: "From $220/night",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&q=80",
    features: [
      "2 Queen Beds",
      "Garden View",
      "Children Amenities",
      "Connecting Rooms",
      "Baby Cot Available",
      "Free WiFi",
      "Mini Kitchen",
      "Large Bathroom",
    ],
    size: "55 m²",
    maxGuests: 4,
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
              "url('https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1920&q=80')",
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
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#16161A]/80 text-white px-3 py-1.5 text-xs">
                    {room.size} · Up to {room.maxGuests} guests
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-[#96784A] mb-3">
                    {room.price}
                  </p>
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
