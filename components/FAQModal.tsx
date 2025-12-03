"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "How long do results last?",
    answer: "Results vary by treatment. Botox typically lasts 3-4 months, while dermal fillers can last 6-12 months depending on the product and area treated.",
  },
  {
    question: "Is there any downtime?",
    answer: "Most of our treatments have minimal to no downtime. You can typically return to your normal activities immediately after treatment.",
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes! We offer 0% interest payment plans through our Treat Now, Pay Later program. Ask us about financing options during your consultation.",
  },
  {
    question: "How do I book an appointment?",
    answer: "You can book online through our booking system, call us at (647) 366-6464, or fill out our contact form. We're here to help!",
  },
];

export function FAQModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-40 bg-white text-gray-900 rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all hover:scale-110 border border-gray-200 group"
        aria-label="Open FAQ"
      >
        <MessageCircle
          size={24}
          className="text-primary-600 group-hover:text-primary-700 transition-colors"
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed bottom-6 right-6 z-50 w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-primary-600 to-rose-500 text-white p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold font-serif">Have Questions?</h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white/80 hover:text-white transition-colors"
                    aria-label="Close"
                  >
                    <X size={24} />
                  </button>
                </div>
                <p className="text-white/90">Quick answers to common questions</p>
              </div>

              <div className="max-h-96 overflow-y-auto p-6">
                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="border-b border-gray-200 pb-4 last:border-0"
                    >
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {faq.question}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-gray-50 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-3">
                  Still have questions? We&apos;re here to help!
                </p>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    window.open("https://www.vagaro.com/mimibeautyclinics", "_blank");
                  }}
                  className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Book a Consultation
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

