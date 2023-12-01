/*2.Create a function expression called “printNumbers” that takes a parameter “lastNumber” and prints numbers from 1 to ‘n’ using a loop.*/

var readlineSync = require('readline-sync');

const printNumbers = function(lastNumber){

    for(let i = 1; i<=lastNumber; i++){
        console.log(i);
    }
}
let limit = parseInt(readlineSync.question('Enter the last number: '));
printNumbers(limit);