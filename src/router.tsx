import { createRouter } from "@tanstack/react-router";
import type { AuthContext } from "./context/index.ts";
import { routeTree } from "./routeTree.gen.ts";

export type RouterContext = {
  auth: AuthContext;
};

export const router = createRouter({
  routeTree,
  context: {
    auth: undefined!,
  },
});
