// example from fcc article
// how does it work when it only takes two arguments but there are three elements in the array?
// .sort() is a higher order function. it expects a function to compare values. consequently it can take two arguments.

function sortArr(arr) {
    arr.sort((a, b) => a - b);
    console.log(arr);
}

sortArr([10, 5, 80]);
sortArr([13,4,79,2,100]);