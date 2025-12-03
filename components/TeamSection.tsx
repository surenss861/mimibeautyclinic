"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Star } from "lucide-react";

const teamMembers = [
  {
    name: "Christie",
    role: "Lead Injector & Founder",
    bio: "10+ years of expertise in aesthetic treatments",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
    credentials: "RN, Certified Injector",
  },
  {
    name: "Kateryna",
    role: "Senior Injector",
    bio: "Specialist in natural-looking results",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80",
    credentials: "RN, Aesthetic Specialist",
  },
];

export function TeamSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4 font-serif">
            Meet Our Injectors
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-primary-100 group-hover:ring-primary-300 transition-all">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 font-serif">
                    {member.name}
                  </h3>
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Award className="text-primary-600" size={18} />
                    <span className="text-sm font-semibold text-primary-600">
                      {member.credentials}
                    </span>
                  </div>
                  <p className="text-primary-700 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
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

