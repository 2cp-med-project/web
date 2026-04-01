import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useDashboardContext } from "./context.tsx";

export function NewRegistrationsChart() {
  const { data, isLoading } = useDashboardContext();

  if (isLoading || !data)
    return (
      <div className="bg-white rounded-2xl p-4 shadow-sm animate-pulse h-52" />
    );

  const maxCount = Math.max(...data.monthlyRegistrations.map((m) => m.count));

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-base">Nouvelles inscriptions</h2>
        <span className="text-xs text-gray-400">6 derniers mois</span>
      </div>
      <ResponsiveContainer width="100%" height={180}>
        <BarChart
          data={data.monthlyRegistrations}
          layout="vertical"
          margin={{ left: 8, right: 24, top: 0, bottom: 0 }}
        >
          <XAxis type="number" hide />
          <YAxis
            type="category"
            dataKey="month"
            tick={{ fontSize: 12, fill: "#888" }}
            width={30}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            cursor={{ fill: "rgba(0,0,0,0.04)" }}
            formatter={(v) => [`${v as number} inscrits`, ""]}
          />
          <Bar dataKey="count" radius={[0, 6, 6, 0]} barSize={12}>
            {data.monthlyRegistrations.map((entry, index) => (
              <Cell
                key={index}
                fill={entry.count === maxCount ? "#1B9271" : "#A8D5C5"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
