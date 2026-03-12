import { Skeleton } from "@/components/Skeleton.tsx";
import { Popover } from "@radix-ui/themes";

export function ProfilePopoverSkeleton() {
  const detailRows = 7; // same number of detail lines

  return (
    <Popover.Root>
      <Popover.Trigger>
        <button className="cursor-pointer">
          <Skeleton className="w-12 h-12 rounded" />
        </button>
      </Popover.Trigger>

      <Popover.Content width="430px">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-center gap-4 pb-4 border-b border-black/10">
            {/* Avatar */}
            <div className="p-0.75 rounded-full border border-black/10">
              <Skeleton className="w-20 h-20 rounded-[50%] border border-black/10" />
            </div>

            {/* Name & Bio */}
            <div className="flex flex-col gap-2 w-full">
              <Skeleton className="w-3/5 h-4 rounded-md" />
              <Skeleton className="w-4/5 h-3 rounded-md" />
            </div>
          </div>

          {/* Details */}
          <ul className="flex flex-col">
            {Array.from({ length: detailRows }).map((_, idx) => (
              <li
                key={idx}
                className="grid grid-cols-3 items-center py-3 border-b border-black/10 last:border-none gap-2 "
              >
                <div className="flex items-center gap-2">
                  <Skeleton className="w-4 h-4 rounded-sm" />
                  <Skeleton className="w-1/2 h-3 rounded-md" />
                </div>
                <Skeleton className="col-span-2 h-3 rounded-md" />
              </li>
            ))}
          </ul>

          {/* Logout Button */}
          <div className="pt-4 border-t border-black/10">
            <Skeleton className="w-full h-9 rounded-md" />
          </div>
        </div>
      </Popover.Content>
    </Popover.Root>
  );
}
