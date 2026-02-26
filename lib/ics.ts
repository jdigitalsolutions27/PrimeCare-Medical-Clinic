import { addMinutes, format } from "date-fns";

type IcsInput = {
  title: string;
  description: string;
  startDate: Date;
  durationMinutes: number;
  location: string;
};

function formatIcsDate(date: Date) {
  return format(date, "yyyyMMdd'T'HHmmss");
}

export function buildIcsContent(input: IcsInput) {
  const endDate = addMinutes(input.startDate, input.durationMinutes);

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "CALSCALE:GREGORIAN",
    "PRODID:-//PrimeCare Medical Clinic//Appointment//EN",
    "BEGIN:VEVENT",
    `DTSTART:${formatIcsDate(input.startDate)}`,
    `DTEND:${formatIcsDate(endDate)}`,
    `SUMMARY:${input.title}`,
    `DESCRIPTION:${input.description.replace(/\n/g, "\\n")}`,
    `LOCATION:${input.location}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}
