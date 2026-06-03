import { CreatePatientRecordError } from "@/api/errors/CreatePatientRecordError.ts";
import { FetchPatientProfileError } from "@/api/errors/FetchPatientProfileError.ts";
import { FetchPatientRecordsError } from "@/api/errors/FetchPatientRecordsError.ts";
import { GenerateSummaryError } from "@/api/errors/GenerateSummaryError.ts";
import { NotAuthenticatedUserError } from "@/api/errors/NotAuthenticatedUserError.ts";
import { NotAuthorizedUserError } from "@/api/errors/NotAuthorizedUserError.ts";
import { RequestAccessError } from "@/api/errors/RequestAccessError.ts";
import { DoctorAPI } from "@/api/index.ts";
import { apiRequestHadError } from "@/api/types.ts";
import { GRAVITY_MAP } from "@/constants/index.ts";
import { useAuthContext } from "@/context/auth.tsx";
import { Unreachable } from "@/errors/Unreachable.ts";
import type { PatientRecordFormData } from "@/features/DoctorPanel/PatientReport/Form/schema.ts";
import type {
  __PatientFileRecord,
  PartialPatientDetails,
  Patient,
  PatientDetails,
  PatientFileRecordWithDoctor,
} from "@/types/entities.ts";
import type { BloodType } from "@/types/index.ts";
import type { MutationCallback } from "@/types/mutation.ts";
import type { Page, PaginationAttributes } from "@/types/pagination.ts";
import { getAgeFromISODateString, parseMedicalInfo } from "@/utils/index.ts";
import { useMutation, useQuery } from "@tanstack/react-query";
import { isAxiosError } from "axios";

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

  const getRecords = (patientId: string) => {
    const query = useQuery({
      queryKey: ["patient-records", user?.id, patientId],
      queryFn: async () => {
        const res = await DoctorAPI.Patients.getRecords(patientId);
        if (apiRequestHadError(res)) {
          if (isAxiosError(res.error)) {
            if (res.error.code === "401") {
              throw new NotAuthorizedUserError();
            }
          }
          throw new FetchPatientRecordsError();
        }

        const data = res.data;

        const records = data.map((item) => ({
          id: item._id,
          visitType: item.typeofvisit,
          reason: item.motive,
          symptoms: item.symptoms,
          gravity: Object.entries(GRAVITY_MAP).find(
            ([, value]) => value === item.severity,
          )?.[0],
          followUpDate: item.followUpDate
            ? new Date(item.followUpDate)
            : undefined,
          diagnosis: item.diagnosis,
          treatmentDetails: item.treatmentPlan,
          notes: item.notes,
          bloodPressure: item.bloodPressure,
          heartRate: item.heartRate,
          respiratoryRate: item.respiratoryRate,
          temperature: item.temperature,
          weight: item.weight,
          systemExam: item.systemReview,
          additionalActions: item.additionalTests,
          generalState: item.status,
          modifiedAt: item.updatedAt,
          doctorId: item.doctorId,
          patientId: item.patientId,
        })) as __PatientFileRecord[];

        return records;
      },
      enabled: !!user?.id,
    });

    return query;
  };

  const getSingleRecord = (id: string) => {
    const query = useQuery({
      queryKey: ["patient-record", user?.id, id],
      queryFn: async () => {
        const res = await DoctorAPI.Patients.getSingleRecord(id);
        if (apiRequestHadError(res)) {
          if (isAxiosError(res.error)) {
            if (res.error.code === "401") {
              throw new NotAuthorizedUserError();
            }
          }
          throw new FetchPatientRecordsError();
        }

        const data = res.data;
        const record = {
          id: data._id,
          doctorId: data.doctorId,
          patientId: data.patientId,
          visitType: data.typeofvisit,
          reason: data.motive,
          symptoms: data.symptoms,
          gravity: Object.entries(GRAVITY_MAP).find(
            ([, value]) => value === data.severity,
          )?.[0],
          followUpDate: data.followUpDate
            ? new Date(data.followUpDate)
            : undefined,
          diagnosis: data.diagnosis,
          treatmentDetails: data.treatmentPlan,
          notes: data.notes,
          bloodPressure: data.bloodPressure,
          heartRate: data.heartRate,
          respiratoryRate: data.respiratoryRate,
          temperature: data.temperature,
          weight: data.weight,
          systemExam: data.systemReview,
          additionalActions: data.additionalTests,
          generalState: data.status,
          modifiedAt: data.updatedAt,
          doctor: undefined,
        } as PatientFileRecordWithDoctor;

        const fetchDoctorRes = await DoctorAPI.Doctors.fetchDoctor(
          data.doctorId,
        );
        if (apiRequestHadError(fetchDoctorRes)) return record;

        return {
          ...record,
          doctor: {
            ...fetchDoctorRes.data,
            id: fetchDoctorRes.data._id,
            fullname:
              fetchDoctorRes.data.firstName +
              " " +
              fetchDoctorRes.data.lastName,
          },
        } as PatientFileRecordWithDoctor;
      },
      enabled: !!user?.id,
    });

    return query;
  };

  const generateSummary = () => {
    const mutation = useMutation<
      {
        resume: string;
      },
      Error,
      { id: string } & MutationCallback<{
        resume: string;
      }>
    >({
      mutationFn: async ({ id }) => {
        const res = await DoctorAPI.Patients.generateSummary(id);
        if (apiRequestHadError(res)) {
          throw new GenerateSummaryError();
        }

        const data = res.data;
        return {
          resume: data.resume,
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

  return {
    fetchPage,
    fetchOne,
    requestAccess,
    __fetchOne,
    createRecord,
    getRecords,
    getSingleRecord,
    generateSummary,
  };
};
