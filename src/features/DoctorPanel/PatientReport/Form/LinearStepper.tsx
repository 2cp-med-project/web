import { cn } from "@/lib/utils.ts";
import { useEffect, useRef, useState } from "react";
import { usePatientReportFormContext } from "./context.tsx";

export function LinearStepper() {
  const { step: current, steps } = usePatientReportFormContext();

  const containerRef = useRef<HTMLDivElement>(null);
  const [stepWidth, setStepWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setStepWidth(containerRef.current.clientWidth / steps.length);
    }
  }, [steps.length, window.window]);

  return (
    <div
      ref={containerRef}
      className="relative p-1 rounded-xl bg-white shadow-sm border border-black/20 w-full flex items-center"
    >
      <div
        style={{
          width: `${stepWidth - 2}px`,
          transform: `translateX(${(current - 1) * (stepWidth - 2)}px)`,
          transition: "transform 0.3s ease",
        }}
        className={cn("absolute h-[calc(100%-8px)] bg-foreground rounded-xl")}
      ></div>

      {steps.map((step, index) => {
        const isCurrent = current - 1 === index;
        return (
          <div
            key={index}
            className={cn(
              "font-inter p-2 rounded-xl flex-1 flex gap-2 items-center justify-center relative z-10",
              isCurrent ? "text-white" : "text-foreground",
            )}
          >
            <p
              className={cn(
                "px-2 rounded-full border",
                isCurrent
                  ? "bg-white text-foreground"
                  : "bg-foreground text-white",
              )}
            >
              {index + 1}
            </p>
            <p className="text-sm">{step.label}</p>
          </div>
        );
      })}
    </div>
  );
}
