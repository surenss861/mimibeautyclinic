"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, MapPin, CheckCircle, PenTool } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const topBarLinks = [
  { icon: Phone, text: "(647) 366-MIMI", href: "tel:6473666464" },
  { icon: MapPin, text: "FIND A LOCATION", href: "#location" },
  { icon: CheckCircle, text: "PAYMENT PLANS AT 0%", href: "#financing" },
  { icon: PenTool, text: "SKINCARE QUIZ - FIND YOUR FACIAL!", href: "/quiz" },
];

const mainNavLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  {
    label: "SERVICES",
    href: "/services",
    submenu: [
      { label: "Anti-Wrinkle Injections", href: "/services/botox" },
      { label: "Dermal Fillers", href: "/services/fillers" },
      { label: "Laser Hair Removal", href: "/services/laser-hair-removal" },
      { label: "Morpheus8", href: "/services/morpheus8" },
      { label: "PRP & Microneedling", href: "/services/microneedling" },
      { label: "Laser Facial Treatments", href: "/services/laser-facials" },
      { label: "View All Services", href: "/services" },
    ],
  },
  {
    label: "OFFERS",
    href: "/promos",
    submenu: [
      { label: "Weekly Offers", href: "/promos#weekly" },
      { label: "Monthly Promos", href: "/promos#monthly" },
      { label: "Membership Plans", href: "/promos#membership" },
      { label: "Shop Products", href: "/shop" },
    ],
  },
  { label: "BLOG", href: "/blog" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBookNow = () => {
    window.open("https://www.vagaro.com/mimibeautyclinics", "_blank");
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-500 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              {topBarLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={idx}
                    href={link.href}
                    className="flex items-center gap-2 hover:text-primary-100 transition-colors"
                  >
                    <Icon size={16} />
                    <span>{link.text}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-champagne-50 shadow-md"
            : "bg-champagne-50"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900 font-serif">
                  MIMI
                </span>
                <span className="text-xs text-gray-600 tracking-wider">
                  BEAUTY CLINICS
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {mainNavLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() =>
                    link.submenu && setActiveSubmenu(link.label)
                  }
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors uppercase tracking-wide"
                  >
                    {link.label}
                  </Link>
                  {link.submenu && (
                    <AnimatePresence>
                      {activeSubmenu === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-champagne-50 rounded-lg shadow-xl py-4 border border-stone-200/50"
                        >
                          {link.submenu.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="block px-6 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* Sophisticated Book Now Button - Desktop */}
            <button
              onClick={handleBookNow}
              className="hidden lg:block bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/30 hover:shadow-xl hover:shadow-primary-600/40 hover:scale-105 min-h-[44px] touch-manipulation"
            >
              Book Now
            </button>
            
            {/* Mobile Book Now Button */}
            <button
              onClick={handleBookNow}
              className="lg:hidden bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/30 min-h-[44px] min-w-[44px] touch-manipulation"
              aria-label="Book Now"
            >
              Book
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-700 p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-champagne-50 border-t border-stone-200"
            >
              <nav className="container mx-auto px-4 py-6 space-y-4">
                {mainNavLinks.map((link) => (
                  <div key={link.label}>
                    <Link
                      href={link.href}
                      className="block py-2 text-gray-700 font-medium uppercase"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                    {link.submenu && (
                      <div className="pl-4 mt-2 space-y-2">
                        {link.submenu.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="block py-1 text-sm text-gray-600"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <button
                  onClick={handleBookNow}
                  className="w-full bg-gray-900 text-white px-6 py-4 rounded-lg font-semibold mt-4 min-h-[56px] touch-manipulation"
                >
                  BOOK NOW
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

