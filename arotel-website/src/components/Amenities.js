const amenities = [
  {
    icon: "🏊",
    title: "Infinity Pool",
    description: "Stunning rooftop infinity pool with panoramic views",
  },
  {
    icon: "🍽️",
    title: "Fine Dining",
    description: "Award-winning restaurant with international cuisine",
  },
  {
    icon: "💆",
    title: "Luxury Spa",
    description: "Full-service spa offering rejuvenating treatments",
  },
  {
    icon: "🏋️",
    title: "Fitness Center",
    description: "State-of-the-art gym open 24 hours a day",
  },
  {
    icon: "🚗",
    title: "Valet Parking",
    description: "Complimentary valet parking for all guests",
  },
  {
    icon: "📶",
    title: "High-Speed WiFi",
    description: "Complimentary high-speed internet throughout",
  },
  {
    icon: "🛎️",
    title: "24/7 Concierge",
    description: "Personalized concierge service around the clock",
  },
  {
    icon: "✈️",
    title: "Airport Transfer",
    description: "Private airport transfers on request",
  },
];

export default function Amenities() {
  return (
    <section className="py-24 md:py-32 px-6 bg-[#16161A]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="label mb-3">Hotel Facilities</p>
          <h2
            className="text-3xl md:text-4xl font-normal text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Amenities
          </h2>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {amenities.map((item) => (
            <div key={item.title} className="text-center">
              <div className="text-2xl mb-4 opacity-80">{item.icon}</div>
              <h3 className="text-white text-sm tracking-wide mb-2">
                {item.title}
              </h3>
              <p className="text-white/40 text-xs leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
