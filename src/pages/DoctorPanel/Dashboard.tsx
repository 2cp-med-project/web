import { DashboardUI, PatientsUI, PlanningUI } from "@/constants/ui/index.ts";
import { useAuthContext } from "@/context/index.ts";
import {
  AppointmentCard,
  OverviewCard,
  PatientsTable,
  QuickAction,
  ScanPatientCard,
} from "@/features/DoctorPanel/Dashboard/index.ts";
import { Grid } from "@radix-ui/themes";
import { CalendarDays, File, Paperclip, Search, Send } from "lucide-react";
import { useMemo } from "react";

export function DashboardPage() {
  const { user } = useAuthContext();

  const appointments = PlanningUI.appointments.map((a) => {
    const { patientId, ...rest } = a;
    const patient = PatientsUI.patients.find((p) => p.id === patientId)!;
    return {
      ...rest,
      patient,
    };
  });

  const quickActions = useMemo(
    () => [
      {
        label: "Rechercher un médecin / patient",
        desc: "Trouvez des médecins spécialisés à proximité",
        icon: Search,
        action: () => {},
      },
      {
        label: "Prendre un rendez-vous",
        desc: "Réservez avec votre médecin",
        icon: CalendarDays,
        action: () => {},
      },
      {
        label: "Discussion",
        desc: "Ouvrir une conversation avec le médecin",
        icon: Send,
        action: () => {},
      },
    ],
    [],
  );

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
          <Grid columns="3" gap={"2"}>
            {DashboardUI.overviewCards.map((item) => (
              <OverviewCard {...item} />
            ))}
          </Grid>

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

            <Grid columns={"2"} gapX={"4"} gapY={"4"}>
              {appointments.map((a) => (
                <AppointmentCard {...a} />
              ))}
            </Grid>
          </div>
        </section>

        <section className="flex-1 w-full space-y-4">
          <ScanPatientCard />

          <div className="space-y-2">
            <p className="text-lg font-medium text-black">Actions rapides</p>
            <Grid columns={"1"} gapY={"2"}>
              {quickActions.map((action) => (
                <QuickAction {...action} />
              ))}
            </Grid>
          </div>
        </section>
      </section>
    </section>
  );
}
