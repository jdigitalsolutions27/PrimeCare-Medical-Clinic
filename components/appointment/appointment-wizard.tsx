"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar, CalendarCheck2, CheckCircle2, MessageCircle, ShieldCheck } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { doctors } from "@/data/doctors";
import { business } from "@/data/business";
import { services } from "@/data/services";
import { symptomConcerns } from "@/data/symptomNavigator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const appointmentSchema = z
  .object({
    serviceSlug: z.string().optional(),
    concern: z.string().optional(),
    doctorSlug: z.string().optional(),
    date: z.string().min(1, "Please select a date"),
    time: z.string().min(1, "Please select a time slot"),
    name: z.string().min(2, "Please enter your full name"),
    phone: z.string().min(7, "Please enter a valid phone number"),
    email: z.string().email("Please enter a valid email").optional().or(z.literal("")),
    ageGroup: z.string().min(1, "Please select age group"),
    reason: z.string().min(8, "Please provide a short reason"),
    insurance: z.string().optional(),
    consent: z.boolean().refine((value) => value, "You must accept the privacy and consent statement"),
  })
  .refine((values) => values.serviceSlug || values.concern, {
    message: "Choose a service or concern to continue",
    path: ["serviceSlug"],
  });

type AppointmentInput = z.infer<typeof appointmentSchema>;

const timeSlots = ["08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:30 AM", "11:30 AM", "01:30 PM", "02:00 PM", "03:30 PM", "04:00 PM", "05:00 PM"];

const stepLabels = ["Care Type", "Doctor", "Date & Time", "Patient Info", "Reason", "Consent"];

const stepFields: (keyof AppointmentInput)[][] = [
  ["serviceSlug", "concern"],
  ["doctorSlug"],
  ["date", "time"],
  ["name", "phone", "email", "ageGroup"],
  ["reason"],
  ["insurance", "consent"],
];

type PrefillInput = Partial<Record<keyof AppointmentInput | "doctor", string>>;

