import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Mimi Beauty Clinics",
  description: "Learn about Mimi Beauty Clinics - Toronto's premier med spa with expert licensed professionals.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center font-serif">
            About Mimi Beauty Clinics
          </h1>
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-xl text-gray-700 mb-6">
              MIMI is a lifestyle brand that puts the emphasis on your personal
              beauty. Our facilities meet high clinical standards to support
              personalized care.
            </p>
            <p className="text-gray-700 mb-6">
              We offer a variety of medi-spa treatments for the face and the
              whole body. You&apos;ll find a plethora of procedures, from
              facials and injectables, to surgical treatments and high-tech
              equipment which use light or sound waves.
            </p>
            <p className="text-gray-700 mb-6">
              The products used are high quality and clinically approved, like
              Botox from Allergan and fillers from Stylage and Restylane. Our
              team consists of licensed medical professionals dedicated to
              helping you look and feel your best.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

