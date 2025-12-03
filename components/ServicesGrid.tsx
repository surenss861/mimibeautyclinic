"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef, useState } from "react";

const serviceGroups = [
  {
    goal: "Anti-Aging",
    description: "Turn back time with precision treatments",
    services: [
      {
        title: "Anti-Wrinkle Injections",
        subtitle: "Botox & Dysport",
        tagline: "Smooth lines. Natural results.",
        description: "The secret? Precision. We don&apos;t freeze faces—we soften expressions. Our injectors read your face like a map, placing each unit exactly where it needs to be. The result? You look like you, just well-rested.",
        price: "Starting at $110",
        duration: "15-min treatment",
        href: "/services/botox",
        image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80",
        testimonial: "I feel 10 years younger, and no one can tell I&apos;ve had anything done. That&apos;s the magic. – Dana",
        benefit: "Look refreshed, not frozen",
      },
      {
        title: "Dermal Fillers",
        subtitle: "Juvéderm & Restylane",
        tagline: "Restore volume. Enhance features.",
        description: "Think of fillers as your face&apos;s best-kept secret. We restore what time has gently taken away, enhancing your natural architecture with an artist&apos;s eye. Every placement is intentional, every result is you—just elevated.",
        price: "Custom pricing",
        duration: "30-min treatment",
        href: "/services/fillers",
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
        testimonial: "My lips look so natural, everyone thinks I was born with them. That&apos;s exactly what I wanted. – Sarah",
        benefit: "Natural enhancement, zero tell",
      },
    ],
  },
  {
    goal: "Sculpt & Define",
    description: "Shape and refine with advanced techniques",
    services: [
      {
        title: "Morpheus8",
        subtitle: "RF Microneedling",
        tagline: "Tighten skin. Transform texture.",
        description: "This is where science meets art. Morpheus8 doesn&apos;t just treat the surface—it rebuilds from within. Radiofrequency energy meets precision needles to trigger your skin&apos;s natural healing response. The result? Skin that feels firmer, looks smoother, and glows with confidence.",
        price: "From $599",
        duration: "60-min treatment",
        href: "/services/morpheus8",
        image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80",
        testimonial: "My skin feels 10 years younger. People keep asking what I&apos;m doing differently. – Dana",
        benefit: "Firmer, smoother, glowing skin",
      },
      {
        title: "PRP & Microneedling",
        subtitle: "Collagen Induction",
        tagline: "Stimulate. Rejuvenate. Glow.",
        description: "Your body already knows how to heal. We just give it a nudge. Using your own platelet-rich plasma, we stimulate your skin&apos;s natural collagen production. It&apos;s like hitting the reset button on your complexion—radiant, refreshed, and unmistakably yours.",
        price: "From $299",
        duration: "45-min treatment",
        href: "/services/microneedling",
        image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80",
        testimonial: "My skin has never looked this good. It&apos;s like I&apos;ve found my glow again. – Maria",
        benefit: "Your body&apos;s natural healing, amplified",
      },
    ],
  },
];

