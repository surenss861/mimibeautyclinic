"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [glowText, setGlowText] = useState("");
  const [mounted, setMounted] = useState(false);
  const fullText = "Glow";
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
    layoutEffect: false,
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Typewriter effect for "Glow"
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setGlowText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  const handleBookNow = () => {
    window.open("https://www.vagaro.com/mimibeautyclinics", "_blank");
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900">
      {/* Video Background Placeholder - Can be replaced with actual video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900/95 via-primary-900/20 to-stone-900/95 z-10"></div>
        {/* Video would go here - using gradient for now */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=80')] bg-cover bg-center opacity-20"></div>
      </div>

      {/* Rich Berry & Deep Blush Gradient Overlays */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
        className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-gradient-to-br from-primary-700/30 via-rose-600/20 to-transparent rounded-full blur-3xl z-0"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
        className="absolute bottom-0 left-0 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-gradient-to-tr from-rose-700/25 via-primary-600/15 to-transparent rounded-full blur-3xl z-0"
      />

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-32 right-10 md:right-20 w-12 h-12 md:w-16 md:h-16 opacity-20 z-10 hidden md:block"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary-300">
          <path d="M50 20 Q70 40 50 60 Q30 40 50 20" fill="currentColor" opacity="0.3" />
        </svg>
      </motion.div>

      {/* Editorial Content - Asymmetric Layout */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-20 max-w-7xl">
        <motion.div
          style={{ y, opacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          {/* Left Column - Main Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Small Editorial Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block"
            >
              <span className="text-xs font-medium text-champagne-200/80 uppercase tracking-[0.2em]">Toronto • East York</span>
            </motion.div>

            {/* Bold Brand Statement with Animated "Glow" */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light font-serif leading-[0.95] text-champagne-50 tracking-tight"
            >
              <span className="relative inline-block">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10"
                >
                  {glowText}
                  {glowText.length < fullText.length && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                      className="inline-block w-1 h-16 bg-champagne-50 ml-1"
                    />
                  )}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: glowText.length === fullText.length ? 0.3 : 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-r from-primary-400 to-rose-400 blur-2xl"
                />
              </span>
              {" "}Is the
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">New Power</span>
                {/* Handwritten Brushstroke Underline */}
                <motion.svg
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
                  className="absolute -bottom-2 left-0 w-full h-8 text-primary-400"
                  viewBox="0 0 300 40"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,35 Q75,20 150,25 T300,30"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </span>
            </motion.h1>

            {/* Editorial Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl text-champagne-100 leading-relaxed max-w-lg font-light"
            >
              You, just enhanced. Expert hands. Confident skin.
            </motion.p>

            {/* Trust Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex items-center gap-4 text-sm text-champagne-200/80"
            >
              <span className="h-px flex-1 bg-champagne-200/30"></span>
              <span className="font-medium">10+ Years • 5,000+ Treatments</span>
              <span className="h-px flex-1 bg-champagne-200/30"></span>
            </motion.div>

            {/* Elegant CTA with Shimmer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleBookNow}
                className="group relative bg-champagne-50 text-stone-900 px-6 py-4 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-champagne-100 transition-all shadow-xl hover:shadow-2xl flex items-center gap-2 sm:gap-3 overflow-hidden min-h-[44px] touch-manipulation"
              >
                <span className="relative z-10">Book Your Consultation</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
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
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column - Editorial Quote */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-8 lg:mt-0"
          >
            {/* Pull Quote Card with Rich Colors */}
            <div className="relative bg-gradient-to-br from-champagne-50/90 via-stone-50/80 to-primary-50/30 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl border border-stone-200/50">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary-400/40 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-rose-400/30 rounded-full blur-xl"></div>
              
              <div className="relative z-10">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary-400/50 mb-4 md:mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h3.983v10h-9.985z"/>
                </svg>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-stone-800 leading-relaxed mb-4 md:mb-6 italic">
                  &ldquo;Each of you is a unique canvas, waiting to be adorned with subtle enhancements.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-300 to-rose-300"></div>
                  <div>
                    <p className="font-medium text-stone-900">Mimi Beauty</p>
                    <p className="text-sm text-stone-600">Your Artisans</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Curved Divider at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden z-10">
        <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M0,120 Q360,60 720,80 T1440,100 L1440,120 L0,120 Z"
            fill="champagne-50"
            className="text-champagne-50"
          />
        </svg>
      </div>
    </section>
  );
}
