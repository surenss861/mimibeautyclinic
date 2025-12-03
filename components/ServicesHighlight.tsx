"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

const featuredServices = [
  {
    title: "Anti-Wrinkle Injections",
    description: "Botox & Dysport treatments starting at $110",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80",
    href: "/services/botox",
  },
  {
    title: "Dermal Fillers",
    description: "Restore volume and smooth fine lines",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
    href: "/services/fillers",
  },
  {
    title: "Laser Hair Removal",
    description: "Permanent hair reduction solutions",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80",
    href: "/services/laser-hair-removal",
  },
  {
    title: "Morpheus8",
    description: "Advanced RF microneedling for skin tightening",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80",
    href: "/services/morpheus8",
  },
];

export function ServicesHighlight() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <ScrollReveal direction="up" delay={0.2}>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6 text-roseQuartz-400">
              <Sparkles size={18} />
              <span className="text-sm font-medium tracking-widest uppercase">Our Approach</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-deepBrown-500 mb-6 font-serif leading-tight">
              Signature Treatments
            </h2>
            <p className="text-lg text-deepBrown-400 max-w-2xl mx-auto leading-relaxed font-light">
              Each service is thoughtfully curated to deliver natural, stunning results.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredServices.map((service, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.15} direction="up">
              <div>
                <Link href={service.href}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="relative h-80 rounded-3xl overflow-hidden group cursor-pointer bg-white border border-roseQuartz-100/50 shadow-sm hover:shadow-lg transition-all duration-500"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-light mb-3 text-deepBrown-500 group-hover:text-roseQuartz-500 transition-colors font-serif">
                      {service.title}
                    </h3>
                    <p className="text-deepBrown-400 text-base mb-6 leading-relaxed">{service.description}</p>
                    <div className="flex items-center gap-2 text-roseQuartz-500 font-medium group-hover:gap-3 transition-all">
                      <span className="text-sm tracking-wide uppercase">Learn More</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={0.6}>
          <div className="text-center mt-16">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-roseQuartz-500 hover:text-roseQuartz-600 font-medium transition-colors group tracking-wide"
            >
              Explore All Treatments
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

