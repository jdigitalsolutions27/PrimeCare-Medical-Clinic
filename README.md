# PrimeCare Medical Clinic Website

Premium multi-page medical clinic website + mini patient experience platform built with:
- Next.js App Router
- React 18 + TypeScript
- Tailwind CSS
- Framer Motion
- shadcn/ui components
- React Hook Form + Zod
- Embla Carousel

## 1) Install and Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Build and validate:

```bash
npm run lint
npm run build
```

## 2) Edit Clinic Branding and Contact Details

Main editable business profile:
- `data/business.ts`

Update:
- clinic name / tagline
- phone, WhatsApp, emails
- address and hours
- social links
- map embed URL

## 3) Edit Services, Doctors, Pricing, and Content

Data-driven content files:
- `data/services.ts` (20+ services with slugs, categories, FAQs, steps)
- `data/doctors.ts`
- `data/pricing.ts`
- `data/testimonials.ts`
- `data/patientStories.ts`
- `data/faqs.ts`
- `data/blog.ts`
- `data/symptomNavigator.ts`

All pages consume these files directly, so edits appear site-wide.

## 4) Replace Images

Placeholder URLs are centralized in:
- `data/images.ts`

Replace URLs with your own licensed assets. `next/image` is already configured for:
- `images.unsplash.com`
- `images.pexels.com`

If you use other domains, add them in:
- `next.config.mjs`

## 5) Booking and API

Booking flow:
- `app/appointment/page.tsx`
- `components/appointment/appointment-wizard.tsx`
- `app/api/appointments/route.ts`
- `app/appointment/success/page.tsx`

Current API is a mock route returning:
- appointment reference number
- service name

Also supports `.ics` calendar download from the same route (`GET`).

## 6) SEO and Schema

Per-page metadata helper:
- `lib/metadata.ts`

JSON-LD schema:
- `lib/schema.ts` (MedicalClinic + Physician)

## 7) Deploy to Vercel

1. Push repository to GitHub/GitLab/Bitbucket  
2. Import project in Vercel  
3. Set environment variables if needed:
   - `NEXT_PUBLIC_SITE_URL` (recommended for absolute metadata URLs)  
4. Deploy

## 8) Notes

- Symptom Navigator is informational only and not diagnostic.
- Avoid medical guarantee language in content.
- For production appointment handling, connect `/api/appointments` to your real backend/EMR workflow.
