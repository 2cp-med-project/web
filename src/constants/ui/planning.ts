import type { RawAppointment } from "@/types/entities.ts";

export const appointments: RawAppointment[] = [
  {
    id: "1",
    patientId: "1",
    start: new Date("2026-03-08T09:00:00"),
    end: new Date("2026-03-08T09:30:00"),
    reason: "Routine check-up",
  },
  {
    id: "2",
    patientId: "2",
    start: new Date("2026-03-08T10:00:00"),
    end: new Date("2026-03-08T10:45:00"),
    reason: "Follow-up consultation",
  },
  {
    id: "3",
    patientId: "3",
    start: new Date("2026-03-08T11:00:00"),
    end: new Date("2026-03-08T11:30:00"),
    reason: "Blood pressure monitoring",
  },
  {
    id: "4",
    patientId: "4",
    start: new Date("2026-03-08T14:00:00"),
    end: new Date("2026-03-08T14:30:00"),
    reason: "General consultation",
  },
  {
    id: "5",
    patientId: "5",
    start: new Date("2026-03-09T09:30:00"),
    end: new Date("2026-03-09T10:00:00"),
    reason: "Prescription renewal",
  },
  {
    id: "6",
    patientId: "6",
    start: new Date("2026-03-09T10:30:00"),
    end: new Date("2026-03-09T11:15:00"),
    reason: "Lab results review",
  },
  {
    id: "7",
    patientId: "7",
    start: new Date("2026-03-09T15:00:00"),
    end: new Date("2026-03-09T15:30:00"),
    reason: "Flu symptoms",
  },
  {
    id: "8",
    patientId: "8",
    start: new Date("2026-03-10T09:00:00"),
    end: new Date("2026-03-10T09:45:00"),
    reason: "Initial consultation",
  },
  {
    id: "9",
    patientId: "9",
    start: new Date("2026-03-10T11:30:00"),
    end: new Date("2026-03-10T12:00:00"),
    reason: "Back pain assessment",
  },
  {
    id: "10",
    patientId: "10",
    start: new Date("2026-03-10T16:00:00"),
    end: new Date("2026-03-10T16:30:00"),
    reason: "Follow-up visit",
  },
];
