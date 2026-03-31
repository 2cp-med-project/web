import { useAdminPatientsContext } from "./context.tsx";
import { Button, Flex, Text } from "@radix-ui/themes";

export function AdminPatientsPagination() {
  const { page, totalPages, onNextPage, onPrevPage } = useAdminPatientsContext();
  if (totalPages <= 1) return null;
  return (
    <Flex align="center" justify="between" mt="4">
      <Button variant="soft" onClick={onPrevPage} disabled={page <= 1}>Précédent</Button>
      <Text size="2" color="gray">Page {page} / {totalPages}</Text>
      <Button variant="soft" onClick={onNextPage} disabled={page >= totalPages}>Suivant</Button>
    </Flex>
  );
}