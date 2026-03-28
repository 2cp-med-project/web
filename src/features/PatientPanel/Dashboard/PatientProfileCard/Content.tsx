import { GenderMap } from "@/constants/maps.ts";
import type { PatientProfile } from "@/types/entities.ts";
import { getInitials } from "@/utils/index.ts";
import { Avatar } from "@radix-ui/themes";

type PatientProfileCardContent = {
  profile: PatientProfile;
};

export function PatientProfileCardContent({
  profile,
}: PatientProfileCardContent) {
  return (
    <div className="relative bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-20 bg-foreground"></div>

      <div className="relative z-10 flex justify-center my-4 px-4">
        <div className="flex flex-col w-full">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="mx-auto p-1 w-fit rounded-full border border-foreground bg-white">
              <Avatar
                size="7"
                src={profile.avatar ?? undefined}
                fallback={getInitials(profile.fullname)}
                radius="full"
              />
            </div>
            <div className="text-center">
              <p className="text-black text-xl font-medium font-archivo">
                {profile.fullname}
              </p>
              <p className="text-muted text-sm">{GenderMap[profile.gender]}</p>
            </div>
          </div>

          <div className="mt-6 w-full flex items-center justify-center gap-2">
            <div className="py-1 w-full bg-gray-100 text-center rounded-lg">
              <p className="capitalize text-black/50 text-base font-archivo font-medium">
                groupe sanguin
              </p>
              <p className="my-1 text-red-500 text-xl font-archivo font-medium">
                {profile.bloodType}
              </p>
            </div>

            <div className="py-1 w-full bg-gray-100 text-center rounded-lg">
              <p className="capitalize text-black/50 text-base font-archivo font-medium">
                Age
              </p>
              <p className="my-1 text-green-500 text-xl font-archivo font-medium">
                {profile.age}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
