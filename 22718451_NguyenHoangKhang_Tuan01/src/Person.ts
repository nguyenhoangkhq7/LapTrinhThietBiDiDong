export default class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }

    infor(): string {
        return this.name + " " + this.age
    }
}
