"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-primary-50 relative overflow-hidden">
      {/* Curved divider from previous section */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden -mt-16">
        <svg viewBox="0 0 1440 64" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M0,64 Q360,32 720,40 T1440,48 L1440,64 L0,64 Z"
            fill="primary-50"
            className="text-primary-50"
          />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-6">
              <Sparkles className="text-primary-600" size={48} />
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 font-serif">
              More than{" "}
              <span className="italic text-primary-600 relative">
                just a beauty clinic
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary-400 opacity-50" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M0,10 Q50,2 100,6 T200,8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6 text-left">
              <p className="text-lg leading-relaxed font-light">
                MIMI is where <span className="font-medium text-primary-600">your personal beauty</span> takes center stage. 
                Think of us as your trusted beauty editor—someone who sees the potential in your features and knows exactly how to enhance them. 
                We&apos;re not here to change you; we&apos;re here to reveal the most confident version of yourself.
              </p>
              <p className="text-lg leading-relaxed font-light">
                Every treatment is a conversation. We listen, we understand, and then we create. 
                From the precision of our injectables to the artistry of our approach, 
                we use only <span className="font-medium">FDA-approved products</span>—Botox from Allergan, 
                fillers from Stylage and Restylane—because your safety and results are non-negotiable.
              </p>
            </div>
            <div className="mt-8">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  window.open("https://www.vagaro.com/mimibeautyclinics", "_blank")
                }
                className="bg-gray-900 text-white px-6 py-4 sm:px-8 sm:py-4 rounded-full font-semibold hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl min-h-[56px] touch-manipulation"
              >
                GET $100 OFF YOUR FIRST TREATMENT
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

