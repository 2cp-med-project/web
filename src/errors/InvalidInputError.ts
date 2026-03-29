export class InvalidInputError extends Error {
  constructor(name: string) {
    super(`${name} is invalid.`);
    this.name = "InvalidInputError";
  }
}
