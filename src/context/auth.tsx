import { AuthUI } from "@/constants/ui/index.ts";
import { HookUsageOutOfProviderError } from "@/errors/HookUsageOutOfProviderError.tsx";
import type { User } from "@/types/entities.ts";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";

export type AuthContext = {
  user: User | null;
  isAuthenticating: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
};

const authContext = createContext<AuthContext | undefined>(undefined);
authContext.displayName = "AuthContext";

type AuthContextProviderProps = PropsWithChildren & {};

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const login = (email: string, password: string) => {
    setIsAuthenticating(true);
    setTimeout(() => {
      if (email !== AuthUI.user.email) return setIsAuthenticating(false);
      if (password !== AuthUI.user.password) return setIsAuthenticating(false);

      const { password: _, ...safeUser } = AuthUI.user;
      setUser(safeUser);
      setIsAuthenticating(false);
    }, 1000);
  };

  const logout = () => {
    setUser(null);
  };

  // FIXME: remove auth login
  useEffect(() => {
    login(AuthUI.user.email, AuthUI.user.password);
  }, []);

  return (
    <authContext.Provider
      value={{
        user,
        isAuthenticating,
        login,
        logout,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

export const useAuthContext = () => {
  const context = useContext(authContext);
  if (context === undefined) {
    throw new HookUsageOutOfProviderError(authContext);
  }
  return context;
};
