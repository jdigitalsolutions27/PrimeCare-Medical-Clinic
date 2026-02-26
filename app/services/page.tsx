import { PageHero } from "@/components/shared/page-hero";
import { ServicesCatalog } from "@/components/services/services-catalog";
import { images } from "@/data/images";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Services",
  description: "Explore PrimeCare departments, specialty clinics, diagnostics, and preventive services.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services & Departments"
        description="Find the right department for your concern and understand what to expect before you arrive."
        image={images.clinicInterior}
      />
      <section className="container mt-12">
        <ServicesCatalog />
      </section>
    </>
  );
}
