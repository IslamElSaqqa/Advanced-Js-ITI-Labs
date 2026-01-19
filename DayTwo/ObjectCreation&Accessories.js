let Person = {
    id: 1,
    Name: "Empty"
}

//^ set the prototype of Employee to Person
//! Inheritance
let Employee = Object.create(Person);
Object.defineProperty(Employee, "salary", {
    set(value) {
        this._salary = value + value * 0.2;
    },
    get() {
        return this._salary;
    }
});
Employee.salary = 10000
console.log(Employee); //! inherits from Person

//& ---------------------------------------
 //& Creation Then appending the Location Property
let HREmployee = Object.create(Employee, { location: {value: "Cairo"} }); 
console.log(HREmployee);

//! console.log(HREmployee.location);
console.log(HREmployee.__proto__) //^ Employee
console.log(HREmployee.hasOwnProperty("location")); //^ true
console.log(HREmployee.hasOwnProperty("salary"));   //^ false

//? Test on Prototypes
Employee.isPrototypeOf(HREmployee); //^ true
Person.isPrototypeOf(HREmployee);   //^ true

//? Accessing Person Properties from HR
console.log(HREmployee.id);    //^ 1
console.log(HREmployee.Name);  //^ "Empty"

//? Defining Properties (Name, id) for HR
Object.defineProperties(HREmployee,
    {
        Name: { value: "Islam" },
        id: { value: 1001 }
    }
);

//? Test if it is accessible or not with person Object
console.log(HREmployee.Name); //^ HR- > Islam
console.log(HREmployee.id);   //^ HR -> 1001
//& Parent will not see the child props
console.log(Person.id); //^ Person -> id = 1 constant

//? Define Age property on Person
Object.defineProperties(Person,
    { age: { value: 30 } }
);
//& Parent will see the child Prop (Age)
console.log(Person.age); //^ 30
console.log(HREmployee.age); //^ 30




