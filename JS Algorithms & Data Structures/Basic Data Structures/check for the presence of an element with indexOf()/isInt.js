// test isInteger() method

// these console logs don't work
// console.log(isInteger(1)); // true
// console.log(isInteger(-1)); // false
// console.log(isInteger(3)); // true

// these consoles logs work
// console.log(Number.isInteger('hi')); // false
// console.log(Number.isInteger(-1)); // true
// console.log(Number.isInteger(1)); // true
// console.log(Number.isInteger('1')); // false


function checkNum(num) {
    if(num === -1) {
        return false;
    } else {
        return true;
    }

}

console.log(checkNum(-1)); // false
console.log(checkNum(1)); // true


