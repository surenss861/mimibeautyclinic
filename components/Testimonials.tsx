"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Gigi K.",
    text: "I have been following MIMI Beauty Clinics on Instagram for a while & decided to get my botox with them! Christie & Kateryna are amazing at what they do. I've had botox from both of them and i feel amazing with the results.",
    rating: 5,
  },
  {
    id: 2,
    name: "Alessia M.",
    text: "The best med spa in Toronto! The staff is professional, the clinic is beautiful, and the results speak for themselves. I've been coming here for over a year and couldn't be happier.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sarah L.",
    text: "Morpheus8 treatment exceeded my expectations. My skin looks tighter and more youthful. The team made me feel comfortable throughout the entire process.",
    rating: 5,
  },
  {
    id: 4,
    name: "Jessica R.",
    text: "Amazing experience from start to finish. The consultation was thorough, the treatment was painless, and the results are incredible. Highly recommend!",
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6 text-roseQuartz-400">
            <Quote size={24} />
            <span className="text-sm font-medium tracking-widest uppercase">Client Stories</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-deepBrown-500 mb-8 font-serif leading-tight">
            Real Journeys,<br />
            <span className="text-roseQuartz-400">Real Results</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-10 md:p-14 shadow-sm relative border border-roseQuartz-100/50"
            >
              <div className="flex justify-center mb-8">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i} className="text-champagne-500 text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-xl md:text-2xl text-deepBrown-500 mb-10 text-center leading-relaxed font-light italic">
                &ldquo;{testimonials[currentIndex].text}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-roseQuartz-200 flex items-center justify-center text-roseQuartz-600 font-medium text-lg">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
                <p className="font-light text-deepBrown-500 text-lg font-serif">
                  {testimonials[currentIndex].name}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="text-primary-600" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIndex
                      ? "bg-primary-600 w-8"
                      : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="text-primary-600" />
            </button>
          </div>
        </div>

        {/* Google Reviews Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-lg shadow-md">
            <div className="flex items-center gap-1">
              <span className="text-yellow-400 text-xl">★★★★★</span>
              <span className="text-gray-700 font-semibold ml-2">4.9/5</span>
            </div>
            <span className="text-gray-500">on Google Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}

