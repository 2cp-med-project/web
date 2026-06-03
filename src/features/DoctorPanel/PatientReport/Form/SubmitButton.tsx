type SubmitButtonProps = {
  onClick: () => Promise<void>;
  disabled?: boolean;
};

export function SubmitButton({ onClick, disabled = false }: SubmitButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="
        w-full
        rounded-lg
        bg-foreground
        px-4
        py-3
        font-medium
        text-white
        transition-opacity
        hover:opacity-90
        disabled:cursor-not-allowed
        disabled:opacity-50
      "
    >
      Enregistrer
    </button>
  );
}
