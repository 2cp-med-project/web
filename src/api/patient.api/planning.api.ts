import { PatientData } from "@/constants/ui/index.ts";
import type { PatientPlanningData } from "@/types/dashboard.ts";

// GET /planning
export const fetch = (_: string) => {
  return new Promise<PatientPlanningData>((resolve) => {
    setTimeout(() => {
      return resolve(PatientData.Planning.planningData);
    }, 300);
  });
};
