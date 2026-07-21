import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata = {
  title: "Restaurant | Arotel",
  description:
    "Dine at Arotel's award-winning restaurant. Fine dining with international and local cuisine by our executive chef.",
};

export default function RestaurantPage() {
  return (
    <>
      <Navbar />

      {/* Page Hero */}
      <div className="relative h-72 md:h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/property/restaurant-dining.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-[11px] tracking-[0.35em] uppercase text-white/70 mb-3">
            Restaurant
          </p>
          <h1
            className="text-4xl md:text-5xl font-normal"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our Restaurant
          </h1>
        </div>
      </div>

      <main className="bg-[#FAFAF9]">
        {/* Intro */}
        <section className="py-24 md:py-32 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl font-normal text-[#16161A] mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Good Food, Simply Made
            </h2>
            <p className="text-[#6B6B6F] leading-relaxed text-sm mb-4">
              At Arotel, we keep things simple — a relaxed stay comes first,
              and good food follows. Our kitchen serves honest, tasty meals
              made with fresh ingredients, without the fuss.
            </p>
            <p className="text-[#6B6B6F] leading-relaxed text-sm">
              We&apos;re especially proud of our breakfast buffet, a great way
              to start your day in Goa before you head out to explore, and we
              serve a à la carte menu throughout the day for whenever
              you get hungry.
            </p>

            {/* Hours */}
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E5E3DD]">
              {[
                { meal: "Breakfast Buffet", hours: "9:00 AM – 10:30 AM" },
                { meal: "À La Carte", hours: "9:00 AM – 9:00 PM" },
              ].map((item) => (
                <div key={item.meal} className="bg-[#FAFAF9] p-6">
                  <p className="text-[11px] text-[#96784A] tracking-[0.2em] uppercase mb-2">
                    {item.meal}
                  </p>
                  <p
                    className="text-[#16161A] text-base"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {item.hours}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reservation CTA */}
        <section className="py-24 md:py-8 px-6 text-center">
          <div className="max-w-xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-normal text-[#16161A] mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Join Us for a Meal
            </h2>
            <p className="text-[#6B6B6F] mb-10 leading-relaxed text-sm">
              Have a question about our menu or want to plan something for a
              group? Reach out to our team and we&apos;ll be happy to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="bg-[#16161A] hover:bg-black text-white text-xs tracking-[0.15em] uppercase px-9 py-3.5 transition-all duration-300"
              >
                Make a Reservation
              </Link>
              <a
                href="https://wa.me/917385137554"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#16161A] hover:bg-[#16161A] hover:text-white text-[#16161A] text-xs tracking-[0.15em] uppercase px-9 py-3.5 transition-all duration-300"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
