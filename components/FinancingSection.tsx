"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CreditCard, CheckCircle } from "lucide-react";

export function FinancingSection() {
  const handleLearnMore = () => {
    window.open("/promos#financing", "_self");
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80"
              alt="Financing options available"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <CreditCard className="text-primary-600" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif">
                Treat now,{" "}
                <span className="text-primary-600">Pay later</span>
              </h2>
            </div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Get the glow you deserve without breaking the bank. Purchase skincare packages, 
              injection treatments, and medical aesthetic services + products all while staying 
              within your budget with flexible 0% financing.
            </p>

            <div className="space-y-3 mb-8">
              {[
                "0% interest payment plans available",
                "Flexible monthly payments",
                "No credit check required for qualifying plans",
                "Apply in minutes",
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="text-primary-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <button
              onClick={handleLearnMore}
              className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              LEARN MORE
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

