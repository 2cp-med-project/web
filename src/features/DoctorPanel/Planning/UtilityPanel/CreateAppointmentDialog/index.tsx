import { Input } from "@/components/ui/input.tsx";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog } from "@radix-ui/themes";
import { Check, X } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import {
  CreateAppointmentSchema,
  type CreateAppointmentForm,
} from "./schema.ts";

type CreateAppointmentDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function CreateAppointmentDialog(props: CreateAppointmentDialogProps) {
  const form = useForm<CreateAppointmentForm>({
    resolver: zodResolver(CreateAppointmentSchema),
    defaultValues: {
      title: "",
      patientId: null,
      location: "",
      date: null,
      notes: "",
    },
  });

  const handleSubmit = () =>
    form.handleSubmit(
      (_) => {
        // make the api call here.
      },
      () => {
        // throw errors here
      },
    );

  return (
    <Dialog.Root open={props.open} onOpenChange={props.onOpenChange}>
      <Dialog.Content className="p-2">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-between">
            <Dialog.Close
              type="button"
              className="p-1 rounded-[50%] bg-gray-400 text-white"
            >
              <X size={30} />
            </Dialog.Close>
            <p className="font-medium text-xl">New Appointment</p>
            <button
              type="submit"
              className="p-1 rounded-[50%] bg-foreground text-white"
            >
              <Check size={30} />
            </button>
          </div>
          <div className="mt-8 space-y-2 w-full">
            <Controller
              name="title"
              control={form.control}
              render={({ field }) => <Input.Text label="Titre" {...field} />}
            />
          </div>

          <div className="mt-6 space-y-2 w-full">
            <Controller
              name="location"
              control={form.control}
              render={({ field }) => (
                <Input.Text
                  label="Location"
                  {...field}
                  value={field.value ?? ""}
                />
              )}
            />
            <Controller
              name="date"
              control={form.control}
              render={({ field }) => (
                <Input.Date
                  label="Date"
                  {...field}
                  value={field.value?.toString() || undefined}
                />
              )}
            />
          </div>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
}
