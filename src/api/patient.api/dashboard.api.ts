import { PatientData } from "@/constants/ui/index.ts";
import type { PatientDashboardData } from "@/types/dashboard.ts";

// GET /dashboard
export const fetch = (_: string) => {
  return new Promise<PatientDashboardData>((resolve) => {
    setTimeout(() => {
      const data = PatientData.Dasboard.dashboardData;
      return resolve(data);
    }, 300);
  });
};
