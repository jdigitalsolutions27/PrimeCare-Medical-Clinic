import { Clock3, MapPin, Phone } from "lucide-react";

import { business } from "@/data/business";

export function TopInfoBar() {
  return (
    <div className="hidden border-b bg-secondary/80 py-2 text-xs text-secondary-foreground backdrop-blur md:block">
      <div className="container flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Phone className="h-3.5 w-3.5" />
          <span>{business.phones.main}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-3.5 w-3.5" />
          <span>{business.address.city}, {business.address.state}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock3 className="h-3.5 w-3.5" />
          <span>{business.hours[0]?.time}</span>
        </div>
      </div>
    </div>
  );
}
