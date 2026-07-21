"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What time is check-in and check-out?",
    answer:
      "Check-in is from 3:00 PM and check-out is until 12:00 PM (noon). Early check-in and late check-out may be available upon request, subject to availability.",
  },
  {
    question: "Is breakfast included in the room rate?",
    answer:
      "Breakfast is included in select room packages. Please check your booking details. Alternatively, our restaurant offers a lavish breakfast buffet from 7:00 AM to 10:30 AM daily.",
  },
  {
    question: "Do you have a swimming pool?",
    answer:
      "Yes! We have a stunning rooftop infinity pool with panoramic views, open daily from 7:00 AM to 10:00 PM. The pool is exclusively for hotel guests.",
  },
  {
    question: "Is parking available at the hotel?",
    answer:
      "Yes, we offer complimentary valet parking for all hotel guests. Self-parking is also available in our secure underground garage.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Free cancellation is available up to 48 hours before arrival. Cancellations within 48 hours or no-shows may be subject to a one-night charge. Please review your booking terms for details.",
  },
  {
    question: "Do you allow pets?",
    answer:
      "We welcome small pets (under 10kg) in designated pet-friendly rooms. Please inform us when booking. An additional pet fee applies.",
  },
  {
    question: "Is there an airport transfer service?",
    answer:
      "Yes, we offer private airport transfers. Please contact our concierge team at least 24 hours in advance to arrange pickup. Charges may apply.",
  },
  {
    question: "How can I book a room?",
    answer:
      "You can book directly through our website, call our reservations team, or book via Booking.com or Airbnb. Direct bookings offer the best rates and exclusive perks.",
  },
];

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full py-5 flex items-center justify-between text-left group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-[#16161A] group-hover:text-[#96784A] transition-colors duration-200 pr-8 text-sm">
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-5 h-5 border border-[#96784A] text-[#96784A] flex items-center justify-center text-xs transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-[#6B6B6F] leading-relaxed text-sm">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-24 md:py-32 px-6 bg-[#F3F1EC]">
      <div className="max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="label mb-3">Got Questions?</p>
          <h2
            className="text-3xl md:text-4xl font-normal text-[#16161A]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div>
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-8 text-[#6B6B6F] text-sm">
          Still have questions?{" "}
          <a href="/contact" className="text-[#96784A] hover:underline">
            Contact our team
          </a>
        </div>
      </div>
    </section>
  );
}
