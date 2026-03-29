import { PatientStepBirthInfo } from "./PatientStepBirthInfo.tsx";
import { PatientStepContactInfo } from "./PatientStepContactInfo.tsx";
import { PatientStepIdentity } from "./PatientStepIdentity.tsx";
import { PatientStepProfile } from "./PatientStepProfile.tsx";
import { PatientStepSecurity } from "./PatientStepSecurity.tsx";
import { PatientStepVerification } from "./PatientStepVerification.tsx";
import { useRegisterPatientStepStore } from "./store.tsx";

export function StepSwitcher() {
  const step = useRegisterPatientStepStore((state) => state.step);

  switch (step) {
    case 1:
      return <PatientStepIdentity />;
    case 2:
      return <PatientStepBirthInfo />;
    case 3:
      return <PatientStepProfile />;
    case 4:
      return <PatientStepContactInfo />;
    case 5:
      return <PatientStepSecurity />;
    case 6:
      return <PatientStepVerification />;
  }

  return null;
}
