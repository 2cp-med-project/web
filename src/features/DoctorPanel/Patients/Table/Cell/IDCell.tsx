import { Table, Text } from "@radix-ui/themes";
import type { Patient } from "@/types/entities.ts";

type IDCellProps = Pick<Patient, "id">;

export function PatientsTableIDCell({ id }: IDCellProps) {
  return (
    <Table.Cell>
      <Text size="1" color="gray">
        {id}
      </Text>
    </Table.Cell>
  );
}
