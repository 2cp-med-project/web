import { Table } from "@radix-ui/themes";
import type { Patient } from "@/types/entities.ts";

type LastVisitCellProps = Pick<Patient, "lastVisit">;

export function PatientsTableLastVisitCell({ lastVisit }: LastVisitCellProps) {
  return <Table.Cell>{lastVisit.toLocaleDateString("fr-FR")}</Table.Cell>;
}
