import { PageHero } from "@/components/shared/page-hero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";
import { images } from "@/data/images";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "FAQ",
  description: "Frequently asked questions about appointments, policies, pricing, and telemedicine.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        description="Get quick answers about appointments, costs, services, and clinic policies."
        image={images.reception}
      />
      <section className="container mt-12">
        <Accordion type="single" collapsible className="rounded-2xl border bg-background px-6">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`faq-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}
