import { cn } from "@/lib/utils.ts";
import { rfidService, type RFIDStatus } from "@/services/rfid.ts";
import {
  ArrowUpLeft,
  BadgeCheck,
  CircleAlert,
  CreditCard,
  ScanLine,
  ShieldCheck,
} from "lucide-react";
import { useEffect, useState } from "react";

const tips = [
  {
    icon: ArrowUpLeft,
    text: "Alignez les bords de la carte avec l’indicateur en haut à gauche.",
  },
  {
    icon: CircleAlert,
    text: "Retirez toute coque plastique ou pochette sombre.",
  },
  {
    icon: CreditCard,
    text: "Supporté : permis de conduire, passeports et cartes de santé.",
  },
  {
    icon: ShieldCheck,
    text: "Assurez-vous que la surface de la carte est propre et sans traces.",
  },
];

export function ScanPage() {
  const [status, setStatus] = useState<RFIDStatus>(rfidService.getStatus());

  useEffect(() => {
    rfidService.setStatusChangeHandler((status) => setStatus(status));
  }, [rfidService]);

  const handleConnect = async () => {
    await rfidService.connect();
  };

  return (
    <section className="relative min-h-full overflow-hidden rounded-[2rem] bg-[#f5fbf8] px-4 py-6 md:px-8">
      <div className="relative z-10 mx-auto flex w-full flex-col gap-6">
        <h1 className="text-3xl font-semibold tracking-tight text-[#143c36]">
          Scanner d'identité patient
        </h1>

        <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-[1.75rem] border border-[#d7e7e2] bg-white/90 shadow-[0_18px_50px_rgba(20,60,54,0.08)] backdrop-blur">
          <div className="flex flex-col gap-3 border-b border-[#dbe8e3] bg-[#f3f6fb] px-5 py-4 text-sm font-medium text-[#67737a] md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-white px-4 py-1 text-xs font-semibold tracking-wide text-[#4d5961] shadow-sm">
                PRÊT
              </span>
              <span>Périphérique HS-Scan : actif</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleConnect}
                disabled={status === "connecting" || status === "connected"}
                className={cn(
                  "flex items-center gap-2",
                  "rounded-lg border border-[#d7e7e2]",
                  "bg-white",
                  "px-4 py-2",
                  "text-sm font-medium text-[#31423d]",
                  "transition-colors",
                  "hover:bg-[#f6faf8]",
                  "disabled:cursor-not-allowed",
                  "disabled:bg-[#f3f5f4]",
                  "disabled:text-[#8a9591]",
                )}
              >
                <ScanLine size={16} />

                <span>
                  {status === "connecting"
                    ? "Connexion..."
                    : status === "connected"
                      ? "Scanner connecté"
                      : "Connecter le scanner"}
                </span>
              </button>
              <span className="rounded-full border border-[#dde5df] bg-white px-4 py-1 text-xs font-semibold tracking-wide text-[#4d5961] shadow-sm">
                MATÉRIEL {status === "connected" ? "CONNECTÉ" : "DÉCONNECTÉ"}
              </span>
            </div>
          </div>

          <div className="px-4 py-6 md:px-8 md:py-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-4xl font-semibold tracking-tight text-[#1c2b2d]">
                Prêt à scanner
              </h2>
              <p className="mt-3 text-lg leading-8 text-[#6b7280]">
                Placez la carte d’identité du patient face vers le bas sur le
                scanner à plat pour commencer l’identification.
              </p>
            </div>

            <div className="relative mx-auto mt-8 max-w-4xl rounded-[1.5rem] border border-dashed border-[#d6e0db] bg-[#fffefe]/90 p-4 md:p-7">
              <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-[1.25rem] border border-[#edf2ef] bg-[linear-gradient(180deg,rgba(249,251,250,0.98),rgba(255,255,255,0.94))] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] md:min-h-[420px]">
                <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-[#67d5bc]/80 shadow-[0_0_18px_rgba(103,213,188,0.45)]" />
                <div className="absolute inset-x-12 top-16 h-[72%] rounded-[1.25rem] border border-[#ecefec] bg-white/65 shadow-[0_12px_32px_rgba(31,175,135,0.06)]" />

                <div className="relative z-10 w-full max-w-[320px] rounded-2xl border-2 border-[#3ab999] bg-[linear-gradient(180deg,rgba(246,255,252,0.95),rgba(233,250,244,0.92))] p-4 shadow-[0_18px_36px_rgba(20,60,54,0.14)]">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 h-12 w-12 rounded-full bg-[#bfd7d0]" />
                    <div className="flex-1 space-y-2">
                      <div className="h-3 w-24 rounded-full bg-[#afc9c2]" />
                      <div className="h-3 w-20 rounded-full bg-[#cadad6]" />
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-center">
                    <div className="relative flex h-20 w-28 items-center justify-center rounded-2xl border-2 border-dashed border-[#d7e7e2]">
                      <div className="absolute left-2 top-2 h-4 w-4 rounded-tl-lg border-l-4 border-t-4 border-[#d7e7e2]" />
                      <div className="absolute right-2 top-2 h-4 w-4 rounded-tr-lg border-r-4 border-t-4 border-[#d7e7e2]" />
                      <div className="absolute bottom-2 left-2 h-4 w-4 rounded-bl-lg border-b-4 border-l-4 border-[#d7e7e2]" />
                      <div className="absolute bottom-2 right-2 h-4 w-4 rounded-br-lg border-b-4 border-r-4 border-[#d7e7e2]" />
                      <ScanLine size={28} className="text-[#b7c7c2]" />
                    </div>
                  </div>

                  <div className="mt-5 h-1.5 w-full rounded-full bg-[#87ddc7]" />
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {tips.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-start gap-3 rounded-2xl border border-[#e2ebe7] bg-[#fbfcfc] px-4 py-4 shadow-[0_10px_30px_rgba(20,60,54,0.04)]"
                >
                  <div className="mt-0.5 rounded-xl bg-[#eef9f5] p-2 text-[#26a786]">
                    <Icon size={18} />
                  </div>
                  <p className="text-sm font-medium leading-6 text-[#647076]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="rounded-[1.75rem] bg-[#d9ddd9] p-1 shadow-[0_16px_30px_rgba(20,60,54,0.08)]">
            <div className="flex items-center gap-1">
              <button
                type="button"
                className="rounded-[1.35rem] px-6 py-3 text-sm font-semibold text-[#50575d] transition-colors hover:bg-white/60"
              >
                SCANNER QR
              </button>
              <button
                type="button"
                className="flex items-center gap-2 rounded-[1.35rem] bg-[#32c38e] px-6 py-3 text-sm font-semibold text-white shadow-[inset_0_-2px_0_rgba(0,0,0,0.08)]"
              >
                <BadgeCheck size={16} />
                SCANNER PAR GLISSEMENT
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
