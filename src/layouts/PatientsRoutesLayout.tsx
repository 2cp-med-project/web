import { PATIENT_NAVIGATION_MENU } from "@/constants/navigation.ts";
import { MainContent, NestedSidebar } from "./shared/index.ts";

export function PatientsRoutesLayout() {
  return (
    <div className="h-screen w-full flex bg-main-content-background">
      <NestedSidebar menu={PATIENT_NAVIGATION_MENU} parentRoute="/patients" />
      <MainContent />
    </div>
  );
}
