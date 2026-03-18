import { BaseAPIError } from "./base.ts";

export class UserNotFoundError extends BaseAPIError {
  constructor(id: string) {
    super(`Utilisateur ${id} non trouvé`);
    this.name = "UserNotFoundError";
  }
}
