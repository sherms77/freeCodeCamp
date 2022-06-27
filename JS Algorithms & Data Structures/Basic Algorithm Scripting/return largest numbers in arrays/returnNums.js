function largestOfFour(arr) {
  largeNumArr = []; // array to store the largest num from each sub-array

  // iterates through parent array
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    // console.log(Math.max(...arr[i])); // this returns the largest number from each sub-array
    largeNumArr.push(Math.max(...arr[i]));

    // let subArray = arr[i];
    // // iterates through sub-arrays
    // for (let j =0; j < subArray.length; j++) {
      // console.log(subArray[j]);
    // }
  }
  // return arr;
  console.log(largeNumArr);
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);