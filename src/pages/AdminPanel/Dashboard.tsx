import {
  AdminDashboardContextProvider,
  AdminDashboardOverview,
  DoctorsBySpecialtyChart,
  NewRegistrationsChart,
  RecentUsers,
  VerificationTable,
} from "@/features/AdminPanel/Dashboard/index.ts";

export function AdminDashboardPage() {
  return (
    <AdminDashboardContextProvider>
      <div className="space-y-6">
        <AdminDashboardOverview />
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <VerificationTable />
          </div>
          <div className="space-y-4">
            <NewRegistrationsChart />
            <DoctorsBySpecialtyChart />
          </div>
        </div>
        <RecentUsers />
      </div>
    </AdminDashboardContextProvider>
  );
}