import { PatientData } from "@/constants/ui/index.ts";
import type { PatientFileRecord } from "@/types/entities.ts";
import { PatientNotFoundError } from "../errors/PatientNotFoundError.ts";
import { DoctorData } from "./dashboard.api.ts";

// GET /patients/<patientId>/files
export const fetch = (patientId: string) => {
  return new Promise<PatientFileRecord[]>((resolve, reject) => {
    setTimeout(() => {
      const patient = DoctorData.Patients.patientsWithDetails.find(
        (item) => item.id === patientId,
      );

      if (!patient) {
        return reject(new PatientNotFoundError(patientId));
      }

      return resolve(PatientData.Files.files);
    }, 300);
  });
};
