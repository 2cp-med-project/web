import { FetchProfileError } from "@/api/errors/FetchProfileError.ts";
import { APIError, DoctorAPI, PatientAPI } from "@/api/index.ts";
import { apiRequestHadError } from "@/api/types.ts";
import { ROLE } from "@/constants/index.ts";
import { useAuthContext } from "@/context/auth.tsx";
import { InvalidInputError } from "@/errors/InvalidInputError.ts";
import { InvalidUserRoleError } from "@/errors/InvalidUserRoleError.ts";
import type { PatientProfile } from "@/types/entities.ts";
import { getAgeFromISODateString, parseMedicalInfo } from "@/utils/index.ts";
import { useQuery } from "@tanstack/react-query";

export const useProfile = () => {
  const { user } = useAuthContext();

  const fetchPatientProfile = async () => {
    const res = await PatientAPI.Profile.fetchProfile();
    if (apiRequestHadError(res)) {
      throw new FetchProfileError();
    }

    const data = res.data;
    const medicalInfo = parseMedicalInfo(data.medicalResume);

    const profile = {
      id: data._id,
      fullname: data.firstName + " " + data.lastName,
      address: data.address,
      age: getAgeFromISODateString(data.dateOfBirth),
      avatar: null,
      email: data.email,
      gender: data.gender,
      nationalId: null,
      phoneNumber: data.phone,
      role: ROLE.PATIENT,
      allergies: medicalInfo.allergies,
      bloodType: medicalInfo.bloodGroup,
      chronicConditions: medicalInfo.chronicDiseases,
      emergencyContacts: [],
    } as PatientProfile;

    return profile;
  };

  const fetchMe = () => {
    const query = useQuery({
      queryKey: ["my-profile", user?.id],
      queryFn: async () => {
        if (!user?.id) throw new APIError.NotAuthenticatedUserError();

        if (user.role === ROLE.PATIENT) {
          return fetchPatientProfile();
        }

        if (user.role === ROLE.DOCTOR) return DoctorAPI.Profile.fetch(user.id);
        if (user.role === ROLE.ADMIN) return user;

        throw new InvalidUserRoleError(user.role);
      },
      enabled: !!user?.id,
    });

    return {
      ...query,
      profile: query.data,
    };
  };

  const fetchOneMaybe = (profileId: string | null) => {
    const query = useQuery({
      queryKey: ["profile", user?.id, profileId],
      queryFn: async () => {
        if (!user?.id) throw new APIError.NotAuthenticatedUserError();
        if (!profileId) throw new InvalidInputError("profileId");

        if (user.role === ROLE.DOCTOR)
          return DoctorAPI.Profile.fetch(profileId);

        if (user.role === ROLE.PATIENT)
          return PatientAPI.Profile.fetch(user.id);

        if (user.role === ROLE.ADMIN) return user;
        throw new InvalidUserRoleError(user.role);
      },
      enabled: !!user?.id && !!profileId,
    });

    return {
      ...query,
      profile: query.data,
    };
  };

  const fetchOne = (profileId: string) => fetchOneMaybe(profileId);

  return {
    fetchMe,
    fetchOneMaybe,
    fetchOne,
  };
};
