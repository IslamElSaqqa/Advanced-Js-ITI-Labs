//? Car Class with private properties
export default class Car {
    //& Private data members
    #serialID;
    #name;
    #speed;

    //? Global static count for tracking number of cars created
    static count = 0;

    //? Constructor to initialize car properties
    constructor(_name, _speed) {
        this.#serialID = this.#generateUniqueSerial();
        this.#name = _name;
        this.#speed = _speed;
        Car.count++;
        
        //? Log serial number and total count when car is created
        console.log(`Car Created: Serial #${this.#serialID}, Total Cars: ${Car.count}`);
    }

    //& Private method to generate unique random serial number
    #generateUniqueSerial() {
        return Math.floor(Math.random() * 1000000) + 100000;
    }

    //& Accessors and mutators for private members
    get serialID() { return this.#serialID; }
    get name() { return this.#name; }
    get speed() { return this.#speed; }

    set name(_name) {
        if (_name !== "")
            this.#name = _name;
        else
            throw new Error("Name cannot be empty");
    }

    set speed(_speed) {
        if (_speed >= 0)
            this.#speed = _speed;
        else
            throw new Error("Speed cannot be negative");
    }

    //& Static method to get count
    static getCount() {
        return Car.count;
    }

    //? Accelerate method - increases speed by 10 km/h
    accelerate() {
        this.#speed += 10;
        console.log(`${this.#name} accelerating... New speed: ${this.#speed} km/h`);
    }

    //? Brake method - decreases speed by 5 km/h
    brake() {
        this.#speed -= 5;
        if (this.#speed < 0) this.#speed = 0; // Prevent negative speed
        console.log(`${this.#name} braking... New speed: ${this.#speed} km/h`);
    }

    //? toString method to display car information
    toString() {
        return `Car Serial ID: ${this.#serialID}, Name: ${this.#name}, Speed: ${this.#speed} km/h`;
    }
}