"use client";

import { Award, Users, Star, Shield, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const trustStats = [
  {
    icon: Users,
    value: "5,000+",
    label: "Happy Clients",
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Average Rating",
  },
  {
    icon: Award,
    value: "10+",
    label: "Years Experience",
  },
  {
    icon: Shield,
    value: "100%",
    label: "Licensed Professionals",
  },
];

const trustedBrands = [
  { name: "Allergan", logo: "https://via.placeholder.com/120x60?text=Allergan" },
  { name: "Restylane", logo: "https://via.placeholder.com/120x60?text=Restylane" },
  { name: "Stylage", logo: "https://via.placeholder.com/120x60?text=Stylage" },
];

export function TrustSignals() {
  return (
    <section className="py-24 bg-white border-b border-roseQuartz-100/30">
      <div className="container mx-auto px-4">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {trustStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className="flex justify-center mb-6"
                >
                  <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl p-5 shadow-xl group-hover:shadow-2xl transition-all">
                    <Icon className="text-white" size={32} />
                  </div>
                </motion.div>
                <div className="text-5xl font-light text-deepBrown-500 mb-3 font-serif">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-deepBrown-400 uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Badges Section */}
        <div className="border-t border-gray-200 pt-12">
          <div className="text-center mb-8">
            <p className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-6">
              Trusted Products & Partners
            </p>
            
            {/* Brand Logos */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
              {trustedBrands.map((brand, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-xl p-6 border border-gray-200/50 hover:border-primary-300 transition-all"
                >
                  <div className="w-32 h-16 bg-gray-100 rounded flex items-center justify-center text-xs text-gray-500">
                    {brand.name}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 glass rounded-full px-6 py-3 border border-primary-200/50 hover:border-primary-300 transition-all cursor-pointer group"
              onClick={() => window.open("https://www.vagaro.com/mimibeautyclinics", "_blank")}
            >
              <CheckCircle className="text-primary-600" size={20} />
              <span className="font-semibold text-gray-900">Get a Free Consultation</span>
              <span className="text-primary-600 group-hover:translate-x-1 transition-transform">→</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