export function AppointmentWizard({ prefill }: { prefill?: PrefillInput }) {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<AppointmentInput>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      serviceSlug: prefill?.serviceSlug || "",
      concern: prefill?.concern || "",
      doctorSlug: prefill?.doctor || "",
      date: prefill?.date || "",
      time: prefill?.time || "",
      name: prefill?.name || "",
      phone: prefill?.phone || "",
      email: "",
      ageGroup: "",
      reason: "",
      insurance: "",
      consent: false,
    },
    mode: "onTouched",
  });

  const progress = useMemo(() => ((step + 1) / stepLabels.length) * 100, [step]);

  const nextStep = async () => {
    const isValid = await form.trigger(stepFields[step], { shouldFocus: true });
    if (!isValid) return;
    setStep((prev) => Math.min(prev + 1, stepLabels.length - 1));
  };

  const previousStep = () => setStep((prev) => Math.max(prev - 1, 0));

  const onSubmit = async (values: AppointmentInput) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Unable to submit appointment.");
      }

      const payload = await response.json();
      toast({
        title: "Appointment submitted",
        description: "Redirecting to confirmation page.",
      });

      const query = new URLSearchParams({
        ref: payload.reference,
        service: payload.serviceName,
        date: values.date,
        time: values.time,
        name: values.name,
      }).toString();

      router.push(`/appointment/success?${query}`);
    } catch {
      toast({
        title: "Submission failed",
        description: "Please try again or contact the clinic.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="space-y-4 border-b bg-secondary/30">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl">Book Appointment</CardTitle>
          <p className="text-sm text-muted-foreground">
            Step {step + 1} of {stepLabels.length}
          </p>
        </div>
        <Progress value={progress} />
        <div className="flex gap-2 overflow-x-auto pb-1">
          {stepLabels.map((label, index) => (
            <div
              key={label}
              className={`min-w-fit rounded-lg px-3 py-2 text-xs ${index <= step ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground"}`}
            >
              {label}
            </div>
          ))}
        </div>
      </CardHeader>
      <CardContent className="space-y-6 p-6">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {step === 0 ? (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Select Department / Service</Label>
                <Select
                  value={form.watch("serviceSlug")}
                  onValueChange={(value) => form.setValue("serviceSlug", value, { shouldValidate: true })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.slug} value={service.slug}>
                        {service.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Or choose concern</Label>
                <Select value={form.watch("concern")} onValueChange={(value) => form.setValue("concern", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select concern (optional)" />
                  </SelectTrigger>
                  <SelectContent>
                    {symptomConcerns.map((concern) => (
                      <SelectItem key={concern.id} value={concern.label}>
                        {concern.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {form.formState.errors.serviceSlug ? <p className="text-sm text-destructive">{form.formState.errors.serviceSlug.message}</p> : null}
            </div>
          ) : null}

          {step === 1 ? (
            <div className="space-y-2">
              <Label>Choose doctor (optional)</Label>
              <Select value={form.watch("doctorSlug")} onValueChange={(value) => form.setValue("doctorSlug", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Any available doctor" />
                </SelectTrigger>
                <SelectContent>
                  {doctors.map((doctor) => (
                    <SelectItem key={doctor.slug} value={doctor.slug}>
                      {doctor.name} - {doctor.specialties[0]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ) : null}

          {step === 2 ? (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Preferred date</Label>
                <Input type="date" {...form.register("date")} />
                {form.formState.errors.date ? <p className="text-sm text-destructive">{form.formState.errors.date.message}</p> : null}
              </div>
              <div className="space-y-2">
                <Label>Select time slot</Label>
                <div className="grid gap-2 sm:grid-cols-3">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => form.setValue("time", slot, { shouldValidate: true })}
                      className={`rounded-lg border px-3 py-2 text-sm ${form.watch("time") === slot ? "border-primary bg-primary text-primary-foreground" : "hover:bg-secondary"}`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
                {form.formState.errors.time ? <p className="text-sm text-destructive">{form.formState.errors.time.message}</p> : null}
              </div>
            </div>
          ) : null}

          {step === 3 ? (
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Full name</Label>
                <Input {...form.register("name")} />
                {form.formState.errors.name ? <p className="text-sm text-destructive">{form.formState.errors.name.message}</p> : null}
              </div>
              <div className="space-y-2">
                <Label>Phone</Label>
                <Input {...form.register("phone")} />
                {form.formState.errors.phone ? <p className="text-sm text-destructive">{form.formState.errors.phone.message}</p> : null}
              </div>
              <div className="space-y-2">
                <Label>Email (optional)</Label>
                <Input type="email" {...form.register("email")} />
                {form.formState.errors.email ? <p className="text-sm text-destructive">{form.formState.errors.email.message}</p> : null}
              </div>
              <div className="space-y-2">
                <Label>Age group</Label>
                <Select value={form.watch("ageGroup")} onValueChange={(value) => form.setValue("ageGroup", value, { shouldValidate: true })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select age group" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Child">Child</SelectItem>
                    <SelectItem value="Adult">Adult</SelectItem>
                    <SelectItem value="Senior">Senior</SelectItem>
                  </SelectContent>
                </Select>
                {form.formState.errors.ageGroup ? <p className="text-sm text-destructive">{form.formState.errors.ageGroup.message}</p> : null}
              </div>
            </div>
          ) : null}

          {step === 4 ? (
            <div className="space-y-2">
              <Label>Reason for visit</Label>
              <Textarea
                rows={5}
                placeholder="Share a short reason. Avoid private sensitive details."
                {...form.register("reason")}
              />
              {form.formState.errors.reason ? <p className="text-sm text-destructive">{form.formState.errors.reason.message}</p> : null}
            </div>
          ) : null}

          {step === 5 ? (
            <div className="space-y-5">
              <div className="space-y-2">
                <Label>Insurance / HMO (optional)</Label>
                <Input placeholder="Provider name" {...form.register("insurance")} />
              </div>
              <div className="rounded-xl border border-dashed p-4">
                <div className="flex items-start gap-3">
                  <Checkbox id="consent" checked={form.watch("consent")} onCheckedChange={(value) => form.setValue("consent", Boolean(value), { shouldValidate: true })} />
                  <label htmlFor="consent" className="text-sm text-muted-foreground">
                    I consent to PrimeCare processing my information for scheduling and care coordination according to the clinic privacy policy.
                  </label>
                </div>
                {form.formState.errors.consent ? <p className="mt-2 text-sm text-destructive">{form.formState.errors.consent.message}</p> : null}
              </div>
            </div>
          ) : null}

          <div className="flex flex-wrap items-center gap-3">
            {step > 0 ? (
              <Button type="button" variant="outline" onClick={previousStep}>
                Back
              </Button>
            ) : null}

            {step < stepLabels.length - 1 ? (
              <Button type="button" onClick={nextStep}>
                Continue
              </Button>
            ) : (
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Confirm Appointment"}
              </Button>
            )}
          </div>
        </form>

        {isSubmitting ? (
          <div className="space-y-3">
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-4 w-56" />
            <Skeleton className="h-4 w-40" />
          </div>
        ) : null}

        <div className="rounded-2xl border bg-secondary/40 p-4 text-sm">
          <p className="font-semibold">Need quick access instead?</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Button asChild variant="outline" size="sm">
              <Link href={`tel:${business.phones.main}`}>
                <Calendar />
                Call Clinic
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href={`https://wa.me/${business.phones.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer">
                <MessageCircle />
                WhatsApp
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-3 rounded-xl border p-4 text-sm text-muted-foreground md:grid-cols-3">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            Minimal data required
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-primary" />
            Privacy and confidentiality standards
          </div>
          <div className="flex items-center gap-2">
            <CalendarCheck2 className="h-4 w-4 text-primary" />
            Confirmation reference provided
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
