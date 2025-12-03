"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = {
  information: [
    { label: "Address", value: "1202 Woodbine Ave, East York, ON M4C 4E3", icon: MapPin },
    { label: "Phone", value: "(647) 366-6464", icon: Phone, href: "tel:6473666464" },
    { label: "Email", value: "hello@mimibeautyclinics.com", icon: Mail, href: "mailto:hello@mimibeautyclinics.com" },
  ],
  hours: [
    { day: "MON", time: "11:00 am - 07:00 pm" },
    { day: "TUE", time: "11:00 am - 07:00 pm" },
    { day: "WED", time: "11:00 am - 07:00 pm" },
    { day: "THU", time: "Closed" },
    { day: "FRI", time: "11:00 am - 07:00 pm" },
    { day: "SAT", time: "11:00 am - 05:00 pm" },
    { day: "SUN", time: "Closed" },
  ],
  quickLinks: [
    { label: "Book Now", href: "https://www.vagaro.com/mimibeautyclinics" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Shop", href: "/shop" },
    { label: "Giftcards", href: "/giftcards" },
    { label: "Treat Now, Pay Later", href: "/promos#financing" },
    { label: "Pre-Treatment & Aftercare", href: "/aftercare" },
    { label: "QUIZ: Find Your Perfect Facial", href: "/quiz" },
  ],
  services: [
    { label: "Weekly Offers", href: "/promos#weekly" },
    { label: "Monthly Promos", href: "/promos#monthly" },
    { label: "Anti-Wrinkle Injections", href: "/services/botox" },
    { label: "Dermal Fillers", href: "/services/fillers" },
    { label: "Morpheus8", href: "/services/morpheus8" },
    { label: "PRP & Microneedling Treatments", href: "/services/microneedling" },
    { label: "Laser Facial Treatments", href: "/services/laser-facials" },
    { label: "Laser Hair Removal", href: "/services/laser-hair-removal" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-stone-900 via-stone-800 to-black text-champagne-50 relative overflow-hidden">
      {/* Gradient Border Top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 via-gold-500/40 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-16">
        {/* Instagram Feed Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <Instagram size={24} className="text-primary-400" />
            <h3 className="text-white font-semibold uppercase tracking-wider text-sm">
              Follow Our Journey
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-stone-700 to-transparent"></div>
            <a
              href="https://instagram.com/mimibeautyclinics"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300 text-sm font-medium"
            >
              @mimibeautyclinics
            </a>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((idx) => (
              <motion.a
                key={idx}
                href="https://instagram.com/mimibeautyclinics"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -4 }}
                className="aspect-square rounded-lg overflow-hidden bg-stone-800 hover:border-2 hover:border-primary-400 transition-all cursor-pointer border border-stone-700"
              >
                <div className="w-full h-full bg-gradient-to-br from-primary-900/40 via-rose-900/30 to-stone-800 flex items-center justify-center">
                  <Instagram size={20} className="text-stone-600" />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Information */}
          <div>
            <h3 className="font-bold text-white mb-6 uppercase tracking-wide text-sm">
              Information
            </h3>
            <ul className="space-y-3">
              {footerLinks.information.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <li key={idx}>
                    <div className="flex items-start gap-3">
                      <Icon size={18} className="mt-0.5 flex-shrink-0 text-primary-400" />
                      <div>
                        <span className="font-semibold text-white text-sm block mb-1">{item.label}</span>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="hover:text-primary-300 transition-colors text-champagne-200/80 text-sm"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-champagne-200/80 text-sm">{item.value}</span>
                        )}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="font-bold text-white mb-6 uppercase tracking-wide text-sm">
              Business Hours
            </h3>
            <ul className="space-y-2">
              {footerLinks.hours.map((item, idx) => (
                <li key={idx} className="flex justify-between text-sm">
                  <span className="font-semibold text-white">{item.day}:</span>
                  <span className="text-champagne-200/80">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-6 uppercase tracking-wide text-sm">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-primary-300 transition-colors text-champagne-200/80 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-6 uppercase tracking-wide text-sm">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-primary-300 transition-colors text-champagne-200/80 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 rounded-2xl overflow-hidden shadow-2xl border border-stone-700/50"
        >
          <div className="relative w-full h-64 md:h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.5!2d-79.3!3d43.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQyJzAwLjAiTiA3OcKwMTgnMDAuMCJX!5e0!3m2!1sen!2sca!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent pointer-events-none"></div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="border-t border-stone-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <span className="font-semibold text-white text-sm">FOLLOW US:</span>
              <a
                href="https://facebook.com/mimibeautyclinics"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-800 hover:bg-primary-600 text-white rounded-full p-3 transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com/mimibeautyclinics"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-800 hover:bg-primary-600 text-white rounded-full p-3 transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                window.open("https://www.vagaro.com/mimibeautyclinics", "_blank")
              }
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              GET $100 OFF
            </motion.button>

            <div className="text-center md:text-right">
              <div className="flex flex-wrap justify-center md:justify-end gap-4 text-xs mb-3">
                <Link href="/privacy" className="hover:text-primary-300 text-champagne-200/60 transition-colors">
                  Privacy Policy
                </Link>
                <span className="text-stone-600">•</span>
                <Link href="/terms" className="hover:text-primary-300 text-champagne-200/60 transition-colors">
                  Terms of Service
                </Link>
              </div>
              <p className="text-xs text-champagne-200/60">
                © {new Date().getFullYear()} Mimi Beauty Clinics | Designed by BOWO Creative Inc.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Widget Placeholder - Can integrate Crisp or Tawk.to */}
      <div className="fixed bottom-24 right-6 z-40 lg:block hidden">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary-600 text-white rounded-full p-4 shadow-2xl hover:shadow-primary-600/50 transition-all"
          aria-label="Chat with us"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
}
