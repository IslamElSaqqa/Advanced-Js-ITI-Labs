//? 1 - Define an array of numbers(only let is allowed)
//? Sort them ascending then descending(using array sort method and Arrow functions)
//? Filter numbers larger than 50 (using array filter method and Arrow functions)
//? Display Max and Min Numbers (using math methods and spread operator)

let numbers = [20, 10, 5, 7, 2, 1, 3,70,50,51,54];

//& sort them ascendingly using spread operator
let sortedArrAscending = [...numbers].sort((a, b) => a - b) 
//& sort them descending using spread operator
let sortedArrDescending = [...numbers].sort((a, b) => b - a) 
//& Filter numbers larger than 50 (using array filter method and Arrow functions)
let filteredArr = numbers.filter(n => n > 50);
//& Display Max and Min Numbers (using math methods and spread operator)
let max = Math.max(...numbers);
let min = Math.min(...numbers);
console.log(sortedArrAscending)
console.log(sortedArrDescending)
console.log(filteredArr)
console.log(min);
console.log(max);

