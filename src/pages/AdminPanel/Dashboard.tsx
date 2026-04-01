import {
  AdminDashboardOverview,
  DashboardContextProvider,
  DoctorsBySpecialtyChart,
  NewRegistrationsChart,
  RecentUsers,
  VerificationTable,
} from "@/features/AdminPanel/Dashboard/index.ts";

function DashboardPageContent() {
  return (
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
  );
}

export const DashboardPage = () => (
  <DashboardContextProvider>
    <DashboardPageContent />
  </DashboardContextProvider>
);
