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
];
