export default class Car {
    private brand: string;
    private model: string;
    private year: number;  

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    infor(): string {
        return this.brand + " " + this.model + " " + this.year
    }
}
