// this solution works
// modified with return statement for fcc

function largestOfFour(arr) {
  let largeNumArr = []; // array to store the largest num from each sub-array
  // iterates through parent array
  for (let i = 0; i < arr.length; i++) {
    largeNumArr.push(Math.max(...arr[i]));
  }
  console.log(largeNumArr);
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);