import { business, fullAddress } from "@/data/business";
import { doctors } from "@/data/doctors";
import { absoluteUrl } from "@/lib/utils";

export function clinicJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: business.clinicName,
    description: business.description,
    telephone: business.phones.main,
    email: business.emails.info,
    url: absoluteUrl("/"),
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.line1,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: business.address.country,
    },
    openingHoursSpecification: business.hours.map((entry) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: entry.day,
      opens: entry.time.split(" - ")[0],
      closes: entry.time.split(" - ")[1],
    })),
    areaServed: "Local and nearby communities",
  };
}

export function physicianJsonLd() {
  return doctors.slice(0, 4).map((doctor) => ({
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    medicalSpecialty: doctor.specialties.join(", "),
    worksFor: {
      "@type": "MedicalClinic",
      name: business.clinicName,
    },
    address: fullAddress,
  }));
}
