"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "No Knife, All Glow: Top Anti-Aging Treatments That Work",
    excerpt:
      "Discover the best non-invasive anti-aging treatments that deliver real results without surgery.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80",
    date: "December 1, 2024",
    href: "/blog/anti-aging-treatments",
  },
  {
    id: 2,
    title: "Morpheus8: 7 Things to Know Before Your Treatment",
    excerpt:
      "Everything you need to know about Morpheus8 RF microneedling for optimal results.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80",
    date: "November 25, 2024",
    href: "/blog/morpheus8-guide",
  },
  {
    id: 3,
    title: "Preventative Botox: When Should You Start?",
    excerpt:
      "Learn about the benefits of starting Botox treatments early to prevent wrinkles from forming.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
    date: "November 18, 2024",
    href: "/blog/preventative-botox",
  },
];

export function BlogPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
              Beauty Tips & Insights
            </h2>
            <p className="text-lg text-gray-600">
              Expert advice and the latest trends in aesthetic treatments
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden md:flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            View All Posts
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <Link href={post.href}>
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-primary-600 font-semibold group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            View All Posts
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}

