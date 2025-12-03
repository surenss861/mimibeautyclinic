import { Hero } from "@/components/Hero";
import { ValueProposition } from "@/components/ValueProposition";
import { ServicesGrid } from "@/components/ServicesGrid";
import { AboutSection } from "@/components/AboutSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { TrustSignals } from "@/components/TrustSignals";
import { OffersSection } from "@/components/OffersSection";
import { FinancingSection } from "@/components/FinancingSection";
import { BookingCTA } from "@/components/BookingCTA";
import { ClientLayout } from "@/components/ClientLayout";

export default function Home() {
  return (
    <ClientLayout>
      <Hero />
      <ValueProposition />
      <ServicesGrid />
      <AboutSection />
      <TestimonialsSection />
      <TrustSignals />
      <OffersSection />
      <FinancingSection />
      <BookingCTA />
    </ClientLayout>
  );
}
