import { BaseAPIError } from "./base.ts";

export class NotAuthenticatedUserError extends BaseAPIError {
  constructor() {
    super("Utilisateur non authentifié");
    this.name = "NotAuthenticatedUserError";
  }
}
