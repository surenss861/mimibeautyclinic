"use client";

import { motion } from "framer-motion";
import { Award, Star } from "lucide-react";

const teamMembers = [
  {
    name: "Christie",
    role: "Lead Injector & Founder",
    bio: "With over 10 years perfecting the art of natural enhancement, Christie combines medical precision with an artist&apos;s eye. She sees beauty as a conversation—listening to what you want, understanding your features, and creating results that feel authentically you.",
    credentials: "RN, CANS Certified",
    experience: "10+ Years",
    treatments: "3,000+",
    signature: "Your beauty, my artistry.",
  },
  {
    name: "Kateryna",
    role: "Senior Injector",
    bio: "Kateryna brings a gentle touch and meticulous attention to detail to every treatment. Specializing in natural-looking enhancements, she believes the best results are the ones that make you feel like the most confident version of yourself—not someone else.",
    credentials: "RN, Aesthetic Specialist",
    experience: "8+ Years",
    treatments: "2,000+",
    signature: "Subtle. Sophisticated. You.",
  },
];

export function TeamSection() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Signature accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-300/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-medium text-stone-500 uppercase tracking-[0.2em] block mb-4"
          >
            The Hands Behind Your Glow
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-4 md:mb-6 font-serif">
            Meet Your Artisans
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Your beauty journey in expert hands. Our licensed professionals bring
            years of experience and an eye for natural, stunning results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-primary-100 group-hover:ring-primary-300 transition-all bg-gradient-to-br from-primary-100/30 to-rose-100/30 flex items-center justify-center">
                  <div className="text-6xl font-light text-primary-400/40 font-serif">
                    {member.name.charAt(0)}
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl sm:text-3xl font-light text-gray-900 mb-2 font-serif">
                    {member.name}
                  </h3>
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Award className="text-primary-600" size={18} />
                    <span className="text-xs sm:text-sm font-semibold text-primary-600 uppercase tracking-wide">
                      {member.credentials}
                    </span>
                  </div>
                  <p className="text-primary-700 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 font-light">
                    {member.bio}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex justify-center gap-6 mb-4 pt-4 border-t border-stone-200">
                    <div>
                      <p className="text-xs text-stone-500 uppercase tracking-wider mb-1">Experience</p>
                      <p className="text-xl font-light text-stone-900 font-serif">{member.experience}</p>
                    </div>
                    <div>
                      <p className="text-xs text-stone-500 uppercase tracking-wider mb-1">Treatments</p>
                      <p className="text-xl font-light text-stone-900 font-serif">{member.treatments}</p>
                    </div>
                  </div>
                  
                  {/* Signature quote */}
                  {member.signature && (
                    <p className="text-sm text-stone-600 italic font-light mt-4">
                      &ldquo;{member.signature}&rdquo;
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-6">
            All our injectors are licensed medical professionals certified in aesthetic treatments
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Star className="text-primary-500" size={16} />
              <span>Licensed & Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="text-primary-500" size={16} />
              <span>10+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="text-primary-500" size={16} />
              <span>5,000+ Treatments</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

