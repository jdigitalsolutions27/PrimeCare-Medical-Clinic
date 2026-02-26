import { ClipboardList, Clock3, FileText, Shield } from "lucide-react";

import { PageHero } from "@/components/shared/page-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { images } from "@/data/images";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Patient Guide",
  description: "Know what to expect before, during, and after your clinic visit.",
  path: "/patient-guide",
});

const checklist = ["Valid ID", "Insurance / HMO card (if any)", "Current medication list", "Prior test results or records", "Emergency contact details"];
const policies = [
  "Arrive 10-15 minutes before your scheduled time.",
  "Cancel or reschedule at least 12 hours in advance when possible.",
  "Late arrivals may be accommodated on next available slot.",
  "Privacy and confidentiality standards apply to all visits.",
];

const journey = [
  "Check-in at reception",
  "Vitals and basic triage",
  "Doctor consultation",
  "Lab test if requested",
  "Prescription and care instructions",
  "Follow-up scheduling",
];

export default function PatientGuidePage() {
  return (
    <>
      <PageHero
        title="Patient Guide"
        description="Prepare confidently for your visit with clear expectations and practical checklists."
        image={images.reception}
      />
      <section className="container mt-12 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ClipboardList className="h-5 w-5 text-primary" />
              First visit checklist
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm">
              {checklist.map((item) => (
                <li key={item} className="rounded-xl border p-3">
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Process timeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-3 text-sm">
              {journey.map((step, index) => (
                <li key={step} className="rounded-xl border p-3">
                  <span className="mr-2 font-semibold text-primary">{index + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </section>

      <section className="container mt-6 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              What to bring
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>Bring any records related to your current concern to help physicians make faster, safer decisions.</p>
            <p>For children and seniors, caregivers may accompany the patient where space and privacy rules permit.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock3 className="h-5 w-5 text-primary" />
              Policies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            {policies.map((policy) => (
              <p key={policy} className="rounded-xl border p-3 text-muted-foreground">
                {policy}
              </p>
            ))}
          </CardContent>
        </Card>
      </section>
    </>
  );
}
