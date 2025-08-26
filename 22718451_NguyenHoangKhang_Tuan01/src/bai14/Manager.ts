import Employee from "./Employee.js";

export class Manager extends Employee {
  constructor(name: string) {
    super(name);
  }

  manage(): string {
    return this.name + " is managing the team.";
  }
}
