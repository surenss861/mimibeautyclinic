"use client";

import { motion } from "framer-motion";
import { Calendar, Phone, ArrowRight } from "lucide-react";

export function BookingCTA() {
  const handleBookNow = () => {
    window.open("https://www.vagaro.com/mimibeautyclinics", "_blank");
  };

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-champagne-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-64 h-64 bg-primary-300 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-gold-300 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Quiet, Reassuring Header */}
          <span className="text-xs font-medium text-champagne-200/80 uppercase tracking-[0.2em] block mb-4 md:mb-6">
            Ready to Begin?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light font-serif mb-4 md:mb-6 leading-tight">
            Your Transformation
            <br />
            <span className="text-champagne-200">Starts Here</span>
          </h2>
          <p className="text-lg md:text-xl mb-4 text-champagne-100/90 max-w-3xl mx-auto leading-relaxed font-light">
            Book your consultation today and discover how we can help you achieve your aesthetic goals.
          </p>
          <p className="text-base mb-12 text-champagne-200/70 max-w-2xl mx-auto italic">
            Each of you is a unique canvas, waiting to be adorned with subtle enhancements.
          </p>

          {/* Reassuring CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleBookNow}
              className="group bg-champagne-50 text-stone-900 px-6 py-4 sm:px-10 sm:py-5 rounded-full font-medium hover:bg-champagne-100 transition-all shadow-2xl flex items-center justify-center gap-2 w-full sm:w-auto sm:min-w-[260px] min-h-[56px] touch-manipulation"
            >
              <Calendar size={20} />
              <span className="text-sm sm:text-base">Book Online Now</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.a
              href="tel:6473666464"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="backdrop-blur-sm bg-stone-800/50 text-champagne-50 px-6 py-4 sm:px-10 sm:py-5 rounded-full font-medium hover:bg-stone-800/70 transition-all border-2 border-stone-700/50 flex items-center justify-center gap-2 w-full sm:w-auto sm:min-w-[260px] min-h-[56px] touch-manipulation"
            >
              <Phone size={20} />
              <span className="text-sm sm:text-base">Call (647) 366-6464</span>
            </motion.a>
          </div>

          {/* Trust Signals - Quiet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-8 text-sm text-champagne-200/80 pt-8 border-t border-stone-700/30"
          >
            <span>Free Consultation</span>
            <span className="text-stone-600">•</span>
            <span>Flexible Payment Plans</span>
            <span className="text-stone-600">•</span>
            <span>Licensed Professionals</span>
            <span className="text-stone-600">•</span>
            <span>100% Satisfaction Guarantee</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
