import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "About Us | Arotel",
  description:
    "Learn about Arotel Rooms & Suites — our story, our values, and our commitment to luxury hospitality.",
};

const teamMembers = [
  {
    name: "James Harrington",
    role: "General Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Sophie Laurent",
    role: "Executive Chef",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
  {
    name: "Marcus Chen",
    role: "Head of Guest Experience",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Amara Okafor",
    role: "Spa Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
];

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
              "url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=80')",
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
              <p className="label mb-4">Est. 2014</p>
              <h2
                className="text-3xl md:text-4xl font-normal text-[#16161A] mb-6 leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                A Decade of Defining
                <span className="block text-[#96784A]">Luxury Hospitality</span>
              </h2>
              <div className="space-y-4 text-[#6B6B6F] leading-relaxed text-sm">
                <p>
                  Founded in 2014, Arotel Rooms & Suites was born from a vision
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
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=80"
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

        {/* Team */}
        <section className="py-24 md:py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="label mb-3">Our People</p>
              <h2
                className="text-3xl md:text-4xl font-normal text-[#16161A]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Meet the Leadership Team
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div key={member.name} className="group text-center">
                  <div className="relative overflow-hidden mb-4 h-64">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3
                    className="text-[#16161A] text-base font-normal"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-[#96784A] text-[11px] tracking-[0.15em] uppercase mt-1">
                    {member.role}
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
