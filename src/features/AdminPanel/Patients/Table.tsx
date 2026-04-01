import { Table } from "@radix-ui/themes";
import { SearchX } from "lucide-react";
import { usePatientsContext } from "./context.tsx";

export function PatientsTable() {
  const { patients, isLoading, isError, view } = usePatientsContext();

  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Patient</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Âge</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Sang</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Inscrit</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Statut</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {isLoading &&
          Array.from({ length: 4 }).map((_, i) => (
            <Table.Row key={i}>
              {Array.from({ length: 5 }).map((_, j) => (
                <Table.Cell key={j}>
                  <div className="h-4 bg-gray-100 rounded animate-pulse w-24" />
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        {!isLoading && !isError && patients.length === 0 && (
          <Table.Row>
            <Table.Cell colSpan={5}>
              <div className="h-40 flex flex-col items-center justify-center gap-2 text-gray-500">
                <SearchX className="w-8 h-8 text-gray-400" />
                <p className="text-lg font-medium">Aucun patient trouvé</p>
              </div>
            </Table.Cell>
          </Table.Row>
        )}
        {!isLoading &&
          !isError &&
          patients.map((patient) => (
            <Table.Row
              key={patient.id}
              className="cursor-pointer hover:bg-gray-50 transition"
              onClick={() => view(patient.id)}
            >
              <Table.Cell>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-xs font-semibold">
                    {patient.fullname.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{patient.fullname}</p>
                    <p className="text-xs text-gray-400">{patient.email}</p>
                  </div>
                </div>
              </Table.Cell>
              <Table.Cell>{patient.age}</Table.Cell>
              <Table.Cell>—</Table.Cell>
              <Table.Cell className="text-gray-400 text-sm">
                {new Date(patient.lastVisit).toLocaleDateString("fr-FR")}
              </Table.Cell>
              <Table.Cell>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    patient.status === "active"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {patient.status === "active" ? "Actif" : "Inactif"}
                </span>
              </Table.Cell>
            </Table.Row>
          ))}
      </Table.Body>
    </Table.Root>
  );
}
