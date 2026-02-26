"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function EmblaCarousel({
  slides,
  className,
}: {
  slides: React.ReactNode[];
  className?: string;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className={cn("space-y-5", className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-4 flex">
          {slides.map((slide, index) => (
            <div key={index} className="min-w-0 flex-[0_0_100%] pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
              {slide}
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" size="icon" disabled={!canPrev} onClick={() => emblaApi?.scrollPrev()}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" disabled={!canNext} onClick={() => emblaApi?.scrollNext()}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
