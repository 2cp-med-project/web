import {
  DoctorsContextProvider,
  DoctorsFilters,
  DoctorsGrid,
} from "@/features/AdminPanel/Doctors";
import { Flex } from "@radix-ui/themes";

function DoctorsPageContent() {
  return (
    <section className="px-2">
      <Flex direction="column">
        <h1 className="text-foreground font-medium text-2xl">Médecins</h1>
        <p className="text-muted text-sm font-normal">
          Gérer et vérifier tous les comptes médecins
        </p>
      </Flex>
      <DoctorsFilters />
      <DoctorsGrid />
    </section>
  );
}

export const DoctorsPage = () => (
  <DoctorsContextProvider>
    <DoctorsPageContent />
  </DoctorsContextProvider>
);
