import { Star } from "lucide-react";

import { TestimonialsCarousel } from "@/components/home/testimonials-carousel";
import { PageHero } from "@/components/shared/page-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { images } from "@/data/images";
import { patientStories } from "@/data/patientStories";
import { testimonials } from "@/data/testimonials";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Testimonials",
  description: "Patient reviews and stories from PrimeCare Medical Clinic.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="Patient Testimonials & Stories"
        description="Feedback from patients who experienced our care pathways."
        image={images.clinicInterior}
      />

      <section className="container mt-12 space-y-8">
        <TestimonialsCarousel />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((review) => (
            <Card key={review.id}>
              <CardHeader className="space-y-1">
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <CardTitle className="text-lg">{review.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p className="text-muted-foreground">&ldquo;{review.quote}&rdquo;</p>
                <p className="text-xs text-muted-foreground">{review.service}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mt-12">
        <h2 className="text-3xl font-semibold">Patient stories</h2>
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {patientStories.map((story) => (
            <Card key={story.id}>
              <CardHeader>
                <CardTitle className="text-xl">{story.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p className="text-muted-foreground">{story.summary}</p>
                <p className="font-medium">{story.outcome}</p>
                <p className="text-xs text-primary">{story.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
