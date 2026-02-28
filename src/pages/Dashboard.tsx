import { Flex, Grid } from "@radix-ui/themes";
import { overviewCards } from "../constants/ui.ts";
import { OverviewCard } from "../features/Dashboard/index.ts";

export function DashboardPage() {
  return (
    <section className="px-2">
      <Flex direction={"column"}>
        <h1 className="text-foreground font-medium text-2xl">
          Tableau de bord
        </h1>
        <p className="text-muted text-sm font-normal">
          Suivez vos rendez-vous, messages et activités récentes
        </p>
      </Flex>
      <Grid columns="4" gap={"2"} className="mt-4">
        {overviewCards.map((item) => (
          <OverviewCard {...item} />
        ))}
      </Grid>
    </section>
  );
}
