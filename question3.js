/*3.Create a function expression named printEvenNumbers that takes a parameter n and prints all even numbers from 1 to n using a loop.*/

var readlineSync = require('readline-sync');

const printEvenNumbers = function(n){
    console.log('Even numbers within this limit are listed below');
    for(let i = 1; i<=n; i++){
        if(i%2===0){
            console.log(i);
        }
    }
}
let limit = parseInt(readlineSync.question('Enter the Limit: '));
printEvenNumbers(limit);