import { OverviewCard } from "@/features/shared/Dashboard/index.ts";
import { Grid } from "@radix-ui/themes";
import { useDashboardContext } from "./context.tsx";

export function AdminDashboardOverview() {
  const { isLoading, overviewCardsContents } = useDashboardContext();
  return (
    <Grid columns="4" gap="2">
      {isLoading &&
        Array.from({ length: 4 }).map((_, i) => (
          <OverviewCard.Skeleton key={i} />
        ))}
      {!isLoading &&
        overviewCardsContents.map((item) => (
          <OverviewCard.Content key={item.label} {...item} />
        ))}
    </Grid>
  );
}
