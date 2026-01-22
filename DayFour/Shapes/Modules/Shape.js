/*
1- Create Shape Base Abstract Class
which contains color property as private with set and get,
PrintColor and CalcArea and Calcperimeter methods which will return Zero in Shape Base.

2- Create Rectangle Class Which inherits from Shape Abstract Class
define Width and Height Properties for Rect Class as private with set and get
Not with zero or minus value print validation message to user

3- Creat Square Class Which inherits from Rect Class - override CalcArea , calcperimeter , printColor , toString which will display color , area and perimeter in rect and square classes
create array of Shapes which will contains set of objects from rect and square classes then display it's areas

4-create Circle Class with private fields (radius and x,y )
with set and get properies
-Circle class inherit from Shape class with override toString

5- Create static property and static method inside Rect and Square classes to get number of objects created from rect and square Types
*/

export default class Shape { 
    //& Private data member
    #color = "";

    constructor(_color) { 
        //? Abstraction checker
        if (this.constructor.name == "Shape")
            throw new Error("Shape Cannot be instantiated as it is an abstract class");
        this.#color = _color;
    }

    //& Accessors and mutators for color property
    set color(_color) {
        if (_color !== "")
            this.#color = _color;
    }

    get color() { return this.#color; }

    //& Abstract concise pure Functions
    PrintColor() { return `Shape color: ${this.#color}` } 
    CalcArea() { return 0; }
    Calcperimeter() { return 0; }
    toString() { 
        return `Color: ${this.#color}`;
    }
}