import { APIError } from "./base.ts";

export class NotAuthenticatedUserError extends APIError {
  constructor() {
    super("Utilisateur non authentifié");
    this.name = "NotAuthenticatedUserError";
  }
}
