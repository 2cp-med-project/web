import { TextField } from "@radix-ui/themes";
import { Search } from "lucide-react";

type SearchbarProps = {
  placeholder: string;
  search: string;
  onSearchChange: (search: string) => void;
};

export function Searchbar({
  search,
  placeholder,
  onSearchChange,
}: SearchbarProps) {
  return (
    <TextField.Root
      value={search}
      onChange={(e) => onSearchChange(e.target.value)}
      placeholder={placeholder}
      radius="large"
    >
      <TextField.Slot>
        <Search />
      </TextField.Slot>
    </TextField.Root>
  );
}
