import { format } from "date-fns";

export function generateReferenceNumber() {
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `PC-${timestamp}-${random}`;
}

export function appointmentMessage(input: {
  reference: string;
  name: string;
  date: string;
  time: string;
  service: string;
}) {
  return `Hello, I booked an appointment at PrimeCare. Ref: ${input.reference}, Name: ${input.name}, Service: ${input.service}, Date: ${format(new Date(input.date), "PPP")}, Time: ${input.time}.`;
}
