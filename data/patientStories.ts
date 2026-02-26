export type PatientStory = {
  id: string;
  title: string;
  name: string;
  service: string;
  summary: string;
  outcome: string;
};

export const patientStories: PatientStory[] = [
  {
    id: "ps1",
    title: "From recurring fatigue to a structured wellness plan",
    name: "Michael, 37",
    service: "Health Checkup Packages",
    summary: "A comprehensive annual package revealed lifestyle risk patterns early.",
    outcome: "Now follows a physician-guided preventive routine with improved energy.",
  },
  {
    id: "ps2",
    title: "A calmer first pediatric visit",
    name: "Parent of 4-year-old",
    service: "Pediatrics",
    summary: "Child-friendly communication helped reduce stress for both child and parent.",
    outcome: "Family now uses routine preventive appointments confidently.",
  },
  {
    id: "ps3",
    title: "Fast support for persistent cough",
    name: "Amelia, 29",
    service: "Respiratory Care Clinic",
    summary: "Same-day evaluation and clear follow-up reduced uncertainty.",
    outcome: "Symptoms improved with timely treatment and monitoring.",
  },
  {
    id: "ps4",
    title: "Clear medication guidance after multiple prescriptions",
    name: "George, 61",
    service: "Pharmacy / Prescription Guidance",
    summary: "Medication schedule was simplified and interaction risks were explained.",
    outcome: "Better adherence and more confidence in daily medication routine.",
  },
  {
    id: "ps5",
    title: "Women's preventive screening with confidence",
    name: "Hannah, 42",
    service: "Women's Preventive Screening",
    summary: "Private consultation and clear education improved long-term screening consistency.",
    outcome: "Now keeps a regular preventive care calendar.",
  },
  {
    id: "ps6",
    title: "Senior care that included the whole family",
    name: "Caregiver for 74-year-old patient",
    service: "Senior Care Clinic",
    summary: "Team considered mobility, medications, and caregiver concerns in one plan.",
    outcome: "Fewer missed medications and improved clinic follow-through.",
  },
  {
    id: "ps7",
    title: "Skin flare-ups finally mapped and managed",
    name: "Lena, 25",
    service: "Dermatology",
    summary: "Consultation identified probable triggers and phased treatment options.",
    outcome: "Flare frequency reduced with a sustainable skincare routine.",
  },
  {
    id: "ps8",
    title: "Pre-employment medical without delays",
    name: "Corporate client",
    service: "Pre-Employment Medical Exam",
    summary: "Requirements were handled in one organized visit.",
    outcome: "Medical clearance paperwork delivered on schedule.",
  },
  {
    id: "ps9",
    title: "Telemedicine follow-up that saved commute time",
    name: "Sophia, 33",
    service: "Telemedicine",
    summary: "Virtual review covered progress and medication adjustments effectively.",
    outcome: "Continued treatment adherence with less disruption to work.",
  },
  {
    id: "ps10",
    title: "Early diabetes risk caught during screening",
    name: "Daniel, 45",
    service: "Diabetes Screening",
    summary: "Screening highlighted early warning signs with practical next steps.",
    outcome: "Started lifestyle changes and routine monitoring quickly.",
  },
];
