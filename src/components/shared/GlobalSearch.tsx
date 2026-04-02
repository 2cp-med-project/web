import { AdminAPI } from "@/api/index.ts";
import type { AuthUser, Patient } from "@/types/entities.ts";
import { useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Results = {
  doctors: AuthUser[];
  patients: Patient[];
};

export function GlobalSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Results>({
    doctors: [],
    patients: [],
  });
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setResults({ doctors: [], patients: [] });
      setOpen(false);
      return;
    }

    const timeout = setTimeout(async () => {
      setLoading(true);
      const pagination = { page: 1, pageSize: 5, search: query };
      const [doctorsPage, patientsPage] = await Promise.all([
        AdminAPI.Doctors.fetchPage(pagination),
        AdminAPI.Patients.fetchPage(pagination),
      ]);
      setResults({ doctors: doctorsPage.data, patients: patientsPage.data });
      setOpen(true);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [query]);

  const handleSelect = (type: "doctor" | "patient", name: string) => {
    setOpen(false);
    setQuery("");
    if (type === "doctor") {
      navigate({ to: "/doctors", search: { search: name } as any });
    } else {
      navigate({ to: "/patients", search: { search: name } as any });
    }
  };

  const hasResults = results.doctors.length > 0 || results.patients.length > 0;

  return (
    <div ref={ref} className="relative w-72">
      <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-xl border border-black/10 focus-within:ring-1 focus-within:ring-[#1B9271]/50">
        <Search className="text-black/30 shrink-0" size={16} />
        <input
          className="flex-1 text-sm outline-none bg-transparent placeholder:text-black/30"
          placeholder="Rechercher médecin, patient..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => hasResults && setOpen(true)}
        />
        {loading && (
          <div className="w-3 h-3 rounded-full border-2 border-[#1B9271] border-t-transparent animate-spin" />
        )}
      </div>

      {open && hasResults && (
        <div className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-lg border border-black/10 overflow-hidden z-50">
          {results.doctors.length > 0 && (
            <section>
              <p className="px-3 pt-2 pb-1 text-xs font-medium uppercase text-black/30">
                Médecins
              </p>
              {results.doctors.map((d) => (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => handleSelect("doctor", d.fullname)}
                  className="w-full flex items-center gap-3 px-3 py-2 hover:bg-[#E9F7F3] transition-colors text-left"
                >
                  <div className="w-7 h-7 rounded-full bg-[#1B9271]/20 flex items-center justify-center text-[#1B9271] text-xs font-medium shrink-0">
                    {d.fullname.charAt(0)}
                  </div>
                  <span className="text-sm text-black/80 truncate">
                    {d.fullname}
                  </span>
                  <span className="ml-auto text-xs text-white bg-[#1B9271] rounded-full px-2 py-0.5 shrink-0">
                    Médecin
                  </span>
                </button>
              ))}
            </section>
          )}

          {results.patients.length > 0 && (
            <section>
              <p className="px-3 pt-2 pb-1 text-xs font-medium uppercase text-black/30">
                Patients
              </p>
              {results.patients.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => handleSelect("patient", p.fullname)}
                  className="w-full flex items-center gap-3 px-3 py-2 hover:bg-[#E9F7F3] transition-colors text-left"
                >
                  <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 text-xs font-medium shrink-0">
                    {p.fullname.charAt(0)}
                  </div>
                  <span className="text-sm text-black/80 truncate">
                    {p.fullname}
                  </span>
                  <span className="ml-auto text-xs text-white bg-blue-400 rounded-full px-2 py-0.5 shrink-0">
                    Patient
                  </span>
                </button>
              ))}
            </section>
          )}
        </div>
      )}
    </div>
  );
}
