import { images } from "@/data/images";

export type ServiceCategory =
  | "Primary Care"
  | "Specialty"
  | "Diagnostics"
  | "Preventive";

export type Service = {
  slug: string;
  name: string;
  category: ServiceCategory;
  shortDescription: string;
  bestFor: string[];
  whatToExpect: string;
  duration: string;
  priceRange: string;
  image: string;
  overview: string;
  whoItsFor: string[];
  steps: string[];
  preparationTips: string[];
  faqs: { question: string; answer: string }[];
};

const servicesSeed: Service[] = [
  {
    slug: "general-consultation",
    name: "General Consultation / Primary Care",
    category: "Primary Care",
    shortDescription: "Comprehensive first-line evaluation for everyday health concerns.",
    bestFor: ["Fever", "Cough", "Headache", "Minor pain", "Wellness visits"],
    whatToExpect: "History, focused exam, care plan, and referrals when needed.",
    duration: "20-30 minutes",
    priceRange: "$90 - $160",
    image: images.doctorConsult,
    overview:
      "Our primary care consultations are designed to quickly assess symptoms, manage ongoing conditions, and guide you to the right next step.",
    whoItsFor: ["Adults", "Seniors", "Patients with non-emergency symptoms"],
    steps: ["Check-in and triage", "Vitals assessment", "Physician consultation", "Care plan discussion"],
    preparationTips: ["Bring a medication list", "Bring prior records if available", "Arrive 10 minutes early"],
    faqs: [
      {
        question: "Can I discuss multiple concerns in one visit?",
        answer: "Yes, the doctor will prioritize concerns and recommend follow-up if more time is needed.",
      },
      {
        question: "Do you issue medical certificates?",
        answer: "Certificates are provided when medically appropriate after physician evaluation.",
      },
    ],
  },
  {
    slug: "pediatrics",
    name: "Pediatrics (Kids Care)",
    category: "Specialty",
    shortDescription: "Child-focused preventive and sick-visit care in a family-friendly setting.",
    bestFor: ["Child checkups", "Mild fever", "Growth monitoring", "Vaccines"],
    whatToExpect: "Gentle pediatric exam, growth review, and parent guidance.",
    duration: "20-30 minutes",
    priceRange: "$95 - $170",
    image: images.vitalsCheck,
    overview:
      "Our pediatric team provides age-appropriate care from infancy through adolescence with clear family education.",
    whoItsFor: ["Infants", "Children", "Adolescents"],
    steps: ["Registration", "Weight and height check", "Pediatrician consult", "Care instructions"],
    preparationTips: ["Bring vaccination records", "Bring recent prescriptions", "Bring comfort items for younger kids"],
    faqs: [
      {
        question: "Do you offer same-day pediatric appointments?",
        answer: "Same-day slots are often available for acute non-emergency concerns.",
      },
      {
        question: "Can both parents attend?",
        answer: "Yes, space allows one to two guardians depending on room availability.",
      },
    ],
  },
  {
    slug: "ob-gyn",
    name: "OB-GYN / Women's Health",
    category: "Specialty",
    shortDescription: "Routine and preventive women's health consultations.",
    bestFor: ["Pregnancy check", "Cycle concerns", "Women's preventive care"],
    whatToExpect: "Private consultation, focused exam, and personalized plan.",
    duration: "25-40 minutes",
    priceRange: "$120 - $220",
    image: images.clinicInterior,
    overview:
      "We provide confidential and compassionate women's healthcare, from routine assessments to ongoing support.",
    whoItsFor: ["Women 18+", "Pregnancy follow-up patients"],
    steps: ["Confidential check-in", "Nurse intake", "OB-GYN consultation", "Optional diagnostics"],
    preparationTips: ["List symptoms and dates", "Bring prior OB-GYN records", "Avoid douching before exams"],
    faqs: [
      {
        question: "Is this service private?",
        answer: "Yes, privacy and confidentiality standards are strictly followed.",
      },
      {
        question: "Can I book without referral?",
        answer: "In most cases yes, unless your insurance plan requires referral.",
      },
    ],
  },
  {
    slug: "dermatology",
    name: "Dermatology (Skin Care)",
    category: "Specialty",
    shortDescription: "Evaluation of rashes, acne, and common skin concerns.",
    bestFor: ["Skin rash", "Acne", "Itching", "Pigmentation changes"],
    whatToExpect: "Skin-focused exam, treatment options, and skincare guidance.",
    duration: "20-35 minutes",
    priceRange: "$110 - $210",
    image: images.doctorConsult,
    overview:
      "Our dermatology consultations help identify common skin conditions and establish practical treatment routines.",
    whoItsFor: ["Teens", "Adults", "Patients with persistent skin symptoms"],
    steps: ["Intake and history", "Targeted skin assessment", "Care plan and prescriptions", "Follow-up scheduling"],
    preparationTips: ["Avoid heavy makeup before visit", "Bring current skincare products list", "Note triggers"],
    faqs: [
      {
        question: "Do you perform procedures?",
        answer: "Minor dermatology procedures are offered when clinically appropriate.",
      },
      {
        question: "How soon do treatments work?",
        answer: "Response varies by condition; your physician will discuss expected timelines.",
      },
    ],
  },
  {
    slug: "laboratory-diagnostics",
    name: "Laboratory / Diagnostics",
    category: "Diagnostics",
    shortDescription: "In-clinic basic lab testing with coordinated physician review.",
    bestFor: ["CBC", "Basic blood chemistry", "Screening tests"],
    whatToExpect: "Sample collection, processing, and result guidance.",
    duration: "15-25 minutes",
    priceRange: "$25 - $250",
    image: images.lab,
    overview:
      "Our diagnostics unit supports physicians with timely test services and clear next-step reporting.",
    whoItsFor: ["Patients requiring physician-ordered testing", "Preventive screening patients"],
    steps: ["Lab check-in", "Sample collection", "Processing", "Result release"],
    preparationTips: ["Confirm fasting requirements", "Hydrate unless advised otherwise", "Bring valid ID"],
    faqs: [
      {
        question: "Can I walk in for tests?",
        answer: "Some tests are walk-in, while others require physician request and scheduling.",
      },
      {
        question: "How are results shared?",
        answer: "Results are released through your physician and discussed during follow-up.",
      },
    ],
  },
  {
    slug: "vaccination-immunization",
    name: "Vaccination / Immunization",
    category: "Preventive",
    shortDescription: "Routine immunizations for children and adults based on recommended schedules.",
    bestFor: ["Flu vaccine", "Travel vaccine consult", "Routine boosters"],
    whatToExpect: "Eligibility screening, vaccine administration, and post-shot guidance.",
    duration: "15-20 minutes",
    priceRange: "$30 - $160",
    image: images.vitalsCheck,
    overview:
      "Our vaccination clinic supports preventive health through safe administration and clear counseling.",
    whoItsFor: ["Children", "Adults", "Travelers"],
    steps: ["Eligibility check", "Consent", "Administration", "Observation"],
    preparationTips: ["Bring vaccine records", "Eat beforehand when appropriate", "Report allergies"],
    faqs: [
      {
        question: "Are vaccine records provided?",
        answer: "Yes, an updated record is provided after each administered dose.",
      },
      {
        question: "Do vaccines require appointment?",
        answer: "Appointments are preferred to ensure vaccine availability.",
      },
    ],
  },
  {
    slug: "health-checkup-packages",
    name: "Health Checkup Packages",
    category: "Preventive",
    shortDescription: "Annual and executive wellness packages with physician review.",
    bestFor: ["Annual checkup", "Corporate screening", "Baseline health tracking"],
    whatToExpect: "Structured diagnostics, clinical consultation, and consolidated report.",
    duration: "90-180 minutes",
    priceRange: "$180 - $720",
    image: images.clinicInterior,
    overview:
      "Our package-based preventive programs help you monitor long-term health with clear yearly benchmarks.",
    whoItsFor: ["Adults 25+", "Busy professionals", "Patients with family risk history"],
    steps: ["Package selection", "Lab and vitals", "Doctor consultation", "Summary report"],
    preparationTips: ["Fast 8-10 hours for blood tests", "Bring medication list", "Wear comfortable clothes"],
    faqs: [
      {
        question: "Do packages include consultation?",
        answer: "Yes, package pricing includes physician interpretation and recommendations.",
      },
      {
        question: "Can I customize package tests?",
        answer: "Yes, add-on tests are available depending on clinical need.",
      },
    ],
  },
  {
    slug: "minor-procedures",
    name: "Minor Procedures",
    category: "Primary Care",
    shortDescription: "Office-based minor care such as wound dressing and simple sutures.",
    bestFor: ["Minor cuts", "Wound dressing", "Simple suture removal"],
    whatToExpect: "Clinical assessment, procedure, and aftercare instructions.",
    duration: "20-40 minutes",
    priceRange: "$80 - $260",
    image: images.doctorConsult,
    overview:
      "We handle selected outpatient procedures safely in clinic with sterile technique and follow-up plans.",
    whoItsFor: ["Patients with non-emergency minor injuries"],
    steps: ["Physician evaluation", "Consent", "Procedure", "Discharge instructions"],
    preparationTips: ["Do not self-medicate heavily before visit", "Bring prior treatment details", "Report tetanus status"],
    faqs: [
      {
        question: "Do you handle major injuries?",
        answer: "No, major trauma or emergencies should go directly to the ER.",
      },
      {
        question: "Will I need follow-up?",
        answer: "Follow-up is scheduled based on healing progress and procedure type.",
      },
    ],
  },
  {
    slug: "pharmacy-guidance",
    name: "Pharmacy / Prescription Guidance",
    category: "Primary Care",
    shortDescription: "Medication counseling, interactions review, and adherence support.",
    bestFor: ["Medication questions", "Prescription clarification", "Dose schedules"],
    whatToExpect: "Brief counseling session aligned with physician plan.",
    duration: "10-20 minutes",
    priceRange: "$20 - $60",
    image: images.reception,
    overview:
      "Our pharmacy guidance service helps you understand prescribed medications and safe usage habits.",
    whoItsFor: ["Patients on multiple medications", "Patients starting new prescriptions"],
    steps: ["Prescription review", "Risk and interaction check", "Usage counseling", "Take-home summary"],
    preparationTips: ["Bring medication bottles", "List supplements", "Note prior side effects"],
    faqs: [
      {
        question: "Do you sell medicine online?",
        answer: "No, this service is informational and clinic-based only.",
      },
      {
        question: "Can this replace physician consultation?",
        answer: "No, medication changes require physician assessment.",
      },
    ],
  },
  {
    slug: "blood-pressure-screening",
    name: "Blood Pressure Screening",
    category: "Preventive",
    shortDescription: "Quick BP checks and early cardiovascular risk counseling.",
    bestFor: ["Elevated BP concern", "Routine monitoring"],
    whatToExpect: "Standardized BP readings and physician guidance if needed.",
    duration: "10-15 minutes",
    priceRange: "$20 - $45",
    image: images.vitalsCheck,
    overview:
      "Regular BP monitoring supports early intervention and long-term cardiovascular wellness.",
    whoItsFor: ["Adults", "Patients with family history of hypertension"],
    steps: ["Rest period", "BP check", "Repeat measurement if required", "Advice"],
    preparationTips: ["Avoid caffeine 30 minutes before", "Sit calmly before reading"],
    faqs: [
      {
        question: "Can one high reading confirm hypertension?",
        answer: "No, diagnosis requires repeated readings and physician assessment.",
      },
      {
        question: "Do you provide home-monitoring advice?",
        answer: "Yes, clinicians can guide a practical home BP routine.",
      },
    ],
  },
  {
    slug: "diabetes-screening",
    name: "Diabetes Screening",
    category: "Preventive",
    shortDescription: "Early blood sugar risk checks with physician interpretation.",
    bestFor: ["Prediabetes risk", "Family history", "Annual checkups"],
    whatToExpect: "Risk profile, screening tests, and actionable guidance.",
    duration: "20-35 minutes",
    priceRange: "$45 - $140",
    image: images.lab,
    overview:
      "Our diabetes screening pathway helps identify risk early and supports prevention with guided follow-up.",
    whoItsFor: ["Adults 30+", "Patients with risk factors"],
    steps: ["Risk intake", "Lab screening", "Doctor review", "Lifestyle plan"],
    preparationTips: ["Confirm fasting requirement", "Bring prior glucose records"],
    faqs: [
      {
        question: "Is one test enough?",
        answer: "Not always. Physicians may repeat or combine tests for confirmation.",
      },
      {
        question: "Do you offer nutrition guidance?",
        answer: "Yes, you can be directed to lifestyle and dietary support resources.",
      },
    ],
  },
  {
    slug: "allergy-evaluation",
    name: "Allergy Evaluation",
    category: "Specialty",
    shortDescription: "Assessment of common allergy symptoms and trigger patterns.",
    bestFor: ["Sneezing", "Skin itch", "Seasonal reactions"],
    whatToExpect: "Symptom history, trigger review, and treatment planning.",
    duration: "25-35 minutes",
    priceRange: "$100 - $190",
    image: images.doctorConsult,
    overview:
      "Allergy consults focus on symptom patterns and practical strategies to reduce flare-ups.",
    whoItsFor: ["Children and adults with recurrent allergy symptoms"],
    steps: ["History review", "Environmental trigger discussion", "Treatment options", "Follow-up"],
    preparationTips: ["Track triggers beforehand", "Bring current antihistamine list"],
    faqs: [
      {
        question: "Do I need allergy testing immediately?",
        answer: "Testing is recommended only when clinically indicated.",
      },
      {
        question: "Can allergies be fully cured?",
        answer: "Management focuses on control and prevention, not guaranteed cure.",
      },
    ],
  },
  {
    slug: "respiratory-care",
    name: "Respiratory Care Clinic",
    category: "Primary Care",
    shortDescription: "Non-emergency respiratory symptom evaluation and treatment.",
    bestFor: ["Persistent cough", "Mild wheeze", "Cold symptoms"],
    whatToExpect: "Lung-focused assessment and symptom management plan.",
    duration: "20-30 minutes",
    priceRange: "$90 - $170",
    image: images.doctorConsult,
    overview:
      "We evaluate common respiratory concerns and provide timely management or specialist referral.",
    whoItsFor: ["Adults and children with non-severe respiratory symptoms"],
    steps: ["Triage", "Vitals", "Respiratory exam", "Plan and follow-up"],
    preparationTips: ["Bring prior inhaler history", "Report onset and triggers"],
    faqs: [
      {
        question: "Do you treat asthma emergencies?",
        answer: "Severe breathing distress is an emergency and should go to ER immediately.",
      },
      {
        question: "Can I get a same-day chest exam?",
        answer: "Same-day slots may be available depending on clinic load.",
      },
    ],
  },
  {
    slug: "digestive-health",
    name: "Digestive Health Consultation",
    category: "Specialty",
    shortDescription: "Assessment of stomach pain, bloating, and bowel-related symptoms.",
    bestFor: ["Stomach pain", "Bloating", "Acid discomfort"],
    whatToExpect: "History, exam, and initial digestive care plan.",
    duration: "25-35 minutes",
    priceRange: "$110 - $210",
    image: images.doctorConsult,
    overview:
      "Digestive health consultations help identify likely causes of common GI symptoms and next steps.",
    whoItsFor: ["Adults with recurring digestive symptoms"],
    steps: ["Symptom timeline review", "Physical exam", "Testing if needed", "Management plan"],
    preparationTips: ["Track meals and symptoms", "Avoid heavy meals before visit"],
    faqs: [
      {
        question: "Can this detect serious conditions?",
        answer: "Your physician will identify red flags and advise appropriate testing.",
      },
      {
        question: "Do you offer diet recommendations?",
        answer: "Yes, personalized dietary guidance is part of care planning.",
      },
    ],
  },
  {
    slug: "women-preventive-screen",
    name: "Women's Preventive Screening",
    category: "Preventive",
    shortDescription: "Routine screening pathways supporting long-term women's wellness.",
    bestFor: ["Preventive checkups", "Hormonal health discussions"],
    whatToExpect: "Structured screening and physician recommendations.",
    duration: "30-45 minutes",
    priceRange: "$130 - $260",
    image: images.clinicInterior,
    overview:
      "Preventive screening visits help monitor key health markers and support early intervention.",
    whoItsFor: ["Adult women seeking annual preventive care"],
    steps: ["History update", "Vitals", "Screening review", "Next-step planning"],
    preparationTips: ["Bring previous screening reports", "List menstrual history notes"],
    faqs: [
      {
        question: "Is this only for symptomatic patients?",
        answer: "No, this service is designed primarily for preventive care.",
      },
      {
        question: "How often should I book?",
        answer: "Frequency depends on age, risk profile, and physician guidance.",
      },
    ],
  },
  {
    slug: "mens-wellness",
    name: "Men's Wellness Consultation",
    category: "Preventive",
    shortDescription: "Preventive and lifestyle-focused health assessments for men.",
    bestFor: ["Annual wellness", "Lifestyle risk review"],
    whatToExpect: "Screening recommendations and health optimization plan.",
    duration: "25-40 minutes",
    priceRange: "$100 - $200",
    image: images.doctorConsult,
    overview:
      "Men's wellness visits focus on cardiovascular, metabolic, and lifestyle risk reduction.",
    whoItsFor: ["Adult men seeking preventive care"],
    steps: ["Intake questionnaire", "Vitals and risk checks", "Doctor consult", "Care roadmap"],
    preparationTips: ["Bring prior lab results", "Prepare family history details"],
    faqs: [
      {
        question: "Do you include lab tests?",
        answer: "Labs may be recommended based on clinical findings and goals.",
      },
      {
        question: "Can this be combined with annual checkup packages?",
        answer: "Yes, this service can be paired with package-based diagnostics.",
      },
    ],
  },
  {
    slug: "senior-care",
    name: "Senior Care Clinic",
    category: "Primary Care",
    shortDescription: "Personalized support for aging-related health needs.",
    bestFor: ["Medication review", "Mobility concerns", "Chronic condition monitoring"],
    whatToExpect: "Comprehensive review focused on function, safety, and quality of life.",
    duration: "30-45 minutes",
    priceRange: "$120 - $220",
    image: images.vitalsCheck,
    overview:
      "Senior consultations coordinate preventive and chronic care needs with practical family guidance.",
    whoItsFor: ["Older adults", "Caregivers seeking coordinated care plans"],
    steps: ["Detailed history", "Mobility and vitals review", "Medication safety check", "Care plan"],
    preparationTips: ["Bring caregiver notes", "Carry complete medication list", "Bring assistive devices if used"],
    faqs: [
      {
        question: "Can caregivers join the consultation?",
        answer: "Yes, with patient consent, caregivers are encouraged to attend.",
      },
      {
        question: "Do you coordinate with specialists?",
        answer: "Yes, referrals and coordination are provided when needed.",
      },
    ],
  },
  {
    slug: "travel-health",
    name: "Travel Health Advice",
    category: "Preventive",
    shortDescription: "Pre-travel consultation for vaccines and health precautions.",
    bestFor: ["International travel", "Travel vaccines", "Travel medication guidance"],
    whatToExpect: "Destination-based risk review and preventive plan.",
    duration: "20-30 minutes",
    priceRange: "$80 - $170",
    image: images.reception,
    overview:
      "Travel consultations prepare you for destination-specific health risks and preventive measures.",
    whoItsFor: ["Travelers", "Families traveling internationally"],
    steps: ["Destination review", "Risk assessment", "Vaccination planning", "Travel advice summary"],
    preparationTips: ["Book 3-6 weeks before travel", "Bring itinerary and vaccine records"],
    faqs: [
      {
        question: "How far in advance should I book?",
        answer: "Ideally at least 3 weeks before departure for vaccine scheduling.",
      },
      {
        question: "Is this a substitute for travel insurance?",
        answer: "No, medical consults do not replace insurance coverage.",
      },
    ],
  },
  {
    slug: "pre-employment-medical",
    name: "Pre-Employment Medical Exam",
    category: "Diagnostics",
    shortDescription: "Work-clearance evaluations tailored to employer requirements.",
    bestFor: ["Employment screening", "Medical clearance"],
    whatToExpect: "Exam, required tests, and structured report preparation.",
    duration: "45-90 minutes",
    priceRange: "$120 - $350",
    image: images.reception,
    overview:
      "We provide efficient pre-employment medical assessments with streamlined scheduling for individuals and HR teams.",
    whoItsFor: ["New hires", "Corporate accounts"],
    steps: ["Requirement verification", "Exams and tests", "Physician review", "Document release"],
    preparationTips: ["Bring government ID", "Bring employer request form", "Sleep adequately before exam"],
    faqs: [
      {
        question: "Can I get same-day results?",
        answer: "Some results are same day; others depend on specific lab processing times.",
      },
      {
        question: "Do you support corporate bookings?",
        answer: "Yes, group scheduling support is available.",
      },
    ],
  },
  {
    slug: "family-medicine-followup",
    name: "Family Medicine Follow-up",
    category: "Primary Care",
    shortDescription: "Continuity appointments for ongoing health plans.",
    bestFor: ["Treatment follow-up", "Medication review", "Progress check"],
    whatToExpect: "Focused reassessment and plan adjustment based on progress.",
    duration: "15-25 minutes",
    priceRange: "$70 - $130",
    image: images.doctorConsult,
    overview:
      "Follow-up visits keep your care plan on track and help prevent avoidable complications.",
    whoItsFor: ["Existing clinic patients", "Patients with recent treatment plans"],
    steps: ["Progress review", "Exam update", "Plan adjustments", "Next follow-up setup"],
    preparationTips: ["Bring previous prescriptions", "Track symptom changes since last visit"],
    faqs: [
      {
        question: "Can this be teleconsult?",
        answer: "Some follow-up types can be completed virtually based on physician approval.",
      },
      {
        question: "What if symptoms worsen before follow-up date?",
        answer: "Contact the clinic or seek urgent care if symptoms escalate.",
      },
    ],
  },
  {
    slug: "nutrition-lifestyle-counseling",
    name: "Nutrition & Lifestyle Counseling",
    category: "Preventive",
    shortDescription: "Practical plans for weight, energy, and chronic risk reduction.",
    bestFor: ["Weight goals", "Prediabetes lifestyle changes", "General wellness"],
    whatToExpect: "Baseline assessment and sustainable action plan.",
    duration: "30-45 minutes",
    priceRange: "$90 - $180",
    image: images.clinicInterior,
    overview:
      "Lifestyle counseling supports measurable health improvements with realistic routines tailored to your schedule.",
    whoItsFor: ["Adults seeking preventive lifestyle support"],
    steps: ["Intake and goals", "Habit review", "Action plan", "Follow-up checkpoints"],
    preparationTips: ["Track food intake for 3 days", "Bring lab trends if available"],
    faqs: [
      {
        question: "Do you offer strict meal plans?",
        answer: "Plans are individualized and flexible rather than one-size-fits-all.",
      },
      {
        question: "Is this only for weight loss?",
        answer: "No, goals can include energy, blood sugar control, and heart health.",
      },
    ],
  },
];

const serviceImagePool = images.serviceVisuals;

export const services: Service[] = servicesSeed.map((service, index) => ({
  ...service,
  image: serviceImagePool[index % serviceImagePool.length],
}));

export const serviceCategories: ServiceCategory[] = [
  "Primary Care",
  "Specialty",
  "Diagnostics",
  "Preventive",
];
