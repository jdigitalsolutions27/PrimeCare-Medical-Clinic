import { ShieldCheck, Sparkles, Stethoscope, TimerReset } from "lucide-react";

const trustItems = [
  { icon: Stethoscope, label: "Licensed Doctors" },
  { icon: Sparkles, label: "Clean & Safe" },
  { icon: TimerReset, label: "Fast Scheduling" },
  { icon: ShieldCheck, label: "Patient-first Care" },
];

export function TrustBar() {
  return (
    <section className="border-b bg-secondary/40">
      <div className="container grid gap-4 py-4 sm:grid-cols-2 lg:grid-cols-4">
        {trustItems.map((item) => (
          <div key={item.label} className="flex items-center gap-3 rounded-xl border bg-background/80 px-4 py-3">
            <item.icon className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
