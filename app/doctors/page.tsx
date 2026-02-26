import Link from "next/link";

import { PageHero } from "@/components/shared/page-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { doctors } from "@/data/doctors";
import { images } from "@/data/images";
import { buildMetadata } from "@/lib/metadata";
import { ImageWithFallback } from "@/components/shared/image-with-fallback";

export const metadata = buildMetadata({
  title: "Doctors",
  description: "Meet PrimeCare specialists and book with the right physician for your needs.",
  path: "/doctors",
});

export default function DoctorsPage() {
  return (
    <>
      <PageHero
        title="Meet Our Specialists"
        description="A multidisciplinary team focused on clear communication, clinical rigor, and compassionate care."
        image={images.doctorConsult}
      />

      <section className="container mt-12 space-y-8">
        <div className="max-w-3xl space-y-3">
          <p className="text-sm uppercase tracking-[0.18em] text-primary">Clinical Team</p>
          <h2 className="text-3xl font-semibold">Trusted physicians with patient-first standards.</h2>
          <p className="text-muted-foreground">
            All clinicians are licensed professionals. Care decisions are individualized, evidence-informed, and coordinated across departments when needed.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {doctors.map((doctor) => (
            <Card key={doctor.slug} className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
              <div className="relative h-56">
                <ImageWithFallback src={doctor.image} alt={doctor.name} fill className="object-cover" fallbackLabel={doctor.name} />
              </div>
              <CardHeader className="space-y-2">
                <CardTitle>{doctor.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{doctor.title}</p>
                <p className="text-xs text-muted-foreground">{doctor.credentials}</p>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex flex-wrap gap-2">
                  {doctor.specialties.map((specialty) => (
                    <Badge key={specialty} variant="secondary">
                      {specialty}
                    </Badge>
                  ))}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Schedule</p>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {doctor.schedule.map((slot) => (
                      <Badge key={slot} variant="outline">
                        {slot}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Languages</p>
                  <p className="text-muted-foreground">{doctor.languages.join(", ")}</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={`/appointment?doctor=${doctor.slug}`}>Book with doctor</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
