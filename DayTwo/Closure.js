//? Q1: Create a function that returns another function that Take Emp and
// ? Return it’s Name

//& creating an array of Employees
let employees = [
{ id: 1001, name: "Islam", salary: 30000, department: "SWE" },
{ id: 1002, name: "Shawky", salary: 15000, department: "IT" },
{ id: 1003, name: "Rahim", salary: 25000, department: "Data Analysis" },
{ id: 1004, name: "Hoda", salary: 20000, department: "UI/UX" }
];

function getEmployeeName()
{
    return function (emp) { return emp.name };
}

//^ using for of
let empName = getEmployeeName();
for (emp of employees) { 
    console.log(empName(emp));
}

//? Counter Increase function
function createCounter(){
    let count = 0; 
    return function () {  //^ closure score (count)
        count++;
        return count;
    }
}

const counter = createCounter();
console.log(counter()); //! 1
console.log(counter()); //! 2
console.dir(counter)

//? changing background color on clicking button
function createClickTracker() {
    let No_of_clicks = 0;
    return function () {
        No_of_clicks++;
        document.body.style.backgroundColor =
            No_of_clicks % 2 === 0 ? "red" : "blue";
        console.log("No of Clicks: "+No_of_clicks);
    };
}
let trackClick = createClickTracker();

//? Closure that adds a constant 
function addConstNumber(x) { 
    return function (num) { //^ closure scope [x = 100]
        return x + num;
    };
}

let add = addConstNumber(100);
console.log(add(50)); 
console.dir(add);

//? Tracking Employees added
function initialEmpArray() {
    let arrayOfEmp = [];
    let numberOfEmps = 0;

    return function (empObject) {
        arrayOfEmp.push(empObject);
        numberOfEmps++;

        console.log("Employees count:", numberOfEmps);
        console.log("Employees list:", arrayOfEmp);

        return arrayOfEmp; 
    };
}

let addNewEmp = initialEmpArray();

addNewEmp({ id: 1010, name: "Eman" });
addNewEmp({ id: 1011, name: "Omar" });
console.dir(addNewEmp)

//? Apply Percentage to salary
function applyBonus(bonus) {
    return function (sal) {
        return sal + sal * bonus;
    };
};
let bonus = applyBonus(0.1);
console.log(bonus(10000));


//? Greeting department name
function departmentGreeting(dept) {
    return function () {
        return `Welcome to the ${dept} department!`;
    };
}
let greet = departmentGreeting("SWE");
console.log(greet());


//? Map to get employee names
let empNames = employees.map(e => e.name)
console.log(empNames);


//? filter Salaries > 4500
let salaries = employees.filter(e=> e.salary > 4500)
console.log(salaries);

//? reduce to calculate sum of salaries
let sumSalaries = employees.reduce((sum, e) => sum + e.salary, 0);
console.log(`total Salaries: ${sumSalaries}`)

//? Pure function increases salary by 10 % immutably 

//& using the built in function Object.assign
function increaseSalary(emp) {
    return Object.assign({}, emp, { salary: emp.salary * 1.1 });
}

//& Another way to solve it (Hard Corded)
function increaseSalary(emp) {
    const newEmp = {};

    Object.keys(emp).forEach(function (key) {
        if ( key === "salary") {
        newEmp[key] = emp[key] * 1.1;
        } else {
        newEmp[key] = emp[key];
        }
    });

    return newEmp;
}

let salaryRaises = employees.map(increaseSalary);
console.log(salaryRaises);

//? Add new Employee Immutably

function AddEmployee(emp) {
    const newEmployees = [];

    employees.forEach(function (e) {
        const copiedEmp = {};

        Object.keys(e).forEach(function (key) {
            copiedEmp[key] = e[key];
        });

        newEmployees.push(copiedEmp);
    });

    const newEmp = {};
    Object.keys(emp).forEach(function (key) {
        newEmp[key] = emp[key];
    });

    newEmployees.push(newEmp);

    return newEmployees;
}

let updatedEmployees = AddEmployee({
    id: 1005,
    name: "Mohamed",
    salary: 18000,
    department: "Native-Development"
});

console.log(updatedEmployees); //^ Shallow Copy

//? High Order Function
function applyingBonus(fn) {
    return function(emp) {
        return Object.assign({}, emp, { salary: fn(emp.salary) });
    };
}

// Example bonus calculator
function calculateBonus(percent) {
    return function(salary) {
        return salary * (1 + percent);
    };
}

const Bonus = applyingBonus(calculateBonus(0.1));
const updatedEmp = Bonus(employees[1]);
console.log(updatedEmp)

//? Curried Function for filtering by department
function filterByDepartment(department) {
    return function(emp) {
        return emp.department === department;
    };
}

let filteredEmps = employees.filter(filterByDepartment("IT"));
console.log(filteredEmps) //^ id = 1002

//? Updating all salaries immutably by 5%
//& Hard Coded.
function updateSalariesBy5Percent() {
    const newEmployees = [];

    employees.forEach(function (emp) {
        const updatedEmp = {};

        Object.keys(emp).forEach(function (key) {
            if (key === "salary") {
                updatedEmp[key] = emp[key] * 1.05;
            } else {
                updatedEmp[key] = emp[key];
            }
        });

        newEmployees.push(updatedEmp);
    });

    return newEmployees;
}

const updatedEmployeesSals = updateSalariesBy5Percent();
console.log(updatedEmployeesSals);

//! Done
