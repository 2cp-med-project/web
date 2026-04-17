type QuickActionsProps = {
  onCreateAppointment: () => void;
  onSetReminder: () => void;
};

export function QuickActions({
  onCreateAppointment,
  onSetReminder,
}: QuickActionsProps) {
  return (
    <div className="rounded-[18px] border border-[#d8efe8] bg-white px-5 py-4 shadow-[0_10px_25px_-18px_rgba(17,78,62,0.35)]">
      <p className="text-[1.05rem] font-semibold text-[#42bea0]">
        Actions rapides
      </p>
      <div className="mt-3 flex flex-col gap-2">
        <button
          className="flex w-full items-center justify-between rounded-full bg-[#54c8a9] px-6 py-3 text-lg font-semibold text-white"
          onClick={onCreateAppointment}
        >
          Nouveau rendez-vous
        </button>
        <button
          className="flex w-full items-center justify-between rounded-full border border-[#6fd1ba] px-6 py-3 text-lg font-semibold text-[#35b899]"
          onClick={onSetReminder}
        >
          Definir un rappel
        </button>
      </div>
    </div>
  );
}
