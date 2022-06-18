// code from challenge

// HOW TO REMOVE ELEMENTS FROM AN ARRAY
// pop - Removes from the End of an Array.
// shift - Removes from the beginning of an Array.
// splice - removes from a specific Array index.
// filter - allows you to programatically remove elements from an Array.

// STEPS
// 1. condition to find elem and remove from nested arrays -> if statement
// 2. if elem is in array -> remove it
// 3. iterate through array until you find elem in the array
// 4. remove elem
// 5. return updated array (with removed element) -> retrun newArr

// PSEUDO CODE
// function filteredArray(arr, elem) {
    // initialize empty array

    // iterate through the array using a for loop
    // for(i=0; i<=0; i++) {

        // IF STATEMENT
        // if(elem === an element in the array) {
            // remove it from the array
    // }

        // ELSE STATEMENT    
        // else {
        //     do nothing to the array
        // }

// } 

// return the new (updated) array 

// }

function filteredArray(arr, elem) {
    let newArr = [];

    // for loop to remove required element
    // for loop paramaters (p) = p1 = initialize, p2 = condition, p3 = iterate or decrement
    for(let i = 0; i < 1; i++) {

    }

    return newArr;

}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
