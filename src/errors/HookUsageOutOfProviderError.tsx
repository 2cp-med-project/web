import type React from "react";

export class HookUsageOutOfProviderError<T> extends Error {
  constructor(context: React.Context<T>) {
    const hook = "use" + context.displayName;
    const provider = context.displayName + "Provider";
    super(`Cannot use hook ${hook} outside its provider ${provider}`);
  }
}
