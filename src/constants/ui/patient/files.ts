import type { PatientFileRecord } from "@/types/entities.ts";

export const files: PatientFileRecord[] = [
  {
    id: "file-1",
    name: "Consultation 1",
    type: "consultation",
    modifiedAt: "12/05/2025",
    modifiedDaysAgo: 2,
    doctor: {
      key: "sarah-chen",
      name: "Dr. Sarah Chen",
      email: "sarah.chen@healio.fr",
      shortName: "SC",
    },
  },
  {
    id: "file-2",
    name: "Consultation 2",
    type: "consultation",
    modifiedAt: "12/05/2025",
    modifiedDaysAgo: 5,
    doctor: {
      key: "malik-rahal",
      name: "Dr. Malik Rahal",
      email: "malik.rahal@healio.fr",
      shortName: "MR",
    },
  },
  {
    id: "file-3",
    name: "Analyse 1",
    type: "analyse",
    modifiedAt: "12/05/2025",
    modifiedDaysAgo: 12,
    doctor: {
      key: "sarah-chen",
      name: "Dr. Sarah Chen",
      email: "sarah.chen@healio.fr",
      shortName: "SC",
    },
  },
  {
    id: "file-4",
    name: "Analyse 2",
    type: "analyse",
    modifiedAt: "12/05/2025",
    modifiedDaysAgo: 18,
    doctor: {
      key: "malik-rahal",
      name: "Dr. Malik Rahal",
      email: "malik.rahal@healio.fr",
      shortName: "MR",
    },
  },
  {
    id: "file-5",
    name: "Ordonnance 1",
    type: "ordonnance",
    modifiedAt: "12/05/2025",
    modifiedDaysAgo: 21,
    doctor: {
      key: "sarah-chen",
      name: "Dr. Sarah Chen",
      email: "sarah.chen@healio.fr",
      shortName: "SC",
    },
  },
  {
    id: "file-6",
    name: "Consultation 3",
    type: "consultation",
    modifiedAt: "12/05/2025",
    modifiedDaysAgo: 27,
    doctor: {
      key: "malik-rahal",
      name: "Dr. Malik Rahal",
      email: "malik.rahal@healio.fr",
      shortName: "MR",
    },
  },
];
