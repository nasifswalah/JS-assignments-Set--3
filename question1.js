/*1.Write a JavaScript function named “greetMessage”that takes a parameter “name”and returns a greeting message. For example, if the input is "Akhil," the function should return "Hello, Akhil!"*/

var readlineSync = require('readline-sync');

function greetMessage(name){
    let message = ('Hello,'+name);
    return message;
}

input = readlineSync.question('Enter your name: ')
console.log(greetMessage(input));