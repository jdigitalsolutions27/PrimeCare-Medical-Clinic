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

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(7, "Valid phone is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(8, "Please add a short message"),
});

type ContactInput = z.infer<typeof contactSchema>;

export function ContactForm() {
  const form = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: ContactInput) => {
    toast({
      title: "Message submitted",
      description: "Thanks. This is a mock contact endpoint for demo UI.",
    });
    form.reset(values);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Send us a message</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <Label>Name</Label>
            <Input {...form.register("name")} />
            {form.formState.errors.name ? <p className="text-xs text-destructive">{form.formState.errors.name.message}</p> : null}
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Phone</Label>
              <Input {...form.register("phone")} />
              {form.formState.errors.phone ? <p className="text-xs text-destructive">{form.formState.errors.phone.message}</p> : null}
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input type="email" {...form.register("email")} />
              {form.formState.errors.email ? <p className="text-xs text-destructive">{form.formState.errors.email.message}</p> : null}
            </div>
          </div>
          <div className="space-y-2">
            <Label>Message</Label>
            <Textarea rows={5} {...form.register("message")} />
            {form.formState.errors.message ? <p className="text-xs text-destructive">{form.formState.errors.message.message}</p> : null}
          </div>
          <Button type="submit">Submit inquiry</Button>
        </form>
      </CardContent>
    </Card>
  );
}
