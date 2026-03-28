import { DOCTOR_NAVIGATION } from "@/constants/navigation.ts";
import { MainContent, NestedSidebar } from "../shared/index.ts";

export function DoctorPatientsRoutesLayout() {
  return (
    <div className="h-screen w-full flex bg-main-content-background">
      <NestedSidebar
        menu={{
          external: DOCTOR_NAVIGATION.external.default,
          internal: DOCTOR_NAVIGATION.external.patients,
        }}
        parentRoute="/patients"
      />
      <MainContent />
    </div>
  );
}
