import type { Metadata } from "next";

import { business } from "@/data/business";
import { absoluteUrl } from "@/lib/utils";

type MetaInput = {
  title: string;
  description: string;
  path?: string;
};

export function buildMetadata({ title, description, path = "/" }: MetaInput): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = `${title} | ${business.clinicName}`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: business.clinicName,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
