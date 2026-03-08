import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppRouter } from "./app.tsx";
import { AuthContextProvider } from "./context";
import { router } from "./router.tsx";
import "./styles/globals.css";

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  </StrictMode>,
);
