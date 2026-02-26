export type SymptomConcern = {
  id: string;
  label: string;
  recommendedServiceSlugs: string[];
  note?: string;
};

export const symptomConcerns: SymptomConcern[] = [
  {
    id: "fever-flu",
    label: "Fever / Flu-like",
    recommendedServiceSlugs: ["general-consultation", "laboratory-diagnostics"],
    note: "CBC may be advised based on physician evaluation.",
  },
  {
    id: "cough-cold",
    label: "Cough / Cold",
    recommendedServiceSlugs: ["general-consultation"],
  },
  {
    id: "headache-dizziness",
    label: "Headache / Dizziness",
    recommendedServiceSlugs: ["general-consultation", "blood-pressure-screening"],
  },
  {
    id: "stomach-pain",
    label: "Stomach pain",
    recommendedServiceSlugs: ["general-consultation", "digestive-health"],
  },
  {
    id: "skin-rash-acne",
    label: "Skin rash / acne",
    recommendedServiceSlugs: ["dermatology"],
  },
  {
    id: "pregnancy-womens-health",
    label: "Pregnancy check / women's health",
    recommendedServiceSlugs: ["ob-gyn", "women-preventive-screen"],
  },
  {
    id: "child-checkup",
    label: "Child checkup",
    recommendedServiceSlugs: ["pediatrics"],
  },
  {
    id: "vaccines",
    label: "Vaccines",
    recommendedServiceSlugs: ["vaccination-immunization"],
  },
  {
    id: "lab-tests",
    label: "Lab tests",
    recommendedServiceSlugs: ["laboratory-diagnostics"],
  },
  {
    id: "annual-checkup",
    label: "Annual checkup",
    recommendedServiceSlugs: ["health-checkup-packages"],
  },
  {
    id: "blood-pressure",
    label: "Blood pressure check",
    recommendedServiceSlugs: ["blood-pressure-screening", "general-consultation"],
  },
  {
    id: "diabetes-screening",
    label: "Diabetes screening",
    recommendedServiceSlugs: ["diabetes-screening", "health-checkup-packages"],
  },
];

export const navigatorDisclaimer =
  "Not medical advice or diagnosis. For accurate assessment, consult a licensed physician.";
