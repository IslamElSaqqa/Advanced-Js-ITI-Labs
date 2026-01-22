/*
1-Create Electric Car (Called EV) as a CHILD “class” of Car Besides a Name and Current Speed ,
the EV also has the Current battery charge in % (‘charge’ property )
2-Implement a ‘chargeBattery’ method which takes an arguments ‘chargeTo’ and sets the battery charge to this value;
3-Implment an ‘accelerate’ method that will increase the car’s speed by 20, and decrease the charge by 1% ,then log a message like this :
‘Tesla going at 149 km/h, with a charge of 22%’;
4- Create an electric car object and experiment with calling ‘acceleracte ‘,’brake’ and ‘chargeBattery’
(charge to 90%). Notice what happens when you ‘ accelerate
DATA CAR 1 :’ Tesla’ going at 120 km/h , with a charge of 23%
*/
//? EV (Electric Vehicle) class inherits from Car
import Car from "./Car.js";

export default class EV extends Car {
    //& Private data member for battery charge
    #charge;

    //? Global static count for tracking number of EVs created
    static count = 0;

    //? Constructor to initialize EV properties
    constructor(_name, _speed, _charge) {
        //& Call parent constructor
        super(_name, _speed);
        this.#charge = _charge;
        EV.count++;
    }

    //& Accessor and mutator for charge property
    get charge() { return this.#charge; }

    set charge(_charge) {
        if (_charge >= 0 && _charge <= 100)
            this.#charge = _charge;
        else
            throw new Error("Charge must be between 0 and 100");
    }

    //& Static method to get EV count
    static getCount() {
        return EV.count;
    }

    //? chargeBattery method - charges battery to specified percentage
    chargeBattery(chargeTo) {
        if (chargeTo >= 0 && chargeTo <= 100) {
            this.#charge = chargeTo;
            console.log(`${this.name} charged to ${this.#charge}%`);
        } else {
            throw new Error("Charge value must be between 0 and 100");
        }
    }

    //? Override accelerate method - increases speed by 20 and 
    //? decreases charge by 1%
    accelerate() {
        this.speed = this.speed + 20;
        this.#charge -= 1;
        
        if (this.#charge < 0) this.#charge = 0; // Prevent negative charge
        
        console.log(`${this.name} going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
    }

    //? Override toString method to include charge information
    toString() {
        return `EV Serial: ${this.serialID}, Name: ${this.name}, Speed: ${this.speed} km/h, Charge: ${this.#charge}%`;
    }
}