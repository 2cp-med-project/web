import { cn } from "@/lib/utils.ts";
import { useEffect, useState } from "react";

const CODE_LENGTH = 4;

export function PatientStepVerification() {
  const [method, setMethod] = useState<"email" | "phone">("email");
  const [code, setCode] = useState("");
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setInterval(() => {
      setCooldown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [cooldown]);

  const handleSwitch = () =>
    setMethod((prev) => (prev === "email" ? "phone" : "email"));

  const inputs = Array.from({ length: CODE_LENGTH });

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newCode = code.split("");
    newCode[index] = value;
    const updated = newCode.join("").padEnd(4, "");
    setCode(updated);

    if (value && index < 3) {
      const next = document.getElementById(`otp-${index + 1}`);
      next?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      const prev = document.getElementById(`otp-${index - 1}`);
      prev?.focus();
    }
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md p-8 space-y-8">
        {/* Titre */}
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-semibold text-gray-900">Vérification</h2>
          <p className="text-sm text-gray-500">
            {method === "email"
              ? "Entrez le code envoyé à votre adresse e-mail."
              : "Entrez le code envoyé par SMS sur votre téléphone."}
          </p>
        </div>

        {/* Champ code */}
        <div className="flex justify-center gap-4">
          {inputs.map((_, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={code[index] || ""}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-14 h-14 text-center text-xl font-semibold rounded-xl border border-black focus:outline-none focus:ring-2 focus:ring-foreground/20 transition"
            />
          ))}
        </div>
        {/* Bouton vérifier */}
        <button
          disabled={code.length < CODE_LENGTH}
          className={cn(
            "cursor-pointer w-full py-3 rounded-xl font-medium transition-all duration-200",
            code.length === CODE_LENGTH
              ? "bg-foreground text-white hover:bg-foreground/90"
              : "bg-gray-200 text-gray-400 cursor-not-allowed",
          )}
        >
          Vérifier
        </button>

        {/* Renvoyer */}
        <div className="text-center">
          <button
            onClick={() => setCooldown(30)}
            disabled={cooldown > 0}
            className={cn(
              "text-sm transition-colors",
              cooldown > 0
                ? "text-gray-400 cursor-not-allowed"
                : "text-foreground hover:underline",
            )}
          >
            {cooldown > 0
              ? `Renvoyer le code dans ${cooldown}s`
              : "Renvoyer le code"}
          </button>
        </div>

        {/* Switch méthode */}
        <div className="text-center pt-2">
          <button
            onClick={handleSwitch}
            className="text-sm text-gray-500 hover:text-foreground transition-colors"
          >
            {method === "email"
              ? "Recevoir le code par téléphone à la place"
              : "Recevoir le code par e-mail à la place"}
          </button>
        </div>
      </div>
    </div>
  );
}
