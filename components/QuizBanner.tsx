"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export function QuizBanner() {
  return (
    <section className="py-32 bg-gradient-to-br from-ivory-50 via-roseQuartz-50/40 to-champagne-50/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-200/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-peach-200/20 rounded-full blur-3xl" />
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring" }}
          className="max-w-5xl mx-auto"
        >
          {/* Playful Badge */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-xl px-8 py-4 rounded-full mb-8 border-2 border-primary-200/50 shadow-xl mx-auto block w-fit"
          >
            <Sparkles className="text-primary-600 animate-pulse" size={22} />
            <span className="text-sm font-bold text-gray-800 uppercase tracking-widest">
              Find Your Perfect Glow
            </span>
            <span className="text-2xl">✨</span>
          </motion.div>

          <div className="text-center mb-10">
            <h2 className="text-5xl md:text-7xl font-light mb-8 font-serif leading-tight">
              <span className="text-deepBrown-500">
                Which Approach
              </span>
              <span className="block text-roseQuartz-400 mt-2">
                Fits You Best?
              </span>
            </h2>
            
            <p className="text-xl text-deepBrown-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Our gentle quiz helps you discover the treatment path that aligns with your vision.
            </p>
          </div>

          {/* Large CTA */}
          <div className="flex flex-col items-center gap-6">
            <motion.div
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="relative"
            >
              <Link
                href="/quiz"
                className="inline-flex items-center gap-3 bg-deepBrown-500 text-white px-10 py-5 rounded-full text-base font-medium hover:bg-deepBrown-600 transition-all group tracking-wider uppercase"
              >
                <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
                <span>Begin Your Discovery</span>
                <ArrowRight 
                  size={18} 
                  className="group-hover:translate-x-1 transition-transform duration-300" 
                />
              </Link>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-rose-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity -z-10" />
            </motion.div>

            <p className="text-sm text-gray-600 font-medium">
              It&apos;s like a beauty magazine quiz, but better! 🎀 • 100% Free • Takes 2 Minutes
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

