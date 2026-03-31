import {
  AdminDoctorModal,
  AdminDoctorsContextProvider,
  AdminDoctorsFilters,
  AdminDoctorsGrid,
} from "@/features/AdminPanel/Doctors/indext";
import { Flex } from "@radix-ui/themes";

export function AdminDoctorsPage() {
  return (
    <AdminDoctorsContextProvider>
      <section className="px-2">
        <Flex direction="column">
          <h1 className="text-foreground font-medium text-2xl">Médecins</h1>
          <p className="text-muted text-sm font-normal">
            Gérer et vérifier tous les comptes médecins
          </p>
        </Flex>
        <AdminDoctorsFilters />
        <AdminDoctorsGrid />
      </section>
      <AdminDoctorModal />
    </AdminDoctorsContextProvider>
  );
}