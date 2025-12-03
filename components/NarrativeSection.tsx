"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function NarrativeSection() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Subtle decorative curve */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-ivory-50" />
      
      <div className="container mx-auto px-4 max-w-5xl">
        <ScrollReveal direction="up" delay={0.2}>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6 text-roseQuartz-400">
              <Sparkles size={20} />
              <span className="text-sm font-medium tracking-widest uppercase">Our Philosophy</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light mb-8 font-serif leading-tight">
              Aesthetic Artistry,<br />
              <span className="text-roseQuartz-400">Personalized Care</span>
            </h2>
            <p className="text-xl text-deepBrown-400 max-w-2xl mx-auto leading-relaxed font-light">
              Every treatment is a conversation. Every result, a reflection of you.
            </p>
          </div>
        </ScrollReveal>

        {/* Narrative Flow */}
        <div className="space-y-24">
          {/* Step 1 */}
          <ScrollReveal direction="up" delay={0.3}>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="text-roseQuartz-400 text-sm font-medium tracking-widest uppercase mb-4">
                  Step 01
                </div>
                <h3 className="text-4xl font-light mb-6 font-serif">
                  Discover Your Path
                </h3>
                <p className="text-lg text-deepBrown-400 leading-relaxed mb-6">
                  Take our gentle quiz to understand your skin goals and find the 
                  treatment approach that aligns with your vision.
                </p>
                <Link
                  href="/quiz"
                  className="inline-flex items-center gap-2 text-roseQuartz-500 hover:text-roseQuartz-600 font-medium transition-colors group"
                >
                  Start the Quiz
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="relative h-96 bg-gradient-to-br from-roseQuartz-100 to-champagne-100 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white/50 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                      <Sparkles className="text-roseQuartz-400" size={48} />
                    </div>
                    <p className="text-deepBrown-400 font-light">Visual placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Step 2 */}
          <ScrollReveal direction="up" delay={0.4}>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 relative h-96 bg-gradient-to-br from-champagne-100 to-ivory-200 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white/50 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                      <Sparkles className="text-champagne-500" size={48} />
                    </div>
                    <p className="text-deepBrown-400 font-light">Visual placeholder</p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="text-champagne-500 text-sm font-medium tracking-widest uppercase mb-4">
                  Step 02
                </div>
                <h3 className="text-4xl font-light mb-6 font-serif">
                  Meet Your Artisans
                </h3>
                <p className="text-lg text-deepBrown-400 leading-relaxed mb-6">
                  Our licensed practitioners bring years of expertise and an eye for 
                  natural, stunning results. Your beauty journey in trusted hands.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-champagne-600 hover:text-champagne-700 font-medium transition-colors group"
                >
                  Meet the Team
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Step 3 */}
          <ScrollReveal direction="up" delay={0.5}>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="text-roseQuartz-400 text-sm font-medium tracking-widest uppercase mb-4">
                  Step 03
                </div>
                <h3 className="text-4xl font-light mb-6 font-serif">
                  Real Client Journeys
                </h3>
                <p className="text-lg text-deepBrown-400 leading-relaxed mb-6">
                  See authentic transformations from clients who trusted us with their 
                  beauty journey. Real results, real stories.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-roseQuartz-500 hover:text-roseQuartz-600 font-medium transition-colors group"
                >
                  View Results
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="relative h-96 bg-gradient-to-br from-roseQuartz-100 to-ivory-100 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white/50 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                      <Sparkles className="text-roseQuartz-400" size={48} />
                    </div>
                    <p className="text-deepBrown-400 font-light">Visual placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

