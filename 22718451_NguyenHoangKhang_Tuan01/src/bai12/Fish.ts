import type { Swimmable } from "./Swimmable.js";

export class Fish implements Swimmable {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  swim(): string {
    return this.name + " is swimming!";
  }
}
