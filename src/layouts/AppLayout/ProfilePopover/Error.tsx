import { Avatar, Popover, Theme } from "@radix-ui/themes";
import { AlertCircle } from "lucide-react";

type ProfilePopoverErrorProps = {
  onRetry: () => void;
};

export function ProfilePopoverError({ onRetry }: ProfilePopoverErrorProps) {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <button className="cursor-pointer">
          <Theme accentColor="red">
            <Avatar src="nothing" fallback="E" size={"4"} />
          </Theme>
        </button>
      </Popover.Trigger>

      <Popover.Content width="430px">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-center gap-4 pb-4 border-b border-black/10">
            <div className="rounded-[50%] p-2 bg-gray-200 border border-black/10 flex items-center justify-center">
              <AlertCircle size={20} className="text-red-500" />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <p className="font-semibold text-[15px] text-red-600">
                Impossible de charger le profil
              </p>
              <p className="text-muted text-sm">
                Une erreur est survenue. Veuillez réessayer plus tard.
              </p>
            </div>
          </div>

          <div className="mt-2">
            <button
              className="w-full flex items-center justify-center gap-2 text-white bg-red-600 hover:bg-red-700 font-medium rounded-md py-2 transition"
              onClick={onRetry}
            >
              Réessayer
            </button>
          </div>
        </div>
      </Popover.Content>
    </Popover.Root>
  );
}
