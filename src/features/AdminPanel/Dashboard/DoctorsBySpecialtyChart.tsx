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

const COLORS = [
  "#1B9271",
  "#2563eb",
  "#f59e0b",
  "#10b981",
  "#8b5cf6",
  "#ef4444",
];

export function DoctorsBySpecialtyChart() {
  const { data, isLoading } = useDashboardContext();

  if (isLoading || !data)
    return (
      <div className="bg-white rounded-2xl p-4 shadow-sm animate-pulse h-52" />
    );

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm">
      <h2 className="font-semibold text-base mb-4">Médecins par spécialité</h2>
      <ResponsiveContainer width="100%" height={180}>
        <BarChart
          data={data?.doctorsBySpecialty ?? []}
          layout="vertical"
          margin={{ left: 16, right: 24, top: 0, bottom: 0 }}
        >
          <XAxis type="number" hide />
          <YAxis
            type="category"
            dataKey="specialty"
            tick={{ fontSize: 11, fill: "#888" }}
            width={80}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            cursor={{ fill: "rgba(0,0,0,0.04)" }}
            formatter={(v) => [`${v as number}`, ""]}
          />
          <Bar dataKey="count" radius={[0, 6, 6, 0]} barSize={12}>
            {(data?.doctorsBySpecialty ?? []).map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
