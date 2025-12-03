"use client";

import { useState, useEffect } from "react";
import { X, Gift } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function LeadCapturePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    birthday: "",
  });

  useEffect(() => {
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
    localStorage.setItem("leadPopupDismissed", "true");
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
                <h2 className="text-3xl font-bold text-gray-900 mb-2 font-serif">
                  15% OFF
                </h2>
                <p className="text-lg text-gray-700 font-semibold">
                  ON YOUR FIRST TREATMENT
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Subscribe to receive exclusive offers and beauty tips
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
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  SUBSCRIBE
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full text-sm text-gray-500 hover:text-gray-700"
                >
                  No Thanks
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

