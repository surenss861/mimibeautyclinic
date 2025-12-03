import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ClientLayout } from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Services | Mimi Beauty Clinics - Toronto",
  description: "Comprehensive range of aesthetic treatments including Botox, fillers, laser treatments, and more.",
};

const services = [
  {
    title: "Anti-Wrinkle Injections",
    description: "Botox & Dysport treatments starting at $110. Soften fine lines and prevent wrinkles.",
    href: "/services/botox",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80",
  },
  {
    title: "Dermal Fillers",
    description: "Restore volume and smooth fine lines with Restylane and Stylage fillers.",
    href: "/services/fillers",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
  },
  {
    title: "Laser Hair Removal",
    description: "Permanent hair reduction solutions for all skin types.",
    href: "/services/laser-hair-removal",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80",
  },
  {
    title: "Morpheus8",
    description: "Advanced RF microneedling for skin tightening and texture improvement.",
    href: "/services/morpheus8",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80",
  },
  {
    title: "PRP & Microneedling",
    description: "Stimulate collagen production for smoother, firmer skin.",
    href: "/services/microneedling",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80",
  },
  {
    title: "Laser Facial Treatments",
    description: "Advanced laser treatments for skin rejuvenation and pigmentation.",
    href: "/services/laser-facials",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80",
  },
];

export default function ServicesPage() {
  return (
    <ClientLayout>
      <div className="min-h-screen pt-20">
        <section className="py-20 bg-champagne-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-900 mb-4 font-serif">
                Our Services
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive aesthetic treatments tailored to your unique needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <Link key={idx} href={service.href}>
                  <div className="bg-champagne-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group border border-stone-200/50">
                    <div className="relative h-64">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </ClientLayout>
  );
}

