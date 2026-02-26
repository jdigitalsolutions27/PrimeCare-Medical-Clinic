import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { business, fullAddress } from "@/data/business";

export function Footer() {
  return (
    <footer className="mt-24 border-t bg-secondary/50">
      <div className="container grid gap-10 py-12 md:grid-cols-4">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">{business.clinicName}</h3>
          <p className="text-sm text-muted-foreground">{business.tagline}</p>
        </div>
        <div className="space-y-2 text-sm">
          <h4 className="font-semibold">Quick Links</h4>
          <Link href="/services" className="block text-muted-foreground hover:text-foreground">Services</Link>
          <Link href="/doctors" className="block text-muted-foreground hover:text-foreground">Doctors</Link>
          <Link href="/appointment" className="block text-muted-foreground hover:text-foreground">Book Appointment</Link>
          <Link href="/faq" className="block text-muted-foreground hover:text-foreground">FAQ</Link>
        </div>
        <div className="space-y-2 text-sm">
          <h4 className="font-semibold">Patient</h4>
          <Link href="/patient-guide" className="block text-muted-foreground hover:text-foreground">Patient Guide</Link>
          <Link href="/forms" className="block text-muted-foreground hover:text-foreground">Patient Forms</Link>
          <Link href="/pricing" className="block text-muted-foreground hover:text-foreground">Pricing</Link>
          <Link href="/telemedicine" className="block text-muted-foreground hover:text-foreground">Telemedicine</Link>
        </div>
        <div className="space-y-2 text-sm">
          <h4 className="font-semibold">Contact</h4>
          <p className="flex items-center gap-2 text-muted-foreground"><Phone className="h-4 w-4" /> {business.phones.main}</p>
          <p className="flex items-center gap-2 text-muted-foreground"><Mail className="h-4 w-4" /> {business.emails.info}</p>
          <p className="flex items-center gap-2 text-muted-foreground"><MapPin className="h-4 w-4" /> {fullAddress}</p>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        Copyright {new Date().getFullYear()} {business.clinicName}. All rights reserved.
      </div>
    </footer>
  );
}
