import Animal from "./Animal.js";

export class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }

  meow(): string {
    return "Meow!";
  }
}
