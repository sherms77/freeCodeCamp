function getIndexToIns(arr, num) {

    // sorts array
    arr.sort((a, b) => a - b);
    // console.log("sorted array:", arr);
    
    // check if the element is bigger than 'num'
    // let val = arr[i];
    for(i = 0; i < arr.length; i++) {
      let val = arr[i];
      if (arr[i] >= num) {
        // let val = arr[i];
        // console.log(val);
        console.log(arr.indexOf(val)); // returns index of array element > num
      } else {
        console.log(num, val);
      }// 160324: NEED TO ADD A CONDITION TO HANDLE IF THE ARRAY ELEMENTS ARE <= 'NUM'.
    }
  
  }
  
  // getIndexToIns([10, 20, 30, 40, 50], 35)  // should return 3.
  // getIndexToIns([10, 20, 30, 40, 50], 35)  // should return a number.

  // 160324: FAILING THESE TESTS IN FCC EDITOR
  getIndexToIns([2, 5, 10], 15)  // should return 3.
  getIndexToIns([2, 5, 10], 15)  // should return a number.