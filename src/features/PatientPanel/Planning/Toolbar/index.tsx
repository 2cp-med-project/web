type PlanningView = "day" | "week" | "year";

type PlanningToolbarProps = {
  currentView: PlanningView;
  currentDateLabel: string;
  onViewChange: (view: PlanningView) => void;
  onPreviousDate: () => void;
  onNextDate: () => void;
  onToday: () => void;
};

const views: Array<{ label: string; value: PlanningView }> = [
  { label: "Jour", value: "day" },
  { label: "Semaine", value: "week" },
  { label: "Annee", value: "year" },
];

export function PlanningToolbar({
  currentView,
  currentDateLabel,
  onViewChange,
  onPreviousDate,
  onNextDate,
  onToday,
}: PlanningToolbarProps) {
  return (
    <div className="flex items-center justify-between rounded-[18px] border border-[#d8efe8] bg-white px-3 py-3 shadow-[0_10px_25px_-18px_rgba(17,78,62,0.35)]">
      <div className="flex items-center gap-2 rounded-2xl bg-[#f4fbf8] p-1">
        {views.map((view) => (
          <button
            key={view.value}
            type="button"
            onClick={() => onViewChange(view.value)}
            className={
              currentView === view.value
                ? "rounded-2xl bg-[#ccefe5] px-6 py-2 text-[1.05rem] font-semibold text-[#5c6766]"
                : "rounded-2xl px-6 py-2 text-[1.05rem] font-semibold text-[#737d7b]"
            }
          >
            {view.label}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <button
          type="button"
          onClick={onPreviousDate}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#adbbb6] text-[#6f7877]"
        >
          &lsaquo;
        </button>
        <p className="min-w-38 text-center text-[1.1rem] font-semibold text-[#6d7374]">
          {currentDateLabel}
        </p>
        <button
          type="button"
          onClick={onNextDate}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#adbbb6] text-[#6f7877]"
        >
          &rsaquo;
        </button>
      </div>

      <button
        type="button"
        onClick={onToday}
        className="px-4 py-2 text-[1.05rem] font-semibold text-[#777e80]"
      >
        Aujourdhui
      </button>
    </div>
  );
}
