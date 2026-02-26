"use client";

import Image, { type ImageProps } from "next/image";
import { ImageOff } from "lucide-react";
import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";

type ImageWithFallbackProps = ImageProps & {
  fallbackLabel?: string;
  fallbackClassName?: string;
};

function toInitials(input: string) {
  return input
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((chunk) => chunk[0]?.toUpperCase() ?? "")
    .join("");
}

export function ImageWithFallback({
  alt,
  className,
  fallbackLabel,
  fallbackClassName,
  fill,
  ...props
}: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false);
  const initials = useMemo(() => toInitials(fallbackLabel || alt), [alt, fallbackLabel]);

  if (failed) {
    return (
      <div
        aria-label={alt}
        className={cn(
          "flex items-center justify-center bg-gradient-to-br from-cyan-100 to-teal-100 text-slate-600",
          fill ? "absolute inset-0" : "h-full w-full",
          fallbackClassName
        )}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/80 text-sm font-semibold shadow-sm">
            {initials || <ImageOff className="h-5 w-5" />}
          </div>
          <p className="max-w-[80%] truncate text-xs text-slate-500">{fallbackLabel || alt}</p>
        </div>
      </div>
    );
  }

  return (
    <Image
      alt={alt}
      className={className}
      fill={fill}
      onError={() => setFailed(true)}
      {...props}
    />
  );
}
