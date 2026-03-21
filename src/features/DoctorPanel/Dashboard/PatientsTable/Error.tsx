import { Table } from "@radix-ui/themes";
import { AlertCircle } from "lucide-react";

type PatientsTableErrorProps = {
  onRetry: () => void;
};

export function PatientsTableError({ onRetry }: PatientsTableErrorProps) {
  return (
    <Table.Row>
      <Table.Cell colSpan={5}>
        <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
          <div className="p-4 rounded-full bg-red-100">
            <AlertCircle className="text-red-600 size-8" />
          </div>

          <div className="space-y-1">
            <p className="text-lg font-semibold text-red-600">
              Impossible de charger les patients
            </p>
            <p className="text-sm text-muted">
              Une erreur est survenue lors de la récupération des données.
            </p>
          </div>

          <button
            type="button"
            onClick={onRetry}
            className="mt-2 px-4 py-2 rounded-lg bg-foreground text-white text-sm hover:bg-foreground/90 transition-colors"
          >
            Réessayer
          </button>
        </div>
      </Table.Cell>
    </Table.Row>
  );
}
