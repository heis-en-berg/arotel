"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, integrate with a form service (e.g. Formspree, Resend)
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />

      {/* Page Hero */}
      <div className="relative h-72 md:h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-[11px] tracking-[0.35em] uppercase text-white/70 mb-3">
            Get in Touch
          </p>
          <h1
            className="text-4xl md:text-5xl font-normal"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Contact Us
          </h1>
        </div>
      </div>

      <main className="bg-[#FAFAF9] py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <p className="label mb-4">Reach Us</p>
              <h2
                className="text-3xl md:text-4xl font-normal text-[#16161A] mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                We&apos;re Here for You
              </h2>
              <p className="text-[#6B6B6F] leading-relaxed mb-10 text-sm">
                Whether you have a special request, need help with a booking, or
                simply want to learn more about what Arotel has to offer — our
                team is always ready to assist.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Address",
                    info: "123 Luxury Avenue, City Center, Your City",
                  },
                  {
                    title: "Phone",
                    info: "+1 (555) 123-4567",
                  },
                  {
                    title: "Email",
                    info: "info@arotel.net",
                  },
                  {
                    title: "Reservations",
                    info: "Available 24/7",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-6 pb-5 border-b border-[#E5E3DD]">
                    <p className="text-[11px] tracking-[0.15em] uppercase text-[#96784A] w-28 flex-shrink-0">
                      {item.title}
                    </p>
                    <p className="text-[#16161A] text-sm">{item.info}</p>
                  </div>
                ))}
              </div>

              {/* Google Maps Embed (placeholder) */}
              <div className="mt-10 bg-[#F3F1EC] h-48 flex items-center justify-center text-[#6B6B6F] text-sm text-center">
                <span>
                  Google Maps will be embedded here
                  <br />
                  (Add your API key and coordinates)
                </span>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#F3F1EC] p-8 md:p-10">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <h3
                    className="text-2xl font-normal text-[#16161A] mb-3"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Message Sent
                  </h3>
                  <p className="text-[#6B6B6F] text-sm">
                    Thank you for reaching out. Our team will get back to you
                    within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3
                    className="text-xl font-normal text-[#16161A] mb-6"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Send Us a Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] tracking-[0.15em] uppercase text-[#6B6B6F] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-[#E5E3DD] bg-[#FAFAF9] px-4 py-3 text-sm focus:outline-none focus:border-[#96784A] transition-colors duration-200"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] tracking-[0.15em] uppercase text-[#6B6B6F] mb-1.5">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-[#E5E3DD] bg-[#FAFAF9] px-4 py-3 text-sm focus:outline-none focus:border-[#96784A] transition-colors duration-200"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] tracking-[0.15em] uppercase text-[#6B6B6F] mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-[#E5E3DD] bg-[#FAFAF9] px-4 py-3 text-sm focus:outline-none focus:border-[#96784A] transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] tracking-[0.15em] uppercase text-[#6B6B6F] mb-1.5">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full border border-[#E5E3DD] bg-[#FAFAF9] px-4 py-3 text-sm focus:outline-none focus:border-[#96784A] transition-colors duration-200"
                    >
                      <option>General Inquiry</option>
                      <option>Room Reservation</option>
                      <option>Restaurant Reservation</option>
                      <option>Special Occasion</option>
                      <option>Group Booking</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] tracking-[0.15em] uppercase text-[#6B6B6F] mb-1.5">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full border border-[#E5E3DD] bg-[#FAFAF9] px-4 py-3 text-sm focus:outline-none focus:border-[#96784A] transition-colors duration-200 resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#16161A] hover:bg-black text-white text-xs tracking-[0.15em] uppercase py-4 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
