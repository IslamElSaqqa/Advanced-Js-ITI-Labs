//? Import Car class using default class Name
import Car from "./Car.js"; //^ Car Base class
import EV from "./EV.js";  //^ EV Child Class

let car1 = new Car("BMW", 120);         //& Car 1
let car2 = new Car("Mercedes", 95);     //& Car 2

//^ initial car information
console.log(car1.toString());
console.log(car2.toString());

//^ Testing the member functions for BMW
car1.accelerate(); //& 120 + 10 = 130
car1.accelerate(); //& 130 + 10 = 140
car1.brake();      //& 140 - 5 = 135
car1.accelerate(); //& 135 + 10 = 145
car1.brake();      //& 145 - 5 = 140
car1.brake();      //& 140 - 5 = 135

//^ Testing the member functions mercedes 
car2.accelerate(); //& 95 + 10 = 105
car2.brake();      //& 105 - 5 = 100
car2.brake();      //& 100 - 5 = 95
car2.accelerate(); //& 95 + 10 = 105
car2.accelerate(); //& 105 + 10 = 115
car2.accelerate(); //& 115 + 10 = 125
car2.brake();      //& 125 - 5 = 120

//? Cars information after break and accelerate
console.log(car1.toString());
console.log(car2.toString());

//? Total number of cars
console.log(`Total number of cars: ${Car.getCount()}`);

//? Continuing part 3 
//& EV Car instance
let tesla = new EV("Tesla", 120, 23);

console.log(tesla.toString());

tesla.accelerate();         //& Speed: 120 + 20 = 140, Charge: 23 - 1 = 22%
tesla.accelerate();         //& Speed: 140 + 20 = 160, Charge: 22 - 1 = 21%
tesla.accelerate();         //& Speed: 160 + 20 = 180, Charge: 21 - 1 = 20%
tesla.brake();              //& Speed: 180 - 5 = 175
tesla.brake();              //& Speed: 175 - 5 = 170
tesla.accelerate();         //& Speed: 170 + 20 = 190, Charge: 20 - 1 = 19%
tesla.chargeBattery(90);    //& Charge set to 90%

//^ Testing Car after charging to 90%
tesla.accelerate();         //& Speed: 190 + 20 = 210, Charge: 90 - 1 = 89%
tesla.accelerate();         //& Speed: 210 + 20 = 230, Charge: 89 - 1 = 88%
tesla.accelerate();         //& Speed: 230 + 20 = 250, Charge: 88 - 1 = 87%

//^ Final Cars Info
console.log(tesla.toString());

//^ Total number of cars
console.log(`Total number of EVs: ${EV.getCount()}`);