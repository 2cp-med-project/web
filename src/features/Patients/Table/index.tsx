import { Table } from "@radix-ui/themes";
import { SearchX } from "lucide-react";
import { usePatientsContext } from "../context.tsx";
import { PatientsTableRow } from "./Row.tsx";

export function PatientsTable() {
  const { patients } = usePatientsContext();

  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Patient</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Dernière visite</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Statut</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Actions</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {patients.length === 0 && (
          <Table.Row>
            <Table.Cell colSpan={5}>
              <div className="h-40 flex flex-col items-center justify-center gap-2 text-gray-500">
                <SearchX className="w-8 h-8 text-gray-400" />
                <p className="text-lg font-medium">Aucun patient trouvé</p>
              </div>
            </Table.Cell>
          </Table.Row>
        )}

        {patients.length > 0 &&
          patients.map((patient) => (
            <PatientsTableRow {...patient} key={patient.id} />
          ))}
      </Table.Body>
    </Table.Root>
  );
}
