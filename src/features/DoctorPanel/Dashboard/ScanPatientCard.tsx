import { Link } from "@tanstack/react-router";
import { Scan } from "lucide-react";

export function ScanPatientCard() {
  return (
    <div className="font-archivo rounded-lg py-4 px-4 w-full bg-white shadow-sm">
      <p className="text-black font-semibold text-lg">Scanner</p>

      <div className="py-16 mt-3 mx-auto border-2 border-foreground border-dashed rounded-xl flex gap-y-4 items-center justify-center flex-col bg-[#1FAF87]/10">
        <div className="w-fit bg-foreground text-white rounded-full p-6">
          <Scan size={50} />
        </div>

        <div className="flex flex-col text-center">
          <p className="text-black font-semibold text-base">Scan Patient ID</p>
          <p className="text-muted text-sm">Swipe or Scan patient id</p>
        </div>
      </div>

      <div className="flex items-center justify-center w-full mt-6">
        <Link
          to="/d/scan"
          className="px-8 py-2 rounded-xl bg-foreground text-white font-medium text-lg"
        >
          Scanner
        </Link>
      </div>
    </div>
  );
}
