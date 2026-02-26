export type FaqItem = {
  question: string;
  answer: string;
  category: "Appointments" | "Services" | "Pricing" | "Policies" | "Telemedicine";
};

export const faqs: FaqItem[] = [
  { category: "Appointments", question: "How do I book an appointment?", answer: "Use the online booking form, call the clinic, or message our WhatsApp line." },
  { category: "Appointments", question: "Can I book same-day visits?", answer: "Yes, same-day slots are available based on real-time clinic capacity." },
  { category: "Appointments", question: "Do you accept walk-ins?", answer: "Walk-ins are accepted for selected services, but appointments are recommended." },
  { category: "Appointments", question: "Can I choose a specific doctor?", answer: "Yes, doctor selection is available during booking when schedules allow." },
  { category: "Appointments", question: "How early should I arrive?", answer: "Please arrive 10 to 15 minutes before your scheduled appointment." },
  { category: "Appointments", question: "Can I reschedule online?", answer: "Yes, appointments can be rescheduled through our support team and online channels." },
  { category: "Appointments", question: "Do you send reminders?", answer: "Yes, we send appointment reminders through SMS or email when details are provided." },
  { category: "Services", question: "Do you provide emergency care?", answer: "No. For emergencies, call emergency services or proceed to the nearest ER." },
  { category: "Services", question: "Can I get lab tests without consultation?", answer: "Some tests are available directly, while others require physician request." },
  { category: "Services", question: "Do you provide pediatric vaccinations?", answer: "Yes, pediatric and adult immunization services are available." },
  { category: "Services", question: "Is telemedicine available for new patients?", answer: "Yes, selected non-emergency concerns can be assessed through virtual consult." },
  { category: "Services", question: "Do you handle minor procedures?", answer: "Yes, selected office-based minor procedures are available after physician evaluation." },
  { category: "Services", question: "Can I request preventive checkup packages?", answer: "Yes, annual and executive-style preventive packages are available." },
  { category: "Services", question: "Do you offer dermatology consultations?", answer: "Yes, our dermatology service addresses common skin concerns." },
  { category: "Services", question: "Can seniors come with caregivers?", answer: "Yes, caregivers are welcome with patient consent." },
  { category: "Pricing", question: "Are consultation prices fixed?", answer: "Price ranges are transparent, but final cost depends on physician assessment and required services." },
  { category: "Pricing", question: "Do lab tests have separate fees?", answer: "Yes, laboratory services are priced separately unless included in package plans." },
  { category: "Pricing", question: "Do you accept insurance or HMO?", answer: "Selected plans are accepted. Coverage depends on your provider and policy." },
  { category: "Pricing", question: "Are follow-up visits discounted?", answer: "Some follow-up types have adjusted rates depending on timing and care plan." },
  { category: "Pricing", question: "Can I get an estimate before visit?", answer: "Yes, our team can provide a range estimate based on your requested service." },
  { category: "Policies", question: "What is your cancellation policy?", answer: "Please cancel or reschedule at least 12 hours before your appointment." },
  { category: "Policies", question: "What if I am late for my schedule?", answer: "Late arrivals may be moved to the next available slot to avoid delays for other patients." },
  { category: "Policies", question: "How is my data protected?", answer: "We follow strict privacy and confidentiality standards for all patient records." },
  { category: "Policies", question: "Can I request my medical records?", answer: "Yes, records requests can be processed through our patient support desk." },
  { category: "Policies", question: "Do you treat all age groups?", answer: "Yes, with dedicated pathways for children, adults, and seniors." },
  { category: "Policies", question: "Do you issue fit-to-work certificates?", answer: "Yes, when medically appropriate after physician assessment." },
  { category: "Policies", question: "What payment methods are accepted?", answer: "Cash, card, and selected digital payments are available." },
  { category: "Telemedicine", question: "What concerns are suitable for teleconsult?", answer: "Non-emergency follow-up, mild symptoms, and medication review are typically suitable." },
  { category: "Telemedicine", question: "Can telemedicine replace in-clinic exams?", answer: "Not always. Your physician may advise an in-person visit when needed." },
  { category: "Telemedicine", question: "How do I prepare for virtual consultation?", answer: "Use a quiet space, stable internet, and keep medications and prior results nearby." },
  { category: "Telemedicine", question: "Can prescriptions be issued virtually?", answer: "Prescriptions may be provided when clinically appropriate and legally allowed." },
  { category: "Telemedicine", question: "Is telemedicine secure?", answer: "Yes, consultations are handled through secure channels following privacy policies." },
];
