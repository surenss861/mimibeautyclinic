"use client";

import { Suspense } from "react";
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
      <main>
        <Suspense fallback={<div className="min-h-screen bg-champagne-50" />}>
          {children}
        </Suspense>
      </main>
      <Footer />
      <StickyBookingCTA />
      <FAQModal />
      <LeadCapturePopup />
    </SmoothScroll>
  );
}

