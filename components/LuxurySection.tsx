"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Award, Star } from "lucide-react";

export function LuxurySection() {
  return (
    <section className="py-32 bg-gradient-to-b from-charcoal-900 via-charcoal-800 to-black text-white relative overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary-500/50 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold-500/50 to-transparent" />
      </div>
      
      {/* Decorative Gold Accents */}
      <div className="absolute top-20 left-10 w-32 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
      <div className="absolute bottom-20 right-10 w-32 h-px bg-gradient-to-l from-transparent via-primary-500/40 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Elegant Badge */}
          <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
            <Sparkles className="text-gold-400" size={20} />
            <span className="text-sm font-semibold tracking-wider uppercase text-gold-400/90">
              Sophisticated Luxury
            </span>
            <div className="w-1 h-1 rounded-full bg-gold-400" />
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-8 font-serif leading-tight text-refined">
            Where Elegance Meets
            <span className="block bg-gradient-to-r from-primary-300 via-rose-300 to-gold-400 bg-clip-text text-transparent mt-2">
              Expert Precision
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Experience the intersection of medical excellence and refined aesthetics.
            Every treatment is an art, every client a masterpiece.
          </p>

          {/* Premium Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: Award,
                title: "Award-Winning",
                description: "Recognized excellence in aesthetic medicine",
              },
              {
                icon: Star,
                title: "5-Star Rated",
                description: "Consistently exceptional client experiences",
              },
              {
                icon: Sparkles,
                title: "Luxury Experience",
                description: "Every detail crafted for your comfort",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all sophisticated-glow">
                    <div className="flex justify-center mb-6">
                      <div className="bg-gradient-to-br from-gold-500/20 to-primary-500/20 rounded-2xl p-4 border border-gold-500/30">
                        <Icon className="text-gold-400" size={32} />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 font-serif text-gold-400">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

