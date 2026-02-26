import { PageHero } from "@/components/shared/page-hero";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { images } from "@/data/images";
import { pricing } from "@/data/pricing";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Pricing Guide",
  description: "Transparent sample pricing ranges for consultations, tests, vaccines, and checkup packages.",
  path: "/pricing",
});

function PricingBlock({ title, items }: { title: string; items: { label: string; range: string }[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {items.map((item) => (
          <div key={item.label} className="flex items-center justify-between rounded-xl border p-3 text-sm">
            <span>{item.label}</span>
            <Badge variant="outline">{item.range}</Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default function PricingPage() {
  return (
    <>
      <PageHero
        title="Pricing Guide"
        description="Clear sample ranges so patients can plan confidently before visiting."
        image={images.clinicInterior}
      />
      <section className="container mt-12 grid gap-6 lg:grid-cols-2">
        <PricingBlock title="Consultation ranges" items={pricing.consultation} />
        <PricingBlock title="Laboratory ranges" items={pricing.labs} />
        <PricingBlock title="Vaccine ranges" items={pricing.vaccines} />
        <Card>
          <CardHeader>
            <CardTitle>Health checkup packages</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {pricing.packages.map((pkg) => (
              <div key={pkg.name} className="rounded-2xl border p-4">
                <div className="flex items-center justify-between">
                  <p className="font-semibold">{pkg.name}</p>
                  <Badge>{pkg.range}</Badge>
                </div>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                  {pkg.inclusions.map((inclusion) => (
                    <li key={inclusion}>{inclusion}</li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="container mt-6 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>What affects cost?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            {pricing.factors.map((factor) => (
              <p key={factor} className="rounded-xl border p-3">
                {factor}
              </p>
            ))}
          </CardContent>
        </Card>
        <Card className="bg-secondary/40">
          <CardHeader>
            <CardTitle>Pricing disclaimer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{pricing.disclaimer}</p>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
