import Link from "next/link";
import { ArrowRight, CalendarClock } from "lucide-react";

import { Button } from "@/components/ui/button";

export function FinalCtaBanner() {
  return (
    <section className="container mt-16">
      <div className="relative overflow-hidden rounded-3xl border bg-gradient-to-r from-clinic-700 to-cyan-700 px-6 py-12 text-white shadow-glow md:px-12">
        <div className="relative z-10 max-w-2xl space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-1 text-xs uppercase tracking-[0.2em]">
            <CalendarClock className="h-3.5 w-3.5" />
            Ready to visit?
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">Book a premium clinic experience today.</h2>
          <p className="text-white/85">Fast scheduling, licensed doctors, and patient-first service from check-in to follow-up.</p>
          <Button asChild variant="secondary">
            <Link href="/appointment">
              Start Booking
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="orb -right-8 -top-10 h-40 w-40 bg-white/20" />
        <div className="orb bottom-0 right-32 h-24 w-24 bg-cyan-200/40 [animation-delay:0.8s]" />
      </div>
    </section>
  );
}
