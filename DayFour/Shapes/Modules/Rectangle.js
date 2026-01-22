//? Import statement using default from the base using the same name
import Shape from "./Shape.js";

//? defining the rectangle class  (drived)
//& inheritance is applied using the extends keyword
export default class Rectangle extends Shape { 
    //? Length and width are private members
    #length = 0;
    #width = 0;

    //? Global static count
    static count = 0;

    //? Initializing values using constructor and inheriting the color from the shape
    //& using super function
    constructor(_l,_w ,_color) { 
        //& using super function
        super(_color);
        this.length = _l;
        this.width = _w;
        Rectangle.count++;
    }

    //& Accessors and mutators for mutating and getting private members
    set length(_l) {
        if (_l > 0)
            this.#length = _l;
        else 
            throw new Error("Length must be greater than zero")
    }
    set width(_w) {
        if (_w > 0)
            this.#width = _w;
        else 
            throw new Error("width must be greater than zero")
    }

    get length() { return this.#length }
    get width() { return this.#width }
    static getCount() {return Rectangle.count;}
    
    //& function Overriding on the abstract functions comming from the parent
    CalcArea() { return this.#length * this.#width }
    Calcperimeter() { return 2 * (this.#length + this.#width) }
    toString() { 
        return `length: ${this.#length}, width: ${this.#width}, Color: ${this.color}, Area: ${this.CalcArea()}, perimeter: ${this.Calcperimeter()}`;
    }
}