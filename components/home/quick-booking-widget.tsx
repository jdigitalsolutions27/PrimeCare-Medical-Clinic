"use client";

import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarClock } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

const quickBookingSchema = z.object({
  serviceSlug: z.string().min(1, "Please choose a service"),
  date: z.string().min(1, "Please choose a date"),
  time: z.string().min(1, "Please choose a time slot"),
  name: z.string().min(2, "Enter your name"),
  phone: z.string().min(7, "Enter a valid phone number"),
});

type QuickBookingInput = z.infer<typeof quickBookingSchema>;

const timeSlots = ["08:00 AM", "09:30 AM", "11:00 AM", "02:00 PM", "03:30 PM", "05:00 PM"];

export function QuickBookingWidget() {
  const router = useRouter();
  const form = useForm<QuickBookingInput>({
    resolver: zodResolver(quickBookingSchema),
    defaultValues: {
      serviceSlug: "",
      date: "",
      time: "",
      name: "",
      phone: "",
    },
  });

  const onSubmit = (values: QuickBookingInput) => {
    const params = new URLSearchParams(values).toString();
    toast({
      title: "Quick booking captured",
      description: "Complete the full details on the appointment page.",
    });
    router.push(`/appointment?${params}`);
  };

  return (
    <Card className="glass-card border-white/60">
      <CardHeader className="space-y-2">
        <CardTitle className="flex items-center gap-2 text-xl">
          <CalendarClock className="h-5 w-5 text-primary" />
          Quick Appointment Widget
        </CardTitle>
        <p className="text-sm text-muted-foreground">Secure a preferred slot in under a minute.</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          <div className="space-y-2 sm:col-span-2 lg:col-span-2">
            <Label>Department / Service</Label>
            <Select value={form.watch("serviceSlug")} onValueChange={(value) => form.setValue("serviceSlug", value, { shouldValidate: true })}>
              <SelectTrigger>
                <SelectValue placeholder="Choose a service" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service.slug} value={service.slug}>
                    {service.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {form.formState.errors.serviceSlug ? <p className="text-xs text-destructive">{form.formState.errors.serviceSlug.message}</p> : null}
          </div>

          <div className="space-y-2 lg:col-span-1">
            <Label>Date</Label>
            <Input type="date" {...form.register("date")} />
            {form.formState.errors.date ? <p className="text-xs text-destructive">{form.formState.errors.date.message}</p> : null}
          </div>

          <div className="space-y-2 lg:col-span-1">
            <Label>Time</Label>
            <Select value={form.watch("time")} onValueChange={(value) => form.setValue("time", value, { shouldValidate: true })}>
              <SelectTrigger>
                <SelectValue placeholder="Slot" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((slot) => (
                  <SelectItem key={slot} value={slot}>
                    {slot}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {form.formState.errors.time ? <p className="text-xs text-destructive">{form.formState.errors.time.message}</p> : null}
          </div>

          <div className="space-y-2 sm:col-span-1 lg:col-span-1">
            <Label>Name</Label>
            <Input placeholder="Full name" {...form.register("name")} />
            {form.formState.errors.name ? <p className="text-xs text-destructive">{form.formState.errors.name.message}</p> : null}
          </div>

          <div className="space-y-2 sm:col-span-1 lg:col-span-1">
            <Label>Phone</Label>
            <Input placeholder="+1 ..." {...form.register("phone")} />
            {form.formState.errors.phone ? <p className="text-xs text-destructive">{form.formState.errors.phone.message}</p> : null}
          </div>

          <div className="sm:col-span-2 lg:col-span-6">
            <Button type="submit" className="w-full md:w-auto">
              Continue Full Booking
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
