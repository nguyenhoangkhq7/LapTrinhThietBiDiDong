import type { Vehicle } from "./Vehicle.js";

export class Bike implements Vehicle {
  private brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }

  move(): string {
    return this.brand + " bike is riding on the street.";
  }
}
