import Image from "next/image";

import { AnimatedOrbs } from "@/components/shared/animated-orbs";

export function PageHero({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden border-b">
      <div className="absolute inset-0">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-900/65 to-cyan-900/55" />
      </div>
      <AnimatedOrbs className="opacity-60" />
      <div className="container relative py-20 md:py-24">
        <div className="max-w-3xl space-y-4 text-white">
          <h1 className="text-4xl font-semibold text-balance md:text-5xl">{title}</h1>
          <p className="text-base text-white/85 md:text-lg">{description}</p>
        </div>
      </div>
    </section>
  );
}
