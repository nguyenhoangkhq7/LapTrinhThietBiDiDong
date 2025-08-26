import { Shape } from "./Shape.js";

export class Square extends Shape {
  private side: number;

  constructor(side: number) {
    super();
    this.side = side;
  }

  area(): number {
    return this.side * this.side;
  }
}
