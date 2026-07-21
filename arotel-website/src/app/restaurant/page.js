import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata = {
  title: "Restaurant | Arotel",
  description:
    "Dine at Arotel's award-winning restaurant. Fine dining with international and local cuisine by our executive chef.",
};

const menuHighlights = {
  Breakfast: [
    { name: "Classic Continental", desc: "Freshly baked pastries, fruit, yogurt, and juices" },
    { name: "The Arotel Full Breakfast", desc: "Eggs your way, premium meats, grilled tomatoes" },
    { name: "Avocado Toast Royale", desc: "Sourdough, smashed avocado, poached egg, truffle oil" },
    { name: "Açaí Power Bowl", desc: "Organic açaí, granola, seasonal berries, honey" },
  ],
  Lunch: [
    { name: "Pan-Seared Sea Bass", desc: "Lemon butter sauce, asparagus, saffron risotto" },
    { name: "Prime Beef Burger", desc: "200g wagyu patty, aged cheddar, truffle mayo" },
    { name: "Mediterranean Salad", desc: "Quinoa, feta, olives, sun-dried tomatoes, herbs" },
    { name: "Pasta del Giorno", desc: "Chef's daily pasta creation with seasonal ingredients" },
  ],
  Dinner: [
    { name: "Grilled Tenderloin", desc: "220g beef tenderloin, red wine jus, truffle mash" },
    { name: "Lobster Thermidor", desc: "Whole lobster, classic Thermidor sauce, sautéed greens" },
    { name: "Duck Confit", desc: "Crispy duck leg, cherry reduction, roasted vegetables" },
    { name: "Vegetarian Tasting", desc: "A curated 4-course vegetarian experience" },
  ],
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
            Fine Dining
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
              A Culinary Journey
            </h2>
            <p className="text-[#6B6B6F] leading-relaxed text-sm mb-4">
              Our restaurant invites you on a gastronomic journey through
              international flavors, masterfully crafted by our executive chef
              using the finest seasonal and locally-sourced ingredients.
            </p>
            <p className="text-[#6B6B6F] leading-relaxed text-sm">
              Whether you&apos;re joining us for an intimate breakfast, a
              business lunch, or a romantic candlelit dinner, our dining
              room provides the perfect setting for every occasion.
            </p>

            {/* Hours */}
            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E3DD]">
              {[
                { meal: "Breakfast", hours: "7:00 AM – 10:30 AM" },
                { meal: "Lunch", hours: "12:00 PM – 3:00 PM" },
                { meal: "Dinner", hours: "6:30 PM – 11:00 PM" },
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

        {/* Menu Highlights */}
        <section className="py-24 px-6 bg-[#16161A]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="label mb-3">Menu Highlights</p>
              <h2
                className="text-3xl md:text-4xl font-normal text-white"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Taste the Extraordinary
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {Object.entries(menuHighlights).map(([course, items]) => (
                <div key={course}>
                  <h3 className="text-white text-sm tracking-[0.15em] uppercase mb-6 pb-3 border-b border-white/10">
                    {course}
                  </h3>
                  <div className="space-y-5">
                    {items.map((item) => (
                      <div key={item.name}>
                        <p className="text-white text-sm mb-1">
                          {item.name}
                        </p>
                        <p className="text-white/40 text-xs leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reservation CTA */}
        <section className="py-24 md:py-32 px-6 text-center">
          <div className="max-w-xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-normal text-[#16161A] mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Reserve Your Table
            </h2>
            <p className="text-[#6B6B6F] mb-10 leading-relaxed text-sm">
              For dinner reservations or private dining events, please contact
              our restaurant team. We recommend booking in advance to guarantee
              your preferred time.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="bg-[#16161A] hover:bg-black text-white text-xs tracking-[0.15em] uppercase px-9 py-3.5 transition-all duration-300"
              >
                Make a Reservation
              </Link>
              <a
                href="https://wa.me/15551234567"
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
