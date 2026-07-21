"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

const rooms = [
  { name: "Deluxe Room", price: 150 },
  { name: "Superior Suite", price: 280 },
  { name: "Presidential Suite", price: 550 },
  { name: "Family Room", price: 220 },
];

export default function BookPage() {
  const today = new Date().toISOString().split("T")[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    room: "Deluxe Room",
    checkIn: today,
    checkOut: tomorrow,
    guests: "1",
    name: "",
    email: "",
    phone: "",
    requests: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const selectedRoom = rooms.find((r) => r.name === formData.room);
  const nights =
    formData.checkIn && formData.checkOut
      ? Math.max(
          1,
          Math.ceil(
            (new Date(formData.checkOut) - new Date(formData.checkIn)) /
              86400000
          )
        )
      : 1;
  const total = selectedRoom ? selectedRoom.price * nights : 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />

      {/* Page Hero */}
      <div className="relative h-72 flex items-center justify-center bg-[#16161A]">
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-[11px] tracking-[0.35em] uppercase text-white/70 mb-3">
            Reservations
          </p>
          <h1
            className="text-4xl md:text-5xl font-normal"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Book Your Stay
          </h1>
        </div>
      </div>

      <main className="bg-[#FAFAF9] py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          {submitted ? (
            <div className="bg-[#F3F1EC] p-12 text-center max-w-xl mx-auto">
              <h2
                className="text-3xl font-normal text-[#16161A] mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Booking Request Received
              </h2>
              <p className="text-[#6B6B6F] mb-2 leading-relaxed text-sm">
                Thank you, <strong>{formData.name}</strong>! Your booking
                request for the <strong>{formData.room}</strong> has been
                received.
              </p>
              <p className="text-[#6B6B6F] mb-6 leading-relaxed text-sm">
                Our reservations team will contact you at{" "}
                <strong>{formData.email}</strong> within 2 hours to confirm
                your booking.
              </p>
              <div className="bg-[#FAFAF9] p-4 mb-6 text-sm text-left space-y-1">
                <p>
                  <span className="text-[#96784A]">Check-in:</span>{" "}
                  {formData.checkIn}
                </p>
                <p>
                  <span className="text-[#96784A]">Check-out:</span>{" "}
                  {formData.checkOut}
                </p>
                <p>
                  <span className="text-[#96784A]">Estimated total:</span> $
                  {total.toLocaleString()}
                </p>
              </div>
              <Link
                href="/"
                className="inline-block bg-[#16161A] hover:bg-black text-white text-xs tracking-[0.15em] uppercase px-8 py-3.5 transition-all duration-300"
              >
                Return Home
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Booking Form */}
              <div className="lg:col-span-2 bg-[#F3F1EC] p-8">
                <h2
                  className="text-2xl font-normal text-[#16161A] mb-6"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Your Reservation Details
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-[11px] tracking-[0.15em] uppercase text-[#6B6B6F] mb-1.5">
                      Room Type
                    </label>
                    <select
                      name="room"
                      value={formData.room}
                      onChange={handleChange}
                      className="w-full border border-[#E5E3DD] px-4 py-3 text-sm focus:outline-none focus:border-[#96784A] bg-[#FAFAF9]"
                    >
                      {rooms.map((r) => (
                        <option key={r.name}>{r.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] tracking-[0.15em] uppercase text-[#6B6B6F] mb-1.5">
                        Check-In
                      </label>
                      <input
                        type="date"
                        name="checkIn"
                        required
                        min={today}
                        value={formData.checkIn}
                        onChange={handleChange}
                        className="w-full border border-[#E5E3DD] px-4 py-3 text-sm focus:outline-none focus:border-[#96784A] bg-[#FAFAF9]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] tracking-[0.15em] uppercase text-[#6B6B6F] mb-1.5">
                        Check-Out
                      </label>
                      <input
                        type="date"
                        name="checkOut"
                        required
                        min={formData.checkIn || tomorrow}
                        value={formData.checkOut}
                        onChange={handleChange}
                        className="w-full border border-[#E5E3DD] px-4 py-3 text-sm focus:outline-none focus:border-[#96784A] bg-[#FAFAF9]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] tracking-[0.15em] uppercase text-[#6B6B6F] mb-1.5">
                      Number of Guests
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full border border-[#E5E3DD] px-4 py-3 text-sm focus:outline-none focus:border-[#96784A] bg-[#FAFAF9]"
                    >
                      {["1", "2", "3", "4"].map((n) => (
                        <option key={n}>{n}</option>
                      ))}
                    </select>
                  </div>

                  <hr className="border-[#E5E3DD]" />

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
                        className="w-full border border-[#E5E3DD] px-4 py-3 text-sm focus:outline-none focus:border-[#96784A] bg-[#FAFAF9]"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] tracking-[0.15em] uppercase text-[#6B6B6F] mb-1.5">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-[#E5E3DD] px-4 py-3 text-sm focus:outline-none focus:border-[#96784A] bg-[#FAFAF9]"
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
                      className="w-full border border-[#E5E3DD] px-4 py-3 text-sm focus:outline-none focus:border-[#96784A] bg-[#FAFAF9]"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] tracking-[0.15em] uppercase text-[#6B6B6F] mb-1.5">
                      Special Requests
                    </label>
                    <textarea
                      name="requests"
                      rows={3}
                      value={formData.requests}
                      onChange={handleChange}
                      className="w-full border border-[#E5E3DD] px-4 py-3 text-sm focus:outline-none focus:border-[#96784A] bg-[#FAFAF9] resize-none"
                      placeholder="Any special requests or preferences?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#16161A] hover:bg-black text-white text-xs tracking-[0.15em] uppercase py-4 transition-all duration-300"
                  >
                    Confirm Reservation
                  </button>
                </form>
              </div>

              {/* Booking Summary */}
              <div className="bg-[#16161A] text-white p-8 h-fit">
                <h3
                  className="text-lg font-normal mb-6"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Booking Summary
                </h3>

                <div className="space-y-4 text-sm mb-6">
                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-white/60">Room</span>
                    <span>{formData.room}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-white/60">Check-in</span>
                    <span>{formData.checkIn}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-white/60">Check-out</span>
                    <span>{formData.checkOut}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-white/60">Nights</span>
                    <span>{nights}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-white/60">Guests</span>
                    <span>{formData.guests}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-white/60">Rate/night</span>
                    <span>${selectedRoom?.price}</span>
                  </div>
                </div>

                <div className="flex justify-between text-lg">
                  <span className="text-white/70">Estimated Total</span>
                  <span>${total.toLocaleString()}</span>
                </div>

                <p className="text-white/40 text-xs mt-4 leading-relaxed">
                  Final pricing confirmed upon booking. Taxes and fees may
                  apply.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
