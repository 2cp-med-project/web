import { Badge, Table } from "@radix-ui/themes";
import type { Patient } from "@/types/entities.ts";

type StatusCellProps = Pick<Patient, "status">;

export function PatientsTableStatusCell({ status }: StatusCellProps) {
  return (
    <Table.Cell>
      <Badge color={status === "active" ? "green" : "gray"}>
        {status === "active" ? "Actif" : "Inactif"}
      </Badge>
    </Table.Cell>
  );
}
