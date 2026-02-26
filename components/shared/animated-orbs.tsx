import { cn } from "@/lib/utils";

export function AnimatedOrbs({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <span className="orb left-[6%] top-20 h-28 w-28 bg-clinic-300/40" />
      <span className="orb right-[10%] top-8 h-40 w-40 bg-sky-300/30 [animation-delay:0.5s]" />
      <span className="orb bottom-12 left-[18%] h-24 w-24 bg-emerald-200/40 [animation-delay:1s]" />
      <span className="orb bottom-8 right-[18%] h-32 w-32 bg-cyan-200/30 [animation-delay:1.5s]" />
    </div>
  );
}
