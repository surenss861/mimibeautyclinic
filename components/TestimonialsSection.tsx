"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Gigi K.",
    text: "I have been following MIMI Beauty Clinics on Instagram for a while & decided to get my botox with them! Christie & Kateryna are amazing at what they do. I've had botox from both of them and i feel amazing with the results.",
    rating: 5,
    treatment: "Botox & Fillers",
  },
  {
    id: 2,
    name: "Alessia M.",
    text: "The best med spa in Toronto! The staff is professional, the clinic is beautiful, and the results speak for themselves. I've been coming here for over a year and couldn't be happier.",
    rating: 5,
    treatment: "Regular Client",
  },
  {
    id: 3,
    name: "Sarah L.",
    text: "Morpheus8 treatment exceeded my expectations. My skin looks tighter and more youthful. The team made me feel comfortable throughout the entire process.",
    rating: 5,
    treatment: "Morpheus8",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 bg-champagne-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl relative z-10">
        {/* Editorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-medium text-stone-500 uppercase tracking-[0.2em] block mb-4">Client Stories</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light font-serif text-stone-900 leading-tight mb-6">
            Real Voices.
            <br />
            <span className="text-stone-600">Real Results.</span>
          </h2>
        </motion.div>

        {/* Main Testimonial - Editorial Card */}
        <div className="max-w-5xl mx-auto mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-champagne-50 to-stone-50/80 rounded-3xl p-12 md:p-16 shadow-xl border border-stone-200/50"
            >
              <div className="flex justify-center mb-8">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="text-gold-400 fill-gold-400" size={28} />
                ))}
              </div>
              <p className="text-2xl md:text-3xl text-stone-800 mb-10 leading-relaxed font-light text-center italic">
                &ldquo;{testimonials[currentIndex].text}&rdquo;
              </p>
              <div className="text-center">
                <p className="text-xl font-semibold text-stone-900 mb-2 font-serif">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-sm text-stone-500 uppercase tracking-wide">
                  {testimonials[currentIndex].treatment}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex ? "bg-primary-600 w-12" : "bg-stone-300 w-2 hover:bg-stone-400"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Google Reviews Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-4 bg-champagne-50 px-8 py-4 rounded-2xl shadow-lg border border-stone-200/50">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-gold-400 fill-gold-400" size={24} />
              ))}
            </div>
            <div className="border-l border-stone-200 pl-4">
              <p className="text-2xl font-bold text-stone-900">4.9/5</p>
              <p className="text-sm text-stone-600">Google Reviews</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
