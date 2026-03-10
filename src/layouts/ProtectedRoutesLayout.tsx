import { useAuthContext } from "@/context/auth.tsx";
import { MainContent } from "@/features/ProtectedRoutesLayout/MainContent.tsx";
import { Sidebar } from "@/features/ProtectedRoutesLayout/Sidebar";
import { Navigate } from "@tanstack/react-router";

export function ProtectedRoutesLayout() {
  const { user, isAuthenticating } = useAuthContext();

  if (!isAuthenticating && !user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="h-screen w-full flex bg-main-content-background">
      <Sidebar />
      <MainContent />
    </div>
  );
}
