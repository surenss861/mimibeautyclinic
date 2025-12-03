"use client";

import { useState, useEffect } from "react";
import { X, Gift } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export function LeadCapturePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    birthday: "",
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    // Show popup after 3 seconds if not dismissed before
    const timer = setTimeout(() => {
      const dismissed = localStorage.getItem("leadPopupDismissed");
      if (!dismissed) {
        setIsOpen(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    if (typeof window !== "undefined") {
      localStorage.setItem("leadPopupDismissed", "true");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your email marketing service
    console.log("Form submitted:", formData);
    // Show success message
    alert("Thank you! Check your email for your 15% off coupon code.");
    handleClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={handleClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-2xl max-w-md w-full p-8 relative">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                aria-label="Close popup"
              >
                <X size={24} />
              </button>

              <div className="text-center mb-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary-100 rounded-full p-3">
                    <Gift className="text-primary-600" size={32} />
                  </div>
                </div>
                <h2 className="text-3xl font-light text-gray-900 mb-2 font-serif">
                  Find Your Perfect Treatment
                </h2>
                <p className="text-lg text-gray-700 font-medium mb-1">
                  Take our quick quiz
                </p>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  Discover which treatment aligns with your skin goals. Plus, get 15% off your first visit when you subscribe.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <input
                  type="date"
                  name="birthday"
                  placeholder="Birthday"
                  value={formData.birthday}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <div className="flex gap-3">
                  <Link
                    href="/quiz"
                    onClick={handleClose}
                    className="flex-1 bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all text-center min-h-[48px] flex items-center justify-center touch-manipulation"
                  >
                    Take Quiz
                  </Link>
                  <button
                    type="submit"
                    className="flex-1 bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all min-h-[48px] touch-manipulation"
                  >
                    Subscribe
                  </button>
                </div>
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full text-sm text-gray-500 hover:text-gray-700 py-2 touch-manipulation"
                >
                  Maybe Later
                </button>
              </form>

              <p className="text-xs text-gray-500 mt-4 text-center">
                By subscribing, you consent to receive calls, emails, and text
                messages. View our{" "}
                <a href="/privacy" className="underline">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="/terms" className="underline">
                  Terms of Service
                </a>
                .
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

