//? Importing Rectangle to square using the same name of the Rectangle class
//? for inheritance
//? Square which inherits from Rectangle
import Rectangle from "./Rectangle.js";

export default class Square extends Rectangle {
    static count = 0;

    constructor(side, color) {
        super(side, side, color);
        Square.count++;
    }

    //? Overriding Functions
    CalcArea() {
        return this.length ** 2;
    }

    Calcperimeter() {
        return 4 * this.length;
    }

    static getCount() {
        return Square.count;
    }

    PrintColor() {
        return `Square Color: ${this.color}`;
    }

    toString() {
        return `Square Color: ${this.color}, Area: ${this.CalcArea()}, Perimeter: ${this.Calcperimeter()}`;
    }
}