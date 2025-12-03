"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

const offers = [
  {
    id: 1,
    title: "New Client Special",
    front: {
      badge: "Limited Time",
      headline: "20% Off First Treatment",
      subtext: "Welcome to Mimi Beauty",
    },
    back: {
      description: "Get 20% off your first Botox, filler, or skin treatment. Valid for new clients only.",
      terms: "Valid until end of month",
      cta: "Claim Offer",
      href: "https://www.vagaro.com/mimibeautyclinics",
    },
    countdown: null,
  },
  {
    id: 2,
    title: "Monthly Promo",
    front: {
      badge: "This Month",
      headline: "Morpheus8 Package",
      subtext: "3 Sessions for $1,499",
    },
    back: {
      description: "Save $300 when you purchase a 3-session Morpheus8 package. Includes complimentary consultation.",
      terms: "Limited availability",
      cta: "Book Package",
      href: "https://www.vagaro.com/mimibeautyclinics",
    },
    countdown: "7 days left",
  },
  {
    id: 3,
    title: "Membership",
    front: {
      badge: "Best Value",
      headline: "Beauty Membership",
      subtext: "Monthly Benefits",
    },
    back: {
      description: "Join our membership program for exclusive discounts, priority booking, and monthly treatment credits.",
      terms: "Cancel anytime",
      cta: "Learn More",
      href: "/promos#membership",
    },
    countdown: null,
  },
];

export function OffersSection() {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const toggleFlip = (id: number) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section className="py-32 bg-gradient-to-br from-stone-900 via-stone-800 to-primary-900 text-champagne-50 relative overflow-hidden">
      {/* Rich Background Gradients */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-600/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-600/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl relative z-10">
        {/* Editorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-medium text-champagne-200/80 uppercase tracking-[0.2em] block mb-4">Special Offers</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light font-serif leading-tight mb-6">
            Treat Yourself
            <br />
            <span className="text-champagne-200">To More</span>
          </h2>
        </motion.div>

        {/* Flip Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer, idx) => {
            const isFlipped = flippedCards.has(offer.id);
            return (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.15, duration: 0.8 }}
                className="relative h-[400px] perspective-1000"
                style={{ perspective: "1000px" }}
              >
                <motion.div
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="relative w-full h-full preserve-3d"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front of Card */}
                  <div
                    className={`absolute inset-0 backface-hidden rounded-3xl overflow-hidden ${
                      isFlipped ? "hidden" : ""
                    }`}
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      onClick={() => toggleFlip(offer.id)}
                      className="relative h-full bg-gradient-to-br from-champagne-50/90 to-stone-50/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-stone-200/50 cursor-pointer"
                    >
                      <div className="absolute top-6 right-6">
                        <div className="bg-primary-600/90 text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide">
                          {offer.front.badge}
                        </div>
                      </div>
                      <div className="h-full flex flex-col justify-center">
                        <h3 className="text-3xl md:text-4xl font-light font-serif text-stone-900 mb-4">
                          {offer.front.headline}
                        </h3>
                        <p className="text-stone-600 text-lg mb-8">{offer.front.subtext}</p>
                        {offer.countdown && (
                          <div className="flex items-center gap-2 text-primary-600 text-sm font-medium">
                            <Clock size={16} />
                            <span>{offer.countdown}</span>
                          </div>
                        )}
                        <div className="mt-auto pt-6">
                          <span className="text-sm text-stone-500 italic">Hover or click to flip</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Back of Card */}
                  <div
                    className={`absolute inset-0 backface-hidden rounded-3xl overflow-hidden ${
                      isFlipped ? "" : "hidden"
                    }`}
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      onClick={() => toggleFlip(offer.id)}
                      className="relative h-full bg-gradient-to-br from-primary-600/95 to-rose-600/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-primary-500/30 cursor-pointer text-white"
                    >
                      <div className="h-full flex flex-col">
                        <h3 className="text-2xl font-light font-serif mb-4">{offer.title}</h3>
                        <p className="text-champagne-50/90 leading-relaxed mb-6 flex-1">
                          {offer.back.description}
                        </p>
                        <div className="space-y-4">
                          <p className="text-sm text-champagne-200/80 italic">{offer.back.terms}</p>
                          <motion.a
                            href={offer.back.href}
                            whileHover={{ scale: 1.05, x: 4 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 bg-champagne-50 text-stone-900 px-6 py-3 rounded-full font-medium hover:bg-champagne-100 transition-all shadow-lg"
                          >
                            {offer.back.cta}
                            <ArrowRight size={18} />
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

