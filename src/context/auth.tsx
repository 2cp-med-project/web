import { HookUsageOutOfProviderError } from "@/errors/index.ts";
import type { AuthUser } from "@/types/entities.ts";
import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from "react";

export type AuthContext = {
  user: AuthUser | null;
  isAuthenticating: boolean;
  login: (user: AuthUser) => void;
  logout: () => void;
  setIsAuthenticating: (state: boolean) => void;
};

const authContext = createContext<AuthContext | undefined>(undefined);
authContext.displayName = "AuthContext";

type AuthContextProviderProps = PropsWithChildren & {};

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const login = async (user: AuthUser) => {
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <authContext.Provider
      value={{
        user,
        isAuthenticating,
        login,
        logout,
        setIsAuthenticating,
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
