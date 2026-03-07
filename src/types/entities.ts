export type Patient = {
  id: string;
  fullname: string;
  email: string;
  avatar: string | null; // default to null
  lastVisit: Date;
  status: "active" | "inactive";
};
