"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Quote } from "lucide-react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Gigi K.",
    text: "I have been following MIMI Beauty Clinics on Instagram for a while & decided to get my botox with them! Christie & Kateryna are amazing at what they do. I've had botox from both of them and i feel amazing with the results.",
    rating: 5,
  },
  {
    id: 2,
    name: "Alessia M.",
    text: "The best med spa in Toronto! The staff is professional, the clinic is beautiful, and the results speak for themselves. I've been coming here for over a year and couldn't be happier.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sarah L.",
    text: "Morpheus8 treatment exceeded my expectations. My skin looks tighter and more youthful. The team made me feel comfortable throughout the entire process.",
    rating: 5,
  },
  {
    id: 4,
    name: "Jessica R.",
    text: "Amazing experience from start to finish. The consultation was thorough, the treatment was painless, and the results are incredible. Highly recommend!",
    rating: 5,
  },
];

export function TestimonialCarousel() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="relative">
      <Swiper
        onSwiper={setSwiper}
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        loop={true}
        className="testimonial-swiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-white rounded-3xl p-10 md:p-14 shadow-sm relative border border-roseQuartz-100/50">
              <div className="flex justify-center mb-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-champagne-500 text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-xl md:text-2xl text-deepBrown-500 mb-10 text-center leading-relaxed font-light italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-roseQuartz-200 flex items-center justify-center text-roseQuartz-600 font-medium text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <p className="font-light text-deepBrown-500 text-lg font-serif">
                  {testimonial.name}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .testimonial-swiper .swiper-pagination-bullet {
          background: #f0a1cf;
          opacity: 0.3;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #f0a1cf;
          opacity: 1;
        }
        .testimonial-swiper .swiper-button-next,
        .testimonial-swiper .swiper-button-prev {
          color: #f0a1cf;
        }
        .testimonial-swiper .swiper-button-next:after,
        .testimonial-swiper .swiper-button-prev:after {
          font-size: 24px;
        }
      `}</style>
    </div>
  );
}

