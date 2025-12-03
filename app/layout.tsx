import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/components/ClientLayout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://mimibeautyclinics.com"),
  title: {
    default: "Mimi Beauty Clinics | Toronto's Premier Aesthetic Destination",
    template: "%s | Mimi Beauty Clinics",
  },
  description: "Glow like you mean it. Expert Botox, dermal fillers, laser treatments, and aesthetic services in East York, Toronto. Let our experts sculpt your best skin.",
  keywords: [
    "Botox Toronto",
    "Dermal Fillers Toronto",
    "Laser Hair Removal Toronto",
    "Morpheus8 Toronto",
    "East York Med Spa",
    "Cosmetic Injectables Toronto",
    "Aesthetic Treatments Toronto",
    "Med Spa Toronto",
    "Skin Rejuvenation Toronto",
  ],
  authors: [{ name: "Mimi Beauty Clinics" }],
  creator: "Mimi Beauty Clinics",
  publisher: "Mimi Beauty Clinics",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "/",
    siteName: "Mimi Beauty Clinics",
    title: "Mimi Beauty Clinics | Toronto's Premier Aesthetic Destination",
    description: "Glow like you mean it. Expert Botox, dermal fillers, laser treatments, and aesthetic services in East York, Toronto.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mimi Beauty Clinics - Toronto's Premier Aesthetic Destination",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mimi Beauty Clinics | Toronto's Premier Aesthetic Destination",
    description: "Glow like you mean it. Expert Botox, dermal fillers, and aesthetic services in Toronto.",
    images: ["/og-image.jpg"],
    creator: "@mimibeautyclinics",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#f0a1cf",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

