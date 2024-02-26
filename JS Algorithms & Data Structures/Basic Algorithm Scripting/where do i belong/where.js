function getIndexToIns(arr, num) {
  // appends 'num' to 'arr'
  arr.push(num);
  console.log("appended array:", arr);

  // sorts array
  arr.sort((a, b) => a - b);
  console.log("sorted array:", arr);
  
  // return the LOWEST index where the NEW element has been inserted
  // should use .findIndex()
  // const isLargeNumber = (element) => element > 9;
  // 260224: need to work out how to get the index of where the second argument from the function has been inserted
  const isLargeNumber = (element) => element > array1.length;


  // for(i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
  // }

  // return num;
  }
  
getIndexToIns([40, 60], 50); // should return 1.

// getIndexToIns([10, 20, 30, 40, 50], 35)  // should return 3.
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