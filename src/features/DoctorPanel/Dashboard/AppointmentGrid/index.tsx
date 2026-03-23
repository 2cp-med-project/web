import { Grid } from "@radix-ui/themes";
import { useDashboardContext } from "../context.tsx";
import * as AppointmentCard from "./Card/index.ts";

export function AppointmentGrid() {
  const { isLoading, nextAppointments } = useDashboardContext();

  return (
    <Grid columns={"2"} gapX={"4"} gapY={"4"}>
      {isLoading &&
        Array.from({ length: 4 }).map((_, index) => (
          <AppointmentCard.Skeleton key={index} />
        ))}

      {!isLoading &&
        nextAppointments.map((item) => (
          <AppointmentCard.Content key={item.id} {...item} />
        ))}
    </Grid>
  );
}