function ServiceCard({ service, idx, groupIdx }: { service: any; idx: number; groupIdx: number }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: (groupIdx * 0.2) + (idx * 0.15), duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`grid md:grid-cols-2 gap-12 lg:gap-16 items-center ${
        idx % 2 === 1 ? "md:grid-flow-dense" : ""
      }`}
    >
      {/* Image - Staggered Reveal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: (groupIdx * 0.2) + (idx * 0.15) + 0.2, duration: 0.8 }}
        className={`relative ${idx % 2 === 1 ? "md:col-start-2" : ""}`}
      >
        <Link href={service.href}>
          <motion.div
            whileHover={{ y: -8 }}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0"
              >
                <Image
                  src={service.image}
                  alt={`${service.title} treatment at Mimi Beauty Clinics - ${service.tagline}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  loading="lazy"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/40 transition-all duration-500" />
              
              {/* Floating Tooltips */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: showTooltip ? 1 : 0, y: showTooltip ? 0 : 10 }}
                className="absolute top-6 left-6 space-y-2"
              >
                <div className="backdrop-blur-md bg-champagne-50/95 px-4 py-2 rounded-full shadow-lg border border-stone-200/50">
                  <p className="text-sm font-semibold text-stone-900">{service.price}</p>
                </div>
                <div className="backdrop-blur-md bg-primary-600/90 px-4 py-2 rounded-full shadow-lg border border-primary-500/30">
                  <p className="text-sm font-semibold text-white">{service.duration}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </Link>
      </motion.div>

      {/* Content - Editorial Style */}
      <div className={`${idx % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`}>
        <motion.div
          initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: (groupIdx * 0.2) + (idx * 0.15) + 0.1, duration: 0.8 }}
        >
          <span className="text-xs font-medium text-stone-500 uppercase tracking-wider block mb-3">
            {service.subtitle}
          </span>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-light font-serif text-stone-900 mb-4 leading-tight">
            {service.title}
          </h3>
          <p className="text-lg sm:text-xl text-stone-700 mb-6 font-light italic">
            {service.tagline}
          </p>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed mb-8 max-w-md">
            {service.description}
          </p>

          {/* Mini Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (groupIdx * 0.2) + (idx * 0.15) + 0.4, duration: 0.6 }}
            className="bg-gradient-to-br from-primary-50/50 to-rose-50/30 rounded-xl p-5 mb-6 border-l-4 border-primary-400 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-primary-200/20 rounded-full blur-2xl -mr-8 -mt-8"></div>
            <p className="text-sm sm:text-base text-stone-700 italic relative z-10 leading-relaxed">
              &ldquo;{service.testimonial}&rdquo;
            </p>
          </motion.div>
          
          {/* Benefit Badge */}
          {service.benefit && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (groupIdx * 0.2) + (idx * 0.15) + 0.5, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary-600/10 text-primary-700 px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-6"
            >
              <span className="w-1.5 h-1.5 bg-primary-600 rounded-full"></span>
              {service.benefit}
            </motion.div>
          )}

          {/* CTA */}
          <Link href={service.href} className="inline-block min-h-[44px] min-w-[44px] touch-manipulation">
            <motion.div
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 text-stone-900 font-medium group py-2 relative"
            >
              <span>Learn More</span>
              <ArrowRight size={18} className="arrow-slide" />
              {/* Subtle underline on hover */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-primary-400 to-rose-400"
              />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function ServicesGrid() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
    layoutEffect: false,
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={sectionRef} id="services" className="py-16 sm:py-24 md:py-32 bg-champagne-50 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        style={{ y }}
        className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary-100/10 rounded-full blur-3xl -z-0"
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl relative z-10">
        {/* Section Header - Editorial Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-20"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-medium text-stone-500 uppercase tracking-[0.2em] block mb-4"
          >
            Our Core Services
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light font-serif text-stone-900 leading-tight max-w-3xl">
            Three Treatments.
            <br />
            <span className="text-stone-600 relative gradient-accent-line">
              Infinite Possibilities.
            </span>
          </h2>
        </motion.div>

        {/* Services Grouped by Goals */}
        <div className="space-y-32">
          {serviceGroups.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-16">
              {/* Goal Header */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: groupIdx * 0.2, duration: 0.8 }}
                className="flex items-baseline gap-6"
              >
                <h3 className="text-4xl md:text-5xl font-light font-serif text-stone-900">
                  {group.goal}
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-stone-300 to-transparent"></div>
                <p className="text-stone-600 italic">{group.description}</p>
              </motion.div>

              {/* Services in Group */}
              <div className="space-y-24">
                {group.services.map((service, idx) => (
                  <ServiceCard key={idx} service={service} idx={idx} groupIdx={groupIdx} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-24 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-stone-700 font-medium hover:text-stone-900 transition-colors group"
          >
            <span>View All Services</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
