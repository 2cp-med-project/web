import { useAuthContext } from "@/context/auth.tsx";
import {
  AppointmentGrid,
  DashboardContextProvider,
  DashboardOverview,
  PatientsTable,
  QuickActionsList,
  ScanPatientCard,
} from "@/features/DoctorPanel/Dashboard/index.ts";
import { CalendarDays, File, Paperclip, Send } from "lucide-react";

function DashbaordPageContent() {
  const { user } = useAuthContext();

  return (
    <section className="px-2 space-y-6">
      <div className="flex flex-col w-full">
        <h1 className="text-foreground font-medium text-2xl">
          Tableau de bord
        </h1>
        <p className="text-muted text-sm font-normal">
          Suivez vos rendez-vous, messages et activités récentes
        </p>
      </div>

      <div className="space-y-2 bg-foreground w-full rounded-lg py-4 px-4">
        <p className="text-white font-archivo font-medium text-lg">
          Bonjour, {user?.fullname}
        </p>
        <div className="py-1 px-2 bg-white flex gap-x-2 rounded-lg">
          <button type="button" className="bg-white text-gray-400">
            <Paperclip size={16} />
          </button>
          <input
            type="text"
            placeholder="Écrire un message..."
            className="border w-full outline-none border-none text-base"
          />
          <button
            type="button"
            className="bg-foreground text-white p-2 rounded-full"
          >
            <Send size={16} />
          </button>
        </div>
      </div>

      <section className="w-full flex gap-x-8">
        <section className="flex-3 space-y-4">
          <DashboardOverview />

          <div className="space-y-2">
            <div className="text-foreground flex items-center gap-2">
              <File size={22} />
              <p className="text-lg font-medium">Documents récents</p>
            </div>

            <PatientsTable />
          </div>

          <div className="space-y-2">
            <div className="text-foreground flex items-center gap-2">
              <CalendarDays size={22} />
              <p className="text-lg font-medium">Prochains rendez-vous</p>
            </div>

            <AppointmentGrid />
          </div>
        </section>

        <section className="flex-1 w-full space-y-4">
          <ScanPatientCard />

          <div className="space-y-2">
            <p className="text-lg font-medium text-black">Actions rapides</p>
            <QuickActionsList />
          </div>
        </section>
      </section>
    </section>
  );
}

export const DashboardPage = () => (
  <DashboardContextProvider>
    <DashbaordPageContent />
  </DashboardContextProvider>
);
