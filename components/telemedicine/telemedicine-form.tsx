"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const telemedicineSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(7),
  concern: z.string().min(6),
  preferredDate: z.string().min(1),
});

type TelemedicineInput = z.infer<typeof telemedicineSchema>;

export function TelemedicineForm() {
  const form = useForm<TelemedicineInput>({
    resolver: zodResolver(telemedicineSchema),
    defaultValues: {
      name: "",
      phone: "",
      concern: "",
      preferredDate: "",
    },
  });

  const onSubmit = (values: TelemedicineInput) => {
    toast({
      title: "Teleconsult request sent",
      description: "This is a demo endpoint. Connect your backend to activate scheduling.",
    });
    form.reset(values);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Request online consultation</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <Label>Name</Label>
            <Input {...form.register("name")} />
          </div>
          <div className="space-y-2">
            <Label>Phone</Label>
            <Input {...form.register("phone")} />
          </div>
          <div className="space-y-2">
            <Label>Preferred date</Label>
            <Input type="date" {...form.register("preferredDate")} />
          </div>
          <div className="space-y-2">
            <Label>Concern</Label>
            <Textarea rows={4} placeholder="Short description. Avoid sensitive details." {...form.register("concern")} />
          </div>
          <Button type="submit">Request teleconsult</Button>
        </form>
      </CardContent>
    </Card>
  );
}
