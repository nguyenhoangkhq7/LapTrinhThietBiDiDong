import type { Flyable } from "./Flyable.js";

export class Bird implements Flyable {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  fly(): string {
    return this.name + " is flying!";
  }
}
