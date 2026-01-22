//? Circle class inherits from Shape 
import Shape from "./Shape.js";

export default class Circle extends Shape {
    #radius;
    #x;
    #y;

    //? Global static count
    static count = 0;

    constructor(_radius, _x, _y, _color) {
        super(_color);
        this.#radius = _radius;
        this.#x = _x;
        this.#y = _y;
        Circle.count++;
    }

    //? Setters and getters for the radius 
    set radius(r) {
        if (r > 0) this.#radius = r;
        else
            throw new Error("Radius must be greater than zero");
    }

    get radius() { return this.#radius; }

    //? Getters for x and y coordinates
    get x() { return this.#x; }
    get y() { return this.#y; }

    //? Setters for x and y coordinates
    set x(value) { this.#x = value; }
    set y(value) { this.#y = value; }

    static getCount() { return Circle.count; }

    CalcArea() {    //& PI * r * r
        return Math.PI * this.radius ** 2;
    }

    Calcperimeter() { //& Circumference of the circle
        return 2 * Math.PI * this.radius;
    }

    //? Override on toString from the shape class
    toString() {
        return `Circle Color: ${this.color}, Area: ${this.CalcArea()}, Perimeter: ${this.Calcperimeter()}`;
    }
}