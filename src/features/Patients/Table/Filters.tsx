import { Card } from "@radix-ui/themes";
import { Searchbar } from "../../../components/Searchbar.tsx";
import { usePatientsTableContext } from "../context.tsx";

export function PatientsTableFilters() {
  const { search, onSearchChange } = usePatientsTableContext();

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
