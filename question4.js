var readlineSync = require('readline-sync');

function sumOfSquares(n){
    
    let sum = 0;
    for(let i = 1; i<=n; i++){
        let square = 0;
        square = i**2;
        sum = sum + square;
        console.log('Square of ',i,' = ',square);
    }
    console.log('Sum of listed Square numbers = ',sum);
}
let limit = parseInt(readlineSync.question('Enter the Limit: '));
sumOfSquares(limit);