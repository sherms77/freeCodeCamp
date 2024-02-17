function deductArr(a,b) {
    console.log(a - b);
}

deductArr([5,6,7,8,10]); // should return -1 -> first element = 5 - second element = 6

// example from fcc article
// how does it work when it only takes two arguments but there are three elements in the array?
let numArr = [10, 5, 80];

numArr.sort((a, b) => a - b);
console.log(numArr); // Output: [5, 10, 80] 