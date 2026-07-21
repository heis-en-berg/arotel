import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RoomCards from "@/components/RoomCards";
import Amenities from "@/components/Amenities";
import RestaurantSection from "@/components/RestaurantSection";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Arotel Rooms & Suites | Luxury Hotel",
  description:
    "Experience unparalleled luxury at Arotel Rooms & Suites. Premium rooms, fine dining, infinity pool, spa and more.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <RoomCards />
        <Amenities />
        <RestaurantSection />
        <Gallery />
        <Testimonials />
        <section id="faq">
          <FAQ />
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
