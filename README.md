# Mimi Beauty Clinics - Website

A modern, luxury aesthetic website for Mimi Beauty Clinics built with Next.js 14, featuring editorial design, refined typography, and conversion-optimized flows.

## 🚀 Tech Stack

### Core Framework
- **Next.js 14** - React framework with App Router, SSR, and SEO optimization
- **TypeScript** - Type safety and better developer experience
- **React 18** - Latest React features

### Styling & UI
- **Tailwind CSS** - Utility-first CSS with custom beauty brand palette
- **Framer Motion** - Smooth animations and scroll reveals
- **Lucide Icons** - Modern SVG icons
- **clsx** - Conditional class handling

### Forms & Validation
- **React Hook Form** - Performant form handling
- **Zod** - Schema validation
- **@hookform/resolvers** - Zod integration

### Content & Media
- **next/image** - Optimized image handling
- **React Player** - Video embedding (for reels/testimonials)

### SEO & Analytics
- **next-seo** - Structured metadata and SEO optimization
- **next-sitemap** - Auto-generated sitemaps and robots.txt

### Carousels & Interactions
- **Swiper.js** - Touch-enabled sliders for testimonials and galleries

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://mimibeautyclinics.com

# Email Service (EmailJS, Resend, etc.)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=your_domain
```

### Email Integration

Update `lib/email.ts` to integrate with your email service:
- EmailJS (client-side)
- Resend (server-side)
- SendGrid
- Your preferred email service

### Booking Integration

Update booking buttons to integrate with:
- Vagaro (current)
- Calendly
- TidyCal
- Your booking system

## 🎨 Design System

### Colors
- **Rose Quartz** - Soft, refined pink
- **Champagne** - Elegant gold accents
- **Deep Brown** - Sophisticated text color
- **Ivory** - Warm off-white backgrounds

### Typography
- **Headings**: Playfair Display (serif, light weight)
- **Body**: Inter (sans-serif, clean)

### Key Features

✅ **Editorial Design** - Magazine-style layout with generous white space  
✅ **Story-Driven Narrative** - Guides users through discovery journey  
✅ **Form Validation** - Zod-schema validated forms  
✅ **SEO Optimized** - Meta tags, sitemaps, structured data  
✅ **Responsive** - Mobile-first design  
✅ **Accessible** - WCAG compliant  
✅ **Performance** - Optimized images, lazy loading  

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with SEO
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   └── ...
├── components/
│   ├── ContactForm.tsx     # Validated contact form
│   ├── TestimonialCarousel.tsx  # Swiper carousel
│   └── ...
├── lib/
│   ├── form-schema.ts      # Zod validation schemas
│   ├── email.ts            # Email service integration
│   └── utils.ts            # Utilities
└── public/                 # Static assets
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
vercel
```

### Other Platforms

The site can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📝 Next Steps

1. **Email Service**: Configure email service in `lib/email.ts`
2. **Analytics**: Add Google Analytics or Plausible
3. **Content**: Replace placeholder images with real clinic photos
4. **Booking**: Verify Vagaro integration or update to preferred system
5. **SEO**: Update meta descriptions and add structured data
6. **Performance**: Optimize images (WebP, compression)

## 📄 License

Proprietary - Mimi Beauty Clinics
# mimibeautyclinic
