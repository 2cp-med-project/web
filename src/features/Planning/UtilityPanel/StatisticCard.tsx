type StatisticCardProps = {
  title: string;
  value: string;
};

export function StatisticCard({ title, value }: StatisticCardProps) {
  return (
    <div className="shadow-sm rounded-lg bg-background-dark py-3 px-2 flex flex-col gap-2">
      <p className="text-muted text-base font-medium">{title}</p>
      <p className="text-foreground text-2xl">{value}</p>
    </div>
  );
}
