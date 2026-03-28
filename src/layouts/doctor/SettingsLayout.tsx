import { DOCTOR_NAVIGATION } from "@/constants/navigation.ts";
import { SettingsRoutesLayout } from "../SettingsRoutesLayout/index.tsx";

export const DoctorSettingsRoutesLayout = () => (
  <SettingsRoutesLayout menu={DOCTOR_NAVIGATION.internal.settings} />
);
