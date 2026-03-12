import {
  BriefcaseMedical,
  Calendar,
  IdCard,
  LogOut,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";

import { GenderMap } from "@/constants/maps.ts";
import type { Profile } from "@/types/entities.ts";
import { getInitials } from "@/utils/index.ts";
import { Avatar, Popover } from "@radix-ui/themes";

type ProfilePopoverContentProps = {
  profile: Profile;
  onLogout: () => void;
};

export function ProfilePopoverContent({
  profile,
  onLogout,
}: ProfilePopoverContentProps) {
  const details = [
    { icon: BriefcaseMedical, label: "Identifiant", value: profile.id },
    { icon: Mail, label: "Email", value: profile.email },
    { icon: Phone, label: "Téléphone", value: profile.phoneNumber },
    { icon: MapPin, label: "Adresse", value: profile.address },
    { icon: IdCard, label: "NIN", value: profile.nationalId },
    { icon: Calendar, label: "Âge", value: profile.age },
    { icon: User, label: "Genre", value: GenderMap[profile.gender] },
  ];

  return (
    <Popover.Root>
      <Popover.Trigger>
        <button className="cursor-pointer">
          <Avatar
            src="nothing"
            fallback={getInitials(profile.fullname)}
            size={"4"}
          />
        </button>
      </Popover.Trigger>

      <Popover.Content width="430px">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-center gap-4 pb-4 border-b border-black/10">
            <div className="p-0.75 rounded-full border border-black/10">
              <Avatar
                size="6"
                src={profile.avatar ?? undefined}
                fallback={getInitials(profile.fullname)}
                radius="full"
              />
            </div>

            <div className="flex flex-col leading-tight">
              <p className="font-semibold text-[15px]">{profile.fullname}</p>
              <p className="text-muted text-sm mt-1 line-clamp-2">
                {profile.bio}
              </p>
            </div>
          </div>

          {/* Details */}
          <ul className="flex flex-col">
            {details.map((detail) => {
              const Icon = detail.icon;

              return (
                <li
                  key={detail.label}
                  className="grid grid-cols-3 items-center py-3 border-b border-black/10 last:border-none"
                >
                  <div className="flex items-center gap-2">
                    <Icon size={16} className="text-foreground" />
                    <span className="text-muted font-medium">
                      {detail.label}
                    </span>
                  </div>

                  <p className="col-span-2 text-sm">{detail.value}</p>
                </li>
              );
            })}
          </ul>

          {/* Logout Button */}
          <div className="pt-4 border-t border-black/10">
            <button
              className="w-full flex items-center justify-center gap-2 text-red-600 font-medium hover:bg-red-50 rounded-md py-2 transition"
              onClick={onLogout}
            >
              <LogOut size={16} />
              Déconnexion
            </button>
          </div>
        </div>
      </Popover.Content>
    </Popover.Root>
  );
}
