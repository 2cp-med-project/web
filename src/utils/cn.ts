import clsx from "clsx";

export function cn(...classes: (string | undefined | boolean | null)[]) {
  return clsx(...classes);
}
