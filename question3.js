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