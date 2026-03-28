export { DoctorData } from "@/constants/ui/index.ts";
import { DoctorData } from "@/constants/ui/index.ts";
import type { DoctorDashboardData } from "@/types/dashboard.ts";

// GET /dashboard
export const fetch = (_: string) => {
  return new Promise<DoctorDashboardData>((resolve) => {
    setTimeout(() => {
      const data = DoctorData.Dashboard.dashboardData;
      return resolve(data);
    }, 300);
  });
};
