import type { PatientProfile } from "@/types/entities.ts";
import { getInitials } from "@/utils/index.ts";
import { Avatar } from "@radix-ui/themes";
import { Mail, MapPin, Phone, Plus } from "lucide-react";

type PatientProfileCardContentProps = {
  profile: PatientProfile;
};

export function PatientProfileCardContent({
  profile,
}: PatientProfileCardContentProps) {
  const info = [
    {
      icon: Phone,
      value: profile.phoneNumber,
    },
    {
      icon: Mail,
      value: profile.email,
    },
    {
      icon: MapPin,
      value: profile.address,
    },
  ];

  return (
    <div className="space-y-6 bg-white rounded-lg shadow-sm w-full px-6 py-8">
      <div className="w-full flex items-center justify-center">
        <div className="relative w-fit">
          <Avatar
            src={profile.avatar ?? undefined}
            fallback={getInitials(profile.fullname)}
            radius="full"
            size={"9"}
            className="mx-auto"
          />
          <div className="absolute bottom-3 right-3 bg-green-600 size-6 rounded-[50%]"></div>
        </div>
      </div>

      <div className="text-center">
        <p className="font-medium text-lg text-black">{profile.fullname}</p>
        <p className="text-muted text-xs">ID: {profile.id}</p>
      </div>

      <div className="w-full h-0.5 bg-black/10 rounded-xl"></div>

      <ul className="flex flex-col gap-3">
        {info.map((item, index) => {
          const Icon = item.icon;
          return (
            <li key={index}>
              <div className="flex gap-2 items-center">
                <div className="bg-foreground-light p-2 rounded-xl">
                  <Icon size={18} className="text-foreground" />
                </div>
                <p className="text-black/70 text-base">{item.value}</p>
              </div>
            </li>
          );
        })}
      </ul>

      <button className="max-w-80 mx-auto w-full px-4 py-2 rounded-lg bg-foreground text-white flex items-center justify-center gap-2">
        <Plus size={20} />
        Modifier Profil
      </button>
    </div>
  );
}
