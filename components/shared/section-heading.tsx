import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("space-y-3", className)}>
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">{title}</h2>
      {description ? <p className="max-w-3xl text-muted-foreground">{description}</p> : null}
    </div>
  );
}
