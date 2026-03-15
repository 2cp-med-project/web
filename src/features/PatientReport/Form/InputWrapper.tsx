import type { PropsWithChildren } from "react";

type InputWrapperProps = PropsWithChildren & {
  label: string;
};

export function InputWrapper({ label, children }: InputWrapperProps) {
  return (
    <div className="">
      <label className="space-y-1">
        <p className="text-muted text-base">{label}</p>
        <div className="rounded-lg bg-white w-full shadow-sm">{children}</div>
      </label>
    </div>
  );
}
