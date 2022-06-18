// test checking conditions using negative numbers

function checkCondition(num) {
    if(num === 1) {
        return true;
    } else {
        return false;
    }
}

console.log(checkCondition(-1)); // false
console.log(checkCondition(1)); // true