export const pricing = {
  consultation: [
    { label: "General Consultation", range: "$90 - $160" },
    { label: "Pediatrics", range: "$95 - $170" },
    { label: "OB-GYN / Dermatology", range: "$110 - $220" },
    { label: "Telemedicine Follow-up", range: "$65 - $120" },
  ],
  labs: [
    { label: "Complete Blood Count (CBC)", range: "$25 - $45" },
    { label: "Basic Metabolic Panel", range: "$40 - $80" },
    { label: "Diabetes Screening Panel", range: "$45 - $120" },
    { label: "Lipid Profile", range: "$35 - $75" },
  ],
  vaccines: [
    { label: "Seasonal Flu Vaccine", range: "$30 - $65" },
    { label: "Adult Booster Vaccines", range: "$45 - $120" },
    { label: "Travel Vaccine Consultation + Dose", range: "$80 - $160" },
  ],
  packages: [
    {
      name: "Annual Basic Checkup",
      range: "$180 - $320",
      inclusions: ["Physician consult", "Basic lab panel", "Vitals + BP", "Summary report"],
    },
    {
      name: "Annual Plus Checkup",
      range: "$330 - $520",
      inclusions: ["Extended lab panel", "Diabetes risk tests", "ECG screening", "Physician review"],
    },
    {
      name: "Executive Wellness Package",
      range: "$540 - $720",
      inclusions: ["Comprehensive diagnostics", "Priority scheduling", "Detailed review session"],
    },
  ],
  factors: [
    "Type of consultation and specialist involvement",
    "Laboratory or diagnostic tests required",
    "Procedure complexity and supplies",
    "Insurance / HMO benefits and copay rules",
  ],
  disclaimer:
    "Displayed prices are sample ranges for transparency. Final cost depends on physician assessment, medically necessary tests, and treatment plan.",
};

export type PricingData = typeof pricing;
