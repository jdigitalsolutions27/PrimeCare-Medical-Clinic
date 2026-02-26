export type Doctor = {
  slug: string;
  name: string;
  title: string;
  specialties: string[];
  credentials: string;
  image: string;
  schedule: string[];
  languages: string[];
  bio: string;
  departmentSlugs: string[];
};

export const doctors: Doctor[] = [
  {
    slug: "dr-maya-reyes",
    name: "Dr. Maya Reyes",
    title: "Lead Family Physician",
    specialties: ["Primary Care", "Preventive Medicine"],
    credentials: "MD, Board-Certified Family Medicine",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    schedule: ["Mon 9:00 AM - 4:00 PM", "Wed 10:00 AM - 6:00 PM", "Fri 8:00 AM - 2:00 PM"],
    languages: ["English", "Spanish"],
    bio: "Dr. Reyes focuses on continuity care, chronic condition prevention, and patient education.",
    departmentSlugs: ["general-consultation", "family-medicine-followup", "health-checkup-packages"],
  },
  {
    slug: "dr-ethan-cho",
    name: "Dr. Ethan Cho",
    title: "Consultant Pediatrician",
    specialties: ["Pediatrics", "Child Preventive Care"],
    credentials: "MD, Pediatric Medicine",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80",
    schedule: ["Tue 9:00 AM - 5:00 PM", "Thu 9:00 AM - 5:00 PM", "Sat 8:00 AM - 1:00 PM"],
    languages: ["English", "Korean"],
    bio: "Dr. Cho provides gentle, evidence-based care for infants, children, and adolescents.",
    departmentSlugs: ["pediatrics", "vaccination-immunization"],
  },
  {
    slug: "dr-sophia-hart",
    name: "Dr. Sophia Hart",
    title: "OB-GYN Specialist",
    specialties: ["Women's Health", "Preventive Screening"],
    credentials: "MD, OB-GYN",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    schedule: ["Mon 11:00 AM - 7:00 PM", "Thu 10:00 AM - 6:00 PM", "Sun 9:00 AM - 1:00 PM"],
    languages: ["English"],
    bio: "Dr. Hart emphasizes respectful communication and long-term preventive care planning.",
    departmentSlugs: ["ob-gyn", "women-preventive-screen"],
  },
  {
    slug: "dr-liam-patel",
    name: "Dr. Liam Patel",
    title: "Dermatology Consultant",
    specialties: ["Dermatology", "Allergy-Related Skin Conditions"],
    credentials: "MD, Clinical Dermatology",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
    schedule: ["Tue 10:00 AM - 6:00 PM", "Fri 11:00 AM - 7:00 PM"],
    languages: ["English", "Hindi"],
    bio: "Dr. Patel treats common skin concerns with practical care plans and clear follow-up guidance.",
    departmentSlugs: ["dermatology", "allergy-evaluation"],
  },
  {
    slug: "dr-noah-bennett",
    name: "Dr. Noah Bennett",
    title: "Diagnostics and Internal Medicine",
    specialties: ["Internal Medicine", "Laboratory Interpretation"],
    credentials: "MD, Internal Medicine",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
    schedule: ["Mon 8:00 AM - 2:00 PM", "Wed 8:00 AM - 2:00 PM", "Sat 9:00 AM - 3:00 PM"],
    languages: ["English", "French"],
    bio: "Dr. Bennett supports complex diagnostics and coordinates result-driven treatment plans.",
    departmentSlugs: ["laboratory-diagnostics", "diabetes-screening", "blood-pressure-screening"],
  },
  {
    slug: "dr-ava-wilson",
    name: "Dr. Ava Wilson",
    title: "Senior Care Physician",
    specialties: ["Geriatric Care", "Chronic Disease Follow-up"],
    credentials: "MD, Geriatric and Family Medicine",
    image:
      "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=800&q=80",
    schedule: ["Tue 8:00 AM - 2:00 PM", "Thu 11:00 AM - 7:00 PM", "Sat 10:00 AM - 4:00 PM"],
    languages: ["English"],
    bio: "Dr. Wilson works closely with seniors and families to improve comfort, function, and health outcomes.",
    departmentSlugs: ["senior-care", "family-medicine-followup", "minor-procedures"],
  },
  {
    slug: "dr-luca-martin",
    name: "Dr. Luca Martin",
    title: "Telemedicine and Primary Care",
    specialties: ["Virtual Consultations", "Acute Care Triage"],
    credentials: "MD, Primary Care",
    image:
      "https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&w=800&q=80",
    schedule: ["Mon - Fri 6:00 PM - 9:00 PM"],
    languages: ["English", "Italian"],
    bio: "Dr. Martin leads PrimeCare's telemedicine pathway for safe and efficient virtual follow-up.",
    departmentSlugs: ["general-consultation", "family-medicine-followup"],
  },
];
