import {
  AppointmentDetails,
  PlanningContextProvider,
  Schedule,
  usePlanningContext,
  UtilityPanel,
} from "@/features/DoctorPanel/Planning/index.ts";

function PlanningPageContent() {
  const { selectedAppointment, clearAppointmentSelection } =
    usePlanningContext();

  return (
    <section className="h-full w-full">
      <div className="grid h-full gap-4 xl:grid-cols-[minmax(0,1fr)_320px]">
        <Schedule />
        <div className="h-full">
        {!!selectedAppointment && (
          <AppointmentDetails
            {...selectedAppointment}
            onClose={clearAppointmentSelection}
          />
        )}
        {!selectedAppointment && <UtilityPanel />}
        </div>
      </div>
    </section>
  );
}

export const PlanningPage = () => (
  <PlanningContextProvider>
    <PlanningPageContent />
  </PlanningContextProvider>
);
