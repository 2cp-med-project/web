import { CreatePatientRecordError } from "@/api/errors/CreatePatientRecordError.ts";
import { FetchPatientProfileError } from "@/api/errors/FetchPatientProfileError.ts";
import { NotAuthenticatedUserError } from "@/api/errors/NotAuthenticatedUserError.ts";
import { RequestAccessError } from "@/api/errors/RequestAccessError.ts";
import { DoctorAPI } from "@/api/index.ts";
import { apiRequestHadError } from "@/api/types.ts";
import { useAuthContext } from "@/context/auth.tsx";
import { Unreachable } from "@/errors/Unreachable.ts";
import type { PatientRecordFormData } from "@/features/DoctorPanel/PatientReport/Form/schema.ts";
import type {
  PartialPatientDetails,
  Patient,
  PatientDetails,
} from "@/types/entities.ts";
import type { BloodType } from "@/types/index.ts";
import type { MutationCallback } from "@/types/mutation.ts";
import type { Page, PaginationAttributes } from "@/types/pagination.ts";
import { getAgeFromISODateString, parseMedicalInfo } from "@/utils/index.ts";
import { useMutation, useQuery } from "@tanstack/react-query";

export const usePatients = () => {
  const { user } = useAuthContext();

  const fetchPage = (pagination: PaginationAttributes) => {
    const query = useQuery<Page<Patient>, Error>({
      queryKey: ["patients-page", user?.id, pagination.page, pagination.search],
      queryFn: async ({}) => {
        const page = await DoctorAPI.Patients.fetchPage(pagination);
        return page;
      },
      enabled: !!user?.id,
    });

    return {
      ...query,
      page: query.data,
    };
  };

  const fetchOne = (id: string | null) => {
    const query = useQuery<PatientDetails | null, Error>({
      queryKey: ["patient", user?.id, id],
      queryFn: async ({}) => {
        if (!user?.id) throw new NotAuthenticatedUserError();
        if (!id) throw new Unreachable();

        const patient = await DoctorAPI.Patients.fetchOne(id);
        return patient;
      },
      enabled: !!user?.id && !!id,
    });

    return {
      ...query,
      patient: query.data,
    };
  };

  const __fetchOne = (id: string) => {
    const query = useQuery({
      queryKey: ["patient", user?.id, id],
      queryFn: async ({}) => {
        const res = await DoctorAPI.Patients.__fetchOne(id);
        if (apiRequestHadError(res)) {
          throw new FetchPatientProfileError();
        }

        const data = res.data;
        const medicalResume =
          data.medicalResume === undefined
            ? null
            : parseMedicalInfo(data.medicalResume);

        const profile = {
          id: data._id,
          fullname: data.firstName + " " + data.lastName,
          address: null,
          age: getAgeFromISODateString(data.dateOfBirth),
          avatar: null,
          email: data.email,
          gender: data.gender,
          nationalId: null,
          phoneNumber: data.phone,
          allergies: data.allergies,
          bloodType: medicalResume?.bloodGroup as BloodType | undefined,
          chronicConditions: data.chronicDiseases,
          lastVisit: new Date(),
          status: "active",
        } as PartialPatientDetails;

        return profile;
      },
      enabled: !!user?.id && !!id,
    });

    return {
      ...query,
      patient: query.data,
    };
  };

  const requestAccess = () => {
    const mutation = useMutation<
      {
        id: string;
      },
      Error,
      {
        patientId: string;
      } & MutationCallback<{
        id: string;
      }>
    >({
      mutationFn: async ({ patientId }) => {
        const res = await DoctorAPI.Patients.requestAccess(patientId);
        if (apiRequestHadError(res)) {
          throw new RequestAccessError();
        }

        const data = res.data;
        return {
          id: data._id,
        };
      },

      onSuccess: (data, vs) => {
        vs?.onSuccess?.(data);
      },

      onError: (error, vs) => {
        vs?.onError?.(error);
      },
    });

    return mutation;
  };

  const createRecord = () => {
    const mutation = useMutation<
      any,
      Error,
      { patientId: string } & PatientRecordFormData &
        MutationCallback<{
          id: string;
        }>
    >({
      mutationFn: async ({ onSuccess, onError, patientId, ...rest }) => {
        const res = await DoctorAPI.Patients.createRecord(patientId, rest);
        if (apiRequestHadError(res)) {
          throw new CreatePatientRecordError();
        }

        const data = res.data;
        return data;
      },

      onSuccess: (data, vs) => {
        vs?.onSuccess?.(data);
      },

      onError: (error, vs) => {
        vs?.onError?.(error);
      },
    });

    return mutation;
  };

  return {
    fetchPage,
    fetchOne,
    requestAccess,
    __fetchOne,
    createRecord,
  };
};
