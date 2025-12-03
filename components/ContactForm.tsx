"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/form-schema";
import { sendContactEmail } from "@/lib/email";
import { Send, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const result = await sendContactEmail(data);
      if (result.success) {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-deepBrown-500 mb-2"
        >
          Name *
        </label>
        <input
          {...register("name")}
          type="text"
          id="name"
          className="w-full px-4 py-3 border border-roseQuartz-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-roseQuartz-300 focus:border-transparent transition-all bg-white"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-roseQuartz-500">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-deepBrown-500 mb-2"
        >
          Email *
        </label>
        <input
          {...register("email")}
          type="email"
          id="email"
          className="w-full px-4 py-3 border border-roseQuartz-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-roseQuartz-300 focus:border-transparent transition-all bg-white"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-roseQuartz-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-deepBrown-500 mb-2"
        >
          Phone
        </label>
        <input
          {...register("phone")}
          type="tel"
          id="phone"
          className="w-full px-4 py-3 border border-roseQuartz-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-roseQuartz-300 focus:border-transparent transition-all bg-white"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-roseQuartz-500">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-deepBrown-500 mb-2"
        >
          Message *
        </label>
        <textarea
          {...register("message")}
          id="message"
          rows={6}
          className="w-full px-4 py-3 border border-roseQuartz-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-roseQuartz-300 focus:border-transparent transition-all bg-white resize-none"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-roseQuartz-500">{errors.message.message}</p>
        )}
      </div>

      {isSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-roseQuartz-50 border border-roseQuartz-200 rounded-lg p-4 text-roseQuartz-700"
        >
          Thank you! We&apos;ll be in touch soon.
        </motion.div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-deepBrown-500 text-white px-6 py-4 rounded-full font-medium hover:bg-deepBrown-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 tracking-wider uppercase text-sm"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" size={18} />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send size={18} />
          </>
        )}
      </button>
    </form>
  );
}

