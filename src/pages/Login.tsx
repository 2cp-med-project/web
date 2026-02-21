import { Card } from "@radix-ui/themes";
import { Link } from "@tanstack/react-router";
import { Logo } from "../components/shared/logo.tsx";
import { LoginForm } from "../features/Login/Form.tsx";

export function LoginPage() {
  return (
    <div className="flex w-full max-w-6xl mx-auto h-full">
      {/* Left section */}
      <div className="flex-4 space-y-8 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <Logo w={160} h={160} />
          <p className="text-foreground text-3xl mr-6">Healio</p>
        </div>
        <p className="text-lg font-light capitalize text-foreground font-inter">
          Toute votre santé, en un seul endroit.
        </p>
      </div>

      {/* Right section */}
      <div className="flex-3 m-auto">
        <Card className="space-y-4">
          <LoginForm />
          <hr className="text-gray-300" />
          <p className="mb-2 text-sm text-center">
            <span className="text-muted">Pas encore un compte?</span>
            <Link className="ml-1 font-medium" to="/register">
              Créer un compte
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
}
