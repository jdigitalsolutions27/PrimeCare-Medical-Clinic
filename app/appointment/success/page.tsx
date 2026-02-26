import Link from "next/link";
import { CalendarPlus2, CheckCircle2, MessageCircle } from "lucide-react";

import { business } from "@/data/business";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Appointment Confirmed",
  description: "Appointment request submitted with reference number and next steps.",
  path: "/appointment/success",
});

type SuccessPageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

const timeline = [
  "Arrival reminder will be sent before your schedule.",
  "Bring a valid ID and prior records if available.",
  "Complete check-in and vitals on arrival.",
  "Meet your doctor and review your care plan.",
];

export default function AppointmentSuccessPage({ searchParams }: SuccessPageProps) {
  const reference = typeof searchParams?.ref === "string" ? searchParams.ref : "Pending";
  const service = typeof searchParams?.service === "string" ? searchParams.service : "General Consultation";
  const date = typeof searchParams?.date === "string" ? searchParams.date : "";
  const time = typeof searchParams?.time === "string" ? searchParams.time : "";
  const name = typeof searchParams?.name === "string" ? searchParams.name : "Patient";

  const whatsappMessage = encodeURIComponent(
    `Hello PrimeCare, this is ${name}. My booking reference is ${reference} for ${service} on ${date} at ${time}.`
  );

  const icsQuery = new URLSearchParams({
    name,
    service,
    date,
    time,
    reference,
  }).toString();

  return (
    <section className="container mt-12">
      <Card className="mx-auto max-w-3xl">
        <CardHeader className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <CardTitle className="text-3xl">Appointment Request Confirmed</CardTitle>
          <p className="text-muted-foreground">Your reference number is below. Our team may contact you if slot adjustments are needed.</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 rounded-2xl border bg-secondary/30 p-5 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Reference number</p>
              <p className="text-2xl font-semibold">{reference}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Service</p>
              <p className="font-medium">{service}</p>
              <p className="text-sm text-muted-foreground">
                {date} {time ? `• ${time}` : ""}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href={`https://wa.me/${business.phones.whatsapp.replace(/\D/g, "")}?text=${whatsappMessage}`} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                Send via WhatsApp
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={`/api/appointments?${icsQuery}`}>
                <CalendarPlus2 className="mr-2 h-4 w-4" />
                Add to calendar (.ics)
              </Link>
            </Button>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Next steps</h3>
            <ol className="space-y-2">
              {timeline.map((item, index) => (
                <li key={item} className="rounded-xl border p-3 text-sm">
                  <span className="mr-2 font-semibold text-primary">{index + 1}.</span>
                  {item}
                </li>
              ))}
            </ol>
          </div>

          <div className="flex gap-2">
            <Button asChild variant="outline">
              <Link href="/">Back to Home</Link>
            </Button>
            <Button asChild>
              <Link href="/appointment">Book another appointment</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
