import { HookUsageOutOfProviderError } from "@/errors/index.ts";
import type { User } from "@/types/entities.ts";
import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from "react";

export type AuthContext = {
  user: User | null;
  isAuthenticating: boolean;
  login: (user: User) => void;
  logout: () => void;
  setIsAuthenticating: (state: boolean) => void;
};

const authContext = createContext<AuthContext | undefined>(undefined);
authContext.displayName = "AuthContext";

type AuthContextProviderProps = PropsWithChildren & {};

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const login = async (user: User) => {
    setUser(user);
  };

  const logout = () => {
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
