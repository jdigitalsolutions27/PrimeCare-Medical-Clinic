import Link from "next/link";
import { CalendarCheck2, MessageCircle, Phone } from "lucide-react";

import { business } from "@/data/business";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t bg-background/95 p-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <div className="grid grid-cols-3 gap-2">
        <Link href={`tel:${business.phones.main}`} className="flex items-center justify-center gap-2 rounded-xl bg-secondary px-3 py-3 text-xs font-semibold">
          <Phone className="h-4 w-4" />
          Call
        </Link>
        <Link
          href={`https://wa.me/${business.phones.whatsapp.replace(/\D/g, "")}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl bg-secondary px-3 py-3 text-xs font-semibold"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </Link>
        <Link href="/appointment" className="flex items-center justify-center gap-2 rounded-xl bg-primary px-3 py-3 text-xs font-semibold text-primary-foreground">
          <CalendarCheck2 className="h-4 w-4" />
          Book
        </Link>
      </div>
    </div>
  );
}
