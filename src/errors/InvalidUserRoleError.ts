export class InvalidUserRoleError extends Error {
  constructor(role: string) {
    super(`Invalid user role: ${role}, consider handling this role case.`);
  }
}
