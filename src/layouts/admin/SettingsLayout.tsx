import { ADMIN_NAVIGATION } from "@/constants/navigation.ts";
import { SettingsRoutesLayout } from "../SettingsRoutesLayout/index.tsx";

export const AdminSettingsRoutesLayout = () => (
  <SettingsRoutesLayout menu={ADMIN_NAVIGATION.internal.settings} />
);