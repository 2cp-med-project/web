import { zodResolver } from "@hookform/resolvers/zod";
import { Box, TextField } from "@radix-ui/themes";
import { ArrowRight, Phone } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { LoginFormSchema } from "../zod/login/schema.ts";
import type { LoginFormData } from "../zod/login/type.ts";

export function LoginForm() {
  const { control, handleSubmit } = useForm<LoginFormData>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      phone_number: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit(
    (_) => {
      // make the api call here.
    },
    (errors) => {
      console.log(errors);
    },
  );

  return (
    <form onSubmit={onSubmit} className="px-4 py-2">
      <Box className="mt-2 space-y-1 text-left">
        <h1 className="text-3xl font-sans">Bon retour parmi nous</h1>
        <h2 className="text-sm text-muted">
          Connectez-vous pour accéder à votre espace de gestion de santé.
        </h2>
      </Box>
      <Box className="mt-8 w-full space-y-4">
        <Box className="space-y-2">
          <label className="space-y-1">
            <p className="text-sm">Téléphone</p>
            <Controller
              name="phone_number"
              control={control}
              render={() => (
                <TextField.Root
                  className="p-2 focus:ring-foreground"
                  placeholder="Entrez votre numéro du téléphone"
                  size="3"
                >
                  <TextField.Slot>
                    <Phone className="text-foreground" size={16} />
                  </TextField.Slot>
                </TextField.Root>
              )}
            />
          </label>
        </Box>
        <Box className="space-y-2">
          <label className="space-y-1">
            <p className="text-sm">Mot de passe</p>
            <Controller
              name="password"
              control={control}
              render={() => (
                <TextField.Root
                  placeholder="••••••••••••"
                  type="password"
                  size="3"
                ></TextField.Root>
              )}
            />
          </label>
        </Box>
      </Box>
      <button
        type="submit"
        className="cursor-pointer group mt-8 bg-foreground text-white w-full flex items-center justify-center py-2 rounded-xl transition-colors duration-200 hover:bg-foreground/90"
      >
        <p className="text-base">Se connecter</p>
        <ArrowRight
          size={18}
          className="ml-2 transform transition-transform duration-200 group-hover:translate-x-1"
        />
      </button>
    </form>
  );
}
