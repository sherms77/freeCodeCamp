// .find() method
// i want to find a specified element in array

// paramater a = array
// paramater e = element to find

function traverseArray (a, e) {
    for (let i = 0; i <= a.length; i++) {
        
        if (a.indexOf([i]) === e) {
            return a.indexOf([i]); // its returning the index number and not the element -> this is why the condition in the if statement is not met
        
        } // else {
            // return "the element is not in the array";
        // }
    }
}

// i want to find 7 in this array
console.log(traverseArray([5, 6, 7, 8, 9], 7)); // skips if statement and goes straight to else statement???
console.log(traverseArray([5, 6, 7, 8, 9], 25));

// the function below with if else statements work
// the function above does not?? - skips the condition in the if statement??
// function ifElseStatements (input) {
//     if (input === "hello") {
//         return "this is the correct word";
//     } else {
//         return "incorrect";
//     }
// }

// console.log(ifElseStatements("hello"));
// console.log(ifElseStatements("bye"));