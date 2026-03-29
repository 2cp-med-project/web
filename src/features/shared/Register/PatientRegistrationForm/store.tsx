import { create } from "zustand";

type RegisterPatientStepStore = {
  step: number;
  next: () => void;
  prev: () => void;
};

export const useRegisterPatientStepStore = create<RegisterPatientStepStore>(
  (set) => ({
    data: {},

    step: 1,

    next: () =>
      set((state) => ({
        step: state.step + 1,
      })),

    prev: () =>
      set((state) => ({
        step: state.step - 1,
      })),
  }),
);
