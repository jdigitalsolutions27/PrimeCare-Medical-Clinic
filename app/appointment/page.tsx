import { PageHero } from "@/components/shared/page-hero";
import { AppointmentWizard } from "@/components/appointment/appointment-wizard";
import { images } from "@/data/images";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Book Appointment",
  description: "Multi-step appointment booking with service, doctor, slot, and confirmation reference.",
  path: "/appointment",
});

type AppointmentPageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function AppointmentPage({ searchParams }: AppointmentPageProps) {
  const normalized = {
    serviceSlug: typeof searchParams?.serviceSlug === "string" ? searchParams.serviceSlug : "",
    concern: typeof searchParams?.concern === "string" ? searchParams.concern : "",
    doctor: typeof searchParams?.doctor === "string" ? searchParams.doctor : "",
    date: typeof searchParams?.date === "string" ? searchParams.date : "",
    time: typeof searchParams?.time === "string" ? searchParams.time : "",
    name: typeof searchParams?.name === "string" ? searchParams.name : "",
    phone: typeof searchParams?.phone === "string" ? searchParams.phone : "",
  };

  return (
    <>
      <PageHero
        title="Premium Scheduling Experience"
        description="Select care type, doctor, and a convenient time in a guided step-by-step flow."
        image={images.reception}
      />
      <section className="container mt-12">
        <AppointmentWizard prefill={normalized} />
      </section>
    </>
  );
}
