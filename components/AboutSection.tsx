"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 bg-primary-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-6">
              <Sparkles className="text-primary-600" size={48} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
              More than{" "}
              <span className="italic text-primary-600">just a beauty clinic</span>
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4 text-left">
              <p className="text-lg">
                MIMI is a lifestyle brand that puts the emphasis on <span className="font-semibold text-primary-600">your personal beauty</span>. 
                Our facilities meet high clinical standards to support personalized care. 
                We offer a variety of medi-spa treatments for the face and the whole body.
              </p>
              <p className="text-lg">
                You&apos;ll find a comprehensive range of procedures, from facials and injectables 
                to advanced treatments using cutting-edge technology. The products we use are 
                <span className="font-semibold"> high quality and clinically approved</span>, 
                like Botox from Allergan and fillers from Stylage and Restylane.
              </p>
            </div>
            <div className="mt-8">
              <button
                onClick={() =>
                  window.open("https://www.vagaro.com/mimibeautyclinics", "_blank")
                }
                className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                GET $100 OFF YOUR FIRST TREATMENT
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

