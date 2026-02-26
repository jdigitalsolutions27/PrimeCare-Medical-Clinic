import Link from "next/link";

import { doctors } from "@/data/doctors";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { EmblaCarousel } from "@/components/shared/embla-carousel";
import { ImageWithFallback } from "@/components/shared/image-with-fallback";

export function DoctorsCarousel() {
  const slides = doctors.map((doctor) => (
    <Card key={doctor.slug} className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
      <div className="relative h-56">
        <ImageWithFallback src={doctor.image} alt={doctor.name} fill className="object-cover" fallbackLabel={doctor.name} />
      </div>
      <CardHeader className="space-y-2">
        <CardTitle>{doctor.name}</CardTitle>
        <p className="text-sm text-muted-foreground">{doctor.title}</p>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground">{doctor.credentials}</p>
        <div className="flex flex-wrap gap-2">
          {doctor.specialties.slice(0, 2).map((specialty) => (
            <Badge key={specialty} variant="outline">
              {specialty}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/appointment?doctor=${doctor.slug}`}>Book with doctor</Link>
        </Button>
      </CardFooter>
    </Card>
  ));

  return <EmblaCarousel slides={slides} />;
}
