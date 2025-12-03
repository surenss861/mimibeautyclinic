import { Hero } from "@/components/Hero";
import { ValueProposition } from "@/components/ValueProposition";
import { ServicesGrid } from "@/components/ServicesGrid";
import { BeforeAfterSection } from "@/components/BeforeAfterSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { TeamCredentials } from "@/components/TeamCredentials";
import { OffersSection } from "@/components/OffersSection";
import { BookingCTA } from "@/components/BookingCTA";

export const metadata = {
  title: "Mimi Beauty Clinics | Toronto's Premier Aesthetic Destination",
  description: "Glow like you mean it. Expert Botox, dermal fillers, laser treatments, and aesthetic services in East York, Toronto.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <ServicesGrid />
      <BeforeAfterSection />
      <TestimonialsSection />
      <OffersSection />
      <TeamCredentials />
      <BookingCTA />
    </>
  );
}
