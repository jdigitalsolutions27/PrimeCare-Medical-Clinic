export type Testimonial = {
  id: string;
  name: string;
  ageGroup: string;
  rating: number;
  service: string;
  quote: string;
  date: string;
};

export const testimonials: Testimonial[] = [
  { id: "t1", name: "Carla M.", ageGroup: "30s", rating: 5, service: "Primary Care", quote: "Fast check-in, clear explanations, and truly respectful staff.", date: "2026-01-09" },
  { id: "t2", name: "James R.", ageGroup: "40s", rating: 5, service: "Health Checkup", quote: "The annual package was organized and surprisingly efficient.", date: "2026-01-03" },
  { id: "t3", name: "Nina P.", ageGroup: "20s", rating: 5, service: "Dermatology", quote: "I finally understood my skin triggers and got a practical plan.", date: "2025-12-21" },
  { id: "t4", name: "Marta L.", ageGroup: "50s", rating: 5, service: "Women's Health", quote: "The consultation felt private, calm, and very professional.", date: "2025-12-16" },
  { id: "t5", name: "Aaron D.", ageGroup: "30s", rating: 5, service: "Diagnostics", quote: "Lab process was smooth and results were explained clearly.", date: "2025-12-12" },
  { id: "t6", name: "Harper T.", ageGroup: "Parent", rating: 5, service: "Pediatrics", quote: "Our child was comfortable the whole time. Great pediatric team.", date: "2025-11-30" },
  { id: "t7", name: "Liam V.", ageGroup: "40s", rating: 4, service: "Minor Procedure", quote: "Everything was sterile, quick, and well communicated.", date: "2025-11-21" },
  { id: "t8", name: "Sofia G.", ageGroup: "30s", rating: 5, service: "Vaccination", quote: "Easy booking and no long wait. Excellent experience.", date: "2025-11-11" },
  { id: "t9", name: "Noah C.", ageGroup: "60s", rating: 5, service: "Senior Care", quote: "Doctor listened carefully and included my caregiver in the plan.", date: "2025-10-29" },
  { id: "t10", name: "Emily B.", ageGroup: "20s", rating: 5, service: "General Consultation", quote: "I used online booking and got seen the same morning.", date: "2025-10-20" },
  { id: "t11", name: "Daniel Y.", ageGroup: "30s", rating: 5, service: "Diabetes Screening", quote: "Helpful preventive guidance, not just a lab result handoff.", date: "2025-10-12" },
  { id: "t12", name: "Grace A.", ageGroup: "40s", rating: 5, service: "Travel Health", quote: "Very useful travel vaccine advice and timeline planning.", date: "2025-09-27" },
  { id: "t13", name: "Oliver H.", ageGroup: "30s", rating: 4, service: "Primary Care", quote: "Clinic feels premium and clean without being intimidating.", date: "2025-09-19" },
  { id: "t14", name: "Leah F.", ageGroup: "Parent", rating: 5, service: "Pediatrics", quote: "Appointment reminders and follow-up instructions were excellent.", date: "2025-09-05" },
  { id: "t15", name: "Mason K.", ageGroup: "50s", rating: 5, service: "Blood Pressure Screening", quote: "Great for ongoing monitoring and practical next steps.", date: "2025-08-31" },
  { id: "t16", name: "Chloe W.", ageGroup: "30s", rating: 5, service: "Women's Preventive Screening", quote: "The process felt structured, private, and patient-centered.", date: "2025-08-25" },
  { id: "t17", name: "Ethan S.", ageGroup: "40s", rating: 5, service: "Men's Wellness", quote: "Highly recommend for anyone wanting a modern preventive clinic.", date: "2025-08-10" },
  { id: "t18", name: "Rina Q.", ageGroup: "20s", rating: 5, service: "Telemedicine", quote: "Virtual follow-up was simple and still felt personal.", date: "2025-07-28" },
];
