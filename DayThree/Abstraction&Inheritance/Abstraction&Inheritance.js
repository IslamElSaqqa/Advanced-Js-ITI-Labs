//?1- Using Constructor function
//? to create Shape Base Abstract Class which contains color property
//? PrintColor method and CalcArea and Calcperimeter which will return Zero in Shape Base Class
//? Define them on Shape prototype object (Using Prototype)

function Shape(_color) { 
    debugger;
    if (Shape.constructor.name == "Shape")
        throw new Error("Cannot be instantiated");
    this.color = _color;
}

//& Definig the Abstract Functions using prototype
Shape.prototype.printColor = function () {
    console.log("Color:", this.color);
};

Shape.prototype.calcArea = function () {
    return 0;
};

Shape.prototype.calcPerimeter = function () {
    return 0;
};

Shape.prototype.toString = function () {
    return `Color: ${this.color}, Area: ${this.calcArea()}, Perimeter: ${this.calcPerimeter()}`;
};

//? 2.Define Rect Class Which inherits from Shape Abstract Class Using Prototype
//? inheritance)
//?  Define Width and Height Properties for Rect Class

function Rectangle(_len, _w, _color) { 
    Shape.call(this, _color);
    this.length = _len;
    this.width = _w;
}

//& Link the rectangle prototype to the Shape prototyoe
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

//& Overriding the functions from the base class
Rectangle.prototype.calcArea = function () {
    return this.length * this.width;
};

Rectangle.prototype.calcPerimeter = function () {
    return 2 * (this.length + this.width);
};



let Rect = new Rectangle(10, 20);
console.log(Rect instanceof Shape); //& True

//? 3- Define Square Class Which inherits from Rect Class
//? override CalcArea , calcperimeter , printColor ,
//? toString which will display color , area and perimeter in rect and square classes -
//?create array object which will contains set of objects from rect and square classes then display it’s areas

function Square(_side, _color) {
    Rectangle.call(this, _side, _side, _color);
}

//& Link Square Prototype to the Rectangle Prototype
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

//& Overriding All functions from Rectangle
Square.prototype.calcArea = function () {
    return this.length * this.length;
};

Square.prototype.calcPerimeter = function () {
    return 4 * this.length;
};

Square.prototype.printColor = function () {
    console.log(`Square Color: ${this.color}`);
};

Square.prototype.toString = function () {
    return `Square : Color: ${this.color}, Area: ${this.calcArea()}, Perimeter: ${this.calcPerimeter()}`;
};

//& Testing the Inheritance Relationship
let r1 = new Rectangle(10, 30, "Blue");
let s1 = new Square(20, "Black");

let shapes = [r1, s1];

shapes.forEach(shape => {
    console.log(shape.toString());
    console.log("Area:", shape.calcArea());
    console.log("perimeter:", shape.calcPerimeter());

});

