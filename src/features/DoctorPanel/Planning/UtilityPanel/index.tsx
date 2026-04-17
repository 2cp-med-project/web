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
      title: "Total du jour",
      value: appointments.length.toString(),
    },
    {
      title: "Disponible",
      value: "6h",
    },
  ];

  return (
    <React.Fragment>
      <div className="w-full h-full space-y-4">
        <QuickActions
          onCreateAppointment={() => setIsCreateDialogOpen(true)}
          onSetReminder={() => {}}
        />
        <div className="grid grid-cols-2 gap-3">
          {statistics.map((statistic) => (
            <StatisticCard key={statistic.title} {...statistic} />
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
