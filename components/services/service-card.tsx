import Link from "next/link";

import type { Service } from "@/data/services";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ImageWithFallback } from "@/components/shared/image-with-fallback";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="relative h-48">
        <ImageWithFallback src={service.image} alt={service.name} fill className="object-cover" fallbackLabel={service.name} />
      </div>
      <CardHeader className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">{service.category}</Badge>
          <Badge variant="outline">{service.duration}</Badge>
          <Tooltip>
            <TooltipTrigger asChild>
              <Badge variant="outline">{service.priceRange}</Badge>
            </TooltipTrigger>
            <TooltipContent>Sample range only. Final fee depends on assessment and tests.</TooltipContent>
          </Tooltip>
        </div>
        <CardTitle className="text-xl">{service.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm">
        <p className="text-muted-foreground">{service.shortDescription}</p>
        <div>
          <p className="font-medium">Best for:</p>
          <p className="text-muted-foreground">{service.bestFor.join(", ")}</p>
        </div>
        <div>
          <p className="font-medium">What to expect:</p>
          <p className="text-muted-foreground">{service.whatToExpect}</p>
        </div>
        <p className="text-xs text-muted-foreground">Sample range only. Final pricing depends on physician assessment and tests.</p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button asChild variant="outline">
          <Link href={`/services/${service.slug}`}>View details</Link>
        </Button>
        <Button asChild>
          <Link href={`/appointment?serviceSlug=${service.slug}`}>Book</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
