import { usePlanningContext } from "../context.tsx";
import { QuickActions } from "./QuickActions.tsx";
import { StatisticCard } from "./StatisticCard.tsx";

export function UtilityPanel() {
  const { appointments } = usePlanningContext();

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
    <div className="w-full h-full">
      <QuickActions onCreateAppointment={() => {}} onSetReminder={() => {}} />
      <div className="grid grid-cols-2 gap-x-4 mt-5">
        {statistics.map((statistic) => (
          <StatisticCard {...statistic} />
        ))}
      </div>
    </div>
  );
}
