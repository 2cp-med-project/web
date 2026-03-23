import { Grid } from "@radix-ui/themes";
import { useDashboardContext } from "../context.tsx";
import { QuickAction } from "./QuickAction.tsx";

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
