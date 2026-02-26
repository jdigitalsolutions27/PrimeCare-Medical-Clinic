import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

import { business } from "@/data/business";
import { images } from "@/data/images";
import { Button } from "@/components/ui/button";
import { AnimatedOrbs } from "@/components/shared/animated-orbs";

export function CinematicHero() {
  return (
    <section className="relative overflow-hidden border-b">
      <div className="absolute inset-0">
        <Image src={images.hero} alt="PrimeCare clinic environment" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-teal-950/50" />
      </div>
      <AnimatedOrbs className="opacity-80" />

      <div className="container relative grid min-h-[62vh] items-center py-14 md:min-h-[70vh] md:py-24">
        <div className="max-w-3xl space-y-6 text-white">
          <p className="inline-flex rounded-full border border-white/30 bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur">
            Modern Healthcare Luxury
          </p>
          <h1 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-6xl">
            Premium medical care designed around people, not process.
          </h1>
          <p className="max-w-2xl text-base text-white/85 md:text-lg">{business.tagline}</p>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <Link href="/appointment">Book Appointment</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/50 bg-white/10 text-white hover:bg-white/20" asChild>
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Same-day slots</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Licensed physicians</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Transparent pricing</span>
          </div>
        </div>
      </div>
    </section>
  );
}
