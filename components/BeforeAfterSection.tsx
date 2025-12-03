"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const beforeAfter = [
  {
    id: 1,
    treatment: "Botox & Dermal Fillers",
    emotion: "Feels confident again",
    timeframe: "2 weeks post-treatment",
    description: "Natural-looking wrinkle reduction and volume restoration that brings back your glow.",
    before: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80",
    after: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
    tags: ["Botox", "Fillers", "2 weeks"],
  },
  {
    id: 2,
    treatment: "Morpheus8 RF Microneedling",
    emotion: "Skin feels tighter, smoother",
    timeframe: "3 months post-treatment",
    description: "Advanced skin tightening and texture improvement that transforms from within.",
    before: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80",
    after: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80",
    tags: ["Morpheus8", "3 months"],
  },
  {
    id: 3,
    treatment: "PRP & Microneedling",
    emotion: "Radiant, youthful glow",
    timeframe: "6 weeks post-treatment",
    description: "Collagen induction therapy that reveals your most radiant, youthful skin.",
    before: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80",
    after: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
    tags: ["PRP", "6 weeks"],
  },
];

export function BeforeAfterSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % beforeAfter.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + beforeAfter.length) % beforeAfter.length);
  };

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-champagne-100/30 to-stone-50 relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary-100/15 rounded-full blur-3xl -z-0"
      />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl relative z-10">
        {/* Editorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-medium text-stone-500 uppercase tracking-[0.2em] block mb-4">Real Results</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light font-serif text-stone-900 leading-tight mb-6">
            Seeing Is Believing
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Real clients. Real transformations. Real confidence.
          </p>
        </motion.div>

        {/* Interactive Slider */}
        <div className="max-w-6xl mx-auto">
          <div className="relative h-[600px] md:h-[700px] rounded-3xl overflow-hidden bg-stone-100 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="grid grid-cols-2 h-full relative">
                  {/* Before */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={beforeAfter[activeIndex].before}
                      alt="Before treatment"
                      fill
                      className="object-cover"
                      priority={activeIndex === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="absolute bottom-8 left-8"
                    >
                      <div className="backdrop-blur-md bg-stone-900/80 px-6 py-3 rounded-xl shadow-xl border border-stone-700/50">
                        <p className="text-sm font-bold text-champagne-50 uppercase tracking-wider">Before</p>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* After */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={beforeAfter[activeIndex].after}
                      alt="After treatment"
                      fill
                      className="object-cover"
                      priority={activeIndex === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="absolute bottom-8 right-8"
                    >
                      <div className="backdrop-blur-md bg-primary-600/90 px-6 py-3 rounded-xl shadow-xl border border-primary-500/30">
                        <p className="text-sm font-bold text-white uppercase tracking-wider">After</p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Divider */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-champagne-50/80 shadow-lg z-10" />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-champagne-50 rounded-full p-3 shadow-xl border border-stone-200">
                    <div className="w-2 h-2 rounded-full bg-primary-500" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <motion.button
              whileHover={{ scale: 1.1, x: -4 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 backdrop-blur-md bg-champagne-50/90 hover:bg-champagne-50 rounded-full p-4 shadow-xl border border-stone-200/50 transition-all z-20 group"
              aria-label="Previous"
            >
              <ChevronLeft size={24} className="text-stone-900 group-hover:text-primary-600 transition-colors" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, x: 4 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 backdrop-blur-md bg-champagne-50/90 hover:bg-champagne-50 rounded-full p-4 shadow-xl border border-stone-200/50 transition-all z-20 group"
              aria-label="Next"
            >
              <ChevronRight size={24} className="text-stone-900 group-hover:text-primary-600 transition-colors" />
            </motion.button>
          </div>

          {/* Editorial Caption with Tags */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 text-center max-w-2xl mx-auto"
          >
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {beforeAfter[activeIndex].tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium uppercase tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-3xl font-light font-serif text-stone-900 mb-3">
              {beforeAfter[activeIndex].treatment}
            </h3>
            <p className="text-lg text-stone-600 mb-2 italic">
              &ldquo;{beforeAfter[activeIndex].emotion}&rdquo;
            </p>
            <p className="text-sm text-stone-500 mb-4">
              {beforeAfter[activeIndex].timeframe}
            </p>
            <p className="text-stone-600 leading-relaxed">
              {beforeAfter[activeIndex].description}
            </p>
          </motion.div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {beforeAfter.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === activeIndex ? "bg-primary-600 w-12" : "bg-stone-300 w-2 hover:bg-stone-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-lg text-stone-600 mb-6">Ready to see your transformation?</p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.open("https://www.vagaro.com/mimibeautyclinics", "_blank")}
            className="bg-stone-900 text-champagne-50 px-10 py-5 rounded-full font-medium hover:bg-stone-800 transition-all shadow-xl hover:shadow-2xl"
          >
            Book Your Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
