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
    <div className="h-full w-full flex gap-2">
      <Schedule />
      <div className="w-125 h-full">
        {!!selectedAppointment && (
          <AppointmentDetails
            {...selectedAppointment}
            onClose={clearAppointmentSelection}
          />
        )}
        {!selectedAppointment && <UtilityPanel />}
      </div>
    </div>
  );
}

export const PlanningPage = () => (
  <PlanningContextProvider>
    <PlanningPageContent />
  </PlanningContextProvider>
);
