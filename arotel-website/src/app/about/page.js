import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "About Us | Arotel",
  description:
    "Learn about Arotel Rooms & Suites — our story, our values, and our commitment to luxury hospitality.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Page Hero */}
      <div className="relative h-72 md:h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/property/exterior-aerial-2.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-[11px] tracking-[0.35em] uppercase text-white/70 mb-3">
            Our Story
          </p>
          <h1
            className="text-4xl md:text-5xl font-normal"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            About Arotel
          </h1>
        </div>
      </div>

      <main className="bg-[#FAFAF9]">
        {/* Story Section */}
        <section className="py-24 md:py-32 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="label mb-4">Est. 2013</p>
              <h2
                className="text-3xl md:text-4xl font-normal text-[#16161A] mb-6 leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                A Decade of Defining
                <span className="block text-[#96784A]">Luxury Hospitality</span>
              </h2>
              <div className="space-y-4 text-[#6B6B6F] leading-relaxed text-sm">
                <p>
                  Founded in 2013, Arotel Rooms & Suites was born from a vision
                  to create a sanctuary where every guest feels like royalty.
                  Our founders believed that true luxury is not just about
                  opulent surroundings — it&apos;s about the warmth of genuine
                  human connection and meticulous attention to detail.
                </p>
                <p>
                  Over the past decade, we have welcomed guests from over 80
                  countries, built a team of passionate hospitality
                  professionals, and continuously raised the bar for what a
                  luxury hotel experience can be.
                </p>
                <p>
                  Today, Arotel stands as a benchmark of excellence in the
                  region — an award-winning property celebrated not only for its
                  stunning accommodations and world-class dining, but for the
                  unforgettable memories we help create every single day.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/property/exterior-aerial-1.jpg"
                alt="Arotel Hotel"
                className="w-full h-96 object-cover"
              />
              <div className="absolute -bottom-4 -left-4 bg-[#16161A] p-6 hidden md:block">
                <p
                  className="text-white text-3xl font-normal"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  10+
                </p>
                <p className="text-white/60 text-[11px] tracking-[0.15em] uppercase">
                  Years of Excellence
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 md:py-32 px-6 bg-[#16161A]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="label mb-3">Our Philosophy</p>
              <h2
                className="text-3xl md:text-4xl font-normal text-white"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Our Core Values
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
              {[
                {
                  title: "Excellence",
                  icon: "✨",
                  desc: "We pursue perfection in every detail, from the thread count of our linens to the precision of our service.",
                },
                {
                  title: "Warmth",
                  icon: "🤝",
                  desc: "We believe luxury is felt in genuine human connection. Every guest is welcomed as a cherished friend.",
                },
                {
                  title: "Sustainability",
                  icon: "🌿",
                  desc: "We are committed to responsible hospitality — protecting the environment while maintaining the highest standards.",
                },
              ].map((value) => (
                <div key={value.title} className="text-center p-8 bg-[#16161A]">
                  <div className="text-2xl mb-4 opacity-80">{value.icon}</div>
                  <h3
                    className="text-white text-lg font-normal mb-3"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
