import Link from "next/link";
import { notFound } from "next/navigation";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/metadata";
import { ImageWithFallback } from "@/components/shared/image-with-fallback";

type ServiceDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: ServiceDetailPageProps) {
  const service = services.find((entry) => entry.slug === params.slug);
  if (!service) {
    return buildMetadata({
      title: "Service not found",
      description: "Requested service does not exist.",
      path: "/services",
    });
  }
  return buildMetadata({
    title: service.name,
    description: service.shortDescription,
    path: `/services/${service.slug}`,
  });
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = services.find((entry) => entry.slug === params.slug);
  if (!service) notFound();

  return (
    <section className="container mt-10 space-y-10">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <Badge>{service.category}</Badge>
          <h1 className="text-4xl font-semibold">{service.name}</h1>
          <p className="text-muted-foreground">{service.overview}</p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">Duration: {service.duration}</Badge>
            <Badge variant="outline">Price range: {service.priceRange}</Badge>
          </div>
          <Button asChild>
            <Link href={`/appointment?serviceSlug=${service.slug}`}>Book appointment</Link>
          </Button>
        </div>
        <div className="relative min-h-[320px] overflow-hidden rounded-3xl border">
          <ImageWithFallback src={service.image} alt={service.name} fill className="object-cover" fallbackLabel={service.name} />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardContent className="space-y-5 p-6">
            <h2 className="text-2xl font-semibold">Who it&apos;s for</h2>
            <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
              {service.whoItsFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h2 className="text-2xl font-semibold">What to expect</h2>
            <ol className="space-y-3">
              {service.steps.map((step, index) => (
                <li key={step} className="rounded-xl border p-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Step {index + 1}</span>
                  <p className="mt-1">{step}</p>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-4 p-6">
            <h3 className="text-xl font-semibold">Preparation tips</h3>
            <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              {service.preparationTips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold">Service FAQ</h2>
          <Accordion type="single" collapsible className="mt-4">
            {service.faqs.map((faq, index) => (
              <AccordionItem value={`faq-${index}`} key={faq.question}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </section>
  );
}
