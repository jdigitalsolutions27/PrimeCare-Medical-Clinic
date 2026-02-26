import Link from "next/link";

import { services } from "@/data/services";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ImageWithFallback } from "@/components/shared/image-with-fallback";

export function ServicesGrid({ limit = 8 }: { limit?: number }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {services.slice(0, limit).map((service) => (
        <Card key={service.slug} className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
          <div className="relative h-40">
            <ImageWithFallback src={service.image} alt={service.name} fill className="object-cover" fallbackLabel={service.name} />
          </div>
          <CardHeader className="space-y-2">
            <Badge variant="secondary" className="w-fit">{service.category}</Badge>
            <CardTitle className="text-lg leading-snug">{service.name}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">{service.shortDescription}</p>
            <div className="flex flex-wrap gap-1.5">
              {service.bestFor.slice(0, 2).map((item) => (
                <Badge key={item} variant="outline">
                  Best for: {item}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="gap-2">
            <Button asChild size="sm" variant="outline">
              <Link href={`/services/${service.slug}`}>View details</Link>
            </Button>
            <Button asChild size="sm">
              <Link href={`/appointment?serviceSlug=${service.slug}`}>Book</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
