import { AlertCircle, RefreshCw } from "lucide-react";

type ScheduleBoardErrorProps = {
  onRetry?: () => void;
};

export function ScheduleBoardError({ onRetry }: ScheduleBoardErrorProps) {
  return (
    <section className="flex min-h-[520px] items-center justify-center rounded-[18px] border border-[#d8efe8] bg-white px-6">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="rounded-full bg-red-100 p-3">
          <AlertCircle className="text-red-500" size={20} />
        </div>
        <div>
          <p className="text-lg font-medium text-[#33403c]">
            Impossible de charger le planning
          </p>
          <p className="mt-1 text-sm text-muted">
            Reessayez pour recuperer vos rendez-vous.
          </p>
        </div>
        {onRetry ? (
          <button
            type="button"
            onClick={onRetry}
            className="flex items-center gap-2 rounded-lg bg-red-100 px-4 py-2 text-red-500"
          >
            <RefreshCw size={14} />
            Reessayer
          </button>
        ) : null}
      </div>
    </section>
  );
}
