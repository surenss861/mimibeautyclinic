"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award } from "lucide-react";

const teamMembers = [
  {
    name: "Christie",
    role: "Lead Injector & Founder",
    credentials: "RN, Certified Aesthetic Injector",
    bio: "With over 10 years of expertise, Christie combines medical precision with artistic vision to deliver natural-looking results that enhance your unique beauty.",
    experience: "10+ Years",
    treatments: "3,000+",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
    signature: "Your beauty, my artistry.",
  },
  {
    name: "Kateryna",
    role: "Senior Injector",
    credentials: "RN, Aesthetic Specialist",
    bio: "Specializing in natural-looking enhancements, Kateryna brings a gentle touch and meticulous attention to detail to every treatment.",
    experience: "8+ Years",
    treatments: "2,000+",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&q=80",
    signature: "Subtle. Sophisticated. You.",
  },
];

const credentials = [
  {
    title: "Licensed Medical Professionals",
    description: "All treatments performed by certified RNs",
  },
  {
    title: "Certified Aesthetic Injectors",
    description: "Advanced training in injectable techniques",
  },
  {
    title: "10+ Years Combined Experience",
    description: "Proven track record of excellence",
  },
  {
    title: "5,000+ Treatments Performed",
    description: "Trusted by thousands of clients",
  },
];

export function TeamCredentials() {
  return (
    <section className="py-32 bg-gradient-to-br from-stone-900 via-stone-800 to-berry-900 text-champagne-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl relative z-10">
        {/* Editorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-medium text-champagne-200/80 uppercase tracking-[0.2em] block mb-4">Meet Your Artisans</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light font-serif text-champagne-50 leading-tight mb-6">
            The Hands Behind
            <br />
            <span className="text-champagne-200">Your Glow</span>
          </h2>
          <p className="text-lg text-champagne-200/90 max-w-2xl mx-auto">
            Expert injectors who see beauty as an art form, not a procedure.
          </p>
        </motion.div>

        {/* Team Members - Artist Cards */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 mb-32">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="bg-gradient-to-br from-champagne-50/80 to-stone-50/80 backdrop-blur-sm rounded-3xl p-10 md:p-12 shadow-xl border border-stone-200/50 hover:shadow-2xl transition-all duration-500">
                {/* Headshot */}
                <div className="flex flex-col md:flex-row gap-8 mb-8">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden ring-4 ring-stone-200/50 flex-shrink-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start gap-2 mb-2">
                      <Award className="text-primary-400" size={20} />
                      <span className="text-xs font-semibold text-primary-600 uppercase tracking-wide">
                        {member.credentials}
                      </span>
                    </div>
                    <h3 className="text-4xl font-light font-serif text-stone-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-stone-600 font-medium mb-4">{member.role}</p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-stone-700 leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Stats */}
                <div className="flex gap-6 mb-6 pb-6 border-b border-stone-300/30">
                  <div>
                    <p className="text-xs text-stone-500 uppercase tracking-wider mb-1">Experience</p>
                    <p className="text-2xl font-light text-stone-900 font-serif">{member.experience}</p>
                  </div>
                  <div>
                    <p className="text-xs text-stone-500 uppercase tracking-wider mb-1">Treatments</p>
                    <p className="text-2xl font-light text-stone-900 font-serif">{member.treatments}</p>
                  </div>
                </div>

                {/* Signature Quote */}
                <div className="relative">
                  <p className="text-lg text-stone-700 italic font-light">
                    &ldquo;{member.signature}&rdquo;
                  </p>
                  <div className="absolute -bottom-2 left-0 w-24 h-px bg-gradient-to-r from-primary-300 to-transparent"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Credentials - Minimal Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {credentials.map((credential, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
                className="text-center p-6 bg-champagne-50/50 rounded-2xl border border-stone-200/50 hover:border-primary-200 transition-all"
              >
                <div className="text-4xl font-light text-stone-300 mb-4 font-serif">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h3 className="text-base font-semibold text-stone-900 mb-2 font-serif">
                  {credential.title}
                </h3>
                <p className="text-sm text-stone-600">{credential.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-20 pt-16 border-t border-stone-200"
        >
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-champagne-100/90 leading-relaxed mb-6 font-light">
              We are committed to maintaining the highest standards of safety, professionalism, and artistry. 
              Every treatment is performed with precision, care, and a deep understanding of facial anatomy.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-champagne-200/80">
              <span>Licensed by College of Nurses of Ontario</span>
              <span className="text-stone-600">•</span>
              <span>Allergan Certified Providers</span>
              <span className="text-stone-600">•</span>
              <span>HIPAA Compliant</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
