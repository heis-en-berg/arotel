"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Rooms", href: "/rooms" },
  { label: "Restaurant", href: "/restaurant" },
  { label: "Gallery", href: "/gallery" },
  { label: "Amenities", href: "/amenities" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAFAF9]/95 backdrop-blur-md border-b border-[#E5E3DD]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span
            className={`text-xl tracking-[0.25em] font-normal transition-colors duration-300 ${
              scrolled ? "text-[#16161A]" : "text-white"
            }`}
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            AROTEL
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-xs tracking-[0.15em] uppercase transition-colors duration-200 ${
                  scrolled
                    ? "text-[#6B6B6F] hover:text-[#16161A]"
                    : "text-white/75 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Book Now Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/book"
            className={`text-xs tracking-[0.15em] uppercase px-6 py-2.5 border transition-colors duration-300 ${
              scrolled
                ? "border-[#16161A] text-[#16161A] hover:bg-[#16161A] hover:text-white"
                : "border-white/70 text-white hover:bg-white hover:text-[#16161A]"
            }`}
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 space-y-1.5">
            <span
              className={`block h-px transition-transform duration-300 ${
                scrolled || menuOpen ? "bg-[#16161A]" : "bg-white"
              } ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
            />
            <span
              className={`block h-px transition-opacity duration-300 ${
                scrolled || menuOpen ? "bg-[#16161A]" : "bg-white"
              } ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px transition-transform duration-300 ${
                scrolled || menuOpen ? "bg-[#16161A]" : "bg-white"
              } ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-[#FAFAF9] border-t border-[#E5E3DD] transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-screen py-2" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block text-[#16161A]/80 hover:text-[#96784A] py-3 text-xs tracking-[0.15em] uppercase border-b border-[#E5E3DD] transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="py-4">
            <Link
              href="/book"
              className="block text-center border border-[#16161A] text-[#16161A] text-xs tracking-[0.15em] uppercase px-6 py-3 transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Book Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
