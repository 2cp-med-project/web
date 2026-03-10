import { AuthUI } from "@/constants/ui/index.ts";
import type { User } from "@/types/entities.ts";
import { AuthError } from "./errors/index.ts";

export const login = async (email: string, password: string) => {
  return new Promise<User>((res, rej) => {
    setTimeout(() => {
      if (email !== AuthUI.user.email)
        return rej(new AuthError("Adresse email incorrecte", 401));

      if (password !== AuthUI.user.password)
        return rej(new AuthError("Mot de passe incorrect", 401));

      const { password: _, ...safeUser } = AuthUI.user;
      return res(safeUser);
    }, 1000);
  });
};
