import Link from "next/link";

const rooms = [
  {
    id: 1,
    name: "Presidential Suite",
    description:
      "The pinnacle of luxury living — a private sanctuary with exclusive amenities and personalized service.",
    price: "From $550/night",
    image: "/images/property/presidential-suite-bedroom-4.jpg",
    features: ["Master Bedroom", "Private Terrace", "Pool Access", "24h Butler"],
    size: "45 m²",
  },
  {
    id: 2,
    name: "Two Bedroom Suite with Pool Facing Balcony",
    description:
      "Spacious two-bedroom suite with a private balcony overlooking the pool, a separate living area, and premium amenities for family or group stays.",
    price: "From $350/night",
    image: "/images/property/two-bedroom-suite-bedroom-1.jpg",
    features: ["Two Bedrooms", "Pool-Facing Balcony", "Living Room", "Butler Service"],
    size: "85 m²",
  },
  {
    id: 3,
    name: "Two Bedroom Apartment with Pool Facing Balcony",
    description:
      "Self-contained apartment-style residence with two bedrooms, a full kitchen, and a private pool-facing balcony — ideal for extended stays.",
    price: "From $400/night",
    image: "/images/property/two-bedroom-apartment-bedroom-1.jpg",
    features: ["Two Bedrooms", "Full Kitchen", "Pool-Facing Balcony", "Living Room"],
    size: "110 m²",
  },
];

export default function RoomCards() {
  return (
    <section className="py-24 md:py-32 px-6 bg-[#FAFAF9]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="label mb-3">Accommodations</p>
          <h2
            className="text-3xl md:text-4xl font-normal text-[#16161A]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Rooms & Suites
          </h2>
          <p className="text-[#6B6B6F] max-w-md mx-auto leading-relaxed mt-4 text-sm">
            Thoughtfully designed for comfort, style, and a quieter kind of
            luxury.
          </p>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E3DD]">
          {rooms.map((room) => (
            <div key={room.id} className="bg-[#FAFAF9] group">
              {/* Image */}
              <div className="relative overflow-hidden h-60">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-baseline justify-between mb-3">
                  <h3
                    className="text-lg font-normal text-[#16161A]"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {room.name}
                  </h3>
                  <span className="text-[11px] text-[#6B6B6F]">{room.size}</span>
                </div>
                <p className="text-[#6B6B6F] text-sm leading-relaxed mb-5">
                  {room.description}
                </p>

                {/* Features */}
                <p className="text-[11px] tracking-wide text-[#6B6B6F] mb-6">
                  {room.features.join("  ·  ")}
                </p>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-5 border-t border-[#E5E3DD]">
                  <span className="text-[#16161A] text-sm">{room.price}</span>
                  <Link
                    href={`/rooms#${room.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-[11px] tracking-[0.15em] uppercase text-[#96784A] hover:text-[#16161A] transition-colors duration-200"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Rooms */}
        <div className="text-center mt-14">
          <Link
            href="/rooms"
            className="inline-block border border-[#16161A] hover:bg-[#16161A] hover:text-white text-[#16161A] text-xs tracking-[0.15em] uppercase px-9 py-3.5 transition-all duration-300"
          >
            View All Rooms
          </Link>
        </div>
      </div>
    </section>
  );
}
