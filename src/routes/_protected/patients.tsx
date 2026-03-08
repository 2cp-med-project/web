import { createFileRoute } from "@tanstack/react-router";
import { PatientsPage } from "../../pages";

export const Route = createFileRoute("/_protected/patients")({
  component: () => <PatientsPage />,
});
