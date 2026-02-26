"use client";

import { useState } from "react";
import { Activity, ClipboardCheck, FlaskConical, Pill, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";

const steps = [
  { label: "Check-in", detail: "Fast reception and secure registration.", icon: ClipboardCheck },
  { label: "Vitals", detail: "Blood pressure, temperature, and triage measurements.", icon: Activity },
  { label: "Doctor Consultation", detail: "Focused clinical assessment and care plan.", icon: Stethoscope },
  { label: "Lab (if needed)", detail: "On-site testing with coordinated physician review.", icon: FlaskConical },
  { label: "Prescription", detail: "Medication and treatment guidance explained clearly.", icon: Pill },
  { label: "Follow-up", detail: "Progress review and continuity of care.", icon: ClipboardCheck },
];

export function PatientJourneyTimeline() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-4 lg:grid-cols-[1.1fr_1fr]">
      <div className="grid gap-3 sm:grid-cols-2">
        {steps.map((step, index) => (
          <button
            key={step.label}
            onClick={() => setActive(index)}
            className={`rounded-2xl border p-4 text-left transition-all ${
              active === index ? "border-primary bg-primary/10 shadow-soft" : "hover:bg-secondary/40"
            }`}
          >
            <step.icon className="mb-2 h-5 w-5 text-primary" />
            <div className="text-sm font-semibold">{step.label}</div>
          </button>
        ))}
      </div>
      <Card className="overflow-hidden">
        <CardContent className="p-6">
          <motion.div
            key={steps[active].label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="space-y-3"
          >
            <p className="text-sm uppercase tracking-[0.16em] text-primary">Patient Journey</p>
            <h3 className="text-2xl font-semibold">{steps[active].label}</h3>
            <p className="text-muted-foreground">{steps[active].detail}</p>
          </motion.div>
        </CardContent>
      </Card>
    </div>
  );
}
