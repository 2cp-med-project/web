import { Select, TextField } from "@radix-ui/themes";
import { Search } from "lucide-react";
import { useDoctorsContext } from "./context.tsx";

export function DoctorsFilters() {
  const { search, onSearchChange, statusFilter, onStatusFilterChange } =
    useDoctorsContext();

  return (
    <div className="flex items-center gap-3 mt-4">
      <TextField.Root
        placeholder="Rechercher par spécialité..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        size="2"
        className="flex-1"
      >
        <TextField.Slot>
          <Search size={14} />
        </TextField.Slot>
      </TextField.Root>
      <Select.Root value={statusFilter} onValueChange={onStatusFilterChange}>
        <Select.Trigger placeholder="Tous les statuts" />
        <Select.Content>
          <Select.Item value="all">Tous les statuts</Select.Item>
          <Select.Item value="verified">Vérifiés</Select.Item>
          <Select.Item value="rejected">Rejetés</Select.Item>
          <Select.Item value="pending">En attente</Select.Item>
        </Select.Content>
      </Select.Root>
    </div>
  );
}
