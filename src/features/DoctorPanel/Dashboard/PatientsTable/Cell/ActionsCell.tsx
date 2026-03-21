import { cn } from "@/lib/utils.ts";
import type { Patient } from "@/types/entities.ts";
import { Flex, Table, Tooltip } from "@radix-ui/themes";
import { Eye, Link } from "lucide-react";

type ActionsCellProps = Pick<Patient, "id">;

export function PatientsTableActionsCell({ id }: ActionsCellProps) {
  const view = (_: string) => {};

  const baseClasses = cn(
    "group cursor-pointer",
    "p-2 rounded-lg",
    "text-gray-600",
    "hover:bg-blue-50 hover:text-foreground",
    "focus:outline-none focus:ring-1 focus:ring-gray-300",
    "transition-all duration-200",
    "active:scale-95",
  );

  const onView = () => view(id);

  return (
    <Table.Cell>
      <Flex gap="2">
        <Tooltip content="Voir le profil de ce patient">
          <button className={baseClasses} onClick={onView}>
            <Eye className="w-4 h-4 transition-transform group-hover:scale-110" />
          </button>
        </Tooltip>
        <Tooltip content="Demander l'accès au dossier du patient">
          <button className={baseClasses}>
            <Link className="w-4 h-4 transition-transform group-hover:scale-110" />
          </button>
        </Tooltip>
      </Flex>
    </Table.Cell>
  );
}
