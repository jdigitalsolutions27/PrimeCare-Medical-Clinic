"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, ShieldAlert } from "lucide-react";

import { navigatorDisclaimer, symptomConcerns } from "@/data/symptomNavigator";
import { services } from "@/data/services";
import { useBookingStore } from "@/lib/booking-store";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SymptomNavigator({ compact = false }: { compact?: boolean }) {
  const [selectedConcern, setSelectedConcern] = useState(symptomConcerns[0]?.id || "");
  const setConcern = useBookingStore((state) => state.setConcern);
  const setServiceSlug = useBookingStore((state) => state.setServiceSlug);

  const current = useMemo(() => symptomConcerns.find((item) => item.id === selectedConcern), [selectedConcern]);
  const recommendations = useMemo(() => {
    if (!current) return [];
    return current.recommendedServiceSlugs
      .map((slug) => services.find((service) => service.slug === slug))
      .filter(Boolean);
  }, [current]);

  return (
    <Card className="overflow-hidden">
      <CardHeader className="space-y-2">
        <Badge variant="secondary" className="w-fit">Find the Right Care</Badge>
        <CardTitle className="text-2xl">Interactive Symptom Navigator</CardTitle>
        <p className="text-sm text-muted-foreground">
          Choose a concern to see recommended departments and book faster.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-wrap gap-2">
          {(compact ? symptomConcerns.slice(0, 8) : symptomConcerns).map((concern) => (
            <button
              key={concern.id}
              type="button"
              onClick={() => setSelectedConcern(concern.id)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                concern.id === selectedConcern ? "border-primary bg-primary text-primary-foreground" : "bg-background hover:bg-secondary"
              }`}
            >
              {concern.label}
            </button>
          ))}
        </div>

        <div className="rounded-2xl border bg-secondary/30 p-4">
          <h4 className="font-semibold">{current?.label || "Recommended care"}</h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {recommendations.map((service) =>
              service ? (
                <Badge key={service.slug} variant="outline">
                  {service.name}
                </Badge>
              ) : null
            )}
          </div>
          {current?.note ? <p className="mt-3 text-sm text-muted-foreground">{current.note}</p> : null}
          <div className="mt-4">
            <Button
              asChild
              onClick={() => {
                setConcern(current?.label || "");
                if (recommendations[0]) {
                  setServiceSlug(recommendations[0].slug);
                }
              }}
            >
              <Link href={`/appointment?concern=${encodeURIComponent(current?.label || "")}&serviceSlug=${recommendations[0]?.slug || ""}`}>
                Book Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex items-start gap-2 rounded-xl border border-dashed border-primary/40 bg-primary/5 p-3 text-xs text-muted-foreground">
          <ShieldAlert className="mt-0.5 h-4 w-4 text-primary" />
          <p>{navigatorDisclaimer}</p>
        </div>
      </CardContent>
    </Card>
  );
}
