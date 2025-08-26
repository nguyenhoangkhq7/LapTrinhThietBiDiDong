import Employee from "./Employee.js";

export class Developer extends Employee {
  constructor(name: string) {
    super(name);
  }

  code(): string {
    return this.name + " is writing code.";
  }
}
