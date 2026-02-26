import { images } from "@/data/images";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "when-to-book-primary-care-vs-urgent-care",
    title: "When to Book Primary Care vs Urgent Care",
    excerpt: "A practical guide for deciding where to seek care for non-emergency symptoms.",
    category: "Primary Care",
    readTime: "6 min",
    date: "2026-02-05",
    image: images.doctorConsult,
    content: [
      "Primary care is ideal for recurring symptoms, preventive checkups, and chronic condition monitoring.",
      "Urgent care is better for sudden but non-life-threatening issues that need same-day attention.",
      "For severe symptoms such as chest pain, severe bleeding, or breathing difficulty, go to emergency services.",
    ],
  },
  {
    slug: "child-wellness-checklist-by-age",
    title: "Child Wellness Checklist by Age",
    excerpt: "Simple preventive milestones parents can track from toddler to teen years.",
    category: "Pediatrics",
    readTime: "5 min",
    date: "2026-01-29",
    image: images.vitalsCheck,
    content: [
      "Wellness visits help track growth, development, and vaccine schedules.",
      "Parents should keep an updated vaccination card and symptom notes for each visit.",
      "Consistent checkups build a baseline that helps doctors spot changes early.",
    ],
  },
  {
    slug: "understanding-routine-lab-tests",
    title: "Understanding Routine Lab Tests",
    excerpt: "What common blood and screening tests can tell you about your health.",
    category: "Diagnostics",
    readTime: "7 min",
    date: "2026-01-20",
    image: images.lab,
    content: [
      "Routine lab tests support early detection and trend tracking over time.",
      "Results are most helpful when interpreted alongside symptoms and clinical history.",
      "Ask your physician what each test means for your specific risk profile.",
    ],
  },
  {
    slug: "annual-health-checkup-what-to-expect",
    title: "Annual Health Checkup: What to Expect",
    excerpt: "How to prepare for your annual checkup and get the most from the visit.",
    category: "Preventive",
    readTime: "6 min",
    date: "2026-01-15",
    image: images.clinicInterior,
    content: [
      "Annual checkups combine preventive screening, physician review, and personal risk planning.",
      "Arrive with a medication list, prior test results, and questions you want addressed.",
      "Follow-up actions are where the real value happens, so keep your plan visible.",
    ],
  },
  {
    slug: "skin-rash-or-allergy-when-to-consult",
    title: "Skin Rash or Allergy: When to Consult",
    excerpt: "How to recognize persistent skin symptoms and when to seek evaluation.",
    category: "Dermatology",
    readTime: "4 min",
    date: "2026-01-07",
    image: images.doctorConsult,
    content: [
      "Short-lived irritation may settle with routine care, but persistent symptoms need evaluation.",
      "Track possible triggers such as products, foods, or environmental exposure.",
      "Avoid self-prescribing steroid creams without guidance.",
    ],
  },
  {
    slug: "womens-health-routine-screening-basics",
    title: "Women's Health Routine Screening Basics",
    excerpt: "Core preventive screenings and how often to discuss them with your doctor.",
    category: "Women's Health",
    readTime: "6 min",
    date: "2025-12-28",
    image: images.clinicInterior,
    content: [
      "Routine screening is based on age, symptoms, family history, and risk factors.",
      "Preventive visits are not just for symptoms; they help detect issues early.",
      "Keep prior reports in one folder for easier continuity across visits.",
    ],
  },
  {
    slug: "vaccination-planning-for-adults",
    title: "Vaccination Planning for Adults",
    excerpt: "Adult immunizations remain important across every life stage.",
    category: "Vaccination",
    readTime: "5 min",
    date: "2025-12-12",
    image: images.vitalsCheck,
    content: [
      "Adult vaccination schedules can include boosters, seasonal vaccines, and travel-related doses.",
      "Your plan depends on age, conditions, occupation, and travel destinations.",
      "Bring records so your provider can avoid duplicate doses.",
    ],
  },
  {
    slug: "blood-pressure-monitoring-at-home",
    title: "Blood Pressure Monitoring at Home",
    excerpt: "Tips for getting reliable readings and sharing trends with your physician.",
    category: "Heart Health",
    readTime: "4 min",
    date: "2025-11-30",
    image: images.vitalsCheck,
    content: [
      "Use a validated cuff and measure at similar times daily for consistency.",
      "Avoid caffeine and exercise before taking readings unless advised otherwise.",
      "Bring your log to appointments for meaningful trend discussions.",
    ],
  },
  {
    slug: "first-time-telemedicine-visit-guide",
    title: "First-Time Telemedicine Visit Guide",
    excerpt: "Set up your virtual appointment for a smooth and productive consult.",
    category: "Telemedicine",
    readTime: "5 min",
    date: "2025-11-19",
    image: images.telemedicine,
    content: [
      "Choose a quiet, well-lit space and test your internet connection before the call.",
      "Keep your medication list, home readings, and prior reports nearby.",
      "If symptoms worsen, your doctor may direct you to in-person care.",
    ],
  },
  {
    slug: "preventive-care-for-busy-professionals",
    title: "Preventive Care for Busy Professionals",
    excerpt: "How to stay consistent with health checks even on a packed schedule.",
    category: "Lifestyle",
    readTime: "6 min",
    date: "2025-11-08",
    image: images.reception,
    content: [
      "Short, structured preventive visits can still deliver strong long-term value.",
      "Bundle annual labs, checkups, and follow-up calls to reduce scheduling friction.",
      "Use reminders and calendar blocks to protect health appointments.",
    ],
  },
  {
    slug: "supporting-senior-family-members-at-clinic-visits",
    title: "Supporting Senior Family Members at Clinic Visits",
    excerpt: "A caregiver checklist for productive and less stressful appointments.",
    category: "Senior Care",
    readTime: "7 min",
    date: "2025-10-24",
    image: images.clinicInterior,
    content: [
      "Prepare a consolidated medication list and recent symptom timeline.",
      "Ask about fall risk, mobility changes, and follow-up plans.",
      "Clarify who will manage reminders and medication schedules at home.",
    ],
  },
  {
    slug: "how-much-detail-to-share-during-consultation",
    title: "How Much Detail Should You Share During Consultation?",
    excerpt: "Key details that help physicians make safer, faster decisions.",
    category: "Patient Education",
    readTime: "5 min",
    date: "2025-10-09",
    image: images.doctorConsult,
    content: [
      "Share timing, triggers, severity, and prior treatments for each symptom.",
      "Mention medications, supplements, and allergies early in the visit.",
      "Clear context improves diagnosis pathways and avoids repeat testing.",
    ],
  },
];
