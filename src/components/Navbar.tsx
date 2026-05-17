"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/projects", label: "Our Projects" },
  { href: "/impact", label: "Impact" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#003087] shadow-2xl py-2"
          : "bg-[#003087]/95 backdrop-blur-md py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative w-10 h-10 flex-shrink-0">
              <Image
                src="/logo.svg"
                alt="Daryeel Logo"
                width={40}
                height={40}
                className="rounded-full ring-2 ring-[#F2A900]/60 group-hover:ring-[#F2A900] transition-all duration-300"
              />
            </div>
            <div className="hidden sm:block">
              <span className="block text-white font-bold text-base leading-tight tracking-wide">
                Daryeel
              </span>
              <span className="block text-[#F2A900] text-[10px] font-semibold tracking-widest uppercase leading-tight">
                Rural Development For Action
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex flex-1 items-center justify-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link whitespace-nowrap px-3 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? "text-[#F2A900] font-semibold"
                    : "text-white/90 hover:text-[#F2A900]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href="/get-involved#donate"
              className="hidden xl:inline-flex items-center gap-2 bg-[#F2A900] text-[#003087] font-bold text-sm px-5 py-2.5 rounded-full hover:bg-[#ffc333] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
              Donate Now
            </Link>
            <button
              id="mobile-menu-button"
              onClick={() => setMenuOpen((v) => !v)}
              className="xl:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`block h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
                />
                <span
                  className={`block h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`block h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`xl:hidden mobile-menu ${menuOpen ? "open" : ""}`}>
          <nav className="pt-4 pb-3 space-y-1 border-t border-white/10 mt-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? "bg-[#F2A900]/20 text-[#F2A900]"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/get-involved#donate"
              className="block mt-3 text-center bg-[#F2A900] text-[#003087] font-bold py-3 px-4 rounded-xl hover:bg-[#ffc333] transition-colors"
            >
              ❤️ Donate Now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
