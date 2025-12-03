"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const instagramPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&q=80",
    caption: "Client glow-up transformation",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80",
    caption: "Behind the scenes at MIMI",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&q=80",
    caption: "Real results, real clients",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&q=80",
    caption: "Treatment in action",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&q=80",
    caption: "Client testimonial",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80",
    caption: "New treatment launch",
  },
];

export function InstagramCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (instagramPosts.length - 3));
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + instagramPosts.length - 3) % (instagramPosts.length - 3)
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="text-primary-600" size={32} />
            <h2 className="text-5xl font-bold text-gray-900 font-serif">
              See Us In Action
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Client glow-ups in real time. Follow our journey on Instagram
            <Link
              href="https://instagram.com/mimibeautyclinics"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 font-semibold ml-1"
            >
              @mimibeautyclinics
            </Link>
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex gap-6"
              animate={{
                x: `-${currentIndex * (100 / 3)}%`,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {instagramPosts.map((post) => (
                <div
                  key={post.id}
                  className="flex-shrink-0 w-full md:w-1/3 px-2"
                >
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="relative aspect-square rounded-xl overflow-hidden shadow-xl cursor-pointer group"
                  >
                    <Image
                      src={post.image}
                      alt={post.caption}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                      <p className="text-sm font-medium">{post.caption}</p>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Instagram className="text-white drop-shadow-lg" size={24} />
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md rounded-full p-3 shadow-xl hover:bg-white transition-all hover:scale-110 z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="text-gray-900" size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md rounded-full p-3 shadow-xl hover:bg-white transition-all hover:scale-110 z-10"
            aria-label="Next"
          >
            <ChevronRight className="text-gray-900" size={24} />
          </button>
        </div>

        <div className="text-center mt-8">
          <Link
            href="https://instagram.com/mimibeautyclinics"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
          >
            Follow Us on Instagram
            <Instagram size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

