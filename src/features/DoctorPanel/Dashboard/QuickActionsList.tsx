import { QuickAction } from "@/features/shared/Dashboard/index.ts";
import { Grid } from "@radix-ui/themes";
import { useDashboardContext } from "./context.tsx";

export function QuickActionsList() {
  const { quickActions } = useDashboardContext();
  return (
    <Grid columns={"1"} gapY={"2"}>
      {quickActions.map((action) => (
        <QuickAction {...action} />
      ))}
    </Grid>
  );
}
