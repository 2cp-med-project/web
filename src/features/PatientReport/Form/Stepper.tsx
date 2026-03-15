import { ArrowLeft, ArrowRight } from "lucide-react";

type StepperProps = {
  onNext?: () => void | Promise<void>;
  onPrev?: () => void | Promise<void>;
};

export function Stepper({ onPrev, onNext }: StepperProps) {
  return (
    <div className="w-full relative h-20">
      {onPrev !== undefined && (
        <button
          type="button"
          className="absolute left-0 px-6 cursor-pointer group mt-4 bg-white text-foreground border border-foreground flex items-center justify-center py-2 rounded-xl transition-colors duration-200 hover:bg-foreground/90 hover:text-white"
          onClick={onPrev}
        >
          <ArrowLeft
            size={18}
            className="mr-2 transform transition-transform duration-200 group-hover:-translate-x-1"
          />
          <p className="text-base">Précédant</p>
        </button>
      )}
      {onNext !== undefined && (
        <button
          type="button"
          className="absolute right-0 px-6 cursor-pointer group mt-4 bg-foreground text-white flex items-center justify-center py-2 rounded-xl transition-colors duration-200 hover:bg-foreground/90"
          onClick={onNext}
        >
          <p className="text-base">Suivant</p>
          <ArrowRight
            size={18}
            className="ml-2 transform transition-transform duration-200 group-hover:translate-x-1"
          />
        </button>
      )}
    </div>
  );
}
