export class Unreachable extends Error {
  constructor() {
    super("Unreachable");
    this.name = "Unreachable";
  }
}
