import { Button, Flex, Text } from "@radix-ui/themes";
import { usePatientsContext } from "./context.tsx";

export function PatientsPagination() {
  const { page, totalPages, onNextPage, onPrevPage } = usePatientsContext();
  if (totalPages <= 1) return null;
  return (
    <Flex align="center" justify="between" mt="4">
      <Button variant="soft" onClick={onPrevPage} disabled={page <= 1}>
        Précédent
      </Button>
      <Text size="2" color="gray">
        Page {page} / {totalPages}
      </Text>
      <Button variant="soft" onClick={onNextPage} disabled={page >= totalPages}>
        Suivant
      </Button>
    </Flex>
  );
}
