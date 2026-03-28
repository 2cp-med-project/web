import { OverviewCard } from "@/features/shared/Dashboard/index.ts";
import { Grid } from "@radix-ui/themes";
import { useDashboardContext } from "./context.tsx";

export function DashboardOverview() {
  const { isLoading, overviewCardsContents } = useDashboardContext();

  return (
    <Grid columns="3" gap={"2"}>
      {isLoading &&
        Array.from({ length: overviewCardsContents.length }).map((_, index) => (
          <OverviewCard.Skeleton key={index} />
        ))}

      {!isLoading &&
        overviewCardsContents.map((item) => <OverviewCard.Content {...item} />)}
    </Grid>
  );
}
