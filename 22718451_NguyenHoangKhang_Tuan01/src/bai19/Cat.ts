import Animal from "./Animal.js";

export default class Cat extends Animal {
  sound(): string {
    return "Mèo mèo!";
  }
}
