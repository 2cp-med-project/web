import { ROLE } from "@/constants/index.ts";
import type { AdminDashboardData } from "@/types/dashboard.ts";
import { doctors } from "./doctors.ts";
import { patients } from "./patients.ts";

export const dashboardData: AdminDashboardData = {
  totalPatientsCount: patients.length,
  totalDoctorsCount: doctors.length,
  totalAppointmentsCount: doctors.filter((d) => d.verificationStatus === "pending").length,
  newRegistrationsCount: 7,
  monthlyRegistrations: [
    { month: "Oct", count: 45 },
    { month: "Nov", count: 60 },
    { month: "Déc", count: 38 },
    { month: "Jan", count: 89 },
    { month: "Fév", count: 77 },
    { month: "Mar", count: 23 },
  ],
  doctorsBySpecialty: [
    { specialty: "Cardiologie", count: 45 },
    { specialty: "Dermatologie", count: 50 },
    { specialty: "Neurologie", count: 38 },
    { specialty: "Pédiatrie", count: 89 },
    { specialty: "Orthopédie", count: 77 },
    { specialty: "Général", count: 23 },
  ],
  recentUsers: [
    ...patients.slice(0, 3).map((p) => ({
      id: p.id,
      fullname: p.fullname,
      role: ROLE.PATIENT,
      joinedDate: p.joinedDate,
      status: "active" as const,
    })),
    ...doctors.slice(0, 2).map((d) => ({
      id: d.id,
      fullname: d.fullname,
      role: ROLE.DOCTOR,
      joinedDate: d.submittedAt,
      status: d.verificationStatus === "verified" ? "active" as const : "pending" as const,
    })),
  ],
  pendingDoctors: doctors
    .filter((d) => d.verificationStatus === "pending")
    .map(({ specialty, experience, submittedAt, ...rest }) => ({
      id: rest.id,
      fullname: rest.fullname,
      email: rest.email,
      phoneNumber: rest.phoneNumber,
      address: rest.address ?? "",
      nationalId: rest.nationalId,
      age: rest.age,
      specialty,
      experience,
      submittedAt,
    })),
};