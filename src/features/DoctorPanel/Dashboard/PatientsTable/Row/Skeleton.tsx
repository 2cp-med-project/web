import { Skeleton } from "@/components/Skeleton.tsx";
import { Table } from "@radix-ui/themes";

export function PatientsTableRowSkeleton() {
  return (
    <Table.Row>
      {/* Avatar + name + email */}
      <Table.Cell>
        <div className="flex items-center gap-3">
          <Skeleton className="size-10 rounded-full" />
          <div className="flex flex-col gap-1">
            <Skeleton className="h-3 w-28 rounded-md" />
            <Skeleton className="h-3 w-36 rounded-md" />
          </div>
        </div>
      </Table.Cell>

      {/* ID */}
      <Table.Cell>
        <Skeleton className="h-3 w-20 rounded-md" />
      </Table.Cell>

      {/* Last visit */}
      <Table.Cell>
        <Skeleton className="h-3 w-24 rounded-md" />
      </Table.Cell>

      {/* Actions */}
      <Table.Cell>
        <div className="flex gap-2">
          <Skeleton className="size-8 rounded-md" />
          <Skeleton className="size-8 rounded-md" />
        </div>
      </Table.Cell>
    </Table.Row>
  );
}
