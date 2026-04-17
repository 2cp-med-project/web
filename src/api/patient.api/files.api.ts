import { PatientData } from "@/constants/ui/index.ts";
import type { PatientFileRecord } from "@/types/entities.ts";

// GET /files
export const fetch = (_: string) => {
  return new Promise<PatientFileRecord[]>((resolve) => {
    setTimeout(() => {
      return resolve(PatientData.Files.files);
    }, 300);
  });
};
