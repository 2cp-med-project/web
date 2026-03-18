import React, { useState } from "react";
import { usePlanningContext } from "../context.tsx";
import { CreateAppointmentDialog } from "./CreateAppointmentDialog/index.tsx";
import { QuickActions } from "./QuickActions.tsx";
import { StatisticCard } from "./StatisticCard.tsx";

export function UtilityPanel() {
  const { appointments } = usePlanningContext();

  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  const statistics = [
    {
      title: "Total today",
      value: appointments.length.toString(),
    },
    {
      title: "Available",
      value: "6h",
    },
  ];

  return (
    <React.Fragment>
      <div className="w-full h-full">
        <QuickActions
          onCreateAppointment={() => setIsCreateDialogOpen(true)}
          onSetReminder={() => {}}
        />
        <div className="grid grid-cols-2 gap-x-4 mt-5">
          {statistics.map((statistic) => (
            <StatisticCard {...statistic} />
          ))}
        </div>
      </div>
      <CreateAppointmentDialog
        open={isCreateDialogOpen}
        onOpenChange={setIsCreateDialogOpen}
      />
    </React.Fragment>
  );
}
