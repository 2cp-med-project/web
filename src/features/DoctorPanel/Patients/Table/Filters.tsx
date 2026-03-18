import { Card } from "@radix-ui/themes";
import { Searchbar } from "@/components/Searchbar.tsx";
import { usePatientsContext } from "../context.tsx";

export function PatientsTableFilters() {
  const { search, onSearchChange } = usePatientsContext();

  return (
    <Card className="mt-6">
      <div className="p-2 w-full">
        <Searchbar
          placeholder="Rechercher par nom, prénom..."
          search={search}
          onSearchChange={onSearchChange}
        />
      </div>
    </Card>
  );
}
