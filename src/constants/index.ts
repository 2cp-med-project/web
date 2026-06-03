export const ROLE = {
  DOCTOR: "doctor",
  PATIENT: "patient",
  ADMIN: "admin",
} as const;

export const GENDER = {
  MALE: "male",
  FEMALE: "female",
} as const;

export const BLOOD_TYPE = {
  A_POS: "A+",
  A_NEG: "A-",
  B_POS: "B+",
  B_NEG: "B-",
  AB_POS: "AB+",
  AB_NEG: "AB-",
  O_POS: "O+",
  O_NEG: "O-",
} as const;

export const CONSULTATION_TYPE = {
  NEW_VISIT: "Nouvelle consultation",
  FOLLOW_UP: "Suivi",
  EMERGENCY: "Urgence",
  ROUTINE_CHECK: "Vérification de routine",
} as const;

export const GRAVITY = {
  MILD: "Légère",
  MODERATE: "Modérée",
  SEVERE: "Sévère",
} as const;

export const GRAVITY_MAP = {
  MILD: "mild",
  MODERATE: "moderate",
  SEVERE: "severe",
} as const;

export const GENERAL_PATIENT_STATE = {
  CRITICAL: "Critique",
  STABLE: "Stable",
  FAIR: "Moyen",
} as const;

export const EXAM = {
  GENERAL: "Général",
  CARDIOVASCULAR: "Cardiovasculaire",
  RESPIRATORY: "Respiratoire",
  NEUROLOGICAL: "Neurologique",
  MUSCULOSKELETAL: "Musculosquelettique",
} as const;

export const ADDITIONAL_ACTIONS = {
  LAB_TESTS: "Tests de laboratoire",
  MEDICAL_IMAGING: "Imagerie médicale",
  MEDICAL_REFERRAL: "Référence médicale",
  MONITORING: "Surveillance",
} as const;
