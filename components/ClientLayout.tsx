"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyBookingCTA } from "@/components/StickyBookingCTA";
import { LeadCapturePopup } from "@/components/LeadCapturePopup";
import { FAQModal } from "@/components/FAQModal";
import { SmoothScroll } from "@/components/SmoothScroll";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-champagne-50">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    );
  }

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

