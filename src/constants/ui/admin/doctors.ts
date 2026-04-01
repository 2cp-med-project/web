import { GENDER, ROLE } from "@/constants/index.ts";
import type { AuthUser } from "@/types/entities.ts";

export type DoctorWithMeta = AuthUser & {
  specialty: string;
  experience: string;
  submittedAt: string;
  verificationStatus: "pending" | "verified" | "rejected";
};

export const doctors: DoctorWithMeta[] = [
  { id: "d-001", fullname: "Dr. Mohammed Djaoued", email: "mohammed.djaoued@gmail.com", avatar: null, phoneNumber: "0698 69 00 27", address: "Es-Senia, Oran", nationalId: "NID-D001", age: 30, gender: GENDER.MALE, role: ROLE.DOCTOR, specialty: "Cardiologie", experience: "8 ans", submittedAt: "il y a 2h", verificationStatus: "pending" },
  { id: "d-002", fullname: "Dr. Salima Khelif", email: "salima.khelif@gmail.com", avatar: null, phoneNumber: "0550 98 76 54", address: "Alger Centre", nationalId: "NID-D002", age: 34, gender: GENDER.FEMALE, role: ROLE.DOCTOR, specialty: "Dermatologie", experience: "5 ans", submittedAt: "il y a 4h", verificationStatus: "pending" },
  { id: "d-003", fullname: "Dr. Karim Bensalem", email: "karim.bensalem@gmail.com", avatar: null, phoneNumber: "0661 23 45 67", address: "Constantine", nationalId: "NID-D003", age: 42, gender: GENDER.MALE, role: ROLE.DOCTOR, specialty: "Neurologie", experience: "12 ans", submittedAt: "il y a 6h", verificationStatus: "verified" },
  { id: "d-004", fullname: "Dr. Amina Hadj", email: "amina.hadj@gmail.com", avatar: null, phoneNumber: "0770 34 56 78", address: "Oran", nationalId: "NID-D004", age: 38, gender: GENDER.FEMALE, role: ROLE.DOCTOR, specialty: "Pédiatrie", experience: "10 ans", submittedAt: "il y a 1j", verificationStatus: "verified" },
  { id: "d-005", fullname: "Dr. Yacine Meziane", email: "yacine.meziane@gmail.com", avatar: null, phoneNumber: "0556 78 90 12", address: "Alger", nationalId: "NID-D005", age: 45, gender: GENDER.MALE, role: ROLE.DOCTOR, specialty: "Orthopédie", experience: "15 ans", submittedAt: "il y a 1j", verificationStatus: "rejected" },
  { id: "d-006", fullname: "Dr. Rania Boudiaf", email: "rania.boudiaf@gmail.com", avatar: null, phoneNumber: "0662 11 22 33", address: "Annaba", nationalId: "NID-D006", age: 29, gender: GENDER.FEMALE, role: ROLE.DOCTOR, specialty: "Général", experience: "3 ans", submittedAt: "il y a 2j", verificationStatus: "pending" },
  { id: "d-007", fullname: "Dr. Tarek Mansouri", email: "tarek.mansouri@gmail.com", avatar: null, phoneNumber: "0771 44 55 66", address: "Sétif", nationalId: "NID-D007", age: 51, gender: GENDER.MALE, role: ROLE.DOCTOR, specialty: "Cardiologie", experience: "20 ans", submittedAt: "il y a 2j", verificationStatus: "verified" },
];