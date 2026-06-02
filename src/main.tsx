import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppRouter } from "./app.tsx";
import { Toaster } from "./components/Sonner.tsx";
import { AuthContextProvider } from "./context";
import { router } from "./router.tsx";
import "./styles/globals.css";

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 5 * 60 * 1000,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </QueryClientProvider>
    <Toaster />
  </StrictMode>,
);
