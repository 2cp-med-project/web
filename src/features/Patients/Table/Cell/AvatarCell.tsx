import { Avatar, Flex, Table, Text } from "@radix-ui/themes";
import type { Patient } from "../../../../types/entities.ts";
import { getInitials } from "../../../../utils/index.ts";

type PatientsTableAvatarCellProps = Pick<
  Patient,
  "avatar" | "email" | "fullname"
> & {};

export function PatientsTableAvatarCell({
  avatar,
  email,
  fullname,
}: PatientsTableAvatarCellProps) {
  return (
    <Table.RowHeaderCell>
      <Flex align="center" gap="3">
        <Avatar
          src={avatar ?? undefined}
          fallback={getInitials(fullname)}
          radius="full"
        />

        <Flex direction="column">
          <Text weight="medium">{fullname}</Text>
          <Text size="1" color="gray">
            {email}
          </Text>
        </Flex>
      </Flex>
    </Table.RowHeaderCell>
  );
}
