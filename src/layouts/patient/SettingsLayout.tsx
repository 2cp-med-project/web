import { PATIENT_NAVIGATION } from "@/constants/navigation.ts";
import { SettingsRoutesLayout } from "../SettingsRoutesLayout/index.tsx";

export const PatientSettingsRoutesLayout = () => (
  <SettingsRoutesLayout menu={PATIENT_NAVIGATION.internal.settings} />
);
