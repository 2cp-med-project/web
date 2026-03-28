import { AuthData } from "@/constants/ui/index.ts";
import type { AuthUser } from "@/types/entities.ts";
import { AuthError } from "./errors/index.ts";

// POST /auth/login
export const login = async (email: string, password: string) => {
  return new Promise<AuthUser>((res, rej) => {
    setTimeout(() => {
      const user = AuthData.users.find((user) => user.email === email);
      if (user === undefined) {
        return rej(new AuthError("Adresse email incorrecte", 401));
      }

      if (password !== user.password)
        return rej(new AuthError("Mot de passe incorrect", 401));

      const { password: _, ...safeUser } = user;
      return res(safeUser);
    }, 1000);
  });
};
