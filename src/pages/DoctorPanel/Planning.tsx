import {
  AppointmentDetails,
  Schedule,
  usePlanningContext,
  UtilityPanel,
} from "@/features/DoctorPanel/Planning/index.ts";

export function PlanningPage() {
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
