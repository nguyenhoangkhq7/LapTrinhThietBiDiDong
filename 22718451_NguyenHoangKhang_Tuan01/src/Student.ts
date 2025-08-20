import Person from "./Person.js";

export default class Student extends Person {
    private grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    infor(): string {
        return super.infor() + " " + this.grade;
    }
}