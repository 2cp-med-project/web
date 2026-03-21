import { cn } from "@/lib/utils.ts";
import { useRef, useState, type InputHTMLAttributes } from "react";

type TextInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label?: string;
};

export function TextInput({ label, ...props }: TextInputProps) {
  const ref = useRef<HTMLInputElement | null>(null);
  const [onFocus, setOnFocus] = useState(false);

  return (
    <div
      className={cn(
        "px-2 border rounded w-full relative transition-colors duration-100",
        onFocus ? "border-foreground" : "border-gray-300",
      )}
    >
      {!!label && (
        <p
          className={cn(
            "z-10 absolute left-2 bg-white px-1 transition-all duration-100 pointer-events-none",
            onFocus
              ? "text-xs text-foreground -top-2"
              : "text-sm text-gray-400 top-1/2 -translate-y-1/2",
          )}
        >
          {label}
        </p>
      )}

      <input
        ref={ref}
        type="text"
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
        {...props}
        className={cn(
          "outline-none border-0 w-full bg-transparent py-2",
          props.className,
        )}
      />
    </div>
  );
}

type DateInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "className"
> & {
  label?: string;
};

export function DateInput({ label, ...props }: DateInputProps) {
  const ref = useRef<HTMLInputElement | null>(null);
  const [onFocus, setOnFocus] = useState(false);

  return (
    <div
      className={cn(
        "px-2 border rounded w-full relative transition-colors duration-100",
        onFocus ? "border-foreground" : "border-gray-300",
      )}
    >
      {!!label && (
        <p
          className={cn(
            "z-10 absolute left-2 bg-white px-1 transition-all duration-100 pointer-events-none",
            onFocus
              ? "text-xs text-foreground -top-2"
              : "text-sm text-gray-400 top-1/2 -translate-y-1/2",
          )}
        >
          {label}
        </p>
      )}

      <input
        ref={ref}
        type="date"
        className="outline-none border-0 w-full bg-transparent py-2"
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
        {...props}
      />
    </div>
  );
}

export const Input = {
  Text: TextInput,
  Date: DateInput,
};
