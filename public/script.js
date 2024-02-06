"use strict";
const greeting = "Hallo, TypeScript";
console.log(greeting);
function mult(a, b) {
    return a * b;
}
console.log(mult(25, 25));
function isEven(x) {
    if (x % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
    //return x%2===0?true:false;
}
console.log(isEven(12));
function greetUser(username) {
    return `Hallo, ${username}!!!`;
}
let user = { username: 'Donald' };
console.log(greetUser(user.username));
const numbers = [12, -4, 67, 87, 34, -77, 90, -100];
function filterPositiveNumbers(arr) {
    return arr.filter(n => n > 0);
}
const newNumbers = filterPositiveNumbers(numbers);
console.log(newNumbers);
