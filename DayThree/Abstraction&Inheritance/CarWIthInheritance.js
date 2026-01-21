//? 1. Implement the car function
function Car(_name, _speed) { 
    this.name = _name;
    this.speed = _speed;
}

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

//? Electric Car Implementation and Applying the inheritance
function EV(_curCharge, _name, _currSpeed) {
    Car.call(this, _name, _currSpeed);
    this.currentBatteryCharge = _curCharge;
}

//& Link the prototype EV to the Prototype of the Parent Car
EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;


//? 2-Implement a ‘chargeBattery’ method which takes an arguments ‘chargeTo’
//? and sets the battery charge to this value;
EV.prototype.chargeBattery = function (chargeTo) { 
    this.currentBatteryCharge = chargeTo;
}


//?3-Implment an ‘accelerate’ method that will increase the car’s speed by 20, and decrease the charge by 1% ,then log a message like this :
//& Override on accelerate 
EV.prototype.accelerate = function () {
    this.speed += 20;
    this.currentBatteryCharge -= 1;
    console.log(
        `${this.name} going at ${this.speed} km/h, with a charge of ${this.currentBatteryCharge}%`
    );
};


//? ‘Tesla going at 149 km/h, with a charge of 22%’;
let tesla = new EV(23, "Tesla", 129);


//?4- Create an electric car object and experiment with calling ‘acceleracte ‘,’brake’ and ‘chargeBattery’
tesla.accelerate();     //& 129 + 20 = 149 km/h, currCharge =23 - 1 = 22%
tesla.brake();      //& 149 - 5  = 144 km/h
tesla.chargeBattery(90);
tesla.accelerate();     //& 144 + 20 = 164 km/hr , currCharge = 90 -1  = 89%
tesla.printCarInfo();  //& Tesla, carSpeed = 164

