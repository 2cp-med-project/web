import {
  AppointmentGrid,
  Chatbox,
  DashboardContextProvider,
  DashboardOverview,
  EmergencyContactsList,
  PatientProfileCard,
  QuickActionsList,
} from "@/features/PatientPanel/Dashboard/index.ts";
import { CalendarDays, Clock } from "lucide-react";

function DashbaordPageContent() {
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

      <Chatbox />

      <section className="w-full flex gap-x-8">
        <section className="flex-3 space-y-4">
          <DashboardOverview />

          <div className="space-y-2">
            <div className="text-foreground flex items-center gap-2">
              <CalendarDays size={22} />
              <p className="text-lg font-medium">Prochains rendez-vous</p>
            </div>

            <AppointmentGrid />
          </div>
        </section>

        <section className="flex-1 w-full space-y-4">
          <PatientProfileCard />

          <div className="space-y-2">
            <p className="text-lg font-medium text-black">Actions rapides</p>
            <QuickActionsList />
          </div>

          <div className="bg-red-100 p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-2 text-red-400">
              <Clock />
              <p className="text-lg font-medium">Contacts d'Urgences</p>
            </div>

            <EmergencyContactsList />

            <button className="rounded-lg py-1 w-full bg-red-600 text-white text-center text-lg font-archivo font-medium">
              Contact My Care Team
            </button>
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
