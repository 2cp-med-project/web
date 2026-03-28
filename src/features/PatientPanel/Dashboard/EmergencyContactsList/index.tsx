import { Grid } from "@radix-ui/themes";
import { useDashboardContext } from "../context.tsx";
import * as EmergencyContact from "./Contact/index.ts";

export function EmergencyContactsList() {
  const { emergencyContacts, isLoading, isError } = useDashboardContext();

  return (
    <Grid columns={"1"} gapY={"2"}>
      {isError && <div className="text-red-500">error</div>}

      <ul className="flex flex-col gap-2">
        {isLoading &&
          Array.from({ length: 4 }).map((_, index) => (
            <li key={index}>
              <EmergencyContact.Skeleton />
            </li>
          ))}

        {!isLoading &&
          !isError &&
          emergencyContacts.map((contact) => (
            <li key={contact.id}>
              <EmergencyContact.Content {...contact} onAdd={() => {}} />
            </li>
          ))}
      </ul>
    </Grid>
  );
}
