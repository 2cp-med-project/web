import { api, request } from "../client.ts";

type FetchDoctorResponseBody = {
  _id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  createdAt: string;
};

// GET /users/doctor/:id
export const fetchDoctor = (id: string) => {
  return request(async () => {
    const route = `/users/doctor/${id}`;
    const res = await api.get<FetchDoctorResponseBody>(route);
    return res.data;
  });
};
