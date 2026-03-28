import { DOCTOR_NAVIGATION } from "@/constants/navigation.ts";
import { AppLayout } from "../AppLayout/index.tsx";

export const DoctorRoutesAppLayout = () => (
  <AppLayout menu={DOCTOR_NAVIGATION.external.default} />
);
