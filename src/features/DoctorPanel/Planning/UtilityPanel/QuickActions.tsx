type QuickActionsProps = {
  onCreateAppointment: () => void;
  onSetReminder: () => void;
};

export function QuickActions({
  onCreateAppointment,
  onSetReminder,
}: QuickActionsProps) {
  return (
    <div className="py-4 px-3 rounded-lg bg-background-dark shadow-sm space-y-2">
      <p className="text-foreground text-lg font-medium">Quick Actions</p>
      <div className="flex flex-col gap-1">
        <button
          className="text-start bg-foreground rounded-full px-3 py-1.5 text-white font-medium text-base"
          onClick={onCreateAppointment}
        >
          New appointment
        </button>
        <button
          className="text-start bg-inherit border border-foreground rounded-full px-3 py-1.5 text-foreground font-medium text-base"
          onClick={onSetReminder}
        >
          Set Reminder
        </button>
      </div>
    </div>
  );
}
