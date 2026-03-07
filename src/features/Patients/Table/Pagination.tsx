import { Flex } from "@radix-ui/themes";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../../utils/cn.ts";
import { usePatientsTableContext } from "../context.tsx";

export function PatientsTablePagination() {
  const { count, onNextPage, onPrevPage, page, pageSize } =
    usePatientsTableContext();

  const totalPages = Math.ceil(count / pageSize);
  const from = pageSize * (page - 1) + 1;
  const to = Math.min(pageSize * page, count);

  const baseButtonClasses =
    "border border-gray-300 flex items-center gap-1 px-3 py-1 rounded-lg font-medium transition-all duration-200";

  const enabledButtonClasses =
    "cursor-pointer bg-white text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300";

  const disabledButtonClasses = "cursor-not-allowed bg-gray-100 text-gray-400";

  return (
    <Flex justify="between" align="center" className="mt-4">
      <p className="text-muted text-sm">
        Affichage de {from} à {to} sur {count} patients
      </p>

      <Flex justify="center" align="center" gap="3">
        <button
          className={cn(
            baseButtonClasses,
            page <= 1 ? disabledButtonClasses : enabledButtonClasses,
          )}
          onClick={onPrevPage}
          disabled={page <= 1}
        >
          <ChevronLeft className="w-4 h-4" />
          Précédent
        </button>

        <p className="text-sm text-muted">
          Page {page} sur {totalPages}
        </p>

        <button
          className={cn(
            baseButtonClasses,
            page >= totalPages ? disabledButtonClasses : enabledButtonClasses,
          )}
          onClick={onNextPage}
          disabled={page >= totalPages}
        >
          Suivant
          <ChevronRight className="w-4 h-4" />
        </button>
      </Flex>
    </Flex>
  );
}
