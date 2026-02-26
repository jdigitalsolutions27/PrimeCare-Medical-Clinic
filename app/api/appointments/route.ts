import { NextRequest, NextResponse } from "next/server";

import { fullAddress } from "@/data/business";
import { services } from "@/data/services";
import { generateReferenceNumber } from "@/lib/appointment";
import { buildIcsContent } from "@/lib/ics";

function parseAppointmentDate(date: string, time: string) {
  if (!date) return new Date();
  const parsed = new Date(date);
  const timeMatch = time.match(/(\d{1,2}):(\d{2})\s?(AM|PM)/i);
  if (!timeMatch) return parsed;
  let hour = Number(timeMatch[1]);
  const minute = Number(timeMatch[2]);
  const period = timeMatch[3].toUpperCase();
  if (period === "PM" && hour !== 12) hour += 12;
  if (period === "AM" && hour === 12) hour = 0;
  parsed.setHours(hour, minute, 0, 0);
  return parsed;
}

export async function POST(request: NextRequest) {
  const payload = await request.json();
  const service = services.find((item) => item.slug === payload.serviceSlug);
  const reference = generateReferenceNumber();

  return NextResponse.json({
    ok: true,
    reference,
    submittedAt: new Date().toISOString(),
    serviceName: service?.name || payload.concern || "General Consultation",
  });
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const name = searchParams.get("name") || "Patient";
  const service = searchParams.get("service") || "Clinic Appointment";
  const date = searchParams.get("date") || "";
  const time = searchParams.get("time") || "09:00 AM";
  const reference = searchParams.get("reference") || generateReferenceNumber();

  const startDate = parseAppointmentDate(date, time);
  const content = buildIcsContent({
    title: `${service} - PrimeCare Medical Clinic`,
    description: `Reference: ${reference}\\nPatient: ${name}`,
    startDate,
    durationMinutes: 30,
    location: fullAddress,
  });

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": `attachment; filename="primecare-appointment-${reference}.ics"`,
    },
  });
}
