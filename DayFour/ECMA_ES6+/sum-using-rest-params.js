//?Define javascript function that takes only 2 arguments operator and any numbers
//? of integers (using Rest operator)
// ?then display the result of operation on console on one line
//?(using substitution $ with bactecks ` ) as follow
//^ “result of sum operation for 3,1,6,3 is 13”

function calculate(...numbers) {
    let result = numbers.reduce((acc, n) => acc + n, 0);
    console.log(`result of sum operation for ${numbers.join(",")} is ${result}`);
}
calculate( 3, 1, 6, 3);

