export function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export function getAgeFromISODateString(date: string) {
  const dateOfBirth = new Date(date);
  const today = new Date();
  return today.getFullYear() - dateOfBirth.getFullYear();
}

type MedicalInfo = {
  bloodGroup: string;
  allergies: string[];
  chronicDiseases: string[];
  medications: string;
};

export function parseMedicalInfo(text: string): MedicalInfo {
  const sections: Record<string, string> = {};
  let currentKey: string | null = null;

  for (const line of text.split("\n")) {
    const trimmed = line.trim();

    if (!trimmed) {
      continue;
    }

    const match = trimmed.match(/^([^:]+):\s*(.*)$/);

    if (match) {
      currentKey = match[1].trim();
      sections[currentKey] = match[2].trim();
      continue;
    }

    if (currentKey) {
      sections[currentKey] += ` ${trimmed}`;
    }
  }

  return {
    bloodGroup: sections["Groupe sanguin"],
    allergies: sections["Allergies"].split("/").map((item) => item.trim()),
    chronicDiseases: sections["Maladies chroniques"]
      .split("/")
      .map((item) => item.trim()),
    medications: sections["Médicaments"],
  };
}

export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat("fr-DZ", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}
