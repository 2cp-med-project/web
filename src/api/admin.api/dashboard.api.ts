import { Admin } from "@/constants/ui/index.ts";
import type { AdminDashboardData } from "@/types/dashboard.ts";

export const fetch = (_: string) => {
  return new Promise<AdminDashboardData>((resolve) => {
    setTimeout(() => {
      return resolve(Admin.Dashboard.dashboardData);
    }, 300);
  });
};