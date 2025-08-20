export default class Rectangle {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height
    }

    area(): number {
        return this.width * this.height
    }
    perimeter(): number {
        return (this.width + this.height) * 2;
    }
}
