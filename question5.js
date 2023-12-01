var readlineSync = require('readline-sync');

const printPattern = function(rows){
    let star = "";
    for(let i = 1; i<=rows; i++){
        for(let j = 1; j<=i; j++){
            star += '*'
        }
        console.log(star);
    }
}

let row = parseInt(readlineSync.question('Enter the number of rows: '));
printPattern(row);