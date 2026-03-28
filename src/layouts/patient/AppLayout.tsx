import { PATIENT_NAVIGATION } from "@/constants/navigation.ts";
import { AppLayout } from "../AppLayout/index.tsx";

export const PatientRoutesAppLayout = () => (
  <AppLayout menu={PATIENT_NAVIGATION.external.default} />
);
