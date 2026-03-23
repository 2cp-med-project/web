import { DashboardUI } from "@/constants/ui/index.ts";
import type { DashboardData } from "@/types/dashboard.ts";

// GET /dashboard
export const fetch = (_: string) => {
  return new Promise<DashboardData>((resolve) => {
    setTimeout(() => {
      const data = DashboardUI.dashboardData;
      return resolve(data);
    }, 300);
  });
};
