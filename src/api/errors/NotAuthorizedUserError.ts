import { BaseAPIError } from "./base.ts";

export class NotAuthorizedUserError extends BaseAPIError {
  constructor() {
    super("Utilisateur non authorisé");
    this.name = "NotAuthorizedUserError";
  }
}
