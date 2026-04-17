import type { PatientPlanningData } from "@/types/dashboard.ts";

export const planningData: PatientPlanningData = {
  selectedDate: "2026-02-24",
  availableHours: 6,
  miniCalendarMonthLabel: "Fev 2026",
  miniCalendarDays: Array.from({ length: 29 }, (_, index) => index + 1),
  miniCalendarOffset: 4,
  appointments: [
    {
      id: "patient-appointment-1",
      title: "Suivi : Dr. John",
      doctorName: "Dr. Jean Doe",
      doctorEmail: "jean.doe@healio.fr",
      doctorAvatar: null,
      doctorShortName: "JD",
      date: "2026-02-24",
      start: "09:00",
      end: "10:00",
      status: "confirmed",
      durationLabel: "1h",
    },
    {
      id: "patient-appointment-2",
      title: "Suivi : Dr. Doe",
      doctorName: "Dr. Jean Doe",
      doctorEmail: "jean.doe@healio.fr",
      doctorAvatar: null,
      doctorShortName: "JD",
      date: "2026-02-24",
      start: "11:00",
      end: "13:00",
      status: "confirmed",
      durationLabel: "2h",
    },
  ],
};
