"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyBookingCTA } from "@/components/StickyBookingCTA";
import { LeadCapturePopup } from "@/components/LeadCapturePopup";
import { FAQModal } from "@/components/FAQModal";
import { SmoothScroll } from "@/components/SmoothScroll";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <Header />
      <main>{children}</main>
      <Footer />
      <StickyBookingCTA />
      <FAQModal />
      <LeadCapturePopup />
    </SmoothScroll>
  );
}

