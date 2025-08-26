import Animal from "./Animal.js";

export class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  bark(): string {
    return "Gâu gâu!";
  }
}
