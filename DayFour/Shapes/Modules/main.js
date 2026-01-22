//? Import statements using the same Class names 
import Rectangle from "./Rectangle.js"; //^ Rectangle
import Square from "./Square.js"; //^ Square
import Circle from "./Circle.js"; //^ Circle

let r1 = new Rectangle(10, 5, "Red");
let r2 = new Rectangle(6, 4, "Blue");

//&Array of Rectangles
let rectangles = [ r1, r2 ];
//^Looping to print
rectangles.forEach(r => console.log(r.CalcArea()));

//& Array of Squares
let square1 = new Square(5, "Green");
let square2 = new Square(7, "Yellow")
let squares = [square1, square2];
//^ Looping to print
squares.forEach(s => console.log(s.CalcArea()));

console.log("Rectangles Count:", Rectangle.getCount());
console.log("Squares Count:", Square.getCount());

//& Array of Circles
let circle1 = new Circle(5, 2, 4, "Blue");
let circle2 = new Circle(7, 10, 2, "Black")
let circles = [circle1, circle2];
circles.forEach(c => console.log(c.CalcArea()));
console.log("Circles Count:", Circle.getCount());