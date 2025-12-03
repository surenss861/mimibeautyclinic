import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Mimi Beauty Clinics - Beauty Tips & Insights",
  description: "Expert advice and the latest trends in aesthetic treatments from Toronto's top med spa.",
};

const blogPosts = [
  {
    id: 1,
    title: "No Knife, All Glow: Top Anti-Aging Treatments That Work",
    excerpt:
      "Discover the best non-invasive anti-aging treatments that deliver real results without surgery. From Botox to Morpheus8, learn what works best for your skin type.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80",
    date: "December 1, 2024",
    href: "/blog/anti-aging-treatments",
    category: "Beauty Tips",
  },
  {
    id: 2,
    title: "Morpheus8: 7 Things to Know Before Your Treatment",
    excerpt:
      "Everything you need to know about Morpheus8 RF microneedling for optimal results. From preparation to aftercare, we cover it all.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80",
    date: "November 25, 2024",
    href: "/blog/morpheus8-guide",
    category: "Treatment Guides",
  },
  {
    id: 3,
    title: "Preventative Botox: When Should You Start?",
    excerpt:
      "Learn about the benefits of starting Botox treatments early to prevent wrinkles from forming. Is preventative Botox right for you?",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
    date: "November 18, 2024",
    href: "/blog/preventative-botox",
    category: "Beauty Tips",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4 font-serif">
              Beauty Tips & Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert advice and the latest trends in aesthetic treatments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Link href={post.href}>
                  <div className="relative h-64">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2 hover:text-primary-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <span className="text-primary-600 font-semibold hover:text-primary-700">
                      Read More →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

