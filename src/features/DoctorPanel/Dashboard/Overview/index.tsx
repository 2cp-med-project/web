import { Grid } from "@radix-ui/themes";
import { useDashboardContext } from "../context.tsx";
import * as OverviewCard from "./Card/index.ts";

export function DashboardOverview() {
  const { isLoading, overviewCards } = useDashboardContext();

  if (overviewCards.length !== 3) {
    throw new Error("overviewCards.length must be 3, for intended design.");
  }

  return (
    <Grid columns="3" gap={"2"}>
      {isLoading &&
        Array.from({ length: overviewCards.length }).map((_, index) => (
          <OverviewCard.Skeleton key={index} />
        ))}

      {!isLoading &&
        overviewCards.map((item) => <OverviewCard.Content {...item} />)}
    </Grid>
  );
}
