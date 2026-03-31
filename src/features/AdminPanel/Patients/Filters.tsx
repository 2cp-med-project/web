import { useAdminPatientsContext } from "./context.tsx";
import { TextField } from "@radix-ui/themes";
import { Search } from "lucide-react";

export function AdminPatientsFilters() {
  const { search, onSearchChange } = useAdminPatientsContext();
  return (
    <div className="mt-4">
      <TextField.Root
        placeholder="Rechercher un patient..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        size="2"
      >
        <TextField.Slot>
          <Search size={14} />
        </TextField.Slot>
      </TextField.Root>
    </div>
  );
}