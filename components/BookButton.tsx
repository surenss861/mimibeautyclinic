"use client";

import { motion } from "framer-motion";

interface BookButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}

export function BookButton({ children, className = "", variant = "primary" }: BookButtonProps) {
  const handleClick = () => {
    window.open("https://www.vagaro.com/mimibeautyclinics", "_blank");
  };

  const baseClasses = variant === "primary" 
    ? "bg-primary-600 text-white hover:bg-primary-700"
    : "bg-white text-primary-600 hover:bg-gray-100";

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      className={`px-8 py-4 rounded-lg font-semibold transition-colors ${baseClasses} ${className}`}
    >
      {children}
    </motion.button>
  );
}

