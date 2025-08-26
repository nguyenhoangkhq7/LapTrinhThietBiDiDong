import type { Vehicle } from "./Vehicle.js";

export class Car implements Vehicle {
  private brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }

  move(): string {
    return this.brand + " car is driving on the road.";
  }
}
