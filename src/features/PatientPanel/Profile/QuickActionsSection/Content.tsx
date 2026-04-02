import { QuickAction } from "@/features/shared/Dashboard/QuickAction.tsx";
import { Grid } from "@radix-ui/themes";
import { usePatientProfileContext } from "../context.tsx";

export function QuickActionsSectionContent() {
  const { quickActions } = usePatientProfileContext();
  return (
    <div className="space-y-2">
      <p className="text-lg font-medium text-black">Actions rapides</p>
      <Grid columns={"1"} gapY={"2"}>
        {quickActions.map((action) => (
          <QuickAction {...action} />
        ))}
      </Grid>
    </div>
  );
}
