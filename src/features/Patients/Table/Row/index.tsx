import { Table } from "@radix-ui/themes";
import type { Patient } from "../../../../types/entities.ts";
import { PatientsTableCell } from "../Cell/index.ts";

type PatientsTableRowProps = Patient & {};

export function PatientsTableRow({ ...patient }: PatientsTableRowProps) {
  return (
    <Table.Row>
      <PatientsTableCell.Avatar
        avatar={patient.avatar}
        email={patient.email}
        fullname={patient.fullname}
      />
      <PatientsTableCell.ID id={patient.id} />
      <PatientsTableCell.LastVisit lastVisit={patient.lastVisit} />
      <PatientsTableCell.Status status={patient.status} />
      <PatientsTableCell.Actions id={patient.id} />
    </Table.Row>
  );
}

export { PatientsTableRowSkeleton } from "./Skeleton.tsx";
