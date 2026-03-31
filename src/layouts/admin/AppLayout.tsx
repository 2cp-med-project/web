import { ADMIN_NAVIGATION } from "@/constants/navigation.ts";
import { AppLayout } from "../AppLayout/index.tsx";

export const AdminRoutesAppLayout = () => (
  <AppLayout menu={ADMIN_NAVIGATION.external.default} />
);