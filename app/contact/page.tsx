import Link from "next/link";
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { ContactForm } from "@/components/contact/contact-form";
import { PageHero } from "@/components/shared/page-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { business, fullAddress } from "@/data/business";
import { images } from "@/data/images";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Contact PrimeCare clinic by call, WhatsApp, or message form. View map and operating hours.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact PrimeCare"
        description="Reach our team for appointments, service inquiries, and care coordination."
        image={images.mapPreview}
      />
      <section className="container mt-12 grid gap-6 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Call us</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> {business.phones.main}</p>
            <p className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-primary" /> WhatsApp available</p>
            <Link href={`tel:${business.phones.main}`} className="text-primary hover:underline">Call now</Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Visit us</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <p className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> {fullAddress}</p>
            <p className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-primary" /> {business.hours[0].day}: {business.hours[0].time}</p>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> {business.emails.info}</p>
          </CardContent>
        </Card>
        <ContactForm />
      </section>

      <section className="container mt-6">
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>Map</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-hidden rounded-2xl border">
              <iframe title="Clinic map" src={business.mapEmbedUrl} className="h-[380px] w-full" loading="lazy" />
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
