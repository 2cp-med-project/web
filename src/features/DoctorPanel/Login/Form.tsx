import { getRoleHomeRoute } from "@/constants/routes.ts";
import { useAuth } from "@/hooks/useAuth.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, TextField } from "@radix-ui/themes";
import { useNavigate } from "@tanstack/react-router";
import { ArrowRight, Loader2, Phone } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { LoginFormSchema, type LoginFormData } from "./schema.ts";

export function LoginForm() {
  const { login } = useAuth();
  const loginMutation = login();
  const navigate = useNavigate();

  const {
    control,
    formState: { errors },
    handleSubmit,
    clearErrors,
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = handleSubmit(async (data) => {
    await loginMutation.mutateAsync({
      ...data,
      onSuccess: (user) => {
        navigate({
          to: getRoleHomeRoute(user.role),
          replace: true,
        });
      },
    });
  });

  return (
    <form onSubmit={onSubmit} className="px-4 py-2">
      <Box className="mt-2 space-y-1 text-left">
        <h1 className="text-3xl font-sans">Bon retour parmi nous</h1>
        <h2 className="text-sm text-muted">
          Connectez-vous pour accéder à votre espace de gestion de santé.
        </h2>
      </Box>
      <Box className="mt-12 w-full space-y-4">
        <Box className="space-y-2">
          <label className="space-y-1">
            <p className="font-inter text-sm">Email</p>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <div>
                  <TextField.Root
                    {...field}
                    className="p-2 focus:ring-foreground"
                    placeholder="Entrez votre email"
                    size="3"
                    color={!!errors.email ? "red" : "green"}
                    onBlur={() => {
                      field.onBlur();
                      clearErrors();
                    }}
                  >
                    <TextField.Slot>
                      <Phone className="text-foreground" size={16} />
                    </TextField.Slot>
                  </TextField.Root>
                  <p className="text-sm text-red-500 min-h-5">
                    {errors.email?.message ?? "\u00A0"}
                  </p>
                </div>
              )}
            />
          </label>
        </Box>
        <Box className="space-y-2">
          <label>
            <p className="font-inter text-sm">Mot de passe</p>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <div className="space-y-1">
                  <TextField.Root
                    {...field}
                    placeholder="••••••••••••"
                    type="password"
                    spellCheck={false}
                    autoComplete="current-password"
                    size="3"
                    color={!!errors.password ? "red" : "green"}
                    onBlur={() => {
                      field.onBlur();
                      clearErrors();
                    }}
                  ></TextField.Root>
                  <p className="text-sm text-red-500 min-h-5">
                    {errors.password?.message ?? "\u00A0"}
                  </p>
                </div>
              )}
            />
          </label>
        </Box>
      </Box>
      <button
        type="submit"
        className="cursor-pointer group mt-4 bg-foreground text-white w-full flex items-center justify-center py-2 rounded-xl transition-colors duration-200 hover:bg-foreground/90"
        disabled={loginMutation.isPending}
      >
        {loginMutation.isPending && <Loader2 className="animate-spin mr-2" />}
        <p className="text-base">Se connecter</p>
        <ArrowRight
          size={18}
          className="ml-2 transform transition-transform duration-200 group-hover:translate-x-1"
        />
      </button>
    </form>
  );
}
