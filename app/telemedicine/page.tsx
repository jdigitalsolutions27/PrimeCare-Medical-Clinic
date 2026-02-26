import { Laptop2, ShieldAlert, Video } from "lucide-react";

import { TelemedicineForm } from "@/components/telemedicine/telemedicine-form";
import { PageHero } from "@/components/shared/page-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { images } from "@/data/images";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Telemedicine",
  description: "Request a virtual consultation for selected non-emergency concerns.",
  path: "/telemedicine",
});

const process = [
  "Submit request with preferred date and concern.",
  "Clinic team confirms suitable teleconsult slot.",
  "Receive secure meeting link and instructions.",
  "Doctor evaluates and advises next steps.",
];

export default function TelemedicinePage() {
  return (
    <>
      <PageHero
        title="Telemedicine Consultation"
        description="Convenient virtual care for selected non-emergency concerns and follow-up visits."
        image={images.telemedicine}
      />
      <section className="container mt-12 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Video className="h-5 w-5 text-primary" />
              How telemedicine works
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            {process.map((step, index) => (
              <p key={step} className="rounded-xl border p-3">
                <span className="mr-2 font-semibold text-primary">{index + 1}.</span>
                {step}
              </p>
            ))}
            <div className="rounded-xl border border-dashed border-primary/40 bg-primary/5 p-3 text-xs text-muted-foreground">
              <p className="flex items-start gap-2">
                <ShieldAlert className="mt-0.5 h-4 w-4 text-primary" />
                Telemedicine is not for medical emergencies. Seek emergency services for severe symptoms.
              </p>
            </div>
            <p className="flex items-center gap-2 text-xs text-muted-foreground">
              <Laptop2 className="h-4 w-4" />
              Use stable internet, good lighting, and keep medications nearby.
            </p>
          </CardContent>
        </Card>
        <TelemedicineForm />
      </section>
    </>
  );
}
