const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "New York, USA",
    rating: 5,
    review:
      "Absolutely magnificent! The Presidential Suite exceeded every expectation. The views are breathtaking, the staff is impeccably attentive, and the dining experience was world-class. Arotel has set a new benchmark for luxury.",
    avatar: "SM",
    stay: "Presidential Suite",
  },
  {
    name: "James & Emma Chen",
    location: "London, UK",
    rating: 5,
    review:
      "We celebrated our anniversary here and it was truly magical. The room was stunning, the spa was heavenly, and every single staff member made us feel like royalty. We will absolutely return.",
    avatar: "JC",
    stay: "Two Bedroom Suite with Pool Facing Balcony",
  },
  {
    name: "Ahmed Al-Rashid",
    location: "Dubai, UAE",
    rating: 5,
    review:
      "Having stayed at many 5-star hotels worldwide, Arotel stands out for its genuine warmth and impeccable service. The infinity pool at sunset is an experience I will never forget.",
    avatar: "AR",
    stay: "Two Bedroom Apartment with Pool Facing Balcony",
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-3.5 h-3.5 ${i < rating ? "text-[#96784A]" : "text-[#E5E3DD]"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 px-6 bg-[#FAFAF9]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="label mb-3">Guest Reviews</p>
          <h2
            className="text-3xl md:text-4xl font-normal text-[#16161A]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            What Our Guests Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E3DD]">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-[#FAFAF9] p-8">
              <StarRating rating={t.rating} />

              <p className="text-[#16161A]/70 leading-relaxed mb-6 text-sm">
                &ldquo;{t.review}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-5 border-t border-[#E5E3DD]">
                {/* Avatar */}
                <div className="w-9 h-9 rounded-full bg-[#16161A] flex items-center justify-center text-white text-xs flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-[#16161A] text-sm">{t.name}</p>
                  <p className="text-[#6B6B6F] text-xs">
                    {t.location} · {t.stay}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-[#E5E3DD]">
          {[
            { number: "5,000+", label: "Happy Guests" },
            { number: "4.9/5", label: "Average Rating" },
            { number: "15+", label: "Room Types" },
            { number: "10+", label: "Years of Excellence" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-2xl md:text-3xl font-normal text-[#16161A] mb-1"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {stat.number}
              </p>
              <p className="text-[11px] text-[#6B6B6F] tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
