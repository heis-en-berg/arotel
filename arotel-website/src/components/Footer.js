import Link from "next/link";

const footerLinks = {
  Hotel: [
    { label: "About Us", href: "/about" },
    { label: "Rooms & Suites", href: "/rooms" },
    { label: "Restaurant", href: "/restaurant" },
    { label: "Amenities", href: "/amenities" },
    { label: "Gallery", href: "/gallery" },
  ],
  "Guest Services": [
    { label: "Book Now", href: "/book" },
    { label: "Contact Us", href: "/contact" },
    { label: "FAQ", href: "/#faq" },
    { label: "Cancellation Policy", href: "/contact#policies" },
    { label: "Special Offers", href: "/rooms#offers" },
  ],
  "Quick Links": [
    {
      label: "Booking.com",
      href: "https://booking.com",
      external: true,
    },
    {
      label: "Airbnb",
      href: "https://airbnb.com",
      external: true,
    },
    {
      label: "TripAdvisor",
      href: "https://tripadvisor.com",
      external: true,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#16161A] text-white">
      {/* CTA Row */}
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-16 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/10">
        <h2
          className="text-2xl md:text-3xl font-normal text-center md:text-left"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Ready for an unforgettable stay?
        </h2>
        <Link
          href="/book"
          className="border border-white/60 hover:bg-white hover:text-[#16161A] text-white text-xs tracking-[0.15em] uppercase px-9 py-3.5 transition-all duration-300 flex-shrink-0"
        >
          Book Your Stay
        </Link>
      </div>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <h3
              className="text-lg tracking-[0.25em] font-normal mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              AROTEL
            </h3>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              A quiet, considered luxury in the heart of the city.
            </p>

            {/* Contact Info */}
            <div className="space-y-1.5 text-sm text-white/50">
              <p>1/338, Calangute, Gauravaddo, Goa, 403516</p>
              <p>+91 7385137554</p>
              <p>arotelroomsandsuites@gmail.com</p>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs tracking-[0.15em] uppercase text-white/40 mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>© {new Date().getFullYear()} Arotel Rooms & Suites. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
