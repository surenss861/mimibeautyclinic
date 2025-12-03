"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-light text-deepBrown-500 mb-4 font-serif">
              Contact Us
            </h1>
            <p className="text-xl text-deepBrown-400">
              We&apos;d love to hear from you. Get in touch with any questions
              or to book your consultation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-light text-deepBrown-500 mb-8 font-serif">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-roseQuartz-100 rounded-full p-3">
                    <MapPin className="text-roseQuartz-500" size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-deepBrown-500 mb-1">
                      Address
                    </h3>
                    <p className="text-deepBrown-400">
                      1202 Woodbine Ave, East York, ON M4C 4E3
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-roseQuartz-100 rounded-full p-3">
                    <Phone className="text-roseQuartz-500" size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-deepBrown-500 mb-1">Phone</h3>
                    <a
                      href="tel:6473666464"
                      className="text-roseQuartz-500 hover:text-roseQuartz-600"
                    >
                      (647) 366-6464
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-roseQuartz-100 rounded-full p-3">
                    <Mail className="text-roseQuartz-500" size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-deepBrown-500 mb-1">Email</h3>
                    <a
                      href="mailto:hello@mimibeautyclinics.com"
                      className="text-roseQuartz-500 hover:text-roseQuartz-600"
                    >
                      hello@mimibeautyclinics.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-roseQuartz-50/30 rounded-lg border border-roseQuartz-100">
                <h3 className="font-medium text-deepBrown-500 mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 text-sm text-deepBrown-400">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Wednesday:</span>
                    <span>11:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Thursday:</span>
                    <span>Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Friday:</span>
                    <span>11:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday:</span>
                    <span>11:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-light text-deepBrown-500 mb-8 font-serif">
                Send us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

