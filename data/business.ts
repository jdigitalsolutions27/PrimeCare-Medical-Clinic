export const business = {
  clinicName: "PrimeCare Medical Clinic",
  tagline: "Modern, compassionate care for every stage of life.",
  description:
    "PrimeCare Medical Clinic is a patient-first multi-specialty clinic focused on safe, efficient, and personalized care in a calm modern environment.",
  logoText: "PrimeCare",
  colors: {
    primary: "#2b9693",
    secondary: "#d2f1ef",
    accent: "#bfe6f7",
  },
  phones: {
    main: "+1 (555) 217-4100",
    hotline: "+1 (555) 217-4199",
    whatsapp: "+15552174100",
  },
  emails: {
    info: "hello@primecareclinic.com",
    appointments: "appointments@primecareclinic.com",
  },
  address: {
    line1: "2450 Harbor Medical Plaza, Suite 210",
    city: "San Diego",
    state: "CA",
    zip: "92101",
    country: "USA",
  },
  hours: [
    { day: "Mon - Fri", time: "7:00 AM - 8:00 PM" },
    { day: "Saturday", time: "8:00 AM - 5:00 PM" },
    { day: "Sunday", time: "9:00 AM - 2:00 PM" },
  ],
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
  mapEmbedUrl:
    "https://www.google.com/maps?q=San+Diego+CA&output=embed",
  stats: {
    years: 14,
    patientsServed: "45,000+",
    departments: 12,
    avgWaitTime: "15 min",
  },
};

export const fullAddress = `${business.address.line1}, ${business.address.city}, ${business.address.state} ${business.address.zip}`;
