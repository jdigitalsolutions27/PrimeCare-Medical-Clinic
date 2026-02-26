import { Star } from "lucide-react";

import { testimonials } from "@/data/testimonials";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { EmblaCarousel } from "@/components/shared/embla-carousel";

export function TestimonialsCarousel() {
  const slides = testimonials.map((review) => (
    <Card key={review.id} className="h-full">
      <CardHeader className="space-y-2">
        <div className="flex items-center gap-1 text-amber-500">
          {Array.from({ length: review.rating }).map((_, index) => (
            <Star key={index} className="h-4 w-4 fill-current" />
          ))}
        </div>
        <p className="font-semibold">{review.name}</p>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground">&ldquo;{review.quote}&rdquo;</p>
        <p className="text-xs text-muted-foreground">
          {review.service} • {new Date(review.date).toLocaleDateString()}
        </p>
      </CardContent>
    </Card>
  ));

  return <EmblaCarousel slides={slides} />;
}
