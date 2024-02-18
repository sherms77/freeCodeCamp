function compare(a, b) {
    console.log(a);
    // console.log(b);
    // console.log(a - b);
    // return(a - b);
    let result = a - b;
    console.log(result);
}

compare([10, 5, 3, 7, 9]); // should return -1 -> first element = 5 - second element = 6
// deductArr(["zebra", "ant"]);

// example from fcc article
// how does it work when it only takes two arguments but there are three elements in the array?

// let numArr = [10, 5, 80];
// numArr.sort((a, b) => a - b);
// console.log(numArr); // Output: [5, 10, 80] 