function getIndexToIns(arr, num) {

  // sorts array
  arr.sort((a, b) => a - b);
  console.log("sorted array:", arr);
  
  // check if the element is bigger than 'num'
  for(i = 0; i < arr.length; i++) {
    // console.log(arr[i]);

    // need to return the number from the number at an index
    // check if its > num -> then return the index of the where the larger number
    if (arr[i] > num) {
      // console.log(arr[i]);
      let val = arr[i];
      // console.log(val);
      console.log(arr.indexOf(val)); // returns index of array element > num
      // console.log(arr.indexOf[i]); // does not work with [i] when usding .indexOf()
    }
  }

  // return num;

  }
  
// getIndexToIns([40, 60], 50); // should return 1.

getIndexToIns([10, 20, 30, 40, 50], 35)  // should return 3. -> 010324: should return 40 based on my current for loop.
// getIndexToIns([10, 20, 30, 40, 50], 35)  // should return a number.
// getIndexToIns([10, 20, 30, 40, 50], 30)  // should return 2.
// getIndexToIns([10, 20, 30, 40, 50], 30)  // should return a number.
// getIndexToIns([40, 60], 50)  // should return 1.
// getIndexToIns([40, 60], 50)  // should return a number.
// getIndexToIns([3, 10, 5], 3)  // should return 0.
// getIndexToIns([3, 10, 5], 3)  // should return a number.
// getIndexToIns([5, 3, 20, 3], 5)  // should return 2.
// getIndexToIns([5, 3, 20, 3], 5)  // should return a number.
// getIndexToIns([2, 20, 10], 19)  // should return 2.
// getIndexToIns([2, 20, 10], 19)  // should return a number.
// getIndexToIns([2, 5, 10], 15)  // should return 3.
// getIndexToIns([2, 5, 10], 15)  // should return a number.
// getIndexToIns([], 1)  // should return 0.
// getIndexToIns([], 1)  // should return a number. - unsure what output of this test should be?