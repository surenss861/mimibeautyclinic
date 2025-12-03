"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const beforeAfterImages = [
  {
    id: 1,
    treatment: "Botox & Fillers",
    before: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80",
    after: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
    description: "Smoother, more youthful appearance",
  },
  {
    id: 2,
    treatment: "Laser Hair Removal",
    before: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80",
    after: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80",
    description: "Permanent hair reduction results",
  },
  {
    id: 3,
    treatment: "Morpheus8",
    before: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80",
    after: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
    description: "Improved skin texture and tightness",
  },
  {
    id: 4,
    treatment: "PRP & Microneedling",
    before: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80",
    after: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80",
    description: "Enhanced collagen production",
  },
];

export function BeforeAfterGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % beforeAfterImages.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + beforeAfterImages.length) % beforeAfterImages.length
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 font-serif">
            Real Results, Real Transformations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            See the difference our expert treatments can make. These are real
            clients who trusted us with their beauty journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {beforeAfterImages.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, type: "spring" }}
              className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
              onClick={() => setSelectedImage(idx)}
            >
              {/* Spotlight Effect Container */}
              <div className="relative h-80 bg-black">
                <Image
                  src={item.after}
                  alt={`${item.treatment} after`}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-125"
                />
                
                {/* Dark overlay that lifts on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50 group-hover:from-black/60 group-hover:via-black/40 group-hover:to-black/30 transition-all duration-500" />
                
                {/* Spotlight circle effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="bg-gradient-to-t from-black/60 via-black/40 to-transparent backdrop-blur-md rounded-xl p-5 border border-white/20 group-hover:border-white/30 transition-all sophisticated-glow">
                    <p className="font-bold text-lg mb-1">{item.treatment}</p>
                    <p className="text-sm text-gray-200">{item.description}</p>
                    <div className="mt-3 flex items-center gap-2 text-primary-300 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs font-semibold uppercase tracking-wider">View Results</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                    Results
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() =>
              window.open("https://www.vagaro.com/mimibeautyclinics", "_blank")
            }
            className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Interested in These Results? Book a Free Consultation
          </button>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedImage(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="max-w-4xl w-full relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 text-white z-10 bg-black/50 rounded-full p-2 hover:bg-black/70"
                    aria-label="Close gallery"
                  >
                    <X size={24} />
                  </button>

                  <div className="grid grid-cols-2 gap-4 bg-white rounded-lg p-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-600 mb-2">
                        BEFORE
                      </p>
                      <div className="relative h-96 rounded overflow-hidden">
                        <Image
                          src={beforeAfterImages[selectedImage].before}
                          alt="Before"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-600 mb-2">
                        AFTER
                      </p>
                      <div className="relative h-96 rounded overflow-hidden">
                        <Image
                          src={beforeAfterImages[selectedImage].after}
                          alt="After"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-center text-white">
                    <h3 className="text-xl font-bold">
                      {beforeAfterImages[selectedImage].treatment}
                    </h3>
                    <p className="text-gray-300">
                      {beforeAfterImages[selectedImage].description}
                    </p>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <button
                      onClick={prevImage}
                      className="text-white bg-black/50 rounded-full p-2 hover:bg-black/70"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <span className="text-white text-sm">
                      {selectedImage + 1} / {beforeAfterImages.length}
                    </span>
                    <button
                      onClick={nextImage}
                      className="text-white bg-black/50 rounded-full p-2 hover:bg-black/70"
                      aria-label="Next image"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

