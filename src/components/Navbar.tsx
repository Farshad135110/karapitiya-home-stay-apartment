"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Mail, MessageCircle } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#properties", label: t.nav.properties },
    { href: "#about", label: t.nav.about },
    { href: "#facilities", label: t.nav.facilities },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#things-to-do", label: t.nav.thingsToDo },
    { href: "#reviews", label: t.nav.reviews },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-3" : "bg-transparent py-5"
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-[100vw] w-full px-2 sm:px-4 md:px-6 lg:px-8 mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-y-2 md:gap-y-0">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 group min-w-0">
            <img
              src="https://res.cloudinary.com/dokpye7fu/image/upload/v1769532272/a-modern-logo-design-featuring-the-elega_FIS1hqn2Q3O9NVIE91Pddw_df5pGb6SRIyiymvL62iPGA_ygq8sx.jpg"
              alt="RnR Private Residence Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-lg bg-white shadow-lg group-hover:scale-110 transition-transform"
            />
            <div className="hidden xs:block min-w-0">
              <h1
                className={`font-bold text-base sm:text-lg truncate leading-tight ${isScrolled ? "text-gray-800" : "text-white"}`}
              >
                RnR Private Residence
              </h1>
              <p
                className={`text-xs ${isScrolled ? "text-gray-600" : "text-gray-200"}`}
              >
                {t.nav.subtitle}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-6 flex-wrap">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium px-2 py-1 rounded-md transition-colors hover:text-accent-500 hover:bg-accent-50/30 ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="ml-2">
              <LanguageSwitcher />
            </div>
            <a
              href="https://www.airbnb.com/h/rnrfamily"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 bg-gradient-to-r from-accent-500 to-accent-600 text-white px-4 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all whitespace-nowrap"
            >
              {t.hero.cta}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg ${
              isScrolled ? "text-gray-800" : "text-white"
            } focus:outline-none focus:ring-2 focus:ring-accent-400`}
            aria-label={
              isMobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen
              ? "max-h-[600px] opacity-100 mt-2"
              : "max-h-0 opacity-0"
          }`}
          style={{
            transitionProperty: "max-height, opacity",
          }}
          role="menu"
          aria-label="Mobile navigation menu"
        >
          <div className="flex flex-col gap-2 bg-white/90 rounded-2xl shadow-xl py-4 px-4 mt-2 backdrop-blur-md">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 px-3 rounded-lg font-medium text-gray-800 hover:bg-accent-100 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="py-2">
              <LanguageSwitcher />
            </div>
            <a
              href="https://www.airbnb.com/h/rnrfamily"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-center bg-gradient-to-r from-accent-500 to-accent-600 text-white px-6 py-2.5 rounded-full font-semibold mt-2"
            >
              {t.hero.cta}
            </a>
          </div>
        </div>
      </div>

      {/* Floating Contact Buttons - Right Side */}
      <div className="fixed right-3 sm:right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-3 sm:space-y-4">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/94759597703"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative bg-[#25D366] hover:bg-[#1fb855] text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all"
          aria-label="Contact via WhatsApp"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm font-medium px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap">
            WhatsApp
          </span>
        </a>

        {/* Email Button */}
        <a
          href="mailto:rnr.residance@gmail.com"
          className="group relative bg-blue-500 hover:bg-blue-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all"
          aria-label="Send Email"
        >
          <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm font-medium px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap">
            Email Us
          </span>
        </a>
      </div>
    </nav>
  );
}
