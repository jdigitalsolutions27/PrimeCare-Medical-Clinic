import { FormsPageClient } from "@/components/forms/forms-page-client";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Patient Forms",
  description: "Download and upload patient forms with privacy-first handling guidance.",
  path: "/forms",
});

export default function FormsPage() {
  return <FormsPageClient />;
}
