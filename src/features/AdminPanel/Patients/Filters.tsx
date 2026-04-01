import { TextField } from "@radix-ui/themes";
import { Search } from "lucide-react";
import { usePatientsContext } from "./context.tsx";

export function PatientsFilters() {
  const { search, onSearchChange } = usePatientsContext();
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
