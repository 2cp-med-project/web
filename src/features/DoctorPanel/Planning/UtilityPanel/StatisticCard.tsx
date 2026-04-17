type StatisticCardProps = {
  title: string;
  value: string;
};

export function StatisticCard({ title, value }: StatisticCardProps) {
  return (
    <div className="rounded-xl border border-[#d8efe8] bg-white px-3 py-2.5 shadow-[0_10px_25px_-18px_rgba(17,78,62,0.35)]">
      <p className="text-sm text-[#7d8483]">{title}</p>
      <p className="mt-2 text-2xl font-semibold text-[#43c09f]">{value}</p>
    </div>
  );
}
