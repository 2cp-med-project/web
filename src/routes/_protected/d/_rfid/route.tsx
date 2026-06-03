import { rfidService } from "@/services/rfid.ts";
import { rfidTagSchema, type RFIDTag } from "@/zod/rfid.ts";
import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { toast } from "sonner";
import type z from "zod";

export const Route = createFileRoute("/_protected/d/_rfid")({
  component: RouteComponent,
});

type RFIDListenerOptions = {
  onTag: (tag: RFIDTag) => void;
  onError?: (error: z.ZodError | Error) => void;
};

function RouteComponent() {
  const navigate = useNavigate();

  useEffect(() => {
    const initializeRFID = async ({ onTag, onError }: RFIDListenerOptions) => {
      try {
        await rfidService.connect();

        rfidService.subscribe((rawTag) => {
          const json = JSON.parse(rawTag);
          const result = rfidTagSchema.safeParse(json);

          if (!result.success) {
            onError?.(result.error);
            return;
          }

          onTag(result.data);
        });
      } catch (error) {
        onError?.(
          error instanceof Error
            ? error
            : new Error("Failed to initialize RFID"),
        );
      }

      return () => {
        rfidService.disconnect();
      };
    };

    const cleanup = initializeRFID({
      onTag: async (tag) => {
        await navigate({
          to: "/d/patients/$patientId",
          params: {
            patientId: tag.userId,
          },
        });
        toast.success("Patient detected");
      },
      onError: () => {
        toast.error("Failed to read RFID data");
      },
    });

    return () => {
      cleanup.then((func) => func());
    };
  }, []);

  return <Outlet />;
}
