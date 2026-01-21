//? 1-Use a constructor function to implement A Car .
//?     A Car has a Name and a Speed property.
//?     The Speed property is the Current Speed of the Car in Km/h
//? 2 - Implement an ‘accelerate’ method will increase the car’s speed by 10, and log then new speed to console;
//? 3-Implement a ‘brake’ method that will decrease the car’s speed by 5,and log the new speed to the console;
// Create 2 car objects and experiment with calling ‘accelerate’ and ‘brake’ multiple times on each of them.
// DATA Car1 : ‘BMW’ going at 120 km/h
// DATA CARA2: ‘Mercedes’ going at 95 km/h

//? 1. Implement the car function
function Car(_name, _speed) { 
    this.name = _name;
    this.speed = _speed;
}

//? (2-3) Implement a ‘brake’ and an accelerate method log the new speed to the console;

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.name} is going at ${this.speed} km/h`);
}
Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.name} is going at ${this.speed} km/h`);
}

Car.prototype.printCarInfo = function () {
    console.log(`Car Info:
            Car Name : ${this.name},
            Car's speed in KM/H: ${this.speed}
        `);
}

//? 4. Create 2 car objects and experiment with calling ‘accelerate’ and ‘brake’ multiple times on each of them.
let car1 = new Car("BMW", 120);
let car2 = new Car("Mercedes", 95);

//? Calling the functions
car1.accelerate(); //& 130
car1.accelerate(); //& 140
car1.brake();      //& 135

car2.brake();      //& 90
car2.accelerate();// & 100


