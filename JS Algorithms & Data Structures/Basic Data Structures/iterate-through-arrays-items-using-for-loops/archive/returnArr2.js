// v2 of returnArr.js
// contains else statement

// this does not work - always executes the else statement
function carArray (array, carItem) {
    for (let i = 0; i <= array.length; i++) {
        if (array.indexOf([i]) === carItem) {
            let result;
            // return array[i];
            result = array.indexOf([i]);
        } else {
            result = "the car is not in the list";
        }
    } return result;
}

console.log(carArray(['toyota', 'bmw', 'hyundai', 'kia', 'ford'], 'ford'));