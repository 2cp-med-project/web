import { PatientsTableActionsCell } from "./ActionsCell.tsx";
import { PatientsTableAvatarCell } from "./AvatarCell.tsx";
import { PatientsTableIDCell } from "./IDCell.tsx";
import { PatientsTableLastVisitCell } from "./LastVisitCell.tsx";
import { PatientsTableStatusCell } from "./StatusCell.tsx";

export const PatientsTableCell = {
  Avatar: PatientsTableAvatarCell,
  ID: PatientsTableIDCell,
  LastVisit: PatientsTableLastVisitCell,
  Status: PatientsTableStatusCell,
  Actions: PatientsTableActionsCell,
};
