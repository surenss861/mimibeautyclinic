"use client";

import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

export function StickyBookingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBookNow = () => {
    window.open("https://www.vagaro.com/mimibeautyclinics", "_blank");
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-6 right-6 z-50 lg:block hidden"
    >
      <motion.button
        onClick={handleBookNow}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="group relative bg-primary-600 text-white px-8 py-4 rounded-full shadow-2xl shadow-primary-600/40 flex items-center gap-2 font-semibold hover:bg-primary-700 transition-all overflow-hidden"
        aria-label="Book an appointment"
      >
        {/* Glowing Background Effect */}
        <motion.div
          animate={{
            boxShadow: [
              "0 0 20px rgba(236, 72, 153, 0.4)",
              "0 0 40px rgba(236, 72, 153, 0.6)",
              "0 0 20px rgba(236, 72, 153, 0.4)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 rounded-full"
        />
        <Calendar size={20} className="relative z-10 group-hover:scale-110 transition-transform" />
        <span className="relative z-10">Book Now</span>
        
        {/* Shimmer Effect */}
        <motion.div
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />
      </motion.button>
    </motion.div>
  );
}
