import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

import { CinematicHero } from "@/components/home/cinematic-hero";
import { DoctorsCarousel } from "@/components/home/doctors-carousel";
import { PatientJourneyTimeline } from "@/components/home/patient-journey-timeline";
import { QuickBookingWidget } from "@/components/home/quick-booking-widget";
import { ServicesGrid } from "@/components/home/services-grid";
import { SymptomNavigator } from "@/components/home/symptom-navigator";
import { TestimonialsCarousel } from "@/components/home/testimonials-carousel";
import { TrustBar } from "@/components/home/trust-bar";
import { Reveal } from "@/components/motion/reveal";
import { FinalCtaBanner } from "@/components/shared/final-cta-banner";
import { SectionHeading } from "@/components/shared/section-heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { business, fullAddress } from "@/data/business";
import { faqs } from "@/data/faqs";
import { images } from "@/data/images";
import { patientStories } from "@/data/patientStories";
import { pricing } from "@/data/pricing";
import { testimonials } from "@/data/testimonials";
import { buildMetadata } from "@/lib/metadata";
import { clinicJsonLd, physicianJsonLd } from "@/lib/schema";
import { ImageWithFallback } from "@/components/shared/image-with-fallback";

export const metadata = buildMetadata({
  title: "Home",
  description: "Premium, patient-first medical clinic website and booking experience.",
  path: "/",
});

const standards = [
  "Strict hygiene and sanitization protocols",
  "Confidential patient data handling",
  "Licensed and continuously trained staff",
  "Structured follow-up communication",
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicJsonLd()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianJsonLd()) }} />

      <CinematicHero />
      <TrustBar />

      <section className="container relative z-10 mt-4 sm:mt-6 md:-mt-12">
        <QuickBookingWidget />
      </section>

      <section className="container mt-16 space-y-8">
        <Reveal>
          <SectionHeading
            eyebrow="Departments"
            title="Comprehensive care under one premium clinical experience."
            description="From primary care to diagnostics and preventive pathways, each department is designed for clarity, comfort, and continuity."
          />
        </Reveal>
        <Reveal delay={0.05}>
          <ServicesGrid limit={8} />
          <div className="mt-5">
            <Button asChild variant="outline">
              <Link href="/services">
                View all departments
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>

      <section className="container mt-16">
        <Reveal>
          <SymptomNavigator compact />
        </Reveal>
      </section>

      <section className="container mt-16 space-y-8">
        <Reveal>
          <SectionHeading
            eyebrow="Patient Journey"
            title="A seamless clinical path from check-in to follow-up."
            description="Every step is intentionally designed to reduce friction, wait time, and uncertainty."
          />
        </Reveal>
        <Reveal delay={0.04}>
          <PatientJourneyTimeline />
        </Reveal>
      </section>

      <section className="container mt-16 grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 transition-all duration-300 hover:shadow-soft">
          <CardHeader>
            <CardTitle>Clinic Standards & Trust Engine</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-2">
            {standards.map((item) => (
              <div key={item} className="flex items-start gap-2 rounded-xl border p-3 text-sm">
                <ShieldCheck className="mt-0.5 h-4 w-4 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card className="bg-mesh transition-all duration-300 hover:shadow-soft">
          <CardHeader>
            <CardTitle>PrimeCare by the numbers</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-3xl font-semibold">{business.stats.years}+</p>
              <p className="text-sm text-muted-foreground">Years serving the community</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">{business.stats.patientsServed}</p>
              <p className="text-sm text-muted-foreground">Patients served</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">{business.stats.departments}</p>
              <p className="text-sm text-muted-foreground">Departments and services</p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="container mt-16 space-y-8">
        <Reveal>
          <SectionHeading
            eyebrow="Specialists"
            title="Meet our dedicated medical team."
            description="Experienced clinicians delivering personalized care with clear communication and responsible clinical judgment."
          />
        </Reveal>
        <Reveal delay={0.04}>
          <DoctorsCarousel />
        </Reveal>
      </section>

      <section className="container mt-16 grid gap-6 lg:grid-cols-2">
        <Card className="transition-all duration-300 hover:shadow-soft">
          <CardHeader>
            <CardTitle>Pricing transparency</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            {pricing.consultation.map((row) => (
              <div key={row.label} className="flex items-center justify-between rounded-xl border p-3">
                <span>{row.label}</span>
                <Badge variant="outline">{row.range}</Badge>
              </div>
            ))}
            <p className="text-xs text-muted-foreground">{pricing.disclaimer}</p>
            <Button asChild variant="outline">
              <Link href="/pricing">View full pricing guide</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="transition-all duration-300 hover:shadow-soft">
          <CardHeader>
            <CardTitle>Patient stories</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {patientStories.slice(0, 3).map((story) => (
              <div key={story.id} className="rounded-xl border p-4">
                <p className="font-medium">{story.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{story.summary}</p>
                <p className="mt-2 text-xs text-primary">{story.name}</p>
              </div>
            ))}
            <Button asChild variant="outline">
              <Link href="/testimonials">Read more stories</Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      <section className="container mt-16 space-y-8">
        <Reveal>
          <SectionHeading
            eyebrow="Reviews"
            title={`Trusted by ${testimonials.length}+ patient voices`}
            description="Feedback from patients who experienced our care pathways."
          />
        </Reveal>
        <Reveal delay={0.04}>
          <TestimonialsCarousel />
        </Reveal>
      </section>

      <section className="container mt-16 grid gap-8 lg:grid-cols-2">
        <div className="space-y-5">
          <SectionHeading eyebrow="FAQ" title="Answers to common patient questions." />
          <Accordion type="single" collapsible className="rounded-2xl border bg-background px-5">
            {faqs.slice(0, 10).map((faq, index) => (
              <AccordionItem key={faq.question} value={`home-faq-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Button asChild variant="outline">
            <Link href="/faq">See all FAQs</Link>
          </Button>
        </div>
        <Card className="overflow-hidden transition-all duration-300 hover:shadow-soft">
          <div className="relative h-64">
            <ImageWithFallback src={images.mapPreview} alt="Clinic map preview" fill className="object-cover" fallbackLabel="PrimeCare Map" />
          </div>
          <CardContent className="space-y-3 p-6">
            <h3 className="text-xl font-semibold">Visit us in person</h3>
            <p className="text-sm text-muted-foreground">{fullAddress}</p>
            <div className="flex flex-wrap gap-2">
              <Button asChild>
                <Link href="/contact">Open contact page</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/appointment">Book now</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <FinalCtaBanner />
    </>
  );
}
