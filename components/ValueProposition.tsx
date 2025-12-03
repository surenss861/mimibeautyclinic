"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const brandValues = [
  {
    quote: "Confident Skin. Expert Hands.",
    description: "Licensed medical professionals with 10+ years perfecting the art of natural enhancement.",
    accent: "01",
  },
  {
    quote: "Premium Products. Proven Results.",
    description: "We use only FDA-approved products like Botox®, Juvéderm®, and SkinCeuticals®.",
    accent: "02",
  },
  {
    quote: "You, Personalized.",
    description: "Every treatment is tailored to your unique features and aesthetic goals.",
    accent: "03",
  },
];

export function ValueProposition() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
    layoutEffect: false,
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={sectionRef} id="about" className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-champagne-50 to-stone-50/30 relative overflow-hidden">
      {/* Floating Elements */}
      <motion.div
        style={{ y }}
        className="absolute top-20 right-10 w-24 h-24 opacity-10"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary-300">
          <path d="M50 20 Q70 40 50 60 Q30 40 50 20" fill="currentColor" />
        </svg>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl relative z-10">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="text-xs font-medium text-stone-500 uppercase tracking-[0.2em]">Why Mimi</span>
        </motion.div>

        {/* Editorial Pull Quotes - Asymmetric Grid */}
        <div className="space-y-12 md:space-y-16 lg:space-y-24">
          {brandValues.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                idx % 2 === 1 ? "md:grid-flow-dense" : ""
              }`}
            >
              {/* Image/Visual Placeholder - Alternating Sides */}
              <div className={`${idx % 2 === 1 ? "md:col-start-2" : ""}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary-100/20 via-champagne-200/30 to-gold-100/20"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl font-light text-stone-200 font-serif">{value.accent}</span>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 + 0.3, duration: 0.8 }}
                    className="absolute inset-0 bg-gradient-to-br from-primary-200/10 to-transparent"
                  />
                </motion.div>
              </div>

              {/* Quote Content */}
              <div className={`${idx % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`}>
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 + 0.1, duration: 0.8 }}
                >
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light font-serif text-stone-900 mb-4 md:mb-6 leading-tight">
                    {value.quote}
                  </h2>
                  <div className="h-px w-20 bg-gradient-to-r from-primary-300 to-gold-300 mb-4 md:mb-6"></div>
                  <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-md">
                    {value.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Curved Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
        <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M0,0 Q360,60 720,40 T1440,20 L1440,120 L0,120 Z"
            fill="champagne-50"
            className="text-champagne-50"
          />
        </svg>
      </div>
    </section>
  );
}
