import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Clock, DollarSign } from "lucide-react";
import { BookButton } from "@/components/BookButton";
import { ClientLayout } from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Anti-Wrinkle Injections (Botox) in Toronto | Mimi Beauty Clinics",
  description: "Look refreshed, not frozen. Expert Botox and Dysport treatments in East York, Toronto starting at $110. Precision injectables that soften fine lines naturally—because you should look like you, just well-rested.",
  keywords: "Botox Toronto, Dysport Toronto, Anti-wrinkle injections, Botox East York, Cosmetic injectables Toronto, Natural Botox results",
  openGraph: {
    title: "Anti-Wrinkle Injections (Botox) | Mimi Beauty Clinics",
    description: "Look refreshed, not frozen. Expert Botox treatments starting at $110 in Toronto.",
  },
};

const benefits = [
  "Softens fine lines and wrinkles",
  "Prevents new wrinkles from forming",
  "Quick 15-30 minute treatment",
  "Minimal downtime",
  "Natural-looking results",
  "FDA and Health Canada approved",
];

const faqs = [
  {
    question: "How long do Botox results last?",
    answer: "Botox results typically last 3-4 months. Regular treatments can help maintain results and may even extend the duration over time.",
  },
  {
    question: "Is Botox safe?",
    answer: "Yes, Botox is FDA and Health Canada approved and has been safely used for cosmetic purposes for over 20 years. Our licensed medical professionals ensure safe administration.",
  },
  {
    question: "When will I see results?",
    answer: "You may begin to see results within 24-48 hours, with full effects visible after 7-14 days.",
  },
  {
    question: "Does Botox hurt?",
    answer: "Most patients describe the sensation as a small pinch. The needles used are very fine, and discomfort is minimal.",
  },
];

export default function BotoxPage() {
  return (
    <ClientLayout>
      <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-champagne-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 font-serif">
                Anti-Wrinkle Injections
              </h1>
              <p className="text-xl text-gray-700 mb-6">
                Botox & Dysport treatments to soften fine lines and prevent
                wrinkles. Starting at $110.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                  <DollarSign className="text-primary-600" size={20} />
                  <span className="font-semibold">Starting at $110</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                  <Clock className="text-primary-600" size={20} />
                  <span className="font-semibold">15-30 minutes</span>
                </div>
              </div>
              <BookButton className="mb-4">
                Book Your Botox Treatment
              </BookButton>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80"
                alt="Botox anti-wrinkle injection treatment at Mimi Beauty Clinics - Natural, refreshed results"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-champagne-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center font-serif">
            How Botox Works
          </h2>
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-gray-700 mb-4">
              Botox (Botulinum Toxin Type A) is a neuromodulator that works by
              temporarily relaxing the muscles that cause dynamic wrinkles. When
              injected into specific facial muscles, it blocks nerve signals,
              preventing muscle contractions that lead to lines and wrinkles.
            </p>
            <p className="text-gray-700 mb-4">
              Our expert injectors use precise techniques to target problem areas
              like forehead lines, crow&apos;s feet, and frown lines between the
              eyebrows. The treatment is quick, virtually painless, and requires
              no downtime.
            </p>
            <p className="text-gray-700">
              We use only FDA and Health Canada approved products from Allergan
              (Botox) and other trusted manufacturers, ensuring safety and
              efficacy.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center font-serif">
            Benefits of Botox
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-champagne-50 p-6 rounded-lg shadow-md flex items-start gap-4 border border-stone-200/50"
              >
                <CheckCircle className="text-primary-600 flex-shrink-0" size={24} />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-champagne-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center font-serif">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-serif">
            Ready to Smooth Away Wrinkles?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your Botox consultation today and discover how we can help you
            achieve a more youthful appearance.
          </p>
          <BookButton variant="secondary">
            Book Your Appointment
          </BookButton>
          <div className="mt-8">
            <Link
              href="/services"
              className="text-white/80 hover:text-white underline"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
      </div>
    </ClientLayout>
  );
}

