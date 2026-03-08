import { TextField } from "@radix-ui/themes";
import { Search } from "lucide-react";

type SearchbarProps = {
  placeholder: string;
  search: string;
  onSearchChange: (search: string) => void;
  radius?: "small" | "large" | "none" | "medium" | "full" | undefined;
};

export function Searchbar({
  search,
  placeholder,
  onSearchChange,
  radius = "large",
}: SearchbarProps) {
  return (
    <TextField.Root
      value={search}
      onChange={(e) => onSearchChange(e.target.value)}
      placeholder={placeholder}
      radius={radius}
    >
      <TextField.Slot>
        <Search className="text-muted" size={17} />
      </TextField.Slot>
    </TextField.Root>
  );
}
