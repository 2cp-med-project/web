import { ArrowLeft, ArrowRight } from "lucide-react";

type StepperProps = {
  onNext: () => void | Promise<void>;
  onPrev: () => void | Promise<void>;
};

export function Stepper(props: StepperProps) {
  return (
    <div className="w-full flex items-center justify-between">
      <button
        type="button"
        className="px-6 cursor-pointer group mt-4 bg-white text-foreground border border-foreground flex items-center justify-center py-2 rounded-xl transition-colors duration-200 hover:bg-foreground/90 hover:text-white"
        onClick={props.onPrev}
      >
        <ArrowLeft
          size={18}
          className="mr-2 transform transition-transform duration-200 group-hover:-translate-x-1"
        />
        <p className="text-base">Précédant</p>
      </button>
      <button
        type="button"
        className="px-6 cursor-pointer group mt-4 bg-foreground text-white flex items-center justify-center py-2 rounded-xl transition-colors duration-200 hover:bg-foreground/90"
        onClick={props.onNext}
      >
        <p className="text-base">Suivant</p>
        <ArrowRight
          size={18}
          className="ml-2 transform transition-transform duration-200 group-hover:translate-x-1"
        />
      </button>
    </div>
  );
}
